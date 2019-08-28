//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if (number <= 0) {
    throw new Error('Only positive numbers are allowed')
  }
  //While statment
  let count = 0
  while (number !== 1) {
    //when the number is not = to 1
    //== that makes it so it has to be 1 not taking a decimal
    if (number % 2 == 0) {
      number /= 2
      count++
    }
    //If the number is even divide by 2
    else {
      number = 3 * number + 1
      count++
    }
    //If the number is odd multiply by 3 and add 1
  }
  return count
};
//it is on a loop to do this until the number 1
