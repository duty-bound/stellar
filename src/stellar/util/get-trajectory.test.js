import { getTrajectory } from './get-trajectory'

describe('test getTrajectory', () => {

  const increment = 0.05
  const trajectory = getTrajectory(200, 400, increment)

  it('returns an array', () => {
    expect(Array.isArray(trajectory)).toBe(true)
  })

  it('returns an array of length 90', () => {
    expect(trajectory.length).toEqual(2 / increment)
  })

})
