import {Wolfie} from '../Wolfie/Wolfie'
import React, {useRef, useEffect, useState} from 'react'
import './Canvas.scss'

function CanvasComponent() {
  const [state, setState] = useState({
    canvasWidth: 1000,
    canvasHeiht: 657,
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

    const wolfie = new Wolfie(ctx, state.canvasHeiht, state.canvasWidth)
    let x: number = (state.canvasWidth - wolfie.bodyWidth) / 2
    let y: number =
      state.canvasHeiht - wolfie.bodyHeight - wolfie.legHeight - bottomPadding

    const draw = () => {
      wolfie.init(x, y)
    }

    const keysHandler = (event: KeyboardEvent) => {
      if (event.key == 'ArrowRight') {
        wolfie.turnRight(x, y)
      }

      if (event.key == 'ArrowLeft') {
        wolfie.turnLeft(x, y)
      }

      if (event.key == 'ArrowUp') {
        if (bottomPadding + 50 === 100) {
          bottomPadding += 50
          reculc()
          wolfie.goUp(x, y)
        }
      }

      if (event.key == 'ArrowDown') {
        if (bottomPadding - 50 === 50) {
          bottomPadding -= 50
          reculc()
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
