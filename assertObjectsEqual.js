// Implementing assertObjectEqual function
// importing eqObjects
const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// tests for function
// assertObjectsEqual({a:1,b:2,c:[1,2,3]},{c:[1,2,3],b:2,a:1});
// assertObjectsEqual({a:1},{a:1,b:2});
