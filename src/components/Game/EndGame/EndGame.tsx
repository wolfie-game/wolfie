export default function EndGame(ctx, canvas) {
  ctx.font = '40px Arial'
  ctx.fillStyle = '#ff4e25'
  ctx.fillText('Game Over', canvas.width / 2 - 120, canvas.height / 2)
}
