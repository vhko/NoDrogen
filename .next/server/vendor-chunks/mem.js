"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mem";
exports.ids = ["vendor-chunks/mem"];
exports.modules = {

/***/ "(rsc)/./node_modules/mem/dist/index.js":
/*!****************************************!*\
  !*** ./node_modules/mem/dist/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mem),\n/* harmony export */   memClear: () => (/* binding */ memClear),\n/* harmony export */   memDecorator: () => (/* binding */ memDecorator)\n/* harmony export */ });\n/* harmony import */ var mimic_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimic-fn */ \"(rsc)/./node_modules/mimic-fn/index.js\");\n/* harmony import */ var map_age_cleaner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! map-age-cleaner */ \"(rsc)/./node_modules/map-age-cleaner/dist/index.js\");\n\n\nconst cacheStore = new WeakMap();\n/**\n[Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.\n\n@param fn - Function to be memoized.\n\n@example\n```\nimport mem from 'mem';\n\nlet index = 0;\nconst counter = () => ++index;\nconst memoized = mem(counter);\n\nmemoized('foo');\n//=> 1\n\n// Cached as it's the same argument\nmemoized('foo');\n//=> 1\n\n// Not cached anymore as the arguments changed\nmemoized('bar');\n//=> 2\n\nmemoized('bar');\n//=> 2\n```\n*/ function mem(fn, { cacheKey, cache = new Map(), maxAge } = {}) {\n    if (typeof maxAge === \"number\") {\n        map_age_cleaner__WEBPACK_IMPORTED_MODULE_1__(cache);\n    }\n    const memoized = function(...arguments_) {\n        const key = cacheKey ? cacheKey(arguments_) : arguments_[0];\n        const cacheItem = cache.get(key);\n        if (cacheItem) {\n            return cacheItem.data; // eslint-disable-line @typescript-eslint/no-unsafe-return\n        }\n        const result = fn.apply(this, arguments_);\n        cache.set(key, {\n            data: result,\n            maxAge: maxAge ? Date.now() + maxAge : Number.POSITIVE_INFINITY\n        });\n        return result; // eslint-disable-line @typescript-eslint/no-unsafe-return\n    };\n    (0,mimic_fn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(memoized, fn, {\n        ignoreNonConfigurable: true\n    });\n    cacheStore.set(memoized, cache);\n    return memoized;\n}\n/**\n@returns A [decorator](https://github.com/tc39/proposal-decorators) to memoize class methods or static class methods.\n\n@example\n```\nimport {memDecorator} from 'mem';\n\nclass Example {\n    index = 0\n\n    @memDecorator()\n    counter() {\n        return ++this.index;\n    }\n}\n\nclass ExampleWithOptions {\n    index = 0\n\n    @memDecorator({maxAge: 1000})\n    counter() {\n        return ++this.index;\n    }\n}\n```\n*/ function memDecorator(options = {}) {\n    const instanceMap = new WeakMap();\n    return (target, propertyKey, descriptor)=>{\n        const input = target[propertyKey]; // eslint-disable-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access\n        if (typeof input !== \"function\") {\n            throw new TypeError(\"The decorated value must be a function\");\n        }\n        delete descriptor.value;\n        delete descriptor.writable;\n        descriptor.get = function() {\n            if (!instanceMap.has(this)) {\n                const value = mem(input, options);\n                instanceMap.set(this, value);\n                return value;\n            }\n            return instanceMap.get(this);\n        };\n    };\n}\n/**\nClear all cached data of a memoized function.\n\n@param fn - Memoized function.\n*/ function memClear(fn) {\n    const cache = cacheStore.get(fn);\n    if (!cache) {\n        throw new TypeError(\"Can't clear a function that was not memoized!\");\n    }\n    if (typeof cache.clear !== \"function\") {\n        throw new TypeError(\"The cache Map can't be cleared!\");\n    }\n    cache.clear();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWVtL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFDYTtBQUM1QyxNQUFNRSxhQUFhLElBQUlDO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsR0FDZSxTQUFTQyxJQUFJQyxFQUFFLEVBQUUsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLElBQUlDLEtBQUssRUFBRUMsTUFBTSxFQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pFLElBQUksT0FBT0EsV0FBVyxVQUFVO1FBQzVCUiw0Q0FBYUEsQ0FBQ007SUFDbEI7SUFDQSxNQUFNRyxXQUFXLFNBQVUsR0FBR0MsVUFBVTtRQUNwQyxNQUFNQyxNQUFNTixXQUFXQSxTQUFTSyxjQUFjQSxVQUFVLENBQUMsRUFBRTtRQUMzRCxNQUFNRSxZQUFZTixNQUFNTyxHQUFHLENBQUNGO1FBQzVCLElBQUlDLFdBQVc7WUFDWCxPQUFPQSxVQUFVRSxJQUFJLEVBQUUsMERBQTBEO1FBQ3JGO1FBQ0EsTUFBTUMsU0FBU1gsR0FBR1ksS0FBSyxDQUFDLElBQUksRUFBRU47UUFDOUJKLE1BQU1XLEdBQUcsQ0FBQ04sS0FBSztZQUNYRyxNQUFNQztZQUNOUCxRQUFRQSxTQUFTVSxLQUFLQyxHQUFHLEtBQUtYLFNBQVNZLE9BQU9DLGlCQUFpQjtRQUNuRTtRQUNBLE9BQU9OLFFBQVEsMERBQTBEO0lBQzdFO0lBQ0FoQixvREFBT0EsQ0FBQ1UsVUFBVUwsSUFBSTtRQUNsQmtCLHVCQUF1QjtJQUMzQjtJQUNBckIsV0FBV2dCLEdBQUcsQ0FBQ1IsVUFBVUg7SUFDekIsT0FBT0c7QUFDWDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLEdBQ08sU0FBU2MsYUFBYUMsVUFBVSxDQUFDLENBQUM7SUFDckMsTUFBTUMsY0FBYyxJQUFJdkI7SUFDeEIsT0FBTyxDQUFDd0IsUUFBUUMsYUFBYUM7UUFDekIsTUFBTUMsUUFBUUgsTUFBTSxDQUFDQyxZQUFZLEVBQUUsMEdBQTBHO1FBQzdJLElBQUksT0FBT0UsVUFBVSxZQUFZO1lBQzdCLE1BQU0sSUFBSUMsVUFBVTtRQUN4QjtRQUNBLE9BQU9GLFdBQVdHLEtBQUs7UUFDdkIsT0FBT0gsV0FBV0ksUUFBUTtRQUMxQkosV0FBV2YsR0FBRyxHQUFHO1lBQ2IsSUFBSSxDQUFDWSxZQUFZUSxHQUFHLENBQUMsSUFBSSxHQUFHO2dCQUN4QixNQUFNRixRQUFRNUIsSUFBSTBCLE9BQU9MO2dCQUN6QkMsWUFBWVIsR0FBRyxDQUFDLElBQUksRUFBRWM7Z0JBQ3RCLE9BQU9BO1lBQ1g7WUFDQSxPQUFPTixZQUFZWixHQUFHLENBQUMsSUFBSTtRQUMvQjtJQUNKO0FBQ0o7QUFDQTs7OztBQUlBLEdBQ08sU0FBU3FCLFNBQVM5QixFQUFFO0lBQ3ZCLE1BQU1FLFFBQVFMLFdBQVdZLEdBQUcsQ0FBQ1Q7SUFDN0IsSUFBSSxDQUFDRSxPQUFPO1FBQ1IsTUFBTSxJQUFJd0IsVUFBVTtJQUN4QjtJQUNBLElBQUksT0FBT3hCLE1BQU02QixLQUFLLEtBQUssWUFBWTtRQUNuQyxNQUFNLElBQUlMLFVBQVU7SUFDeEI7SUFDQXhCLE1BQU02QixLQUFLO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1leGFtcGxlLWZ1bGwvLi9ub2RlX21vZHVsZXMvbWVtL2Rpc3QvaW5kZXguanM/YjViOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWltaWNGbiBmcm9tICdtaW1pYy1mbic7XG5pbXBvcnQgbWFwQWdlQ2xlYW5lciBmcm9tICdtYXAtYWdlLWNsZWFuZXInO1xuY29uc3QgY2FjaGVTdG9yZSA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbltNZW1vaXplXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NZW1vaXphdGlvbikgZnVuY3Rpb25zIC0gQW4gb3B0aW1pemF0aW9uIHVzZWQgdG8gc3BlZWQgdXAgY29uc2VjdXRpdmUgZnVuY3Rpb24gY2FsbHMgYnkgY2FjaGluZyB0aGUgcmVzdWx0IG9mIGNhbGxzIHdpdGggaWRlbnRpY2FsIGlucHV0LlxuXG5AcGFyYW0gZm4gLSBGdW5jdGlvbiB0byBiZSBtZW1vaXplZC5cblxuQGV4YW1wbGVcbmBgYFxuaW1wb3J0IG1lbSBmcm9tICdtZW0nO1xuXG5sZXQgaW5kZXggPSAwO1xuY29uc3QgY291bnRlciA9ICgpID0+ICsraW5kZXg7XG5jb25zdCBtZW1vaXplZCA9IG1lbShjb3VudGVyKTtcblxubWVtb2l6ZWQoJ2ZvbycpO1xuLy89PiAxXG5cbi8vIENhY2hlZCBhcyBpdCdzIHRoZSBzYW1lIGFyZ3VtZW50XG5tZW1vaXplZCgnZm9vJyk7XG4vLz0+IDFcblxuLy8gTm90IGNhY2hlZCBhbnltb3JlIGFzIHRoZSBhcmd1bWVudHMgY2hhbmdlZFxubWVtb2l6ZWQoJ2JhcicpO1xuLy89PiAyXG5cbm1lbW9pemVkKCdiYXInKTtcbi8vPT4gMlxuYGBgXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVtKGZuLCB7IGNhY2hlS2V5LCBjYWNoZSA9IG5ldyBNYXAoKSwgbWF4QWdlLCB9ID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG1heEFnZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWFwQWdlQ2xlYW5lcihjYWNoZSk7XG4gICAgfVxuICAgIGNvbnN0IG1lbW9pemVkID0gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcbiAgICAgICAgY29uc3Qga2V5ID0gY2FjaGVLZXkgPyBjYWNoZUtleShhcmd1bWVudHNfKSA6IGFyZ3VtZW50c19bMF07XG4gICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IGNhY2hlLmdldChrZXkpO1xuICAgICAgICBpZiAoY2FjaGVJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVJdGVtLmRhdGE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHNfKTtcbiAgICAgICAgY2FjaGUuc2V0KGtleSwge1xuICAgICAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICAgICAgbWF4QWdlOiBtYXhBZ2UgPyBEYXRlLm5vdygpICsgbWF4QWdlIDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuICAgIH07XG4gICAgbWltaWNGbihtZW1vaXplZCwgZm4sIHtcbiAgICAgICAgaWdub3JlTm9uQ29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNhY2hlU3RvcmUuc2V0KG1lbW9pemVkLCBjYWNoZSk7XG4gICAgcmV0dXJuIG1lbW9pemVkO1xufVxuLyoqXG5AcmV0dXJucyBBIFtkZWNvcmF0b3JdKGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWRlY29yYXRvcnMpIHRvIG1lbW9pemUgY2xhc3MgbWV0aG9kcyBvciBzdGF0aWMgY2xhc3MgbWV0aG9kcy5cblxuQGV4YW1wbGVcbmBgYFxuaW1wb3J0IHttZW1EZWNvcmF0b3J9IGZyb20gJ21lbSc7XG5cbmNsYXNzIEV4YW1wbGUge1xuICAgIGluZGV4ID0gMFxuXG4gICAgQG1lbURlY29yYXRvcigpXG4gICAgY291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuICsrdGhpcy5pbmRleDtcbiAgICB9XG59XG5cbmNsYXNzIEV4YW1wbGVXaXRoT3B0aW9ucyB7XG4gICAgaW5kZXggPSAwXG5cbiAgICBAbWVtRGVjb3JhdG9yKHttYXhBZ2U6IDEwMDB9KVxuICAgIGNvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiArK3RoaXMuaW5kZXg7XG4gICAgfVxufVxuYGBgXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIG1lbURlY29yYXRvcihvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgcmV0dXJuICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgZGVjb3JhdGVkIHZhbHVlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICBkZWxldGUgZGVzY3JpcHRvci53cml0YWJsZTtcbiAgICAgICAgZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWVtKGlucHV0LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZU1hcC5zZXQodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZU1hcC5nZXQodGhpcyk7XG4gICAgICAgIH07XG4gICAgfTtcbn1cbi8qKlxuQ2xlYXIgYWxsIGNhY2hlZCBkYXRhIG9mIGEgbWVtb2l6ZWQgZnVuY3Rpb24uXG5cbkBwYXJhbSBmbiAtIE1lbW9pemVkIGZ1bmN0aW9uLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBtZW1DbGVhcihmbikge1xuICAgIGNvbnN0IGNhY2hlID0gY2FjaGVTdG9yZS5nZXQoZm4pO1xuICAgIGlmICghY2FjaGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2FuXFwndCBjbGVhciBhIGZ1bmN0aW9uIHRoYXQgd2FzIG5vdCBtZW1vaXplZCEnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjYWNoZS5jbGVhciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FjaGUgTWFwIGNhblxcJ3QgYmUgY2xlYXJlZCEnKTtcbiAgICB9XG4gICAgY2FjaGUuY2xlYXIoKTtcbn1cbiJdLCJuYW1lcyI6WyJtaW1pY0ZuIiwibWFwQWdlQ2xlYW5lciIsImNhY2hlU3RvcmUiLCJXZWFrTWFwIiwibWVtIiwiZm4iLCJjYWNoZUtleSIsImNhY2hlIiwiTWFwIiwibWF4QWdlIiwibWVtb2l6ZWQiLCJhcmd1bWVudHNfIiwia2V5IiwiY2FjaGVJdGVtIiwiZ2V0IiwiZGF0YSIsInJlc3VsdCIsImFwcGx5Iiwic2V0IiwiRGF0ZSIsIm5vdyIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiaWdub3JlTm9uQ29uZmlndXJhYmxlIiwibWVtRGVjb3JhdG9yIiwib3B0aW9ucyIsImluc3RhbmNlTWFwIiwidGFyZ2V0IiwicHJvcGVydHlLZXkiLCJkZXNjcmlwdG9yIiwiaW5wdXQiLCJUeXBlRXJyb3IiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiaGFzIiwibWVtQ2xlYXIiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mem/dist/index.js\n");

/***/ })

};
;