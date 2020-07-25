export function binarySearch(array: number[], itemToFind: number): number {
  let low = 0;
  let high = array.length - 1;
  let mid;
  let guess;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = array[mid];

    if (guess === itemToFind) {
      return mid;
    }

    if (guess > itemToFind) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}
