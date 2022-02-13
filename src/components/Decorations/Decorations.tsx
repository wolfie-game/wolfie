const dark = '#343230'

export default class Decorations {
  canvasHeight!: number
  canvasWidth!: number
  context: any
  shelfWidth: number
  stepY: number
  currenY: number
  constructor(ctx, canvasHeight, canvasWidth) {
    this.context = ctx
    this.shelfWidth = 100
    this.stepY = canvasHeight / 3
    this.currenY = 0
    this.canvasHeight = canvasHeight
    this.canvasWidth = canvasWidth

    this.redraw()
  }
  redraw() {
    // background
    this.context.fillStyle = dark
    this.context.fillRect(0, 0, 999, 661)
    //shelfs
    for (let i = 0; i < 2; i++) {
      this.context.strokeStyle = 'orange'
      this.context.lineWidth = 7
      this.context.beginPath()
      this.context.moveTo(0, this.currenY + (i + 1) * this.stepY) //start point
      this.context.lineTo(this.shelfWidth, this.currenY + (i + 1) * this.stepY)
      this.context.lineTo(
        this.shelfWidth + 60,
        this.currenY + (i + 1) * this.stepY + 60,
      )
      this.context.lineTo(
        2 * this.shelfWidth + 60,
        this.currenY + (i + 1) * this.stepY + 60,
      )

      this.context.stroke()
    }

    for (let i = 0; i < 2; i++) {
      this.context.strokeStyle = 'orange'
      this.context.lineWidth = 7
      this.context.beginPath()
      this.context.moveTo(this.canvasWidth, this.currenY + (i + 1) * this.stepY) //start point
      this.context.lineTo(
        this.canvasWidth - this.shelfWidth,
        this.currenY + (i + 1) * this.stepY,
      )
      this.context.lineTo(
        this.canvasWidth - this.shelfWidth - 60,
        this.currenY + (i + 1) * this.stepY + 60,
      )
      this.context.lineTo(
        this.canvasWidth - 2 * this.shelfWidth - 60,
        this.currenY + (i + 1) * this.stepY + 60,
      )

      this.context.stroke()
    }
  }
}
