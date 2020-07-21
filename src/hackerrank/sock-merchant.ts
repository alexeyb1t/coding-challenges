/**
 * John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
 * Given an array of integers representing the color of each sock,
 * determine how many pairs of socks with matching colors there are.
 *
 * It must return an integer representing the number of matching pairs of socks that are available.
 * */
export function sockMerchant(sockNumber: number, sockColors: number[]): number {
  const pairs = sockColors.reduce((acc, sockColor) => {
    if (!acc[sockColor]) {
      acc[sockColor] = 1;
    } else {
      acc[sockColor] = acc[sockColor] + 1;
    }

    return acc;
  }, {});

  return Object.keys(pairs).reduce((acc, sockColor) => {
    if (pairs[sockColor] % 2 === 0) {
      acc = acc + pairs[sockColor] / 2;
    } else {
      acc = acc + (pairs[sockColor] - 1) / 2;
    }

    return acc;
  }, 0);
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
