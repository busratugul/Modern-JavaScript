const rectangle = {
  name: 'Reactangle 1',
  width: 10,
  height: 10,
  area: function () {
    //obje içindeki propertylere pbje içinde erişeceğimizde this kullanırız.
    return this.width * this.height //100
  },
}

console.log(rectangle.area())

//console.log(this) //window

/* function run() {
  console.log(this) //window
}
 */
/* 
const run = () => {
  let name = {
    first: 'busra',
    last: 'tugul',
    yazdir: () => {
      return this.first + this.last
    },
  }
  return name
}

console.log(run(name.yazdir)) */
