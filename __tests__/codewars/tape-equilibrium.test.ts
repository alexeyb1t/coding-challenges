import {tapeEquilibrium} from "../../src/codewars/tape-equilibrium";

describe("TapeEquilibrium", () => {
  it("should return the minimum of the difference between the two parts of an array", () => {
    const numbers = [3, 1, 2, 4, 3];
    const expectedResult = 1;
    expect(tapeEquilibrium(numbers)).toEqual(expectedResult);
  });
});
