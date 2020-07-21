import {reverseInt} from "../../src/fundamentals/reverseint";

describe("Reverseint", () => {
  it("should return reverset number", () => {
    const int = 51;
    const expectedResult = 15;

    expect(reverseInt(int)).toEqual(expectedResult);
  });

  it("should return reverset number", () => {
    const int = 981;
    const expectedResult = 189;

    expect(reverseInt(int)).toEqual(expectedResult);
  });

  it("should return reverset number", () => {
    const int = 500;
    const expectedResult = 5;

    expect(reverseInt(int)).toEqual(expectedResult);
  });

  it("should return reverset number", () => {
    const int = -15;
    const expectedResult = -51;

    expect(reverseInt(int)).toEqual(expectedResult);
  });

  it("should return reverset number", () => {
    const int = -90;
    const expectedResult = -9;

    expect(reverseInt(int)).toEqual(expectedResult);
  });
});
