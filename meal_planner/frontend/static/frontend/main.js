/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./meal_planner/frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./meal_planner/frontend/src/components/App.js":
/*!*****************************************************!*\
  !*** ./meal_planner/frontend/src/components/App.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\meal_planner\\\\frontend\\\\src\\\\components\\\\App.js: Unexpected token (41:6)\\n\\n\\u001b[0m \\u001b[90m 39 | \\u001b[39m  render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 41 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mProvider\\u001b[39m store\\u001b[33m=\\u001b[39m{store}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 42 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mAlertProvider\\u001b[39m template\\u001b[33m=\\u001b[39m{\\u001b[33mAlertTemplate\\u001b[39m} {\\u001b[33m...\\u001b[39malertOptions}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 43 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 44 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mFragment\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser._raise (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:742:17)\\n    at Parser.raiseWithData (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at Parser.raise (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:729:17)\\n    at Parser.unexpected (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8779:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10074:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9624:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9604:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9474:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9447:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9402:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10215:28)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9969:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9624:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9604:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9474:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9447:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9402:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9354:23)\\n    at Parser.parseReturnStatement (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11471:28)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11152:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11104:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11679:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11665:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11649:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10656:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10639:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10601:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12104:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12021:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\Emmy Ni\\\\Documents\\\\GitHub\\\\meal_planner\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11963:10)\");\n\n//# sourceURL=webpack:///./meal_planner/frontend/src/components/App.js?");

/***/ }),

/***/ "./meal_planner/frontend/src/index.js":
/*!********************************************!*\
  !*** ./meal_planner/frontend/src/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./meal_planner/frontend/src/components/App.js\");\n\n\n//# sourceURL=webpack:///./meal_planner/frontend/src/index.js?");

/***/ })

/******/ });