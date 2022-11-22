// Required Imports
const assertArraysEqual = require("../assertArraysEqual");

// Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], ['1', 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'C']);