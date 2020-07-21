import { frogJump } from "../../src/codewars/frog-jump";

describe("FrogJump", () => {
  it("should return frog steps", function () {
    const currentPosition = 10;
    const resultPosition = 85;
    const step = 30;
    const expectedResult = 3;
    expect(frogJump(currentPosition, resultPosition, step)).toEqual(expectedResult);
  });
});
