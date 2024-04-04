/* const message = require('./utils')

console.log(message); */

const Person = require('./Person')

const { capitalizeWords, makeMoney } = require('./utils')

console.log(capitalizeWords('hello world'))
console.log(makeMoney(1000))

const person1 = new Person('John', 30)
person1.greet()