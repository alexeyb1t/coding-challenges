import {fizzbuzz} from "../../src/fundamentals/fizzbuzz";

describe('Fizzbuzz', () => {
  describe('When it is multiples of 3', () => {
    it('should return "fizz"', () => {
      const num = 3;
      const expectedResult = 'fizz';

      expect(fizzbuzz(num)).toEqual(expectedResult)
    });
  });

  describe('When it is multiples of 5', () => {
    it('should return "buzz"', () => {
      const num = 5;
      const expectedResult = 'buzz';

      expect(fizzbuzz(num)).toEqual(expectedResult)
    });
  });

  describe('When it is a multiple of 3 and 5', () => {
    it('should return fizzbuzz', () => {
      const num = 15;
      const expectedResult = 'fizzbuzz';

      expect(fizzbuzz(num)).toEqual(expectedResult)
    });
  });
});
