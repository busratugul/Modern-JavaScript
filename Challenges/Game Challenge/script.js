function Player(name) {
  ;(this.name = name), (this.lvl = 1), (this.points = 0)
}

Player.prototype.gainXp = function (xp) {
  this.points += xp

  if (this.points >= 10) {
    this.lvl++
    this.points -= 10
  }
}

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points}`
}

let player1 = new Player('Bob')
let player2 = new Player('Alice')

player1.gainXp(4)
player2.gainXp(7)
player1.gainXp(5)
player2.gainXp(1)
player1.gainXp(9)
player2.gainXp(8)
player1.gainXp(4)
player2.gainXp(6)
player1.gainXp(8)
player2.gainXp(3)
player1.gainXp(7)
player2.gainXp(7)

console.log(player1.describe())
console.log(player2.describe())
