// [Configurable] - if "true", the property can be deleted and there attributes can be modified, otherwise not
// [Enumarable] - if "true", the property will be returned in a "for...in" loop, otherwise not
//[Writable] - if "true", the value of the property can be changed, otherwise not
//[Value] - the value of the property
//default olarak hepsi truedir

Math.PI = 4
console.log(Math.PI)

let descriptor = Object.getOwnPropertyDescriptory(Math, 'PI')
console.log(descriptor)

const resctObj = {
  name: 'rectangle',
  width: 10,
  height: 10,
}

Object.defineProperty(resctObj, 'name', {
  writable: false,
  configurable: false,
  enumerable: false,
})

descriptor = Object.getOwnPropertyDescriptory(resctObj, 'name')
console.log(descriptor)
resctObj.name = 'new name'
delete resctObj.name
delete resctObj.width //silindi cunku hala configurable true

console.log(resctObj.name)
console.log(resctObj)

for (let [key, value] of Object.entries(resctObj)) {
  console.log(`${key}: ${value}`)
}

console.log(Object.getOwnPropertyDescriptors(resctObj)) //tum ozelliklere erisim
