// let vs const

let x = 1;
x = 2 // letは再代入可能

// letは初期値なしで定義できる。
let y; // 初期値なし
y = 1 // 1を代入

const z = 2;

// constは変数への再代入が禁止されている
// const r = 2;
// r = 1;


// まとめ
// const=再代入禁止,letはできる
// constの方が安全なコードの作成ができる
