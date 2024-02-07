//1 - CLASSES

/* class Rectangle {
  constructor(name, width, height) {
    this.name = name
    this.width = width
    this.height = height
  }
  //classların içinde function keywordu kullanılmaz
  area() {
    return this.height * this.width
  }

  perimeter() {
    return 2 * (this.width + this.height)
  }

  isSquare() {
    return this.width === this.height
  }

  logArea() {
    console.log("Rectangle Area:" + this.area())
  }
}

const square = new Rectangle('Square', 20, 20)
const square2 = new Rectangle('Square2', 20, 20)
console.log(square)
console.log(square.area())
console.log(square.perimeter())
console.log(square.isSquare())
square.logArea()

square.color = "blue"
console.log(square)


console.log(Object.getPrototypeOf(square)) */

//2 - INHERITANCE

/* //Parent class
class Shape {
  constructor(name) {
    this.name = name
  }

  logName() {
    console.log('Shape Name : ' + this.name)
  }
}

//Sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name) //parent classı cağırıyoruz
    this.width = width
    this.height = height
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name) //parent classı cağırıyoruz
    this.radius = radius
  }

  logName() {
    //anaclass üzerine yazdık
    console.log('Circle Name : ' + this.name)
  }
}

const rect = new Rectangle('rect1', 20, 20)
const cir = new Circle('cir 1', 30)
console.log(rect)
rect.logName()
cir.logName()
console.log(rect instanceof Rectangle)
console.log(cir instanceof Shape)
console.log(rect instanceof Circle) */

//3- STATIC METHODS

/* class Rectangle {
  constructor(name, width, height) {
    this.name = name
    this.width = width
    this.height = height
  }
  area() {
    return this.height * this.width
  }
  static getClass() {
    return "Rectangle"
  }
}
const rect = new Rectangle('RECT', 10, 20)
console.log(rect.area())
console.log(Rectangle.getClass()) */

//4- bind() & this
/* const btn = document.createElement('button')
btn.innerText = 'Click'
document.querySelector('body').append(btn)

class App {
  constructor() {
    this.serverName = 'localhost'
    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this))
  }
  getServerName() {
    console.log(this.serverName)
  }
}

const app = new App()
//app.getServerName()
 */

// 5- GETTERS & SETTERS with classes

class Person {
  constructor(firstname, lastname) {
    this._firstname = firstname
    this._lastname = lastname
  }
  get firstname() {
    /* return this._firstname.charAt(0).toUpperCase() + this._firstname.slice(1) */
    return this.capitalizeFirst(this._firstname)
  }
  set firstname(value) {
    this._firstname = this.capitalizeFirst(value)
  }

  get lastname() {
    /* return this._firstname.charAt(0).toUpperCase() + this._firstname.slice(1) */
    return this.capitalizeFirst(this._lastname)
  }
  set lastname(value) {
    this._lastname = this.capitalizeFirst(value)
  }
  get fullName() {
    return `${this.firstname} ${this.lastname}`
  }
  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

const person1 = new Person('john', 'doe')
console.log(person1.firstname)

person1.firstname = 'joe'
person1.lastname = 'doe'
console.log(person1)
console.log(person1)
console.log(person1.fullName)


