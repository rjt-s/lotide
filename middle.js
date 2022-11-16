// copying eqArrays and assertArraysEqual functions
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


// Implementing middle func

const middle = function(array) {
  // array with length zero or one
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  // all other arrays
  let midIndex = Math.floor(array.length / 2);
  if (!(array.length % 2 === 0)) {
    return array.slice(midIndex, midIndex + 1);
  } else {
    return array.slice(midIndex - 1, midIndex + 1);
  }
};

// Testing middle func
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
