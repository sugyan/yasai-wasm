(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/yasai_wasm.js":
/*!****************************!*\
  !*** ../pkg/yasai_wasm.js ***!
  \****************************/
/*! exports provided: perft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _yasai_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yasai_wasm_bg.wasm */ \"../pkg/yasai_wasm_bg.wasm\");\n/* harmony import */ var _yasai_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yasai_wasm_bg.js */ \"../pkg/yasai_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"perft\", function() { return _yasai_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"perft\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/yasai_wasm.js?");

/***/ }),

/***/ "../pkg/yasai_wasm_bg.js":
/*!*******************************!*\
  !*** ../pkg/yasai_wasm_bg.js ***!
  \*******************************/
/*! exports provided: perft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"perft\", function() { return perft; });\n/* harmony import */ var _yasai_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yasai_wasm_bg.wasm */ \"../pkg/yasai_wasm_bg.wasm\");\n\n\n/**\n* @param {number} depth\n* @returns {number}\n*/\nfunction perft(depth) {\n    var ret = _yasai_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"perft\"](depth);\n    return ret >>> 0;\n}\n\n\n\n//# sourceURL=webpack:///../pkg/yasai_wasm_bg.js?");

/***/ }),

/***/ "../pkg/yasai_wasm_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/yasai_wasm_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, perft */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/yasai_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var yasai_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yasai-wasm */ \"../pkg/yasai_wasm.js\");\n\n\nconst run = (depth) => {\n    let now = performance.now();\n    let result = Object(yasai_wasm__WEBPACK_IMPORTED_MODULE_0__[\"perft\"])(depth);\n    let elapsed = performance.now() - now;\n    document.getElementById(\"output\").innerText = `Searched ${result} nodes in ${elapsed.toFixed(3)} ms`;\n}\n\ndocument.getElementById(\"form\").addEventListener(\"submit\", (e) => {\n    e.preventDefault()\n    const depth = Number(document.getElementById(\"depth\").value);\n    run(depth)\n}, false)\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);