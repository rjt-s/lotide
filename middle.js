// copying eqArrays and assertArraysEqual functions
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

module.exports = middle;


