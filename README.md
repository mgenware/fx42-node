# fx42-node

[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/MEAN-Module)
[![Build Status](https://img.shields.io/travis/mgenware/fx42-node.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/fx42-node)
[![npm version](https://img.shields.io/npm/v/fx42-node.svg?style=flat-square)](https://npmjs.com/package/fx42-node)
[![Node.js Version](http://img.shields.io/node/v/fx42-node.svg?style=flat-square)](https://nodejs.org/en/)

Sorted array in JavaScript.
* No extra classes.
* No extending prototypes.
* TypeScript friendly (comes with TypeScript type definitions).

## Installation
```sh
yarn add fx42-node
```

## Example
```js
const { insertToSortedArray } = require('fx42-node');

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
```

## Benchmarks
To run benchmarks:
```sh
yarn run benchmark
```

Possible result:
```
Push and sort x 4,879 ops/sec ±37.27% (12 runs sampled)
Sorted array x 11,381 ops/sec ±74.13% (6 runs sampled)
Fastest is Sorted array
```

This sorted array implementation is around 3x faster then `push` and resort the array.
