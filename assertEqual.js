// assert Equal

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Rajat","Rajat");
assertEqual(1, 1);
assertEqual(2,3);
