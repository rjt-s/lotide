// findKey function implementation
// copying assertEqual function
const assertEqual = require("./assertEqual");

// findKey function
const findKey = function(obj, callback) {
  for(let key in obj) {
    if(callback(obj[key])){
      return key;
    }
  }
}

module.exports = findKey;

// Testing the findkey func
// let testObj1 = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }
// let testObj2 = {
//   'USA' : 'Washington DC',
//   'Canada' : 'Ottawa',
//   'U.K.' : 'London',
//   'France': 'Paris',
//   'Germany': 'Berlin'
// }
// // console.log(findKey(testObj1, x => x.stars === 2));
// // console.log(findKey(testObj2, x => x === 'Ottawa'));
// assertEqual(findKey(testObj1,x => x.stars === 2), 'noma');
// assertEqual(findKey(testObj2, x => x === 'Ottawa'), 'Canada');

