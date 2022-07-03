const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin([
      "index.html",
      "perft.html",
      "worker.js",
      "simd_worker.js",
      { from: "pkg/yasai_wasm.js", to: "pkg" },
      { from: "pkg/yasai_wasm_bg.wasm", to: "pkg" },
      { from: "pkg-simd/yasai_wasm.js", to: "pkg-simd" },
      { from: "pkg-simd/yasai_wasm_bg.wasm", to: "pkg-simd" },
    ]),
  ],
};
