const black = 'black'
const grey = '#9e9e9e'
const dark = '#343230'
const lightGrey = '#b8b8b8'

export class Wolfie {
  context: any
  bodyWidth: number
  bodyHeight: number
  earHeight: number
  earWidth: number
  earSpaceBetween: number
  noseWidth: number
  noseHeight: number
  eyeWidth: number
  eyeHeight: number
  legWidth: number
  legHeight: number
  legSpaseBeetween: number
  height: number
  width: number
  isRight: boolean
  constructor(ctx, height, width) {
    this.context = ctx

    this.height = height
    this.width = width

    this.bodyWidth = 70
    this.bodyHeight = 200

    this.earHeight = 30
    this.earWidth = 30
    this.earSpaceBetween = 10

    this.noseWidth = 50
    this.noseHeight = 30

    this.eyeWidth = 10
    this.eyeHeight = 10

    this.legWidth = 20
    this.legHeight = 60
    this.legSpaseBeetween = 50

    this.isRight = true
  }

  init(x, y) {
    this.turnRight(x, y)
  }

  turnLeft(x, y) {
    this.isRight = false
    // background
    this.context.fillStyle = dark
    this.context.fillRect(0, 0, 999, 661)

    // body
    this.context.fillStyle = lightGrey
    this.context.fillRect(x, y, this.bodyWidth, this.bodyHeight)

    // nose
    this.context.fillStyle = grey
    this.context.fillRect(x - 40, y + 30, this.noseWidth, this.noseHeight)
    this.context.fillStyle = black
    this.context.fillRect(x - 40, y + 30, 10, 10)

    // eyes
    this.context.fillStyle = black
    this.context.fillRect(x + 20, y + 20, this.eyeWidth, this.eyeHeight)
    this.context.fillStyle = black
    this.context.fillRect(x + 40, y + 20, this.eyeWidth, this.eyeHeight)

    // legs
    this.context.fillStyle = grey
    this.context.fillRect(x, y + 200, this.legWidth, this.legHeight)
    this.context.fillStyle = grey
    this.context.fillRect(x + 50, y + 200, this.legWidth, this.legHeight)

    // ear 1
    this.context.beginPath()
    this.context.moveTo(x, y - 30)
    this.context.lineTo(x, y)
    this.context.lineTo(x + 30, y)
    this.context.fillStyle = grey
    this.context.fill()

    // ear 2
    this.context.beginPath()
    this.context.moveTo(x + 70, y - 30)
    this.context.lineTo(x + 40, y)
    this.context.lineTo(x + 70, y)
    this.context.fillStyle = grey
    this.context.fill()
  }

  turnRight(x, y) {
    this.isRight = true
    // background
    this.context.fillStyle = dark
    this.context.fillRect(0, 0, 999, 661)

    // body
    this.context.fillStyle = lightGrey
    this.context.fillRect(x, y, this.bodyWidth, this.bodyHeight)

    // nose
    this.context.fillStyle = grey
    this.context.fillRect(x + 60, y + 30, this.noseWidth, this.noseHeight)
    this.context.fillStyle = black
    this.context.fillRect(x + 100, y + 30, 10, 10)

    // eyes
    this.context.fillStyle = black
    this.context.fillRect(x + 20, y + 20, this.eyeWidth, this.eyeHeight)
    this.context.fillStyle = black
    this.context.fillRect(x + 40, y + 20, this.eyeWidth, this.eyeHeight)

    // legs
    this.context.fillStyle = grey
    this.context.fillRect(x, y + 200, this.legWidth, this.legHeight)
    this.context.fillStyle = grey
    this.context.fillRect(x + 50, y + 200, this.legWidth, this.legHeight)

    // ear 1
    this.context.beginPath()
    this.context.moveTo(x, y - 30)
    this.context.lineTo(x, y)
    this.context.lineTo(x + 30, y)
    this.context.fillStyle = grey
    this.context.fill()

    // ear 2
    this.context.beginPath()
    this.context.moveTo(x + 70, y - 30)
    this.context.lineTo(x + 40, y)
    this.context.lineTo(x + 70, y)
    this.context.fillStyle = grey
    this.context.fill()
  }

  goUp(x, y) {
    if (this.isRight) {
      this.turnRight(x, y)
    } else {
      this.turnLeft(x, y)
    }
  }

  goDown(x, y) {
    if (this.isRight) {
      this.turnRight(x, y)
    } else {
      this.turnLeft(x, y)
    }
  }
}
