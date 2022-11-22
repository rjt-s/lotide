// TakeUntil function implementation

// takeUntil func
const takeUntil = function(array, callback) {
  // defining new array that will be the outcome
  let newArray = [];
  for(let item of array) {
    if(callback(item)){
      return newArray;
    }
    newArray.push(item);
  }
  return newArray;
}

module.exports = takeUntil;

// Testing the takeUntil function
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const data3 = [1, 3, 5, 7, 9, 10, 12, 14, 16];

// assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);
// assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
// assertArraysEqual(takeUntil(data3, x => x % 2 === 0), [1, 3, 5, 7, 9]);
