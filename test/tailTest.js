// test -- tail.js
const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

// writing the tests
describe("#tail function", () => {
  it("should return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("should return ['b', 'c', 'd'] for ['a', 'b', 'c', 'd'", () => {
    assert.deepEqual(tail(['a', 'b', 'c', 'd']), ['b', 'c', 'd']);
  });
})

