import {palindrome} from "../../src/fundamentals/palindrome";

describe("Palindrome", () => {
  describe('When it is palindrome', () => {
    it("should return true", () => {
      const sourceStr = 'abba';
      const expectedResult = true;

      expect(palindrome(sourceStr)).toEqual(expectedResult);
    });

    it("should return true", () => {
      const sourceStr = 'abcba';
      const expectedResult = true;

      expect(palindrome(sourceStr)).toEqual(expectedResult);
    });
  });

  describe('When it is not palindrome', () => {
    it('should return false', () => {
      const sourceStr = 'abcdefg';
      const expectedResult = false;

      expect(palindrome(sourceStr)).toEqual(expectedResult);
    });
  });
});
