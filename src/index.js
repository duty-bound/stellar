// new Branch! refresh with screen sizing
// write test for util functions

import { initializeStars } from './initialize-stars'

const init = () => {
  const canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.background = 'RGB(40, 40, 50)'
  document.body.appendChild(canvas)

  const strokeDark = 'RGB(50, 50, 50)'
  const strokeMedium = 'RGB(75, 75, 75)'
  const strokeLight = 'RGB(100, 100, 100)'
  const numberOfStars = 80
  let stars
  let count = 0
  const drawingFrequency = 2 // the 'increment' constant in 'initialize-stars.js' is fundamental in getting the right animation speed
  const ellipseMaxWidth = canvas.width
  const ellipseMaxHeight = canvas.height

  const ctx = canvas.getContext('2d')
  ctx.translate(canvas.width / 2, canvas.height / 2)
  ctx.lineWidth = 1

  initializeStars(numberOfStars, ellipseMaxWidth, ellipseMaxHeight)
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
        ctx.beginPath()

        if(stars[i].trajectory[c].x <= -ellipseMaxWidth/4 || stars[i].trajectory[c].x >= ellipseMaxWidth/4) {
          ctx.fillRect(stars[i].trajectory[c].x, stars[i].trajectory[c].y, 2, 2)
          ctx.strokeStyle = strokeMedium
          ctx.moveTo(stars[i].trajectory[c].x + 1, stars[i].trajectory[c].y)
        } else if (stars[i].trajectory[c].y < 0){
          ctx.fillRect(stars[i].trajectory[c].x, stars[i].trajectory[c].y, 1, 1)
          ctx.strokeStyle = strokeDark
          ctx.moveTo(stars[i].trajectory[c].x, stars[i].trajectory[c].y)
        } else {
          ctx.fillRect(stars[i].trajectory[c].x, stars[i].trajectory[c].y, 3, 3)
          ctx.strokeStyle = strokeLight
          ctx.moveTo(stars[i].trajectory[c].x + 2, stars[i].trajectory[c].y)
        }

        ctx.lineTo(
          stars[i].trajectory[c].x + ((canvas.height * 2) * Math.cos(Math.PI / 4)),
          stars[i].trajectory[c].y - ((canvas.height * 4) * Math.sin(Math.PI / 4))
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
