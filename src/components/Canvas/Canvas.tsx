import React, { useRef, useEffect } from 'react'
import './Canvas.scss'

function CanvasComponent() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas && canvas.getContext) {
      var ctx = canvas.getContext('2d');

      let x: number = 333;
      let y: number = 330;

      const draw = (coordX: number, coordY: number) => {
        if(ctx){
          // background
          ctx.fillStyle = '#343230';
          ctx.fillRect(0, 0, 999, 661);

          // body
          ctx.fillStyle = '#b8b8b8';
          ctx.fillRect(x, y, 70, 200);

          // nose
          ctx.fillStyle = '#9e9e9e';
          ctx.fillRect(x+60, y+30, 50, 30);
          ctx.fillStyle = 'black';
          ctx.fillRect(x+100, y+30, 10, 10);

          // eyes
          ctx.fillStyle = 'black';
          ctx.fillRect(x+20, y+20, 10, 10);
          ctx.fillStyle = 'black';
          ctx.fillRect(x+40, y+20, 10, 10);

          // legs
          ctx.fillStyle = '#9e9e9e';
          ctx.fillRect(x, y+200, 20, 60);
          ctx.fillStyle = '#9e9e9e';
          ctx.fillRect(x+50, y+200, 20, 60);

          // ear 1
          ctx.beginPath();
          ctx.moveTo(x, y-30);
          ctx.lineTo(x, y);
          ctx.lineTo(x+30, y);
          ctx.fillStyle = '#9e9e9e';
          ctx.fill();

          // ear 2
          ctx.beginPath();
          ctx.moveTo(x+70, y-30);
          ctx.lineTo(x+40, y);
          ctx.lineTo(x+70, y);
          ctx.fillStyle = '#9e9e9e';
          ctx.fill();
        }
      }

      draw(x, y);

      const keysHandler = (event: KeyboardEvent) => {
        if (event.key == 'q') {
          x = 133;
          y = 130;
        }

        if (event.key == 'w') {
          x = 433;
          y = 130;
        }

        if (event.key == 'e') {
          x = 133;
          y = 330;
        }

        if (event.key == 'r') {
          x = 433;
          y = 330;
        }

        draw(x, y);
      }

      document.addEventListener("keydown", keysHandler);
    }
  }, []);

  return (
    <canvas id="canvas" ref={ref} width={999} height={657}></canvas>
  );
}

export default CanvasComponent
