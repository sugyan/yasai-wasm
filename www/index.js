import { perft } from "yasai-wasm";

const run = (depth) => {
    let now = performance.now();
    let result = perft(depth);
    let elapsed = performance.now() - now;
    document.getElementById("output").innerText = `Searched ${result} nodes in ${elapsed.toFixed(3)} ms`;
}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const depth = Number(document.getElementById("depth").value);
    run(depth)
}, false)
