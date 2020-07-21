import {urlify} from "../../src/codewars/urlify";

describe('URLify', () => {
  it('should replace all of the spaces in the string with the %20', () => {
    const url = 'Mr John Smith';
    const expectedResult = 'Mr%20John%20Smith';
    expect(urlify(url)).toEqual(expectedResult);
  });

  it('should handle replacing trailing spaces', () => {
    const url = '       Mr John Smith      ';
    const expectedResult = 'Mr%20John%20Smith';
    expect(urlify(url)).toEqual(expectedResult);
  });
});
