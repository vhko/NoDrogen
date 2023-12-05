"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/clean-stack";
exports.ids = ["vendor-chunks/clean-stack"];
exports.modules = {

/***/ "(rsc)/./node_modules/clean-stack/index.js":
/*!*******************************************!*\
  !*** ./node_modules/clean-stack/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cleanStack)\n/* harmony export */ });\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! escape-string-regexp */ \"(rsc)/./node_modules/escape-string-regexp/index.js\");\n\n\nconst extractPathRegex = /\\s+at.*[(\\s](.*)\\)?/;\nconst pathRegex = /^(?:(?:(?:node|node:[\\w/]+|(?:(?:node:)?internal\\/[\\w/]*|.*node_modules\\/(?:babel-polyfill|pirates)\\/.*)?\\w+)(?:\\.js)?:\\d+:\\d+)|native)/;\nconst homeDir = typeof os__WEBPACK_IMPORTED_MODULE_0__.homedir === \"undefined\" ? \"\" : os__WEBPACK_IMPORTED_MODULE_0__.homedir().replace(/\\\\/g, \"/\");\nfunction cleanStack(stack, { pretty = false, basePath } = {}) {\n    const basePathRegex = basePath && new RegExp(`(at | \\\\()${(0,escape_string_regexp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(basePath.replace(/\\\\/g, \"/\"))}`, \"g\");\n    if (typeof stack !== \"string\") {\n        return undefined;\n    }\n    return stack.replace(/\\\\/g, \"/\").split(\"\\n\").filter((line)=>{\n        const pathMatches = line.match(extractPathRegex);\n        if (pathMatches === null || !pathMatches[1]) {\n            return true;\n        }\n        const match = pathMatches[1];\n        // Electron\n        if (match.includes(\".app/Contents/Resources/electron.asar\") || match.includes(\".app/Contents/Resources/default_app.asar\")) {\n            return false;\n        }\n        return !pathRegex.test(match);\n    }).filter((line)=>line.trim() !== \"\").map((line)=>{\n        if (basePathRegex) {\n            line = line.replace(basePathRegex, \"$1\");\n        }\n        if (pretty) {\n            line = line.replace(extractPathRegex, (m, p1)=>m.replace(p1, p1.replace(homeDir, \"~\")));\n        }\n        return line;\n    }).join(\"\\n\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2xlYW4tc3RhY2svaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9CO0FBQ2tDO0FBRXRELE1BQU1FLG1CQUFtQjtBQUN6QixNQUFNQyxZQUFZO0FBQ2xCLE1BQU1DLFVBQVUsT0FBT0osdUNBQVUsS0FBSyxjQUFjLEtBQUtBLHVDQUFVLEdBQUdNLE9BQU8sQ0FBQyxPQUFPO0FBRXRFLFNBQVNDLFdBQVdDLEtBQUssRUFBRSxFQUFDQyxTQUFTLEtBQUssRUFBRUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLE1BQU1DLGdCQUFnQkQsWUFBWSxJQUFJRSxPQUFPLENBQUMsVUFBVSxFQUFFWCxnRUFBa0JBLENBQUNTLFNBQVNKLE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFO0lBRTlHLElBQUksT0FBT0UsVUFBVSxVQUFVO1FBQzlCLE9BQU9LO0lBQ1I7SUFFQSxPQUFPTCxNQUFNRixPQUFPLENBQUMsT0FBTyxLQUMxQlEsS0FBSyxDQUFDLE1BQ05DLE1BQU0sQ0FBQ0MsQ0FBQUE7UUFDUCxNQUFNQyxjQUFjRCxLQUFLRSxLQUFLLENBQUNoQjtRQUMvQixJQUFJZSxnQkFBZ0IsUUFBUSxDQUFDQSxXQUFXLENBQUMsRUFBRSxFQUFFO1lBQzVDLE9BQU87UUFDUjtRQUVBLE1BQU1DLFFBQVFELFdBQVcsQ0FBQyxFQUFFO1FBRTVCLFdBQVc7UUFDWCxJQUNDQyxNQUFNQyxRQUFRLENBQUMsNENBQ2ZELE1BQU1DLFFBQVEsQ0FBQyw2Q0FDZDtZQUNELE9BQU87UUFDUjtRQUVBLE9BQU8sQ0FBQ2hCLFVBQVVpQixJQUFJLENBQUNGO0lBQ3hCLEdBQ0NILE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0ssSUFBSSxPQUFPLElBQy9CQyxHQUFHLENBQUNOLENBQUFBO1FBQ0osSUFBSUwsZUFBZTtZQUNsQkssT0FBT0EsS0FBS1YsT0FBTyxDQUFDSyxlQUFlO1FBQ3BDO1FBRUEsSUFBSUYsUUFBUTtZQUNYTyxPQUFPQSxLQUFLVixPQUFPLENBQUNKLGtCQUFrQixDQUFDcUIsR0FBR0MsS0FBT0QsRUFBRWpCLE9BQU8sQ0FBQ2tCLElBQUlBLEdBQUdsQixPQUFPLENBQUNGLFNBQVM7UUFDcEY7UUFFQSxPQUFPWTtJQUNSLEdBQ0NTLElBQUksQ0FBQztBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aW9uLXgtZnVsbC8uL25vZGVfbW9kdWxlcy9jbGVhbi1zdGFjay9pbmRleC5qcz80NDM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgZXNjYXBlU3RyaW5nUmVnZXhwIGZyb20gJ2VzY2FwZS1zdHJpbmctcmVnZXhwJztcblxuY29uc3QgZXh0cmFjdFBhdGhSZWdleCA9IC9cXHMrYXQuKlsoXFxzXSguKilcXCk/LztcbmNvbnN0IHBhdGhSZWdleCA9IC9eKD86KD86KD86bm9kZXxub2RlOltcXHcvXSt8KD86KD86bm9kZTopP2ludGVybmFsXFwvW1xcdy9dKnwuKm5vZGVfbW9kdWxlc1xcLyg/OmJhYmVsLXBvbHlmaWxsfHBpcmF0ZXMpXFwvLiopP1xcdyspKD86XFwuanMpPzpcXGQrOlxcZCspfG5hdGl2ZSkvO1xuY29uc3QgaG9tZURpciA9IHR5cGVvZiBvcy5ob21lZGlyID09PSAndW5kZWZpbmVkJyA/ICcnIDogb3MuaG9tZWRpcigpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYW5TdGFjayhzdGFjaywge3ByZXR0eSA9IGZhbHNlLCBiYXNlUGF0aH0gPSB7fSkge1xuXHRjb25zdCBiYXNlUGF0aFJlZ2V4ID0gYmFzZVBhdGggJiYgbmV3IFJlZ0V4cChgKGF0IHwgXFxcXCgpJHtlc2NhcGVTdHJpbmdSZWdleHAoYmFzZVBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpKX1gLCAnZycpO1xuXG5cdGlmICh0eXBlb2Ygc3RhY2sgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBzdGFjay5yZXBsYWNlKC9cXFxcL2csICcvJylcblx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0LmZpbHRlcihsaW5lID0+IHtcblx0XHRcdGNvbnN0IHBhdGhNYXRjaGVzID0gbGluZS5tYXRjaChleHRyYWN0UGF0aFJlZ2V4KTtcblx0XHRcdGlmIChwYXRoTWF0Y2hlcyA9PT0gbnVsbCB8fCAhcGF0aE1hdGNoZXNbMV0pIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG1hdGNoID0gcGF0aE1hdGNoZXNbMV07XG5cblx0XHRcdC8vIEVsZWN0cm9uXG5cdFx0XHRpZiAoXG5cdFx0XHRcdG1hdGNoLmluY2x1ZGVzKCcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9lbGVjdHJvbi5hc2FyJykgfHxcblx0XHRcdFx0bWF0Y2guaW5jbHVkZXMoJy5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2RlZmF1bHRfYXBwLmFzYXInKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICFwYXRoUmVnZXgudGVzdChtYXRjaCk7XG5cdFx0fSlcblx0XHQuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09ICcnKVxuXHRcdC5tYXAobGluZSA9PiB7XG5cdFx0XHRpZiAoYmFzZVBhdGhSZWdleCkge1xuXHRcdFx0XHRsaW5lID0gbGluZS5yZXBsYWNlKGJhc2VQYXRoUmVnZXgsICckMScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocHJldHR5KSB7XG5cdFx0XHRcdGxpbmUgPSBsaW5lLnJlcGxhY2UoZXh0cmFjdFBhdGhSZWdleCwgKG0sIHAxKSA9PiBtLnJlcGxhY2UocDEsIHAxLnJlcGxhY2UoaG9tZURpciwgJ34nKSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbGluZTtcblx0XHR9KVxuXHRcdC5qb2luKCdcXG4nKTtcbn1cbiJdLCJuYW1lcyI6WyJvcyIsImVzY2FwZVN0cmluZ1JlZ2V4cCIsImV4dHJhY3RQYXRoUmVnZXgiLCJwYXRoUmVnZXgiLCJob21lRGlyIiwiaG9tZWRpciIsInJlcGxhY2UiLCJjbGVhblN0YWNrIiwic3RhY2siLCJwcmV0dHkiLCJiYXNlUGF0aCIsImJhc2VQYXRoUmVnZXgiLCJSZWdFeHAiLCJ1bmRlZmluZWQiLCJzcGxpdCIsImZpbHRlciIsImxpbmUiLCJwYXRoTWF0Y2hlcyIsIm1hdGNoIiwiaW5jbHVkZXMiLCJ0ZXN0IiwidHJpbSIsIm1hcCIsIm0iLCJwMSIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/clean-stack/index.js\n");

/***/ })

};
;