/**
 * Array: [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
 * Result: 12, calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)
 * */

export function productSum(array) {
  function calculate(_array: number | Array<number>, multiplier: number = 1) {
    let sum = 0;

    if (Array.isArray(_array)) {
      _array.forEach(element => {
        if (Array.isArray(element)) {
          sum += calculate(element, multiplier + 1);
        } else {
          sum += element;
        }
      });
    }

    return sum * multiplier;
  }

  return calculate(array);
}

export function _productSum(array, multiplier = 1) {
  let sum: number = 0;

  array.forEach(element => {
    if (Array.isArray(element)) {
      sum += _productSum(element, multiplier + 1);
    } else {
      sum += element;
    }
  });

  return sum * multiplier;
}
