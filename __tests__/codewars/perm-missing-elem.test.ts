import {permMissingElem3} from "../../src/codewars/perm-missing-elem";

describe("PermMissingElem", () => {
  it("should find the missing element", function () {
    const expectedResult = 4;
    expect(permMissingElem3([2, 3, 1, 5])).toEqual(expectedResult);
  });
});
