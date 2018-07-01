const { binaryInsertionSearch } = require('..');

const PrimitiveCompareFn = (a, b) => {
  return a - b;
};

const PrimitiveDescendingCompareFn = (a, b) => {
  return b - a;
};

const ObjectCompareFn = (a, b) => {
  return a.val - b.val;
};


test('Existent value', () => {
  expect(binaryInsertionSearch([1, 2, 3], 2, PrimitiveCompareFn)).toBe(1);
  expect(binaryInsertionSearch([-1], -1, PrimitiveCompareFn)).toBe(0);
});

test('Non-existent value', () => {
  expect(binaryInsertionSearch([1, 4, 5], 2, PrimitiveCompareFn)).toBe(1);
  expect(binaryInsertionSearch([1, 4, 5], 10, PrimitiveCompareFn)).toBe(3);
  expect(binaryInsertionSearch([4, 19, 44], 15, PrimitiveCompareFn)).toBe(1);
  expect(binaryInsertionSearch([-1], -4, PrimitiveCompareFn)).toBe(0);
  expect(binaryInsertionSearch([-1], 4, PrimitiveCompareFn)).toBe(1);
  expect(binaryInsertionSearch([], -9, PrimitiveCompareFn)).toBe(0);
});

test('Descending order', () => {
  expect(binaryInsertionSearch([1, 2, 3], 15, PrimitiveDescendingCompareFn)).toBe(0);
});

test('Object comparer', () => {
  expect(binaryInsertionSearch(
    [
      { val: 4 },
      { val: 19 },
      { val: 44 },
    ],
    { val: 15 },
    ObjectCompareFn,
  )).toBe(1);
});
