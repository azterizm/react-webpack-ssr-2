/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nvar react_1 = __webpack_require__(/*! react */ \"react\");\n__webpack_require__(/*! ./App.css */ \"./src/components/App.css\");\nvar Counter_1 = __webpack_require__(/*! ./Counter */ \"./src/components/Counter.tsx\");\nvar App = function (_a) {\n    var initialText = _a.initialText;\n    var _b = react_1.useState(initialText), txt = _b[0], setTxt = _b[1];\n    var handleClick = function () { return setTxt('changed in the browser!'); };\n    return (jsx_runtime_1.jsxs(\"div\", __assign({ className: 'container' }, { children: [jsx_runtime_1.jsx(\"p\", { children: txt }, void 0),\n            jsx_runtime_1.jsx(\"button\", __assign({ onClick: handleClick }, { children: \"change text!\" }), void 0),\n            jsx_runtime_1.jsx(Counter_1.Counter, {}, void 0)] }), void 0));\n};\nexports.default = App;\n\n\n//# sourceURL=webpack://react-wepback-ssr-2/./src/components/App.tsx?");

/***/ }),

/***/ "./src/components/Counter.tsx":
/*!************************************!*\
  !*** ./src/components/Counter.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Counter = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nvar react_1 = __webpack_require__(/*! react */ \"react\");\n__webpack_require__(/*! ./Counter.css */ \"./src/components/Counter.css\");\nvar Counter = function () {\n    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];\n    return (jsx_runtime_1.jsxs(\"div\", __assign({ className: \"counter\" }, { children: [jsx_runtime_1.jsx(\"h1\", { children: count }, void 0),\n            jsx_runtime_1.jsx(\"button\", __assign({ onClick: function () { return setCount(function (e) { return e + 1; }); } }, { children: \"Add\" }), void 0)] }), void 0));\n};\nexports.Counter = Counter;\n\n\n//# sourceURL=webpack://react-wepback-ssr-2/./src/components/Counter.tsx?");

/***/ }),

/***/ "./src/components/Html.tsx":
/*!*********************************!*\
  !*** ./src/components/Html.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Html = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nvar Html = function (_a) {\n    var children = _a.children, scripts = _a.scripts, initialState = _a.initialState;\n    return (jsx_runtime_1.jsxs(\"html\", __assign({ lang: \"en\" }, { children: [jsx_runtime_1.jsxs(\"head\", { children: [jsx_runtime_1.jsx(\"meta\", { charSet: \"UTF-8\" }, void 0),\n                    jsx_runtime_1.jsx(\"meta\", { name: \"viewport\", content: \"width=device-width, initial-scale=1.0\" }, void 0),\n                    jsx_runtime_1.jsx(\"title\", { children: \"SSR App\" }, void 0)] }, void 0),\n            jsx_runtime_1.jsxs(\"body\", { children: [jsx_runtime_1.jsx(\"div\", { id: \"app\", dangerouslySetInnerHTML: { __html: children } }, void 0),\n                    initialState && (jsx_runtime_1.jsx(\"script\", { dangerouslySetInnerHTML: { __html: \"window.APP_STATE=\" + JSON.stringify(initialState) } }, void 0)),\n                    scripts.map(function (item, i) { return jsx_runtime_1.jsx(\"script\", { src: item }, i); })] }, void 0)] }), void 0));\n};\nexports.Html = Html;\n\n\n//# sourceURL=webpack://react-wepback-ssr-2/./src/components/Html.tsx?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar App_1 = __importDefault(__webpack_require__(/*! ./components/App */ \"./src/components/App.tsx\"));\nvar Html_1 = __webpack_require__(/*! ./components/Html */ \"./src/components/Html.tsx\");\nvar app = express_1.default();\napp.use(express_1.default.static(path_1.default.join(__dirname)));\napp.get('*', function (_, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var scripts, initialState, appMarkup, html;\n    return __generator(this, function (_a) {\n        scripts = ['vendor.js', 'main.js'];\n        initialState = { initialText: 'rendered on the server!' };\n        appMarkup = server_1.renderToString(jsx_runtime_1.jsx(App_1.default, __assign({}, initialState), void 0));\n        html = server_1.renderToStaticMarkup(jsx_runtime_1.jsx(Html_1.Html, { children: appMarkup, scripts: scripts, initialState: initialState }, void 0));\n        res.send(\"<!DOCTYPE html> \" + html);\n        return [2];\n    });\n}); });\napp.listen(5000, function () { return console.log('Server runnin 5000'); });\n\n\n//# sourceURL=webpack://react-wepback-ssr-2/./src/server.tsx?");

/***/ }),

/***/ "./src/components/App.css":
/*!********************************!*\
  !*** ./src/components/App.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-wepback-ssr-2/./src/components/App.css?");

/***/ }),

/***/ "./src/components/Counter.css":
/*!************************************!*\
  !*** ./src/components/Counter.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-wepback-ssr-2/./src/components/Counter.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/server.tsx");
/******/ })()
;