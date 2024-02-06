function Shape(name) {
  this.name = name
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`)
}

function Rectangle(name, width, height) {
  Shape.call(this, name)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Shape.prototype)

function Circle(name, radius) {
  Shape.call(this, name)

  this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype)

//Set prototype constructors
Rectangle.prototype.consructor = Rectangle
Circle.prototype.consructor = Circle

const rect = new Rectangle('rectangle', 20, 20)
//console.log(rect)
const circle = new Circle('circle', 30)
//console.log(circle)

rect.logName()
circle.logName()

console.log(rect.consructor)
console.log(circle.consructor)
