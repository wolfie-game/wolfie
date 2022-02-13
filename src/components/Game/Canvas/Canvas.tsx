import {Wolfie} from '../Wolfie/Wolfie'
import React, {useRef, useEffect, useState} from 'react'
import './Canvas.scss'
import Egg from '../Egg/Egg'
import Decorations from '../Decorations/Decorations'
import PlayerStats from '../PlayerStats/PlayerStats'
import EndGame from '../EndGame/EndGame'
import LeaderboardController from '../../../controllers/leaderboard'

const leaderboardInstance = new LeaderboardController()

interface Props {
  width: number
  height: number
  user: string
}

function CanvasComponent({width, height, user}: Props) {
  const [state, setState] = useState({
    canvasWidth: width,
    canvasHeiht: height,
    lavel: 1,
    score: 0,
    lives: 3,
    name: user ? user : 'Guest',
  })

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null)

  const bottomPadding = 50

  useEffect(() => {
    let ctx
    const canvas = canvasRef.current

    if (canvas) {
      canvasCtxRef.current = canvas.getContext('2d')
      ctx = canvasCtxRef.current
    }
    const decorations = new Decorations(
      ctx,
      state.canvasHeiht,
      state.canvasWidth,
    )
    const stats = () =>
      PlayerStats(ctx, state.lavel, state.lives, state.score, canvas)

    const wolfie = new Wolfie(ctx, state.canvasHeiht, state.canvasWidth)
    const egg = new Egg(ctx, state.canvasHeiht, state.canvasWidth)
    const increaseEggs = () => {
      const increase = setInterval(() => {
        egg.increaseEggs()
        if (state.lives < 1 || egg.eggNumber == egg.lavelEggs.length) {
          clearInterval(increase)
        }
      }, 3000 - 100 * state.lives)

      return increase
    }

    let x: number = (state.canvasWidth - wolfie.bodyWidth) / 2
    let y: number =
      state.canvasHeiht - wolfie.bodyHeight - wolfie.legHeight - bottomPadding

    const draw = () => {
      increaseEggs()

      wolfie.init(x, y)
      window.requestAnimationFrame(step)
    }
    const step = () => {
      if (state.lives > 0) {
        window.requestAnimationFrame(step)
      }

      decorations.redraw()
      stats()
      if (state.lives > 0) {
        if (egg.eggNumber == egg.lavelEggs.length) {
          egg.eggNumber = 1
          state.lavel++
          egg.lavelEggs = egg.createLavelEggs(state.lavel)
          increaseEggs()
        }
        const cart = wolfie.getCart()

        const game = egg.redraw({score: state.score, lives: state.lives, cart})
        state.lives = game.lives
        state.score = game.score

        wolfie.redraw()
      } else {
        EndGame(ctx, canvas)
        const userData = {
          data: {
            user: state.name,
            score: state.score
          },
          ratingFieldName: 'score',
          teamName: 'darry'
        }

        leaderboardInstance
        .addData(userData)
        .then(() => {
          console.log('THE END')
        })
        .catch(() => console.log('Something went wrong'))
      }
    }

    const keysHandler = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() == 'q') {
        wolfie.turn('left')
        wolfie.setCart({x: 'left', y: 'up'})
      }

      if (event.key.toLowerCase() == 'w') {
        wolfie.turn('right')
        wolfie.setCart({x: 'right', y: 'up'})
      }

      if (event.key.toLowerCase() == 'a') {
        wolfie.turn('left')
        wolfie.setCart({x: 'left', y: 'down'})
      }

      if (event.key.toLowerCase() == 's') {
        wolfie.turn('right')
        wolfie.setCart({x: 'right', y: 'down'})
      }
    }

    function reculc() {
      x = (state.canvasWidth - wolfie.bodyWidth) / 2
      y =
        state.canvasHeiht - wolfie.bodyHeight - wolfie.legHeight - bottomPadding
    }

    if (ctx) {
      draw()
      document.addEventListener('keydown', keysHandler)
    } else {
      document.removeEventListener('keyup', keysHandler)
    }
  }, [])

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      width={state.canvasWidth}
      height={state.canvasHeiht}></canvas>
  )
}

export default CanvasComponent
