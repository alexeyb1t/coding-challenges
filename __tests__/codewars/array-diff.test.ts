import {arrayDiff} from "../../src/codewars/array-diff";

describe("ArrayDiff", () => {
  it("should remove all occurrences", () => {
    expect(arrayDiff([1, 2, 2, 2, 3], [2])).toEqual([1, 3]);
  });
});
