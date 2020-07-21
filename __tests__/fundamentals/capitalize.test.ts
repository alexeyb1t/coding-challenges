import {capitalize} from "../../src/fundamentals/capitalize";

describe('Capitalize', () => {
  describe('With upper case letters', () => {
    it('should return capitalized', () => {
      const source = 'SOME CAPITAL STRING';
      const expectedResult = 'Some Capital String';

      expect(capitalize(source)).toEqual(expectedResult);
    });
  });

  describe('With lower case letters', () => {
    it('should return capitalized', () => {
      const source = 'some capital string';
      const expectedResult = 'Some Capital String';

      expect(capitalize(source)).toEqual(expectedResult);
    });
  });

  describe('With special chars', () => {
    it('should return capitalized with special chars', () => {
      const source = 'Some, capital string!';
      const expectedResult = 'Some, Capital String!';

      expect(capitalize(source)).toEqual(expectedResult);
    });
  });
});
