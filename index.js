const init = () => {
  const canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.background = 'black'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  ctx.translate(canvas.width / 2, canvas.height / 2)
  ctx.strokeStyle = 'RGB(100, 150, 100)'
  ctx.lineWidth = 1

  const a = canvas.width * 0.75 / 2
  const b = canvas.height * 0.75 / 2
  let x = -a
  let increment = 5
  let flipY = false

  gameLoop()


  function gameLoop() {
     requestAnimationFrame(gameLoop)

     y = Math.sqrt((b**2) * (1 - (x**2 / a**2)))
     if(flipY)
      y = -y

     ctx.beginPath()
     ctx.moveTo(0, 0)
     ctx.lineTo(x, y)
     ctx.stroke()

     if(x < -a || x > a) {
      flipY = !flipY
      increment = -increment
    }

    x += increment
  }
}



const drawEllipse = (ctx, a, b) => {
  for(let x = -a; x <= a; x++) {
      y = Math.sqrt((b**2) * (1 - (x**2 / a**2)))

      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(x, y)
      ctx.stroke()
  }
}

document.addEventListener("DOMContentLoaded", init, false)

//drawEllipse(ctx, canvas.width * 0.75 / 2, canvas.height * 0.75 / 2)

// ctx.fillStyle = 'RGB(100, 150, 100)'
// ctx.fillRect(0, 0, 2, 2)
