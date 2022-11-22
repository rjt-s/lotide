// Implementing Without func
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

module.exports = without;

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



