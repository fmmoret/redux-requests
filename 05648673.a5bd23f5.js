(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),o=(n(0),n(158)),s={title:"4. Reacting to request actions",description:"4th part of the tutorial for redux-requests - declarative AJAX requests and automatic network state management for single-page applications"},i={id:"tutorial/4-reacting-to-request-actions",title:"4. Reacting to request actions",description:"4th part of the tutorial for redux-requests - declarative AJAX requests and automatic network state management for single-page applications",source:"@site/docs/tutorial/4-reacting-to-request-actions.md",permalink:"/docs/tutorial/4-reacting-to-request-actions",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/tutorial/4-reacting-to-request-actions.md",lastUpdatedBy:"Konrad",lastUpdatedAt:1610499904,sidebar:"docs",previous:{title:"3. Request keys",permalink:"/docs/tutorial/3-request-keys"},next:{title:"5. Resetting requests",permalink:"/docs/tutorial/5-resetting-requests"}},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Despite the fact this library advocates using mostly actions and built-in selectors,\nit doesn't mean you still cannot use normal Redux you know. You can still intercept, listen\nto request actions in your reducers, middleware, sagas or whatever you use."),Object(o.b)("p",null,"With request actions this is easy, just treat it as a normal Redux action. But what\nabout response actions, like success, error and abort actions? For that you can use\nhelpers, which add proper suffixes to request types, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { success, error, abort } from '@redux-requests/core'\n\nconst FETCH_BOOKS = 'FETCH_BOOKS';\n\nconst fetchBooks = () => ({\n  type: FETCH_BOOKS,\n  request: { url: '/books' },\n})\n\nconst defaultState = {\n  data: null,\n  error: null,\n  pending: 0,\n}\n\nconst booksReducer = (state = defaultState, action) => {\n  switch (action.type) {\n    case FETCH_BOOKS:\n      return { ...state, pending: state.pending + 1 };\n    case success(FETCH_BOOKS):\n      return {\n        data: action.response.data,\n        pending: state.pending - 1,\n        error: null,\n      },\n    case error(FETCH_BOOKS):\n      return {\n        data: null,\n        pending: state.pending - 1,\n        error: action.error,\n      },\n    case abort(FETCH_BOOKS):\n      return { ...state, pending: state.pending - 1 };\n    default:\n      return state;\n}\n\n")),Object(o.b)("p",null,"So, as you can see, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"success"),", ",Object(o.b)("inlineCode",{parentName:"p"},"error")," and ",Object(o.b)("inlineCode",{parentName:"p"},"abort")," helpers to handle\nany response action. Above we created a reducer which manages ",Object(o.b)("inlineCode",{parentName:"p"},"data"),", ",Object(o.b)("inlineCode",{parentName:"p"},"error")," and ",Object(o.b)("inlineCode",{parentName:"p"},"pending"),"\nstate of ",Object(o.b)("inlineCode",{parentName:"p"},"FETCH_BOOKS")," query. However, this is just for demonstration purposes, it\nis recommended to use built-in ",Object(o.b)("inlineCode",{parentName:"p"},"requestsReducer")," instead. More typical use case\nto react to response actions in your custom reducer would be to handle a local state."))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,i({ref:t},u,{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);