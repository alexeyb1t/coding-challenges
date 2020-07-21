import {reverseString} from "../../src/fundamentals/reverse-string";

describe("Reverse String", () => {
  it("should return reversed string", () => {
    const sourceStr = 'abcdefg';
    const expectedResult = 'gfedcba';

    expect(reverseString(sourceStr)).toEqual(expectedResult);
  });
});
