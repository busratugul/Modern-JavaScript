// ||= assigns the right side value only if the left is a falsy value.

let a = null;

// if (!a) {
//   a = 10;
// }

// a = a || 10; //a yanlışsa sağ değeri ata || doğru olanı verirdi. Yani falsy bir değere atanırsa a o zaman sağ taraf çalışacak.

a ||= 10; //kısa yol budur.

console.log(a);



// &&= assigns the right side value only if the left is a truthy value. //Soldaki değer doğruysa sağdaki değer atanır.

let b = 10;

if (b) {
  b = 20;
}

b = b && 20;

b &&= 20; //kısası

console.log(b);

// ??= assigns the right side value only if the left is null or undefined.//Sol null ya da undefined ise sağdaki değer atanır.

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);
