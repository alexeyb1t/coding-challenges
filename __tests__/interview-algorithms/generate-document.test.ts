import {generateDocument} from "../../src/interview-algorithms/generate-document";

describe('Generate document', () => {
  describe(`Frequency of unique chars in the characters string is greater than or equal
  to the frequency of unique chars in the document`, () => {
    it('should return true', () => {
      const characters = 'Bste!hetsi ogEAxpelrt x ';
      const document = 'AlgoExpert is the Best!';
      const expectedResult = true;

      expect(generateDocument(characters, document)).toEqual(expectedResult);
    });
  });

  describe(`Frequency of unique chars in the characters string is less than
  the frequency of unique chars in the document`, () => {
    it('should return false', () => {
      const characters = 'ogEAxpelrt x ';
      const document = 'AlgoExpert is the Best!';
      const expectedResult = false;

      expect(generateDocument(characters, document)).toEqual(expectedResult);
    });
  });
});
