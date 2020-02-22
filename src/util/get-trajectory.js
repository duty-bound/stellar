export const getTrajectory = (a, b) => {
  let x = 0
  let y = 0
  const trajectory = []

  for(let i = 0; i < 2; i +=0.01) {
    x = (a * b) / Math.sqrt((b**2) + (a**2) * ((Math.tan(i * Math.PI))**2))
    y = Math.sqrt((b**2) * (1 - (x**2 / a**2)))
    if(i >= 0.5 && i < 1.0) {
        x *= -1
    } else if(i >= 1.0 && i < 1.5) {
        x *= -1
        y *= -1
    } else if(i >= 1.5 && i < 2.0) {
        y *= -1
    }

    trajectory.push({x, y})
  }
  console.log(trajectory)
  return trajectory
}
