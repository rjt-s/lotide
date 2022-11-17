// Implementing Map Functionality

// copying assertArraysEqual and eqArrays for testing
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

// Implementing assertArraysEqual func
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};


// example arrays
const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4,5];
const cities = ['London', 'Paris', 'Athens', 'Rome', 'Zurich'];

// Map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Calling and Testing Map function
// const results1 = map(words, word => word[0]);
// console.log(results1);
// Testing with assertArraysEqual
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(nums, num => num *2), [2, 4, 6, 8, 10]);
assertArraysEqual(map(cities, city => city.length), [6, 5, 6, 4, 6]);
