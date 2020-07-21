/**
 * Given an array, find the int that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */
export const findOdd = (numbers: number[]): number => {
    return numbers
        .map(current => numbers.filter(num => current === num).length)
        .map((count, index) => ({count, value: numbers[index]}))
        .filter(num => num.count % 2 !== 0)
        .map(num => num.value)[0];
};

export const findOdd2 = (xs: number[]): number => {
    return xs.reduce((a, b) => a ^ b);
};
