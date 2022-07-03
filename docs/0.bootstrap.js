(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const worker = new Worker(\"worker.js\");\nconst run = async (depth) => {\n  return new Promise((resolve) => {\n    worker.addEventListener(\n      \"message\",\n      (ev) => {\n        resolve(ev.data);\n      },\n      { once: true }\n    );\n    worker.postMessage(depth);\n  });\n};\n\nconst simd_worker = new Worker(\"simd_worker.js\");\nconst run_simd = async (depth) => {\n  return new Promise((resolve) => {\n    simd_worker.addEventListener(\n      \"message\",\n      (ev) => {\n        resolve(ev.data);\n      },\n      { once: true }\n    );\n    simd_worker.postMessage(depth);\n  });\n};\n\ndocument.getElementById(\"form\").addEventListener(\"submit\", async (e) => {\n  e.preventDefault();\n  const depth = Number(document.getElementById(\"depth\").value);\n  const simd = document.getElementById(\"simd\");\n  const results = await (simd.checked ? run_simd(depth) : run(depth));\n  document.getElementById(\n    \"output\"\n  ).innerText = `Searched ${results.result} nodes in ${results.elapsed} ms`;\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);