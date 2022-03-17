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
