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

    for(let i = 0; i < n; i++) {
      color = `RGB(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
      a = getRandom(100, w)
      b = getRandom(100, h)
      stars.push(new Star(
        color,
        getTrajectory(a, b),
        getRandom(a, (a * 2) -1),
        true
      ))
    }
    resolve(stars)
  })

  return p
}
