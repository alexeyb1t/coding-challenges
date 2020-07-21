import {removeDups} from "../../src/codewars/remove-dups";

describe('Remove dups', () => {
  it('should remove duplicates', () => {
    const original = [1, 2, 3, 3, 4, 5, 5, 6];
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(removeDups(original)).toEqual(expectedResult);
  });
});
