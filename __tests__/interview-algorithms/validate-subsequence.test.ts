import {validateSubsequence} from "../../src/interview-algorithms/validate-subsequence";

describe('Validate subsequence', () => {
  describe('The second array is a subsequence of the first array', () => {
    it('should return true', () => {
      const array = [5, 1, 22, 25, 6, -1, 8, 10];
      const sequence = [1, 6, -1, 10];

      expect(validateSubsequence(array, sequence)).toEqual(true);
    });
  });

  describe('The second array is not a subsequence of the first array', () => {
    it('should return false', () => {
      const array = [5, 1, 22, 25, 6, -1, 8, 10];
      const sequence = [100, 100, 100, 100];

      expect(validateSubsequence(array, sequence)).toEqual(false);
    });
  });
});
