/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@matejmazur";
exports.ids = ["vendor-chunks/@matejmazur"];
exports.modules = {

/***/ "(ssr)/./node_modules/@matejmazur/react-katex/dist/react-katex.js":
/*!******************************************************************!*\
  !*** ./node_modules/@matejmazur/react-katex/dist/react-katex.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function r(r){return r&&\"object\"==typeof r&&\"default\"in r?r.default:r}var e=__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"),n=r(e),t=r(__webpack_require__(/*! katex */ \"(ssr)/./node_modules/katex/dist/katex.js\"));function o(){return(o=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}var a=e.memo(function(r){var a=r.children,i=r.math,l=r.block,s=r.errorColor,c=r.renderError,u=r.settings,f=r.as,m=function(r,e){if(null==r)return{};var n,t,o={},a=Object.keys(r);for(t=0;t<a.length;t++)e.indexOf(n=a[t])>=0||(o[n]=r[n]);return o}(r,[\"children\",\"math\",\"block\",\"errorColor\",\"renderError\",\"settings\",\"as\"]),d=f||(l?\"div\":\"span\"),h=null!=a?a:i,p=e.useState({innerHtml:\"\"}),E=p[0],g=p[1];return e.useEffect(function(){try{var r=t.renderToString(h,o({displayMode:!!l,errorColor:s,throwOnError:!!c},u));g({innerHtml:r})}catch(r){if(!(r instanceof t.ParseError||r instanceof TypeError))throw r;g(c?{errorElement:c(r)}:{innerHtml:r.message})}},[l,h,s,c,u]),\"errorElement\"in E?E.errorElement:n.createElement(d,Object.assign({},m,{dangerouslySetInnerHTML:{__html:E.innerHtml}}))});module.exports=a;\n//# sourceMappingURL=react-katex.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQG1hdGVqbWF6dXIvcmVhY3Qta2F0ZXgvZGlzdC9yZWFjdC1rYXRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxjQUFjLHdEQUF3RCxNQUFNLG1CQUFPLENBQUMsd0dBQU8sYUFBYSxtQkFBTyxDQUFDLHVEQUFPLEdBQUcsYUFBYSxvQ0FBb0MsWUFBWSxtQkFBbUIsS0FBSyxtQkFBbUIsc0VBQXNFLFNBQVMsd0JBQXdCLHlCQUF5Qix1R0FBdUcsb0JBQW9CLFlBQVksa0JBQWtCLFFBQVEsV0FBVyxzQ0FBc0MsU0FBUyw2SEFBNkgsYUFBYSxnQkFBZ0IsOEJBQThCLElBQUksNEJBQTRCLDhDQUE4QyxLQUFLLEdBQUcsWUFBWSxFQUFFLFNBQVMsZ0VBQWdFLEtBQUssa0JBQWtCLEVBQUUsb0JBQW9CLEdBQUcsa0ZBQWtGLElBQUkseUJBQXlCLG9CQUFvQixHQUFHLEVBQUU7QUFDMWxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aW9uLXgtZnVsbC8uL25vZGVfbW9kdWxlcy9AbWF0ZWptYXp1ci9yZWFjdC1rYXRleC9kaXN0L3JlYWN0LWthdGV4LmpzPzlhNGEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcihyKXtyZXR1cm4gciYmXCJvYmplY3RcIj09dHlwZW9mIHImJlwiZGVmYXVsdFwiaW4gcj9yLmRlZmF1bHQ6cn12YXIgZT1yZXF1aXJlKFwicmVhY3RcIiksbj1yKGUpLHQ9cihyZXF1aXJlKFwia2F0ZXhcIikpO2Z1bmN0aW9uIG8oKXtyZXR1cm4obz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihyKXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciB0IGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sdCkmJihyW3RdPW5bdF0pfXJldHVybiByfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBhPWUubWVtbyhmdW5jdGlvbihyKXt2YXIgYT1yLmNoaWxkcmVuLGk9ci5tYXRoLGw9ci5ibG9jayxzPXIuZXJyb3JDb2xvcixjPXIucmVuZGVyRXJyb3IsdT1yLnNldHRpbmdzLGY9ci5hcyxtPWZ1bmN0aW9uKHIsZSl7aWYobnVsbD09cilyZXR1cm57fTt2YXIgbix0LG89e30sYT1PYmplY3Qua2V5cyhyKTtmb3IodD0wO3Q8YS5sZW5ndGg7dCsrKWUuaW5kZXhPZihuPWFbdF0pPj0wfHwob1tuXT1yW25dKTtyZXR1cm4gb30ocixbXCJjaGlsZHJlblwiLFwibWF0aFwiLFwiYmxvY2tcIixcImVycm9yQ29sb3JcIixcInJlbmRlckVycm9yXCIsXCJzZXR0aW5nc1wiLFwiYXNcIl0pLGQ9Znx8KGw/XCJkaXZcIjpcInNwYW5cIiksaD1udWxsIT1hP2E6aSxwPWUudXNlU3RhdGUoe2lubmVySHRtbDpcIlwifSksRT1wWzBdLGc9cFsxXTtyZXR1cm4gZS51c2VFZmZlY3QoZnVuY3Rpb24oKXt0cnl7dmFyIHI9dC5yZW5kZXJUb1N0cmluZyhoLG8oe2Rpc3BsYXlNb2RlOiEhbCxlcnJvckNvbG9yOnMsdGhyb3dPbkVycm9yOiEhY30sdSkpO2coe2lubmVySHRtbDpyfSl9Y2F0Y2gocil7aWYoIShyIGluc3RhbmNlb2YgdC5QYXJzZUVycm9yfHxyIGluc3RhbmNlb2YgVHlwZUVycm9yKSl0aHJvdyByO2coYz97ZXJyb3JFbGVtZW50OmMocil9Ontpbm5lckh0bWw6ci5tZXNzYWdlfSl9fSxbbCxoLHMsYyx1XSksXCJlcnJvckVsZW1lbnRcImluIEU/RS5lcnJvckVsZW1lbnQ6bi5jcmVhdGVFbGVtZW50KGQsT2JqZWN0LmFzc2lnbih7fSxtLHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOkUuaW5uZXJIdG1sfX0pKX0pO21vZHVsZS5leHBvcnRzPWE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1rYXRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@matejmazur/react-katex/dist/react-katex.js\n");

/***/ })

};
;