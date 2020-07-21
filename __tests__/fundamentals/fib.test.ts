import {fib} from "../../src/fundamentals/fib";

describe('Fib', () => {
  it('should return a fibonacci number by index', () => {
    const n = 4;
    const expectedResult = 3;

    expect(fib(n)).toEqual(expectedResult);
  });
});
