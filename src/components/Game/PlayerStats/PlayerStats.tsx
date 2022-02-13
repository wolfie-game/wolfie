export default function PlayerStats(ctx, level, lives, score, canvas) {
  const topPadding = 60

  // Level
  ctx.font = '20px Arial'
  ctx.fillStyle = 'orange'
  ctx.fillText(`Уровень: ${level}`, 20, topPadding)

  // Lives
  ctx.font = '20px Arial'
  ctx.fillStyle = '#ff4e25'
  let gap = -((lives / 2) * 30)
  for (let i = 0; i < lives; i++) {
    ctx.fillText('🥚', canvas.width / 2 + gap, topPadding)
    gap += 30
  }

  // Score
  ctx.font = '20px Arial'
  ctx.fillStyle = 'orange'
  ctx.fillText(`Score: ${score}`, canvas.width - 140, topPadding)
}
