import {nthFibonacci} from "../../src/interview-algorithms/nth-fibonacci";

describe('Nth fibonacci', () => {
  it('should return the nth fibonacci', () => {
    const n = 2;
    const expectedResult = 1;

    expect(nthFibonacci(n)).toEqual(expectedResult);
  });

  it('should return the nth fibonacci', () => {
    const n = 6;
    const expectedResult = 5;

    expect(nthFibonacci(n)).toEqual(expectedResult);
  });
});
