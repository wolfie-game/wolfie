interface EggPosition {
  x: number
  y: number
  offsetX: number
  offsetY: number
  direction: Direction
}

interface Direction {
  x: string
  y: string
}

interface Game {
  lives: number
  score: number
  cart: Direction
}

export default class Egg {
  context: any
  width: number
  height: number
  eggsPerLevel: number
  eggNumber: number
  canvasHeiht: number
  canvasWidth: number
  lavelEggs: any
  game: Game
  constructor(ctx, canvasHeiht, canvasWidth) {
    this.width = 10
    this.height = 15
    this.eggsPerLevel = 10
    this.eggNumber = 1
    this.context = ctx
    this.canvasWidth = canvasWidth
    this.canvasHeiht = canvasHeiht
    this.lavelEggs = this.createLavelEggs()
    this.game = {score: 0, lives: 0, cart: {x: 'right', y: 'down'}}
  }
  createLavelEggs(lavel = 1) {
    const eggs = new Array(lavel)
    const positionLeftX = 20
    const positionRightX = this.canvasWidth - 50
    const positionTopY = 105
    const positionDownY = 230
    for (let i = 0; i < this.eggsPerLevel * lavel; i++) {
      const direction = {
        x: Math.round(Math.random() * 100) < 50 ? 'left' : 'right',
        y: Math.round(Math.random() * 100) < 50 ? 'up' : 'down',
      }
      const positionX = direction.x === 'left' ? positionLeftX : positionRightX
      const positionY = direction.y === 'up' ? positionTopY : positionDownY
      const egg: EggPosition = {
        x: positionX,
        y: positionY,
        offsetX: 0,
        offsetY: 0,
        direction: direction,
      }
      eggs[i] = egg
    }
    return eggs
  }

  redraw(game: Game) {
    this.game = game
    if (this.eggNumber <= this.lavelEggs.length) {
      for (let i = 0; i < this.eggNumber; i++) {
        const direction = this.lavelEggs[i].direction.x
        if (direction !== 'broken' && direction !== 'win') {
          this.lavelEggs[i] = this.run(this.lavelEggs[i])
        }
      }
    }
    return this.game
  }

  run(egg: EggPosition) {
    const offsetX = egg.offsetX
    const offsetY = egg.offsetY
    const newOffsetX =
      offsetX > 260 || offsetX < -260
        ? offsetX
        : egg.direction.x === 'left'
        ? offsetX + 1
        : offsetX - 1
    const newOffsetY =
      (offsetX > 80 && offsetX < 135 && offsetX % 2 > 0) ||
      (offsetX < -80 && offsetX > -135 && Math.abs(offsetX) % 2 > 0)
        ? offsetY + 1
        : (offsetX > 260 && offsetY < this.canvasHeiht - 250) ||
          (offsetX < -260 && offsetY < this.canvasHeiht - 250)
        ? offsetY + 10
        : offsetY

    const direction = {
      x:
        offsetY >= this.canvasHeiht - 250
          ? 'broken'
          : this.checkWin(egg.direction, this.game.cart, newOffsetY)
          ? 'win'
          : egg.direction.x,
      y: egg.direction.y,
    }

    this.move(egg.x + egg.offsetX, egg.y + egg.offsetY)
    if (direction.x == 'broken') {
      this.game.lives--
    }
    if (direction.x == 'win') {
      this.game.score++
    }

    return {
      ...egg,
      offsetX: newOffsetX,
      offsetY: newOffsetY,
      direction: direction,
    }
  }

  checkWin(eggDirection, cartDirection, offsetY) {
    if (
      eggDirection.x == cartDirection.x &&
      eggDirection.y == cartDirection.y &&
      offsetY > 50
    ) {
      return true
    }

    return false
  }

  move(positionX, positionY) {
    this.context.save()
    this.context.fillStyle = '#ffcc99'
    this.context.scale(1, 1.75)
    this.context.beginPath()
    this.context.moveTo(positionX, positionY)
    this.context.bezierCurveTo(
      positionX,
      positionY - 25,
      positionX + 30,
      positionY - 25,
      positionX + 30,
      positionY,
    )
    this.context.bezierCurveTo(
      positionX + 30,
      positionY + 15,
      positionX,
      positionY + 15,
      positionX,
      positionY,
    )
    this.context.fill()
    this.context.restore()
  }

  increaseEggs() {
    if (this.eggNumber < this.lavelEggs.length) {
      this.eggNumber++
    }
  }
}
