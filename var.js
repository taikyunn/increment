function test() {
  var x = 1;
  var x = 2;
  console.log(x);
}

// var:{}の中で変数宣言をしても最初に定義した変数xは上書きされる
function print() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  // 2
  }
  console.log(x);
// 2
}

// const:{}の中で変数宣言をしても最初に定義した変数xは上書きされない
function print() {
  const x = 1;
  if (true) {
    const x = 2;
    console.log(x);
  // 2
  }
  console.log(x);
  // 1
}


// 数値の区切り文字
// 可読性向上のためアンダースコアで区切ってかける。何桁ごとに区切るかは自由
100_000_000 // 1億

// 数値リテラルのプロパティ
// JavaScriptの数値リテラルのプロパティを直接参照する場合、小数点のドットとプロパティのドットの区別ができないためエラ-になる

// 5.toString() // エラー

//対策として以下の2つの方法がある
5..toString()
(5).toString()


// 特殊な数値NaN
// NaNは非数を表す変数のこと。
const price = parseInt("百円");
console.log(price);
// →NaN
