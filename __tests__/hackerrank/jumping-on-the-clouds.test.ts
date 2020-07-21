import { jumpingOnTheClouds } from '../../src/hackerrank/jumping-on-the-clouds';

describe("Sock Merchant", () => {
  it('should return the minimum amount of jumps', () => {
    const clouds = [0, 0, 1, 0, 0, 1, 0];
    expect(jumpingOnTheClouds(clouds)).toEqual(4);
  });

  it('should return the minimum amount of jumps', () => {
    const clouds = [0, 0, 0, 0, 1, 0];
    expect(jumpingOnTheClouds(clouds)).toEqual(3);
  });

  it('should return the minimum amount of jumps', () => {
    const clouds = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0];
    expect(jumpingOnTheClouds(clouds)).toEqual(6);
  });
});
