/**
 * An array A consisting of N different integers is given.
 * The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
 * Your goal is to find that missing element.
 *
 * Write a function:
 *    function solution(A);
 *
 * that, given an array A, returns the value of the missing element.
 * For example, given array A such that:
 * A[0] = 2
 * A[1] = 3
 * A[2] = 1
 * A[3] = 5
 *
 * the function should return 4, as it is the missing element.
 *
 * Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 *
 * Complexity:
 * expected worst-case time complexity is O(N);
 * expected worst-case space complexity is O(1) (not counting the storage required for input arguments).
 */

export function permMissingElem(nums: number[]): number {
  const length = nums.length;
  const sum = ((length + 1) / 2) * (length + 2);
  let sumWithoutMissing = 0;
  for (let i = 0; i < length; i++) {
    sumWithoutMissing += nums[i];
  }

  return sum - sumWithoutMissing;
}

export function permMissingElem3(nums: number[]): number {
  const min = Math.min.apply(Math, nums);
  const max = Math.max.apply(Math, nums);

  let expectedSum = 0;
  for (let i = min; i <= max; i++) {
    expectedSum += i;
  }

  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
}

function permMissingElem2(nums: number[]) {
  if (nums.length === 1) {
    return nums[0];
  }

  const sortedNums = nums.sort((a, b) => a - b);
  for (let [index, value] of sortedNums.entries()) {
    if (value + 2 === sortedNums[index + 1]) {
      return value + 1;
    }
  }
}
