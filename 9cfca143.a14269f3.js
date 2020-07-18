(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),o=(r(0),r(149)),s={title:"abortRequests",description:"abortRequests API reference for redux-requests - declarative AJAX requests and automatic network state management for Redux"},c={id:"api-reference/abort-requests",title:"abortRequests",description:"abortRequests API reference for redux-requests - declarative AJAX requests and automatic network state management for Redux",source:"@site/docs/api-reference/abort-requests.md",permalink:"/docs/api-reference/abort-requests",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/api-reference/abort-requests.md",lastUpdatedBy:"klis87",lastUpdatedAt:1595116360,sidebar:"docs",previous:{title:"resetRequests",permalink:"/docs/api-reference/reset-requests"},next:{title:"clearRequestsCache",permalink:"/docs/api-reference/clear-requests-cache"}},i=[],u={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"abortRequests")," is a built-in action which sometimes you might need to abort some pending requests manually,\nfor example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { abortRequests } from '@redux-requests/core';\n\n// abort everything\ndispatch(abortRequests());\n\n// abort FETCH_BOOKS\ndispatch(abortRequests([FETCH_BOOKS]));\n\n// abort DELETE_BOOKS\ndispatch(abortRequests([DELETE_BOOKS]));\n\n// abort FETCH_BOOKS and FETCH_BOOK with 1 request key\ndispatch(abortRequests([FETCH_BOOKS, { requestType: FETCH_BOOK, requestKey: '1' }]));\n")))}p.isMDXComponent=!0},149:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,b=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return r?a.a.createElement(b,c({ref:t},u,{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<o;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);