//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const scores = {
  'a': 1,
  'e': 1,
  'i': 1,
  'o': 1,
  'u': 1,
  'l': 1,
  'n': 1,
  'r': 1,
  's': 1,
  't': 1,
  'd': 2,
  'g': 2,
  'b': 3,
  'c': 3,
  'm': 3,
  'p': 3,
  'f': 4,
  'h': 4,
  'v': 4,
  'w': 4,
  'y': 4,
  'k': 5,
  'j': 8,
  'x': 8,
  'q': 10,
  'z': 10,
  //each letter of the alphabet with their value
};

export const score = (word) => {
  //to get the score you take the word and return it
  return word.toLowerCase()
  //takes the word given and makes it lower case to be able to have any letter upper or lower case and still work
    .split('')
    //splits the word into an array
    .reduce((acc, letter) => acc + scores[letter], 0);
    //accumulator is the initial value. Reduce takes the array to a single value. Takes each value of each letter from left to right and returns the total value starting with the initial value at 0
};