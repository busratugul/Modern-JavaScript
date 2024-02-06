function Rectangle(name, width, height) {
  ;(this.name = name), (this.width = width), (this.height = height)
}

const rect1 = new Rectangle('Reactangle 1', 10, 10)

console.log(rect1.toString())
console.log(Object.getPrototypeOf(rect1))

//add methods to the prototype chain

Rectangle.prototype.area = function () {
  return this.width * this.height
}

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height)
}

Rectangle.prototype.isSquare = function () {
  return this.width === this.height
}

Rectangle.prototype.changeName = function (newName) {
  return this.name = newName
}



console.log(rect1.area())
console.log(rect1.perimeter())
console.log(rect1.isSquare())
rect1.changeName("RECT")
console.log(rect1)