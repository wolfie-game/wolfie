export default class Egg {
  context: any
  width: number
  height: number
  constructor(ctx) {
    this.width = 10
    this.height = 15
    this.context = ctx
  }
  run() {
    this.context.fillStyle = '#ffcc99'
    this.context.beginPath()
    this.context.arc(75, 75, 20, 0, Math.PI * 2, true)
    this.context.fill()
  }
}
