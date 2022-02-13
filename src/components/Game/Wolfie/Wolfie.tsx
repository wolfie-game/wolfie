const black = 'black'
const grey = '#9e9e9e'
const dark = '#343230'
const lightGrey = '#b8b8b8'

interface Cart {
  x: string
  y: string
}

export class Wolfie {
  context: any
  x: number
  y: number
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
  cartLocation: Cart
  isRight: boolean
  constructor(ctx, height, width) {
    this.context = ctx

    this.x = 0
    this.y = 0

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

    this.cartLocation = {x: 'right', y: 'down'}

    this.isRight = true
  }

  init(x, y) {
    this.x = x
    this.y = y
    this.redraw()
  }

  turn(wolfiePosition = 'right') {
    if (wolfiePosition == 'right') {
      this.isRight = true
    } else {
      this.isRight = false
    }
  }

  redraw() {
    if (this.isRight) {
      this.turnRight(this.x, this.y)
    } else {
      this.turnLeft(this.x, this.y)
    }
  }

  turnLeft(x, y) {
    this.isRight = false

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

    // cart
    const positionX = this.x - 155
    const positionY = this.cartLocation.y == 'up' ? this.y - 70 : this.y + 150

    this.context.beginPath()

    this.context.lineWidth = 7
    this.context.strokeStyle = '#ff4e25'
    this.context.fillStyle = 'orange'
    this.context.arc(positionX, positionY, 40, 0, Math.PI, false)
    this.context.stroke()
    this.context.fill()
  }

  turnRight(x, y) {
    this.isRight = true

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

    // cart
    const positionX = this.x + 220
    const positionY = this.cartLocation.y == 'up' ? this.y - 70 : this.y + 150

    this.context.beginPath()

    this.context.lineWidth = 7
    this.context.strokeStyle = '#ff4e25'
    this.context.fillStyle = 'orange'
    this.context.arc(positionX, positionY, 40, 0, Math.PI, false)
    this.context.stroke()
    this.context.fill()
  }

  getCart() {
    return this.cartLocation
  }
  setCart(cart: Cart) {
    this.cartLocation = cart
  }
}
