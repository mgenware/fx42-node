const { binaryInsertSearch } = require('..');

test('Existent value', () => {
  expect(binaryInsertSearch([1, 2, 3], 2, i => i)).toBe(1);
  expect(binaryInsertSearch([-1], -1, i => i)).toBe(0);
});

test('Non-existent value', () => {
  expect(binaryInsertSearch([1, 4, 5], 2, i => i)).toBe(1);
  expect(binaryInsertSearch([1, 4, 5], 10, i => i)).toBe(3);
  expect(binaryInsertSearch([-1], -4, i => i)).toBe(0);
  expect(binaryInsertSearch([-1], 4, i => i)).toBe(1);
});
