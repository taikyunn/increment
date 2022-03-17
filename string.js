// JavaScriptではダブルクォートでもシングルクォートでも全く同じ文字列型になる。
// ``（バッククォート）でも同じ

// バッククォートで囲んだ文字列はテンプレートリテラルといい、式の挿入ができる。
// 式は${式}の形。計算もできる
const count = 10;
console.log(`現在、${count}名が見ています。`);
// 現在、10名が見ています。


// ベースはダブルクォートを使用
// 文字列に"""がある場合は''を使う。
// 文字列展開には``を使う
