(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(6),i=(n(0),n(158)),o={title:"Usage with Typescript",description:"Typescript guide for redux-requests - declarative AJAX requests and automatic network state management for single-page applications"},c={id:"guides/usage-with-typescript",title:"Usage with Typescript",description:"Typescript guide for redux-requests - declarative AJAX requests and automatic network state management for single-page applications",source:"@site/docs/guides/usage-with-typescript.md",permalink:"/docs/guides/usage-with-typescript",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/guides/usage-with-typescript.md",lastUpdatedBy:"Konrad",lastUpdatedAt:1610499904,sidebar:"docs",previous:{title:"Usage with React",permalink:"/docs/guides/usage-with-react"},next:{title:"RequestAction",permalink:"/docs/api-reference/request-action"}},s=[{value:"How to use it with Typescript?",id:"how-to-use-it-with-typescript",children:[]},{value:"<code>RequestAction</code> interface",id:"requestaction-interface",children:[]},{value:"<code>Data</code> and <code>TransformedData</code> generics",id:"data-and-transformeddata-generics",children:[]},{value:"<code>getQuery</code> and <code>getQuerySelector</code> generics",id:"getquery-and-getqueryselector-generics",children:[]},{value:"Automatic data inference",id:"automatic-data-inference",children:[]},{value:"Using with action creator library",id:"using-with-action-creator-library",children:[]},{value:"<code>RequestsStore</code> and <code>dispatchRequest</code>",id:"requestsstore-and-dispatchrequest",children:[]},{value:"<code>ResponseData</code> utility type",id:"responsedata-utility-type",children:[]},{value:"<code>LocalMutationAction</code>",id:"localmutationaction",children:[]},{value:"Usage with React",id:"usage-with-react",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-to-use-it-with-typescript"},"How to use it with Typescript?"),Object(i.b)("p",null,"Because ",Object(i.b)("inlineCode",{parentName:"p"},"redux-requests")," has Typescript types for its whole API included, you don't need to do anything to use it with Typescript. However,\nthere are some special goodies added to make Typescript users even more happy, so it is really worth knowing about them!"),Object(i.b)("h2",{id:"requestaction-interface"},Object(i.b)("inlineCode",{parentName:"h2"},"RequestAction")," interface"),Object(i.b)("p",null,"As you probably already know, the heart of ",Object(i.b)("inlineCode",{parentName:"p"},"redux-requests")," are so-called ",Object(i.b)("strong",{parentName:"p"},"requests actions"),". If you use Typescript, probably you would\nlike to have them typed! There are 2 ways of doing this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RequestAction } from '@redux-requests/core';\n\nfunction fetchBooks(): RequestAction {\n  return {\n    type: 'FETCH_BOOKS',\n    request: {\n      url: '/books',\n    },\n  };\n}\n")),Object(i.b)("p",null,"or..."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RequestAction } from '@redux-requests/core';\n\nconst fetchBooks: () => RequestAction = () => ({\n  type: 'FETCH_BOOKS',\n  request: {\n    url: '/books',\n  },\n});\n")),Object(i.b)("p",null,"The choice is yours, both are equivalent. Both ways will give you type checking and autocomplete for request action structure, like all\n",Object(i.b)("inlineCode",{parentName:"p"},"meta")," attributes, for example ",Object(i.b)("inlineCode",{parentName:"p"},"getData")," and so on. The true power though could be achieved with generics!"),Object(i.b)("h2",{id:"data-and-transformeddata-generics"},Object(i.b)("inlineCode",{parentName:"h2"},"Data")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"TransformedData")," generics"),Object(i.b)("p",null,"Before we go on, it is recommended to get familiar with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/generics.html"}),"Typescript generics"),"\nfirst if you didn't encounter them before. Going back to ",Object(i.b)("inlineCode",{parentName:"p"},"Data")," and ",Object(i.b)("inlineCode",{parentName:"p"},"TransformedData")," generics, they allow you to describe a structure\nof data responded by your server for a given request. Let's see an example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"function fetchBook(id: string): RequestAction<{ id: string; title: string }> {\n  return {\n    type: 'FETCH_BOOK',\n    request: {\n      url: `/books/${id}`,\n    },\n  };\n}\n")),Object(i.b)("p",null,"By doing so, we just marked that ",Object(i.b)("inlineCode",{parentName:"p"},"fetchBook")," request will respond with an object like ",Object(i.b)("inlineCode",{parentName:"p"},"{ id: '1', title: 'A book' }"),". You might be\nwondering, what are the benefits? We will get there, but let's start with a simple one:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"function fetchBook(\n  id: string,\n): RequestAction<{ id: string; title: string }, { id: string; name: string }> {\n  return {\n    type: 'FETCH_BOOK',\n    request: {\n      url: `/books/${id}`,\n    },\n    meta: {\n      getData: data => ({ id: data.id, name: data.title }),\n    },\n  };\n}\n")),Object(i.b)("p",null,"As you can see, we passed a 2nd generic called ",Object(i.b)("inlineCode",{parentName:"p"},"TransformedData")," and implemented ",Object(i.b)("inlineCode",{parentName:"p"},"meta.getData")," to replace ",Object(i.b)("inlineCode",{parentName:"p"},"title")," attribute\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"name"),". As you probably know, ",Object(i.b)("inlineCode",{parentName:"p"},"getData")," allows to change a server response data to fit your need. Adding ",Object(i.b)("inlineCode",{parentName:"p"},"Data")," and ",Object(i.b)("inlineCode",{parentName:"p"},"TransformedData"),"\ngenerics here made ",Object(i.b)("inlineCode",{parentName:"p"},"getData")," automatically typed - that's it - Typescript will recognize that ",Object(i.b)("inlineCode",{parentName:"p"},"data")," has ",Object(i.b)("inlineCode",{parentName:"p"},"{ id: string, title: string }"),"\ntype and ",Object(i.b)("inlineCode",{parentName:"p"},"getData")," response has ",Object(i.b)("inlineCode",{parentName:"p"},"{ id: string, name: string }")," type. This gives you very good confidence, that ",Object(i.b)("inlineCode",{parentName:"p"},"getData")," transformation\nis done correctly, for instance ",Object(i.b)("inlineCode",{parentName:"p"},"data => ({ id: data.id, name2: data.title })")," would immediately show error because ",Object(i.b)("inlineCode",{parentName:"p"},"TransformedData"),"\ndoesn't have ",Object(i.b)("inlineCode",{parentName:"p"},"name2")," attribute."),Object(i.b)("p",null,"Interestingly, ",Object(i.b)("inlineCode",{parentName:"p"},"TransformedData")," defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"Data"),", so passing ",Object(i.b)("inlineCode",{parentName:"p"},"RequestAction<{ title: string }>")," is the same as passing\n",Object(i.b)("inlineCode",{parentName:"p"},"RequestAction<{ title: string }, { title: string }>"),"."),Object(i.b)("p",null,"Ok, but if we don't use ",Object(i.b)("inlineCode",{parentName:"p"},"getData"),", why would we even care about those generics? It turns out that it is very useful to\ndefine ",Object(i.b)("inlineCode",{parentName:"p"},"Data")," generic in all cases, because then you will enjoy an automatic type inference for the whole application!\nBefore we will learn about it, first let's learn how to use Typescript with selectors!"),Object(i.b)("h2",{id:"getquery-and-getqueryselector-generics"},Object(i.b)("inlineCode",{parentName:"h2"},"getQuery")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"getQuerySelector")," generics"),Object(i.b)("p",null,"If you need to read a state from Redux store, you usually do this with selectors. As you probably know, ",Object(i.b)("inlineCode",{parentName:"p"},"redux-requests")," has\nseveral optimized selectors built-in. Let's use them to read book data:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { getQuery } from '@redux-requests/core';\n\nconst { data, loading, error } = getQuery(state, { type: 'FETCH_BOOK' });\n")),Object(i.b)("p",null,"Ok, but it would be cool to have ",Object(i.b)("inlineCode",{parentName:"p"},"data")," typed, wouldn't it? Let's fix that by a generic:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const { data, loading, error } = getQuery<{ id: string; title: string }>(\n  state,\n  { type: 'FETCH_BOOK' },\n);\n")),Object(i.b)("p",null,"That's better, now ",Object(i.b)("inlineCode",{parentName:"p"},"data")," is typed properly! Let's see how it would be done with ",Object(i.b)("inlineCode",{parentName:"p"},"getQuerySelector"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { getQuerySelector } from '@redux-requests/core';\n\nconst bookSelector = getQuerySelector<{ id: string; title: string }>({\n  type: 'FETCH_BOOK',\n});\nconst { data, loading, error } = bookSelector(state);\n")),Object(i.b)("p",null,"Now, imagine you need an access to a given request data type in multiple places. Wouldn't it be better to pass a generic once\nand forget about it? This is where ",Object(i.b)("strong",{parentName:"p"},"automatic data inference")," comes into play and it answers the question why it is useful\nto provide ",Object(i.b)("inlineCode",{parentName:"p"},"Data")," generic to request actions!"),Object(i.b)("h2",{id:"automatic-data-inference"},"Automatic data inference"),Object(i.b)("p",null,"So, how does it work in practice? Let's go back to ",Object(i.b)("inlineCode",{parentName:"p"},"fetchBook")," action. It has already defined ",Object(i.b)("inlineCode",{parentName:"p"},"data")," type. It turns out that\ngenerics of selectors and actions are connected, so instead of passing a generic in selectors, you can just pass actions as ",Object(i.b)("inlineCode",{parentName:"p"},"action")," prop:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const { data, loading, error } = getQuery(state, {\n  type: 'FETCH_BOOK',\n  action: fetchBook,\n});\n")),Object(i.b)("p",null,"or... with ",Object(i.b)("inlineCode",{parentName:"p"},"getQuerySelector"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const bookSelector = getQuerySelector({\n  type: 'FETCH_BOOK',\n  action: fetchBook,\n});\nconst { data, loading, error } = bookSelector(state);\n")),Object(i.b)("p",null,"The downside is, that you need to provide both action and constant, which is not perfect. But, there is a way to fix that!\nJust use an action creator library and forget about constants!"),Object(i.b)("h2",{id:"using-with-action-creator-library"},"Using with action creator library"),Object(i.b)("p",null,"Before showing how to use an action creator library with Typescript, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/actions#action-creator-libraries"}),"general guide"),"\nif you didn't already! One you have done that, we will show below how combine ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/klis87/redux-smart-actions"}),"redux-smart-actions"),"\nwith Typescript and how it could help us with ",Object(i.b)("inlineCode",{parentName:"p"},"Data")," generics:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { createSmartAction } from 'redux-smart-actions';\n\nconst fetchBook = createSmartAction(function (\n  id: string,\n): RequestAction<{ id: string; title: string }, { id: string; name: string }> {\n  return {\n    request: {\n      url: `/books/${id}`,\n    },\n    meta: {\n      getData: data => ({ id: data.id, name: data.title }),\n    },\n  };\n});\n")),Object(i.b)("p",null,"or with a slightly different syntax..."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { createSmartAction } from 'redux-smart-actions';\n\nconst fetchBook: (\n  id: string,\n) => RequestAction<\n  { id: string; title: string },\n  { id: string; name: string }\n> = createSmartAction(id => {\n  return {\n    request: {\n      url: `/books/${id}`,\n    },\n    meta: {\n      getData: data => ({ id: data.id, name: data.title }),\n    },\n  };\n});\n")),Object(i.b)("p",null,"Notice that we don't have ",Object(i.b)("inlineCode",{parentName:"p"},"type")," anymore! ",Object(i.b)("inlineCode",{parentName:"p"},"fetchBook.toString() === 'FETCH_BOOK'"),", so now you can pass it\nin all ",Object(i.b)("inlineCode",{parentName:"p"},"redux-requests")," functions wherever you would pass ",Object(i.b)("inlineCode",{parentName:"p"},"FETCH_BOOK")," type! For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const { data, loading, error } = getQuery(state, {\n  type: fetchBook,\n});\n")),Object(i.b)("p",null,"That's it! We don't need ",Object(i.b)("inlineCode",{parentName:"p"},"action")," prop anymore as ",Object(i.b)("inlineCode",{parentName:"p"},"type")," already has it! We needed to define type for data only in ",Object(i.b)("inlineCode",{parentName:"p"},"fetchBook"),", you can pass it in selectors in mupltiple places and have ",Object(i.b)("inlineCode",{parentName:"p"},"data")," typed automatically!"),Object(i.b)("p",null,"What is interesting, you could even have this code in ",Object(i.b)("inlineCode",{parentName:"p"},"js")," file, still your editor like ",Object(i.b)("inlineCode",{parentName:"p"},"vscode")," would show you ",Object(i.b)("inlineCode",{parentName:"p"},"data")," structure, so\nthis means that you could use Typescript only in actions files but javascript in others and still have ",Object(i.b)("inlineCode",{parentName:"p"},"data")," autocompletion!"),Object(i.b)("h2",{id:"requestsstore-and-dispatchrequest"},Object(i.b)("inlineCode",{parentName:"h2"},"RequestsStore")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"dispatchRequest")),Object(i.b)("p",null,"As always, in order to create a request, you must dispatch a ",Object(i.b)("strong",{parentName:"p"},"request action"),", for instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { data, error } = await store.dispatch(fetchBook('1'));\n")),Object(i.b)("p",null,"There is a problem though, ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," is not properly typed, because the official ",Object(i.b)("inlineCode",{parentName:"p"},"Redux")," types for ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," cannot know about\nmiddleware from this library, which returns a promise with server response for dispatched request actions."),Object(i.b)("p",null,"Fortunately, in all places you would dispatch ",Object(i.b)("strong",{parentName:"p"},"request actions"),", you could use ",Object(i.b)("inlineCode",{parentName:"p"},"RequestsStore")," and its ",Object(i.b)("inlineCode",{parentName:"p"},"dispatchRequest")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createRequestsStore } from '@redux-requests/core';\n\nconst requestsStore = createRequestsStore(store);\nconst { data, error } = await requestsStore.dispatchRequest(fetchBook('1'));\n")),Object(i.b)("p",null,"Now, result of ",Object(i.b)("inlineCode",{parentName:"p"},"dispatchRequest")," is properly typed, and as a bonus, if you defined ",Object(i.b)("inlineCode",{parentName:"p"},"Data")," generic in dispatched\naction, also ",Object(i.b)("inlineCode",{parentName:"p"},"data")," will be typed! Again, automatic type inference!"),Object(i.b)("p",null,"Regarding functionality, ",Object(i.b)("inlineCode",{parentName:"p"},"createRequestsStore")," doesn't do anything else than normal store, it just decorates passed store\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"dispatchRequest")," method which is just a copy of normal ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch"),". So, ",Object(i.b)("inlineCode",{parentName:"p"},"dispatchRequest")," does exactly the same thing\nas ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch"),", the only difference is that ",Object(i.b)("inlineCode",{parentName:"p"},"dispatchRequest")," is properly typed."),Object(i.b)("p",null,"What's interesting, in all interceptors you have access to ",Object(i.b)("inlineCode",{parentName:"p"},"RequestsStore")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"Store"),", so you already could utilize\n",Object(i.b)("inlineCode",{parentName:"p"},"dispatchRequest")," there."),Object(i.b)("h2",{id:"responsedata-utility-type"},Object(i.b)("inlineCode",{parentName:"h2"},"ResponseData")," utility type"),Object(i.b)("p",null,"Sometimes you might want to use a type which is just a ",Object(i.b)("inlineCode",{parentName:"p"},"Data")," generic used in a request action. For your convenience, instead\nof checking and worrying about it, you can just get it from a request action, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { ResponseData } from '@redux-requests/core';\n\ntype BookData = ResponseData<typeof fetchBook>;\n// the same as type BookData = { id: string; name: string }\n")),Object(i.b)("h2",{id:"localmutationaction"},Object(i.b)("inlineCode",{parentName:"h2"},"LocalMutationAction")),Object(i.b)("p",null,"If you use a local mutation, you could also use ",Object(i.b)("inlineCode",{parentName:"p"},"LocalMutationAction")," interface:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { LocalMutationAction } from '@redux-requests/core';\n\nfunction updateBookName(id: string, newName: string): LocalMutationAction {\n  return {\n    type: 'UPDATE_BOOK_NAME',\n    meta: {\n      mutations: {\n        FETCH_BOOK: {\n          updateData: data =>\n            data && data.id === id ? { ...data, name: newName } : data,\n          local: true,\n        },\n      },\n    },\n  };\n}\n")),Object(i.b)("p",null,"...or if ",Object(i.b)("inlineCode",{parentName:"p"},"fetchBook")," is normalized, you could just:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { LocalMutationAction } from '@redux-requests/core';\n\nfunction updateBookName(id: string, newName: string): LocalMutationAction {\n  return {\n    type: 'UPDATE_BOOK_NAME',\n    meta: {\n      localData: { id, name: newName },\n    },\n  };\n}\n")),Object(i.b)("h2",{id:"usage-with-react"},"Usage with React"),Object(i.b)("p",null,"If you use React, ",Object(i.b)("inlineCode",{parentName:"p"},"useQuery")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Query")," also have ",Object(i.b)("inlineCode",{parentName:"p"},"action")," prop, and also you could pass a request action as ",Object(i.b)("inlineCode",{parentName:"p"},"type")," if\nyou use a library like ",Object(i.b)("inlineCode",{parentName:"p"},"redux-smart-actions")," - in the similar fashion as in ",Object(i.b)("inlineCode",{parentName:"p"},"getQuery")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getQuerySelector"),"."),Object(i.b)("p",null,"Also, instead of ",Object(i.b)("inlineCode",{parentName:"p"},"useDispatch")," from ",Object(i.b)("inlineCode",{parentName:"p"},"react-redux"),", you can use ",Object(i.b)("inlineCode",{parentName:"p"},"useDispatchRequest"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { useDispatchRequest } from '@redux-requests/react';\n\nconst BookFetcher = () => {\n  const dispatchRequest = useDispatchRequest();\n\n  return (\n    <button\n      onClick={async () => {\n        const { data, error } = await dispatch(fetchBook('1'));\n      }}\n    >\n      Fetch book\n    </button>\n  );\n};\n")),Object(i.b)("p",null,"Then you could enjoy ",Object(i.b)("inlineCode",{parentName:"p"},"data")," inference like in ",Object(i.b)("inlineCode",{parentName:"p"},"dispatchRequest")," from ",Object(i.b)("inlineCode",{parentName:"p"},"RequestsStore"),". From functionality perspective though,\n",Object(i.b)("inlineCode",{parentName:"p"},"useDispatchRequest")," is just reexported ",Object(i.b)("inlineCode",{parentName:"p"},"useDispatch")," from ",Object(i.b)("inlineCode",{parentName:"p"},"react-redux"),", so it works exactly the same."))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(m,c({ref:t},p,{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);