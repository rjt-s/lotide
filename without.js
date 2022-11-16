// Implementing Without func

// Copying assertArrayEqual and eqArrays func
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

// Implementing Without Func

const without = function(source, itemsToRemove) {
  const finalArray = [];
  for(let item of source) {
    if (!itemsToRemove.includes(item)) {
      finalArray.push(item);
    }
  }
  return finalArray;
};

// Test Cases
// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// Testing using Assert Arrays Equal
// assertArraysEqual(without(['a', 'b', 'c'], ['c']),['a', 'b']);
// assertArraysEqual(without(['London', 'NYC', 'Rome'], ['NYC']),['London', 'Rome']);
// assertArraysEqual(without(['1', '2', '3'], ['2']),['1', 3]);

// Testing if original array is not getting affected in any way
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);



