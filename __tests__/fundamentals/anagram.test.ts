import {anagram} from "../../src/fundamentals/anagram";

describe('Anagrams', () => {
  describe('When it is an anagram', () => {
    it('should return true', () => {
      const first = 'rail safety';
      const second = 'fairy tales';
      const expectedResult = true;

      expect(anagram(first, second)).toEqual(expectedResult);
    });

    describe('With upper case', () => {
      it('should return true', () => {
        const first = 'RAIL SAFETY';
        const second = 'fairy tales';
        const expectedResult = true;

        expect(anagram(first, second)).toEqual(expectedResult);
      });
    });

    describe('With special symbols', () => {
      it('should return true', () => {
        const first = 'RAIL! SAFETY!';
        const second = 'fairy tales';
        const expectedResult = true;

        expect(anagram(first, second)).toEqual(expectedResult);
      });
    });
  });

  describe('When it is not an anagram', () => {
    it('should return false', () => {
      const first = 'Is not an anagram';
      const second = 'Is not completly an anagram';
      const expectedResult = false;

      expect(anagram(first, second)).toEqual(expectedResult);
    });
  });

  describe('With different length', () => {
    it('should return false', () => {
      const first = 'RAIL! SAFETY!';
      const second = 'fairy tales sdfsdfsdfsd';
      const expectedResult = false;

      expect(anagram(first, second)).toEqual(expectedResult);
    });
  });
});
