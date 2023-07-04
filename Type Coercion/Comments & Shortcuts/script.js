

//ZORLAMA

let x;

// Coerced to a string
x = 5 + '5'; //55

x = 5 + Number('5');

// Coerced to a number
x = 5 * '5'; //25 ve number

// null is coerced to 0 as it is a `falsy` value
x = 5 + null; //5 number

x = Number(null); //0

x = Number(true); //1
x = Number(false); //0

// true is coerced to a 1
x = 5 + true;

// false is coerced to 0 (falsy)
x = 5 + false;

// Undefined is coerced to 0 (falsy)
x = 5 + undefined;

console.log(x, typeof x);