// Babel configuration next

//import initializeStars from './initialize-stars'

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
  const stars = 10
  let x = -a
  let y = 0
  let increment = 1
  let flipY = false

  //initializeStars(stars)
  gameLoop()

  function gameLoop() {
    requestAnimationFrame(gameLoop)
    ctx.clearRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2)

    y = Math.sqrt((b**2) * (1 - (x**2 / a**2)))
    if(flipY)
      y = -y

    ctx.save()
    ctx.rotate(Math.PI / 3)

    ctx.fillStyle = 'RGB(150, 100, 100)'
    ctx.fillRect(x, y, 1, 1)

    ctx.restore()

    if(x < -a || x > a) {
      flipY = !flipY
      increment = -increment
    }

    x += increment
  }
}

document.addEventListener("DOMContentLoaded", init, false)
