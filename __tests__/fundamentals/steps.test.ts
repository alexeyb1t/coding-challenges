import {steps} from "../../src/fundamentals/steps";

describe('Steps', () => {
  it('should return a string with steps', () => {
    const num = 2;
    const expectedResult = ['*', '**'];

    expect(steps(num)).toEqual(expectedResult);
  });

  it('should return a string with steps', () => {
    const num = 3;
    const expectedResult = ['*', '**', '***'];

    expect(steps(num)).toEqual(expectedResult);
  });

  it('should return a string with steps', () => {
    const num = 4;
    const expectedResult = ['*', '**', '***', '****'];

    expect(steps(num)).toEqual(expectedResult);
  });
});
