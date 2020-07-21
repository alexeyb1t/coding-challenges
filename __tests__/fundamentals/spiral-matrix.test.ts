import {spiralMatrix} from "../../src/fundamentals/spiral-matrix";

describe('Spiral Matrix', () => {
  it('should return spiral matrix', () => {
    const n = 2;
    const expectedResult = [[1, 2], [4, 3]];

    expect(spiralMatrix(n)).toEqual(expectedResult);
  });

  it('should return spiral matrix', () => {
    const n = 3;
    const expectedResult = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];

    expect(spiralMatrix(n)).toEqual(expectedResult);
  });
});
