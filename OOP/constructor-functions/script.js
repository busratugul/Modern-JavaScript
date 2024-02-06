function Rectangle(name, width, height) {
  //constructor functionlarda ilk harf buyuk olmalı
  ;(this.name = name), (this.width = width), (this.height = height)
  this.area = function () {
    return this.width * this.height
  }
}

const rect1 = new Rectangle('Reactangle 1', 10, 10)

console.log(rect1)
console.log(rect1.name)
console.log(rect1.area())

const rect2 = new Rectangle('rect2', 30, 10)
const rect3 = new Rectangle('rect3', 50, 20)
const rect4 = new Rectangle('rect4', 10, 60)

console.log(rect2.name, rect2.area())
console.log(rect3.name, rect3.area())
console.log(rect4.name, rect4.area())

console.log(rect1.constructor) //yapıcıyı verir içinde neler var
console.log(rect2 instanceof Rectangle) //rectangledan mı oluşturuldu kontrolü yaptı
