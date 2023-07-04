
const myString = "developer";


let myNewString;
//Solution 1
myNewString = myString.charAt(0).toUpperCase()+ myString.substring(1);
//Solution 2
myNewString = myString[0].toUpperCase() + myString.substring(1);
//Solution 3
myNewString = `${myString[0].toUpperCase} ${myString.substring(1)}`;
//Solution 4
myNewString = `${myString[0].toUpperCase} ${myString.slice(1)}`;







console.log(myNewString)