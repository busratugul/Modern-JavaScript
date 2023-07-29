// 1. Arithmetic Operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5; //kalan

// Concatenation - Birleştirme

x = 'Hello' + ' ' + 'World';

// Exponent- Üssünü Almak 2. değer kuvvet

x = 2 ** 3;

// Increment - Arttırma
x = 1;
// x = x + 1;
x++;

// Decrement - Azaltma
// x = x - 1;
x--;

// 2. Assignment Operators

x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators

// Equal to (tust the value, not the type)
x = 2 == '2'; //true

// Equal to (Type and value)
x = 2 === '2'; //false

// Not equal to (Just the value, not the type)
x = 2 != '2'; //false

// Not equal to (Type and value)
x = 2 !== 2; //false

// Greater than and less than
x = 10 > 5; 
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);