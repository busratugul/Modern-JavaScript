//&& ikisi de doğru olmalı iki değişkenden ilk falsyi döndürür ya da sonu
//|| bir doğru yeter iki değişkenden ilk truthlyi döndürür ya da sonu

console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); // Only one has to be true

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

//?? - returns the right side oprtand when the left is  null or undefined- soldaki değer null veya undefined olursa HER ZAMAN sağdaki değeri döndürür.Olmazsa doğru yanlış aramaz solu döndürür.

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);

