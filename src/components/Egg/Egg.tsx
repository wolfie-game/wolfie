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
    // egg top
    this.context.save()
    this.context.fillStyle = '#ffcc99'
    this.context.scale(1, 1.75);
    this.context.beginPath()
    this.context.arc(75, 43, 20, 0, Math.PI, true);
    this.context.fill()
    this.context.restore()
    // egg bottom
    this.context.save()
    this.context.fillStyle = '#ffcc99'
    this.context.beginPath()
    this.context.arc(75, 75, 20, 0, Math.PI)
    this.context.fill()
    this.context.restore()

  }
}
