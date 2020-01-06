import {
  success,
  error,
  abort,
  isRequestAction,
  isResponseAction,
  getRequestActionFromResponse,
  isRequestActionQuery,
  isErrorAction,
} from '../actions';
import updateData from './update-data';
import { normalize, mergeData } from '../normalizers';
import { getQuery } from '../selectors';

const getInitialQuery = normalized => ({
  data: null,
  pending: 0,
  error: null,
  ref: {},
  normalized,
  usedKeys: normalized ? {} : null,
});

const getDataFromResponseAction = action =>
  action.payload ? action.payload.data : action.response.data;

const queryReducer = (state, action, actionType, normalizedData) => {
  if (state === undefined) {
    state = getInitialQuery(!!(action.meta && action.meta.normalize));
  }

  if (
    action.meta &&
    action.meta.mutations &&
    action.meta.mutations[actionType]
  ) {
    const mutationConfig = action.meta.mutations[actionType];
    const data = updateData(
      state.normalized
        ? getQuery(
            {
              network: { normalizedData, queries: { [actionType]: state } },
            },
            { type: actionType },
          ).data
        : state.data,
      action,
      mutationConfig,
    );
    return data === state.data ? state : { ...state, data };
  }

  switch (action.type) {
    case success(actionType):
      return {
        ...state,
        data: getDataFromResponseAction(action),
        pending: state.pending - 1,
        error: null,
      };
    case error(actionType):
      return {
        ...state,
        data: null,
        pending: state.pending - 1,
        error: action.payload ? action.payload : action.error,
      };
    case abort(actionType):
      return {
        ...state,
        pending: state.pending - 1,
      };
    default:
      return {
        ...state,
        pending: state.pending + 1,
        error: null,
      };
  }
};

const maybeGetQueryActionType = (action, config) => {
  if (isRequestAction(action) && config.isRequestActionQuery(action)) {
    return action.type;
  }

  if (
    isResponseAction(action) &&
    config.isRequestActionQuery(getRequestActionFromResponse(action))
  ) {
    return getRequestActionFromResponse(action).type;
  }

  return null;
};

export default (state, action, config) => {
  let { normalizedData } = state;

  if (isRequestAction(action) && action.meta && action.meta.optimisticData) {
    const [, newNormalizedData] = normalize(action.meta.optimisticData);
    normalizedData = mergeData(normalizedData, newNormalizedData);
  } else if (
    isResponseAction(action) &&
    isErrorAction(action) &&
    action.meta.revertedData
  ) {
    const [, newNormalizedData] = normalize(action.meta.revertedData);
    normalizedData = mergeData(normalizedData, newNormalizedData);
  }

  if (
    isResponseAction(action) &&
    action.meta.normalize &&
    !isRequestActionQuery(getRequestActionFromResponse(action))
  ) {
    const [, newNormalizedData] = normalize(getDataFromResponseAction(action));
    normalizedData = mergeData(normalizedData, newNormalizedData);
  } else if (action.meta && action.meta.localData) {
    const [, newNormalizedData] = normalize(action.meta.localData);
    normalizedData = mergeData(normalizedData, newNormalizedData);
  }

  if (action.meta && action.meta.mutations) {
    return {
      queries: {
        ...state.queries,
        ...Object.keys(action.meta.mutations)
          .filter(actionType => !!state.queries[actionType])
          .reduce((prev, actionType) => {
            const updatedQuery = queryReducer(
              state.queries[actionType],
              action,
              actionType,
              normalizedData,
            );

            if (
              updatedQuery.normalized &&
              updatedQuery.data !== state.queries[actionType].data
            ) {
              const [newdata, newNormalizedData, usedKeys] = normalize(
                updatedQuery.data,
              );
              normalizedData = mergeData(normalizedData, newNormalizedData);
              prev[actionType] = { ...updatedQuery, data: newdata, usedKeys };
            } else {
              prev[actionType] = updatedQuery;
            }
            return prev;
          }, {}),
      },
      normalizedData,
    };
  }

  const queryActionType = maybeGetQueryActionType(action, config);

  if (queryActionType) {
    const updatedQuery = queryReducer(
      state.queries[queryActionType],
      action,
      queryActionType,
    );

    if (
      updatedQuery.normalized &&
      updatedQuery.data &&
      (!state.queries[queryActionType] ||
        state.queries[queryActionType].data !== updatedQuery.data)
    ) {
      const [data, newNormalizedData, usedKeys] = normalize(updatedQuery.data);

      return {
        queries: {
          ...state.queries,
          [queryActionType]: { ...updatedQuery, data, usedKeys },
        },
        normalizedData: mergeData(normalizedData, newNormalizedData),
      };
    }

    return {
      queries: {
        ...state.queries,
        [queryActionType]: updatedQuery,
      },
      normalizedData,
    };
  }

  return state.normalizedData === normalizedData
    ? state
    : {
        ...state,
        normalizedData,
      };
};