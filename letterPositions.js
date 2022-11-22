// Copying Helper functions

// assertArraysEqual and eqArrays
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// Implementing LetterPositions Function

const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase();
  const results = {};
  for(let i = 0; i < sentence.length; i++){
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  // deleting space character indice(s)
  delete results[' '];
  return results;
}

module.exports = letterPositions;

// Testing
// console.log(letterPositions('lighthouse in the house'));
// assertArraysEqual(letterPositions('hello')['l'],[2, 3]);
