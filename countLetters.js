// copying assertEqual function
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// implementing Letter Count
const countLetters = function(input) {
  let finalCount = {};
  // converting the input string to Lower Case
  input = input.toLowerCase();
  for (let character of input) {
    if (finalCount[character]) {
      finalCount[character] += 1;
    } else {
      finalCount[character] = 1;
    }
  }
  // deleting spaces
  delete finalCount[' '];
  return finalCount;
}

// Testing Function
console.log(countLetters('Rajat'));
console.log(countLetters("lighthouse in the house"));