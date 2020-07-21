import {maxChar} from "../../src/fundamentals/max-char";

describe('Max Char', () => {
  it('should return the character which appears most of the times', () => {
    const source = 'abcccccccccdef';
    const expectedResult = 'c';

    expect(maxChar(source)).toEqual(expectedResult);
  });

  it('should return the character which appears most of the times', () => {
    const source = 'abc 4f sdf 11111111';
    const expectedResult = '1';

    expect(maxChar(source)).toEqual(expectedResult);
  });
});
