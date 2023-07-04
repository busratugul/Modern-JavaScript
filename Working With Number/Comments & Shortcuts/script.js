let x;

const num = new Number(5); //object


num.length() //undefined
// toString() - returns a string representation of the number
x = num.toString(); 
// To get the length
x = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals-- ondalık sayı yapar ancak string olarak geri döner.Ve yuvarlar
x = num.toFixed(2); // 2.00 

// toPrecision() - returns a number with the specified length Kaç basamaklı istiyorsak ona göre sayıyı bize verir.
x = num.toPrecision(3);

// toExponential() -  convert a number to exponential notation and return its value as a string. 
x = num.toExponential(2);

// toLocaleString() - returns a string representation of the number, using the current locale. 
x = num.toLocaleString('en-US');

// valueOf - Get value
x = num.valueOf();

// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);