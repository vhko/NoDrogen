"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/aggregate-error";
exports.ids = ["vendor-chunks/aggregate-error"];
exports.modules = {

/***/ "(rsc)/./node_modules/aggregate-error/index.js":
/*!***********************************************!*\
  !*** ./node_modules/aggregate-error/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AggregateError)\n/* harmony export */ });\n/* harmony import */ var indent_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! indent-string */ \"(rsc)/./node_modules/indent-string/index.js\");\n/* harmony import */ var clean_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clean-stack */ \"(rsc)/./node_modules/clean-stack/index.js\");\n\n\nconst cleanInternalStack = (stack)=>stack.replace(/\\s+at .*aggregate-error\\/index.js:\\d+:\\d+\\)?/g, \"\");\nvar AggregateError;\nAggregateError = class AggregateError extends Error {\n    #errors;\n    constructor(errors){\n        if (!Array.isArray(errors)) {\n            throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);\n        }\n        errors = errors.map((error)=>{\n            if (error instanceof Error) {\n                return error;\n            }\n            if (error !== null && typeof error === \"object\") {\n                // Handle plain error objects with message property and/or possibly other metadata\n                return Object.assign(new Error(error.message), error);\n            }\n            return new Error(error);\n        });\n        let message = errors.map((error)=>{\n            // The `stack` property is not standardized, so we can't assume it exists\n            return typeof error.stack === \"string\" ? cleanInternalStack((0,clean_stack__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(error.stack)) : String(error);\n        }).join(\"\\n\");\n        message = \"\\n\" + (0,indent_string__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(message, 4);\n        super(message);\n        this.name = \"AggregateError\";\n        this.#errors = errors;\n    }\n    get errors() {\n        return this.#errors.slice();\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYWdncmVnYXRlLWVycm9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNKO0FBRXJDLE1BQU1FLHFCQUFxQkMsQ0FBQUEsUUFBU0EsTUFBTUMsT0FBTyxDQUFDLGlEQUFpRDtJQUU5RUM7QUFBQUEsaUJBQU4sTUFBTUEsdUJBQXVCQztJQUMzQyxDQUFDQyxNQUFNLENBQUM7SUFJUkMsWUFBWUQsTUFBTSxDQUFFO1FBQ25CLElBQUksQ0FBQ0UsTUFBTUMsT0FBTyxDQUFDSCxTQUFTO1lBQzNCLE1BQU0sSUFBSUksVUFBVSxDQUFDLG1DQUFtQyxFQUFFLE9BQU9KLE9BQU8sQ0FBQztRQUMxRTtRQUVBQSxTQUFTQSxPQUFPSyxHQUFHLENBQUNDLENBQUFBO1lBQ25CLElBQUlBLGlCQUFpQlAsT0FBTztnQkFDM0IsT0FBT087WUFDUjtZQUVBLElBQUlBLFVBQVUsUUFBUSxPQUFPQSxVQUFVLFVBQVU7Z0JBQ2hELGtGQUFrRjtnQkFDbEYsT0FBT0MsT0FBT0MsTUFBTSxDQUFDLElBQUlULE1BQU1PLE1BQU1HLE9BQU8sR0FBR0g7WUFDaEQ7WUFFQSxPQUFPLElBQUlQLE1BQU1PO1FBQ2xCO1FBRUEsSUFBSUcsVUFBVVQsT0FDWkssR0FBRyxDQUFDQyxDQUFBQTtZQUNKLHlFQUF5RTtZQUN6RSxPQUFPLE9BQU9BLE1BQU1WLEtBQUssS0FBSyxXQUFXRCxtQkFBbUJELHVEQUFVQSxDQUFDWSxNQUFNVixLQUFLLEtBQUtjLE9BQU9KO1FBQy9GLEdBQ0NLLElBQUksQ0FBQztRQUNQRixVQUFVLE9BQU9oQix5REFBWUEsQ0FBQ2dCLFNBQVM7UUFDdkMsS0FBSyxDQUFDQTthQTNCUEcsT0FBTztRQTZCTixJQUFJLENBQUMsQ0FBQ1osTUFBTSxHQUFHQTtJQUNoQjtJQUVBLElBQUlBLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxDQUFDQSxNQUFNLENBQUNhLEtBQUs7SUFDMUI7QUFDRDtBQXRDcUJmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aW9uLXgtZXhhbXBsZS1mdWxsLy4vbm9kZV9tb2R1bGVzL2FnZ3JlZ2F0ZS1lcnJvci9pbmRleC5qcz9mNzc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbmRlbnRTdHJpbmcgZnJvbSAnaW5kZW50LXN0cmluZyc7XG5pbXBvcnQgY2xlYW5TdGFjayBmcm9tICdjbGVhbi1zdGFjayc7XG5cbmNvbnN0IGNsZWFuSW50ZXJuYWxTdGFjayA9IHN0YWNrID0+IHN0YWNrLnJlcGxhY2UoL1xccythdCAuKmFnZ3JlZ2F0ZS1lcnJvclxcL2luZGV4LmpzOlxcZCs6XFxkK1xcKT8vZywgJycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ2dyZWdhdGVFcnJvciBleHRlbmRzIEVycm9yIHtcblx0I2Vycm9ycztcblxuXHRuYW1lID0gJ0FnZ3JlZ2F0ZUVycm9yJztcblxuXHRjb25zdHJ1Y3RvcihlcnJvcnMpIHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoZXJyb3JzKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgaW5wdXQgdG8gYmUgYW4gQXJyYXksIGdvdCAke3R5cGVvZiBlcnJvcnN9YCk7XG5cdFx0fVxuXG5cdFx0ZXJyb3JzID0gZXJyb3JzLm1hcChlcnJvciA9PiB7XG5cdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlcnJvciAhPT0gbnVsbCAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdC8vIEhhbmRsZSBwbGFpbiBlcnJvciBvYmplY3RzIHdpdGggbWVzc2FnZSBwcm9wZXJ0eSBhbmQvb3IgcG9zc2libHkgb3RoZXIgbWV0YWRhdGFcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpLCBlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgRXJyb3IoZXJyb3IpO1xuXHRcdH0pO1xuXG5cdFx0bGV0IG1lc3NhZ2UgPSBlcnJvcnNcblx0XHRcdC5tYXAoZXJyb3IgPT4ge1xuXHRcdFx0XHQvLyBUaGUgYHN0YWNrYCBwcm9wZXJ0eSBpcyBub3Qgc3RhbmRhcmRpemVkLCBzbyB3ZSBjYW4ndCBhc3N1bWUgaXQgZXhpc3RzXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgZXJyb3Iuc3RhY2sgPT09ICdzdHJpbmcnID8gY2xlYW5JbnRlcm5hbFN0YWNrKGNsZWFuU3RhY2soZXJyb3Iuc3RhY2spKSA6IFN0cmluZyhlcnJvcik7XG5cdFx0XHR9KVxuXHRcdFx0LmpvaW4oJ1xcbicpO1xuXHRcdG1lc3NhZ2UgPSAnXFxuJyArIGluZGVudFN0cmluZyhtZXNzYWdlLCA0KTtcblx0XHRzdXBlcihtZXNzYWdlKTtcblxuXHRcdHRoaXMuI2Vycm9ycyA9IGVycm9ycztcblx0fVxuXG5cdGdldCBlcnJvcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2Vycm9ycy5zbGljZSgpO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiaW5kZW50U3RyaW5nIiwiY2xlYW5TdGFjayIsImNsZWFuSW50ZXJuYWxTdGFjayIsInN0YWNrIiwicmVwbGFjZSIsIkFnZ3JlZ2F0ZUVycm9yIiwiRXJyb3IiLCJlcnJvcnMiLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwiaXNBcnJheSIsIlR5cGVFcnJvciIsIm1hcCIsImVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwibWVzc2FnZSIsIlN0cmluZyIsImpvaW4iLCJuYW1lIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/aggregate-error/index.js\n");

/***/ })

};
;