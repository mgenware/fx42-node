const { insertToSortedArray } = require('..');

const comparer = (a, b) => {
  return a - b;
};
const array = [1, 10, 3, 5, -2];
array.sort(comparer);

for (let i = 0; i < 10; i++) {
  insertToSortedArray(array, i, comparer);
}

console.log(array);
