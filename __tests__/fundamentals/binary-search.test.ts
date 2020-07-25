import { binarySearch } from '../../src/fundamentals/binary-search';

describe('Binary Search', () => {
  describe('The value is found', () => {
    it('should return the index of the found number', () => {
      const array = [1, 2, 4, 7, 34, 89];
      const itemToFind = 4;

      expect(binarySearch(array, itemToFind)).toEqual(2);
    });
  });

  describe('The value is not found', () => {
    it('should return null', () => {
      const array = [1, 2, 4, 7, 34, 89];
      const itemToFind = 5;

      expect(binarySearch(array, itemToFind)).toEqual(null);
    });
  });
});
