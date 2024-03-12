//Sealing - Prevents properties from being added or removed. Can still be changed //mühürlendi

//Freezing - Prevents properties from being added , removed or changed //donduruldu

const rectObj = {
  name: 'Reactangle 1 ',
  width: 10,
  height: 10,
}
Object.seal(rectObj) //

let descriptors = Object.getOwnPropertyDescriptors(rectObj)

rectObj.color = 'red' //eklenmez
delete rectObj.name //silinmez
rectObj.width = 20 //değişir
console.log(descriptors)

const circleObj = {
  name: 'Circle 1',
  radius: 30,
}

Object.freeze(circleObj)
descriptors = Object.getOwnPropertyDescriptors(circleObj)
circleObj.color = 'blue' //eklenemez
delete circleObj.name //silinemez
circleObj.name = 'Circle 2' //değiştirilemez
console.log(descriptors)

console.log('RectObj is sealed?', Object.isSealed(rectObj))
console.log('RectObj is frozen?', Object.isFrozen(rectObj))
console.log('CircleObj is sealed?', Object.isSealed(circleObj))
console.log('CircleObj is frozen?', Object.isFrozen(circleObj))
