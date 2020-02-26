import { Star } from './star'
import { getTrajectory } from './util/get-trajectory'
import { getRandom } from './util/get-random'

export const initializeStars = (n, width, height) => {

  const p = new Promise(resolve => {
    const w = width / 2
    const h = height / 2
    const stars = []
    let color
    let a = 0
    let b = 0
    const increment = 0.0005 // this determines how many points the trajectory will have. It intrinsically affects the animation speed
    let currentPosition = 0

    for(let i = 0; i < n; i++) {
      color = `RGB(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
      a = getRandom(150, w)
      b = h
      currentPosition = getRandom(0, 2 / increment)

      stars.push(new Star(
        color,
        getTrajectory(a, b, increment),
        currentPosition,
        true
      ))
    }
    resolve(stars)
  })

  return p
}
