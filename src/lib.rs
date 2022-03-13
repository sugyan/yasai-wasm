#![allow(clippy::unused_unit)]
use wasm_bindgen::prelude::*;
use yasai::Position;

#[wasm_bindgen]
pub fn perft(depth: usize) -> usize {
    let mut pos = Position::default();
    dfs(&mut pos, depth)
}

fn dfs(pos: &mut Position, depth: usize) -> usize {
    let mut total = 0;
    for m in pos.legal_moves() {
        let count = if depth <= 1 {
            1
        } else {
            pos.do_move(m);
            let ret = if depth == 2 {
                pos.legal_moves().len()
            } else {
                dfs(pos, depth - 1)
            };
            pos.undo_move(m);
            ret
        };
        total += count;
    }
    total
}
