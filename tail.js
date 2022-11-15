// tail function

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(array){
  return array.slice(1);
}

// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2
const result = tail(["Summer", "Fall", "Spring", "Winter"]);
assertEqual(result.length, 3); // ensure we get back three elements
assertEqual(result[0], "Fall"); // ensure first element is "Fall"
assertEqual(result[1], "Spring"); // ensure second element is "Spring"
assertEqual(result[2], "Winter"); // ensure second element is "Winter"

