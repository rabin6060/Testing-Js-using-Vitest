// Lesson: Writing your first tests
export function max(a, b) {
  return (a>b)?a:b
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';

  return n.toString();
}
//tdd (test -driven - development)
//in this we first write test and only implement production code .
//first we write failed case and write a production code to pass cases
export function calculateAverage(array){
  if(array.length===0) return NaN
  if (array.length===1) {
    return array[0]
  }
   const sum = array.reduce((total,current)=>
      total+current
    ,0)
   return sum/array.length
}