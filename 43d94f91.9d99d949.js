(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),c=a(6),o=(a(0),a(149)),r={title:"9. Caching",description:"9th part of the tutorial for redux-requests - declarative AJAX requests and automatic network state management for Redux"},i={id:"tutorial/9-caching",title:"9. Caching",description:"9th part of the tutorial for redux-requests - declarative AJAX requests and automatic network state management for Redux",source:"@site/docs/tutorial/9-caching.md",permalink:"/docs/tutorial/9-caching",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/tutorial/9-caching.md",lastUpdatedBy:"klis87",lastUpdatedAt:1595199121,sidebar:"docs",previous:{title:"8. Optimistic updates",permalink:"/docs/tutorial/8-optimistic-updates"},next:{title:"10. Automatic normalisation",permalink:"/docs/tutorial/10-automatic-normalisation"}},s=[{value:"<code>cache</code>",id:"cache",children:[]},{value:"<code>cacheKey</code>",id:"cachekey",children:[]},{value:"Cache with <code>requestKey</code>",id:"cache-with-requestkey",children:[]},{value:"<code>cacheKey</code> and <code>requestKey</code> together",id:"cachekey-and-requestkey-together",children:[]},{value:"Cache with <code>requestCapacity</code>",id:"cache-with-requestcapacity",children:[]},{value:"Manual cache clearing",id:"manual-cache-clearing",children:[]},{value:"SSR compatibility",id:"ssr-compatibility",children:[]}],l={rightToc:s};function u(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"cache"},Object(o.b)("inlineCode",{parentName:"h2"},"cache")),Object(o.b)("p",null,"Sometimes you might want your responses to be cached for an amount of time or even forever (until the page is not reloaded at least).\nOr, putting it another way, you would like to send a given request no more often than once for an amount of time. You can easily\nachieve it with an optional cache middleware. To activate it, just pass ",Object(o.b)("inlineCode",{parentName:"p"},"cache: true")," to ",Object(o.b)("inlineCode",{parentName:"p"},"handleRequests"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { handleRequests } from '@redux-requests/core';\n\nhandleRequests({\n  ...otherOptions,\n  cache: true,\n});\n")),Object(o.b)("p",null,"After this, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"meta.cache"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const fetchBooks = () => ({\n  type: FETCH_BOOKS,\n  request: { url: '/books'},\n  meta: {\n    cache: 10, // in seconds, or true to cache forever\n  },\n});\n")),Object(o.b)("p",null,"What will happen now is that after a succesfull book fetch (to be specific after ",Object(o.b)("inlineCode",{parentName:"p"},"FETCH_BOOKS_SUCCESS")," is dispatched),\nany ",Object(o.b)("inlineCode",{parentName:"p"},"FETCH_BOOKS")," actions for ",Object(o.b)("inlineCode",{parentName:"p"},"10")," seconds won't trigger any AJAX calls and the following ",Object(o.b)("inlineCode",{parentName:"p"},"FETCH_BOOKS_SUCCESS")," will contain\npreviously cached server response. You could also use ",Object(o.b)("inlineCode",{parentName:"p"},"cache: true")," to cache forever."),Object(o.b)("h2",{id:"cachekey"},Object(o.b)("inlineCode",{parentName:"h2"},"cacheKey")),Object(o.b)("p",null,"Sometimes you would like to invalidate your cache based on a key, so if a key is changed, then you would bypass the cache\nand network would be hit. You can use ",Object(o.b)("inlineCode",{parentName:"p"},"meta.cacheKey")," for that:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const fetchBooks = language => ({\n  type: FETCH_BOOKS,\n  request: { url: '/books', params: { language } },\n  meta: {\n    cache: 10,\n    cacheKey: language, // if language changes, cache won't be hit and request will be made\n  },\n});\n")),Object(o.b)("h2",{id:"cache-with-requestkey"},"Cache with ",Object(o.b)("inlineCode",{parentName:"h2"},"requestKey")),Object(o.b)("p",null,"Another use case is that you might want to keep a separate cache for the same request action based on a key.\nThen, like for usual not cached queries, you could use ",Object(o.b)("inlineCode",{parentName:"p"},"meta.RequestKey"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const fetchBook = id => ({\n  type: FETCH_BOOK,\n  request: { url: `/books/${id}`},\n  meta: {\n    cache: true,\n    requestKey: id,\n  },\n});\n\n/* then, you will achieve the following behaviour:\n- GET /books/1 - make request, cache /books/1\n- GET /books/1 - cache hit\n- GET /books/2 - make request, cache /books/2\n- GET /books/2 - cache hit\n- GET /books/1 - cache hit\n*/\n")),Object(o.b)("h2",{id:"cachekey-and-requestkey-together"},Object(o.b)("inlineCode",{parentName:"h2"},"cacheKey")," and ",Object(o.b)("inlineCode",{parentName:"h2"},"requestKey")," together"),Object(o.b)("p",null,"You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"cacheKey")," and ",Object(o.b)("inlineCode",{parentName:"p"},"requestKey")," at the same time, then different ",Object(o.b)("inlineCode",{parentName:"p"},"cacheKey"),"\nwill be able to invalidate cache for each ",Object(o.b)("inlineCode",{parentName:"p"},"requestKey")," individually, like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const fetchBook = (id, language) => ({\n  type: FETCH_BOOK,\n  request: { url: `/books/${id}`, params: { language } },\n  meta: {\n    cache: true,\n    cacheKey: language,\n    requestKey: id,\n  },\n});\n\n/* then, you will achieve the following behaviour:\n- GET /books/1?language=en - make request, cache /books/1\n- GET /books/1?language=en - cache hit\n- GET /books/2?language=de - make request, cache /books/2\n- GET /books/2?language=en - make request, cache /books/2 again due to changed language\n- GET /books/2?language=en - cache hit\n*/\n")),Object(o.b)("p",null,"There is an interesting ",Object(o.b)("inlineCode",{parentName:"p"},"requestKey")," and ",Object(o.b)("inlineCode",{parentName:"p"},"cacheKey")," relation. Passing the same\n",Object(o.b)("inlineCode",{parentName:"p"},"requestKey")," and ",Object(o.b)("inlineCode",{parentName:"p"},"cacheKey")," is the same like passing only ",Object(o.b)("inlineCode",{parentName:"p"},"requestKey"),", because\nrequests are stored separately for each ",Object(o.b)("inlineCode",{parentName:"p"},"requestKey"),", so cache invalidation with\nthe same ",Object(o.b)("inlineCode",{parentName:"p"},"cacheKey")," could never happen."),Object(o.b)("h2",{id:"cache-with-requestcapacity"},"Cache with ",Object(o.b)("inlineCode",{parentName:"h2"},"requestCapacity")),Object(o.b)("p",null,"When you use ",Object(o.b)("inlineCode",{parentName:"p"},"cache")," with ",Object(o.b)("inlineCode",{parentName:"p"},"requestKey"),", like without caching you can also be worried\nabout storing too many queries in state. Like there, in the same fashion you can use ",Object(o.b)("inlineCode",{parentName:"p"},"requestsCapacity"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const fetchBook = id => ({\n  type: FETCH_BOOK,\n  request: { url: `/books/${id}`},\n  meta: {\n    cache: true,\n    requestKey: id,\n    requestsCapacity: 2,\n  },\n});\n\n/* then, you will achieve the following behaviour:\n- GET /books/1 - make request, cache /books/1\n- GET /books/1 - cache hit\n- GET /books/2 - make request, cache /books/2\n- GET /books/2 - cache hit\n- GET /books/1 - cache hit\n- GET /books/3 - make request, cache /books/3, invalidate /books/1 cache\n- GET /books/1 - make request, cache /books/1, invalidate /books/2 cache\n*/\n")),Object(o.b)("h2",{id:"manual-cache-clearing"},"Manual cache clearing"),Object(o.b)("p",null,"If you need to clear the cache manually for some reason, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"clearRequestsCache")," action:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { clearRequestsCache } from '@redux-requests/core';\n\n// clear the whole cache\ndispatch(clearRequestsCache());\n\n// clear only FETCH_BOOKS cache\ndispatch(clearRequestsCache([FETCH_BOOKS]));\n\n// clear only FETCH_BOOKS and FETCH_AUTHORS cache\ndispatch(clearRequestsCache([FETCH_BOOKS, FETCH_AUTHORS]));\n")),Object(o.b)("p",null,"Note however, that ",Object(o.b)("inlineCode",{parentName:"p"},"clearRequestsCache")," won't remove any query state, it will just remove cache timeout so that\nthe next time a request of a given type is dispatched, AJAX request will hit your server.\nSo it is like cache invalidation operation. To remove also data you can use ",Object(o.b)("inlineCode",{parentName:"p"},"resetRequests")," action."),Object(o.b)("h2",{id:"ssr-compatibility"},"SSR compatibility"),Object(o.b)("p",null,"Also, cache is compatible with SSR by default, so if you dispatch a request action with meta cache\non your server, this information will be passed to client inside state."))}u.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var n=a(0),c=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},h=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(a),p=n,d=h["".concat(r,".").concat(p)]||h[p]||b[p]||o;return a?c.a.createElement(d,i({ref:t},l,{components:a})):c.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var l=2;l<o;l++)r[l]=a[l];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);