export function binaryInsertSearch<T, V>(array: T[], target: V, keyFn: (item: T) => V) {
  let i = 0;
  let j = array.length;

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    const value = keyFn(array[mid]);
    if (value < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return i;
}
