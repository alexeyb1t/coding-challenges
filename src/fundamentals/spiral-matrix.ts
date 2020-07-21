export function spiralMatrix(n: number): number[][] {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter;
      counter += 1;
    }
    endColumn -= 1;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter;
      counter += 1;
    }
    endRow -= 1;

    // Start column
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter;
      counter += 1;
    }
    startColumn += 1;
  }

  console.log(result);
  return result;
}

spiralMatrix(4);
