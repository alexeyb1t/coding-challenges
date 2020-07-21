import {vowels} from "../../src/fundamentals/vowels";

describe('Vowels', () => {
  it('should count the vowels', () => {
    const source = 'Hi there!';
    const expectedResult = 3;

    expect(vowels(source)).toEqual(expectedResult);
  });

  it('should count the vowels', () => {
    const source = 'BBB';
    const expectedResult = 0;

    expect(vowels(source)).toEqual(expectedResult);
  });
});
