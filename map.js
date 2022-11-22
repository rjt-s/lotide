// Implementing Map Functionality
// Map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;


// example arrays
// const words = ["ground", "control", "to", "major", "tom"];
// const nums = [1,2,3,4,5];
// const cities = ['London', 'Paris', 'Athens', 'Rome', 'Zurich'];

// // Calling and Testing Map function
// // const results1 = map(words, word => word[0]);
// // console.log(results1);
// // Testing with assertArraysEqual
// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(nums, num => num *2), [2, 4, 6, 8, 10]);
// assertArraysEqual(map(cities, city => city.length), [6, 5, 6, 4, 6]);
