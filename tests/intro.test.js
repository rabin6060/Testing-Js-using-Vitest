import { calculateAverage, fizzBuzz, max } from '../src/intro'
import {describe,it,expect} from 'vitest'

// describe('max',()=>{
//     it('should return first if it is greater',()=>{
//         expect(max(2,1)).toBe(2)
//     })
//     it('should return second if it is greater',()=>{
//         expect(max(1,3)).toBe(3)
//     })
//     it('should return first if they are equal',()=>{
//         expect(max(2,2)).toBe(2)
//     })
// })

// describe('fizzbuzz',()=>{
//     it('should return FizzBuzz if n is divided by both 3 and 5',()=>{
//         expect(fizzBuzz(15)).toBe('FizzBuzz')
//     })
//     it('should return Fizz if n is divided by 3',()=>{
//         expect(fizzBuzz(12)).toBe('Fizz')
//     })
//     it('should return FizzBuzz if n is divided by 5',()=>{
//         expect(fizzBuzz(25)).toBe('Buzz')
//     })
//     it('should return string if not divided by both 3 and 5',()=>{
//         expect(fizzBuzz(22)).toBe('22')
//     })
// })

describe('calculateAverage',()=>{
    it('should return NaN if there is empty array',()=>{
        expect(calculateAverage([])).toBe(NaN)
    })
    it('should return element if there is only one element',()=>{
        expect(calculateAverage([2])).toBe(2)
    })
    it('should return avg if there is more than one element',()=>{
        expect(calculateAverage([1,2])).toBe(1.5)
    })
})