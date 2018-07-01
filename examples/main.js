const { insertToSortedArray } = require('..');

// By default, `array.sort` will sort things alphabetically, we need to specify a `compareFn` for sorting numbers
const comparer = (a, b) => {
  return a - b;
};

// Sort the array first
const array = [1, 10, 3, 5, -2];
array.sort(comparer);

// Insert values to the sorted array
for (let i = 0; i < 10; i++) {
  insertToSortedArray(array, i, comparer);
}

console.log(array);
// Prints [ -2, 0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10 ]
