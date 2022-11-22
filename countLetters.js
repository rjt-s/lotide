// copying assertEqual function
const assertEqual = require("./assertEqual");

// implementing Letter Count
const countLetters = function(input) {
  let finalCount = {};
  // converting the input string to Lower Case
  input = input.toLowerCase();
  for (let character of input) {
    if (finalCount[character]) {
      finalCount[character] += 1;
    } else {
      finalCount[character] = 1;
    }
  }
  // deleting spaces
  delete finalCount[' '];
  return finalCount;
}

module.exports = countLetters;

// // Testing Function
// console.log(countLetters('Rajat'));
// console.log(countLetters("lighthouse in the house"));