// countOnly function

// copying assertEqual function
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// implementing countOnly function
const countOnly = function(allItems, itemsToCount) {
  let finalCounts = {};

  for(let item in itemsToCount){
    if (itemsToCount[item]) {
      for (let name of allItems) {
        if(name === item) {
          if (finalCounts[name]) {
            finalCounts[name] += 1;
          } else {
            finalCounts[name] = 1;
          }
        }
      }
    }
  }
  return finalCounts;
};

// Testing
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(result1);

// // Test 2
// const alphabets = ['a', 'a', 'b', 'c', 'd', 'e', 'a'];
// const result2 = countOnly(alphabets, {a: true, d: true, b: false, f: true});
// console.log(result2);
