export function binaryInsertSearch<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => number,
) {
  if (!Array.isArray(array)) {
    throw new Error(`The argument "array" is not an array, got: ${array}`);
  }
  if (!compareFn) {
    throw new Error('The argument "compareFn" cannot be empty');
  }

  let i = 0;
  let j = array.length;

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    const result = compareFn(array[mid], target);
    if (result < 0) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return i;
}
