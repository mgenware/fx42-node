const { insertToSortedArray } = require('..');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const ELEMENT = 7;
const COMPARER = (a, b) => a - b;
const SRC_ARRAY = [9, 43, 0, 39, -32, -4, 3, 34, 94, 28];
SRC_ARRAY.sort(COMPARER);

const array1 = SRC_ARRAY.slice();
const array2 = SRC_ARRAY.slice();

// add tests
suite.add('Push and sort', () => {
  array1.push(ELEMENT);
  array1.sort(COMPARER);
})
  .add('Sorted array', () => {
    insertToSortedArray(array2, ELEMENT, COMPARER);
  })
  // add listeners
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });
