import { repeatedString } from '../../src/hackerrank/repeated-string';

describe("Sock Merchant", () => {
  it('should return an integer representing the number of occurrences of a', () => {
    const stringToRepeat = 'aba';
    const numberOfChars = 10;
    const expectedResult = 7;
    expect(repeatedString(stringToRepeat, numberOfChars)).toEqual(expectedResult);
  });

  it('should return an integer representing the number of occurrences of a', () => {
    const stringToRepeat = 'a';
    const numberOfChars = 1000000000000;
    const expectedResult = 1000000000000;
    expect(repeatedString(stringToRepeat, numberOfChars)).toEqual(expectedResult);
  });
});
