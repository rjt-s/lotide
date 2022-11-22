// Copying Assert Equal function
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// EqObjects function Implementation
const eqObjects = function(object1, object2) {
  // checking same number of keys
  let obj1Arr = Object.entries(object1);
  let obj2Arr = Object.entries(object2);

  if (obj1Arr.length !== obj2Arr.length) {
    return false;
  } else {
    for (let element of obj1Arr) {
      // compare every key value of object 1 with key value of object 2
      if (Array.isArray(object1[element[0]])) {
        if (!(eqArrays(object1[element[0]], object2[element[0]]))) {
          console.log('i rAN');
          return false;
        } 
      } else  {
        if ((object1[element[0]] !== object2[element[0]])) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;

// Tests
// console.log(eqObjects({a:1,b:2}, {b:2,a:1}))
// console.log(eqObjects({a:[1,2,3],z:'a'},{z:'a',a:[1,2,3]}));
// console.log(eqObjects({a:1,b:2,c:3},{a:1,b:2,c:0}));
// console.log(eqObjects({a:1,b:2},{a:1,b:2,c:3}));
