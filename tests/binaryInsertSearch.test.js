const { binaryInsertSearch } = require('..');

const PrimitiveCompareFn = (a, b) => {
  return a - b;
};

const PrimitiveDescendingCompareFn = (a, b) => {
  return b - a;
};

test('Existent value', () => {
  expect(binaryInsertSearch([1, 2, 3], 2, PrimitiveCompareFn)).toBe(1);
  expect(binaryInsertSearch([-1], -1, PrimitiveCompareFn)).toBe(0);
});

test('Non-existent value', () => {
  expect(binaryInsertSearch([1, 4, 5], 2, PrimitiveCompareFn)).toBe(1);
  expect(binaryInsertSearch([1, 4, 5], 10, PrimitiveCompareFn)).toBe(3);
  expect(binaryInsertSearch([-1], -4, PrimitiveCompareFn)).toBe(0);
  expect(binaryInsertSearch([-1], 4, PrimitiveCompareFn)).toBe(1);
  expect(binaryInsertSearch([], -9, PrimitiveCompareFn)).toBe(0);
});

test('Descending order', () => {
  expect(binaryInsertSearch([1, 2, 3], 15, PrimitiveDescendingCompareFn)).toBe(0);
});
