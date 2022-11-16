// copying helper functions
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// implementing findKeyByValue function
const findKeyByValue = function(object, value) {
  let valueKey = undefined;
  for(let key in object) {
    if(object[key] === value){
      valueKey = key; 
      return valueKey;
    }
  }
  return valueKey;
}



// Test Cases
const tvShows = {sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire', thriller: 'Prison Break'};
// console.log(findKeyByValue(tvShows,"The Expanse"));
assertEqual(findKeyByValue(tvShows, "The Wire"), "drama");
assertEqual(findKeyByValue(tvShows, "That '70s Show"), undefined);
assertEqual(findKeyByValue(tvShows, "Prison Break"), 'thriller');
assertEqual(findKeyByValue(tvShows, "The Expanse"), 'sci_fi');
