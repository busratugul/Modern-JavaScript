function Reactangle(name, width, height) {
  ;(this.name = name),
    (this.width = width),
    (this.height = height),
    (this.area = function () {
      return this.width * this.height
    })
}

const rect1 = new Reactangle('Reactanle 1', 20, 30)
const rect2 = new Reactangle('Reactanle 2', 20, 30)

console.log(rect1.name, rect2.width)
console.log(rect1['width'])

//Add property
rect1.color = 'red'
console.log(rect1.color)

//Add Function property
rect2.perimeter = () => 2 * (rect2.width + rect2.height)

console.log(rect2.perimeter())

//Delete property
console.log(rect2)

delete rect2.perimeter

console.log(rect2)

//Check for property
console.log(rect2.hasOwnProperty('color'))
console.log(rect1.hasOwnProperty('color'))

//Get Keys
console.log(Object.keys(rect1)[1])

//Get Values
console.log(Object.values(rect2))

//Get Entries
console.log(Object.entries(rect1))
for (let [key, value] of Object.entries(rect1)) {
    if(typeof value !== "function")
    console.log(`${key} - ${ value}`)
}
