import {Wolfie} from '../Wolfie/Wolfie'
import React, {useRef, useEffect, useState} from 'react'
import './Canvas.scss'
import Egg from '../Egg/Egg'
import Decorations from '../Decorations/Decorations'

interface Props {
  width: number
  height: number
}

function CanvasComponent({width, height}: Props) {
  const [state, setState] = useState({
    canvasWidth: width,
    canvasHeiht: height,
  })

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null)

  let bottomPadding = 50

  useEffect(() => {
    let ctx

    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d')
      ctx = canvasCtxRef.current
    }
    const decorations = new Decorations(
      ctx,
      state.canvasHeiht,
      state.canvasWidth,
    )
    const wolfie = new Wolfie(ctx, state.canvasHeiht, state.canvasWidth)
    const egg = new Egg(ctx)
    let x: number = (state.canvasWidth - wolfie.bodyWidth) / 2
    let y: number =
      state.canvasHeiht - wolfie.bodyHeight - wolfie.legHeight - bottomPadding

    const draw = () => {
      wolfie.init(x, y)
      egg.run()
    }

    const keysHandler = (event: KeyboardEvent) => {
      if (event.key == 'ArrowRight') {
        decorations.redraw()
        wolfie.turnRight(x, y)
      }

      if (event.key == 'ArrowLeft') {
        decorations.redraw()
        wolfie.turnLeft(x, y)
      }

      if (event.key == 'ArrowUp') {
        if (bottomPadding + 50 === 100) {
          bottomPadding += 50
          reculc()
          decorations.redraw()
          wolfie.goUp(x, y)
        }
      }

      if (event.key == 'ArrowDown') {
        if (bottomPadding - 50 === 50) {
          bottomPadding -= 50
          reculc()
          decorations.redraw()
          wolfie.goDown(x, y)
        }
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
