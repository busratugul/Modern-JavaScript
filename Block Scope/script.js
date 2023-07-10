const x = 100;

// An If statement is a block yani x'e if içinden erişilir globaldır ancak y ye if dışından erişilemez çünkü if block scopedur.
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);

// var IS function scoped
function run() {
  var d = 100;
  console.log(d);
}

run();

//var if gibi loopların içinde kullanıldığından global scope gibi dışardan erişilir.Ancak function içinde kullanıldığında dışardan erişilmez.Var global olarak kullanıldığında winfow objesine eklenir. const ve let eklenmez.

// console.log(d);


const foo = 1;
var bar = 2; // Put on the window object