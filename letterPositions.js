// Copying Helper functions

// assertArraysEqual and eqArrays
const eqArrays = function(arr1,arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true; 
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};



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

// Testing
// console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions('hello')['l'],[2, 3]);
