#!/bin/bash
set -eux

wasm-pack build --out-dir www/pkg --target no-modules --mode no-install
wasm-pack build --out-dir www/pkg-simd --target no-modules --mode no-install --features yasai/simd
