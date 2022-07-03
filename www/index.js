const worker = new Worker("worker.js");
const run = async (depth) => {
  return new Promise((resolve) => {
    worker.addEventListener(
      "message",
      (ev) => {
        resolve(ev.data);
      },
      { once: true }
    );
    worker.postMessage(depth);
  });
};

const simd_worker = new Worker("simd_worker.js");
const run_simd = async (depth) => {
  return new Promise((resolve) => {
    simd_worker.addEventListener(
      "message",
      (ev) => {
        resolve(ev.data);
      },
      { once: true }
    );
    simd_worker.postMessage(depth);
  });
};

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const depth = Number(document.getElementById("depth").value);
  const simd = document.getElementById("simd");
  const results = await (simd.checked ? run_simd(depth) : run(depth));
  document.getElementById(
    "output"
  ).innerText = `Searched ${results.result} nodes in ${results.elapsed} ms`;
});
