export class Player {
  constructor(name, level) {
    this.name = String(name)
    this.level = Number(level)
    
  }
  info() {
    return console.log(`${this.name} has reached Level ${this.level}!`)
  }
}
const jugador2 = new Player ("Tara", 6)

console.log(jugador2.info())