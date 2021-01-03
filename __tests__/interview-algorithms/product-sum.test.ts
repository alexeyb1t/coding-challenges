import {productSum} from "../../src/interview-algorithms/product-sum";

describe('Product Sum', () => {
  describe('With inner arrays', () => {
    it('should return multiply the inner arrays by the depth', () => {
      const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
      const expectedResult = 12;

      expect(productSum(array)).toEqual(expectedResult);
    });
  });
});
