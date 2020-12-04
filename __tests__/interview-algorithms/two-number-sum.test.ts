import {twoNumberSum} from "../../src/interview-algorithms/two-number-sum";

describe('Two Number Sum', () => {
  describe('Contains sum numbers', () => {
    it('should return an array of sum integers', function () {
      const arr = [3, 5, -4, 8, 11, 1, -1, 6];
      const targetSum = 10;
      const expectedResult = [-1, 11];

      expect(twoNumberSum(arr, targetSum).includes(expectedResult[0])).toBeTruthy();
      expect(twoNumberSum(arr, targetSum).includes(expectedResult[1])).toBeTruthy();
    });
  });

  describe('Does not contain sum numbers', () => {
    it('should return an empty array', () => {
      const arr = [3, 5, -4, 8, 11, 1, -1, 6];
      const targetSum = 100;

      expect(twoNumberSum(arr, targetSum).length).toEqual(0);
    });
  });
});
