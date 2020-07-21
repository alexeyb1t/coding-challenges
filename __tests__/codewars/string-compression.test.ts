import {stringCompression} from "../../src/codewars/string-compression";

describe('String compression', () => {
  it('should compress the repeated chars', function () {
    const original = 'aabcccccaaa';
    const expectedResult = 'a2b1c5a3';
    expect(stringCompression(original)).toEqual(expectedResult);
  });

  it('should return the original string if the compressed one is the same length as the original', function () {
    const original = 'abc';
    const expectedResult = 'abc';
    expect(stringCompression(original)).toEqual(expectedResult);
  });
});
