export function twoNumberSum(array: number[], targetSum: number): number[] {
  const hash: {[key: string]: boolean} = {};

  for (let i = 0; i < array.length; i++) {
    const x = array[i];
    const y = (targetSum - x).toString();

    if (hash[y]) {
      return [parseFloat(y), x];
    }

    hash[x.toString()] = true;
  }

  return [];
}

export function twoNumberSum2(array: number[], targetSum: number): number[] {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  const arr = array.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const first = arr[leftPointer];
    const second = arr[rightPointer];
    const sum = first + second;

    if (sum === targetSum) {
      return [first, second];
    }

    if (sum < targetSum) {
      leftPointer += 1;
    } else {
      rightPointer -= 1;
    }
  }

  return [];
}

export function twoNumberSum3(array: number[], targetSum: number): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const isTargetSum = array[i] + array[j] === targetSum;
      if (isTargetSum) {
        return [array[i], array[j]];
      }
    }
  }

  return [];
}
