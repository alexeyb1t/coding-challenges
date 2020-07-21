/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 *
 * It’s guaranteed that array contains more than 3 numbers.
 * The tests contain some very huge arrays, so think about performance.
 * This is the first kata in series:
 */

function findUniq(arr: number[]): number {
    const num = arr[0] === arr[1] ? arr[0] : arr[2];
    return arr.filter(numItem => numItem != num)[0];
}

const findUniq2 = arr => +arr.filter(e => arr.indexOf(e) == arr.lastIndexOf(e));

function findUniq3(arr) {
    arr.sort();
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}
