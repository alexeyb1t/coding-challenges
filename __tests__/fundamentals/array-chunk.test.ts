import {arrayChunk} from "../../src/fundamentals/array-chunk";

describe('Array chunk', () => {
  it('should return an array of arrays where each subarray is of length size', () => {
    const arr = [1, 2, 3, 4];
    const size = 2;
    const expectedResult = [[1, 2], [3, 4]];

    expect(arrayChunk(arr, size)).toEqual(expectedResult);
  });

  it('should return an array of arrays where each subarray is of length size', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 2;
    const expectedResult = [[1, 2], [3, 4], [5]];

    expect(arrayChunk(arr, size)).toEqual(expectedResult);
  });

  it('should return an array of arrays where each subarray is of length size', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const size = 3;
    const expectedResult = [[1, 2, 3], [4, 5, 6], [7, 8]];

    expect(arrayChunk(arr, size)).toEqual(expectedResult);
  });

  it('should return an array of arrays where each subarray is of length size', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 4;
    const expectedResult = [[1, 2, 3, 4], [5]];

    expect(arrayChunk(arr, size)).toEqual(expectedResult);
  });

  it('should return an array of arrays where each subarray is of length size', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 10;
    const expectedResult = [[1, 2, 3, 4, 5]];

    expect(arrayChunk(arr, size)).toEqual(expectedResult);
  });
});
