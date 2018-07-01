const { insertToSortedArray } = require('..');

const PrimitiveCompareFn = (a, b) => {
  return a - b;
};

const ObjectCompareFn = (a, b) => {
  return a.val - b.val;
};


test('Scalar array', () => {
  expect(insertToSortedArray([1, 2, 3], 2, PrimitiveCompareFn)).toEqual([1, 2, 2, 3]);
  expect(insertToSortedArray([1, 2, 3], -2, PrimitiveCompareFn)).toEqual([-2, 1, 2, 3]);
  expect(insertToSortedArray([], 2, PrimitiveCompareFn)).toEqual([2]);
});

test('Object comparer', () => {
  expect(insertToSortedArray(
    [
      { val: 4 },
      { val: 19 },
      { val: 44 },
    ],
    { val: 15 },
    ObjectCompareFn,
  )).toEqual(
    [
      { val: 4 },
      { val: 15 },
      { val: 19 },
      { val: 44 },
    ],
  );
});
