import { getRandom } from './get-random'

describe('test getRandom', () => {

    const min = 0
    const max = 10
    const arr = []

    for(let i = 0; i < 1000; i++) {
        arr.push(getRandom(min, max))
    }
    
    const allInRange = arr.every(rand => rand >= min && rand < max)

    it('returns a number between the min and max parameters provided', () => {
        expect(allInRange).toBe(true)
    })

})
