// testing for middle function
const middle = require("../middle");
const assert = require("chai").assert;

// Testing middle func with Mocha and Chai

// writing the tests
describe("#middle function", () => {
  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return ['b', 'c'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
  });
})


// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1, 2]),[]);
// assertArraysEqual(middle([1, 2, 3]),[2]);
// assertArraysEqual(middle([1, 2, 3]),[2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
