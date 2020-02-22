// lighten up front rays
// write test for util functions

import { initializeStars } from './initialize-stars'

const init = () => {
  const canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.background = 'RGB(40, 40, 50)'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  ctx.translate(canvas.width / 2, canvas.height / 2)
  ctx.strokeStyle = 'RGB(100, 100, 100)'
  ctx.lineWidth = 1

  const a = canvas.width * 0.75 / 2
  const b = canvas.height * 0.75 / 2
  const numberOfStars = 100
  let stars
  let count = 0
  const drawingFrequency = 5 // the 'increment' constant in 'initialize-stars.js' is fundamental in getting the right animation speed

  initializeStars(numberOfStars, canvas.width, canvas.height)
  .then(data => stars = data)
  .then(() => gameLoop())

  function gameLoop() {
    requestAnimationFrame(gameLoop)

    if(count % drawingFrequency === 0) {
      ctx.clearRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2)

      let c = 0

      for(let i = 0; i < stars.length; i++) {
        ctx.fillStyle = stars[i].color
        c = stars[i].currentPosition

        ctx.fillRect(stars[i].trajectory[c].x, stars[i].trajectory[c].y, 3, 3)
        ctx.beginPath()
        ctx.moveTo(stars[i].trajectory[c].x + 2, stars[i].trajectory[c].y)
        ctx.lineTo(
          stars[i].trajectory[c].x + ((canvas.height * 2) * Math.cos(Math.PI / 3)),
          stars[i].trajectory[c].y - ((canvas.height * 4) * Math.sin(Math.PI / 3))
        )
        ctx.stroke()

        stars[i].currentPosition++
        if(c === stars[i].trajectory.length - 1)
          stars[i].currentPosition = 0
      }
    }
    count++
  }
}

document.addEventListener("DOMContentLoaded", init, false)
