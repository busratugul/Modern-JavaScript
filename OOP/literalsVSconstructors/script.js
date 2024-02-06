const strLit = 'Hello'
const strObj = new String('Hello')

console.log(strLit, typeof strLit)
console.log(strObj, typeof strObj)

//BOXING
console.log(strLit.toUpperCase())
console.log(strObj[0].toUpperCase())

//UNBOXING
console.log(strObj.valueOf(), typeof strObj.valueOf())

console.log(strObj.valueOf().toUpperCase())

console.log(strLit.constructor) 
console.log(strObj.constructor) 
//kurucu nesneyi yani String objesini verir

console.log(strLit instanceof String) //false
console.log(strObj instanceof String) //true

const funcLit = function(x) {
    return x * x
}
console.log(funcLit(5))
console.log(funcLit, typeof funcLit)

const funcObj = new Function("x", "return x * x")

console.log(funcObj(3))

const obj1 = {}
const obj2 = new Object()

console.log(obj1, typeof obj1)
console.log(obj2, typeof obj2)