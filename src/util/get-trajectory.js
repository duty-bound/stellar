export const getTrajectory = (a, b) => {
  let y = 0
  const trajectory = []

  for(let x = -a; x <= a; x++) {
    y = Math.sqrt((b**2) * (1 - (x**2 / a**2)))
    trajectory.push({x, y})
  }
  for(let x = a + 1; x > -a; x--) {
    y = -Math.sqrt((b**2) * (1 - (x**2 / a**2)))
    trajectory.push({x, y})
  }

  return trajectory
}
