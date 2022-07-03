importScripts("./pkg-simd/yasai_wasm.js");
wasm_bindgen("./pkg-simd/yasai_wasm_bg.wasm").then(() => {
  this.addEventListener("message", (ev) => {
    const now = performance.now();
    const result = wasm_bindgen.perft(ev.data);
    const elapsed = (performance.now() - now).toFixed(3);
    this.postMessage({ result, elapsed });
  });
});
