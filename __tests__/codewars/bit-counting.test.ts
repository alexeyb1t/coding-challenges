import { countBits } from "../../src/codewars/bit-counting";

describe('Bit counting', () => {
  it('should return the number of bits', function() {
    expect(countBits(0)).toEqual(0);
    expect(countBits(4)).toEqual(1);
    expect(countBits(7)).toEqual(3);
    expect(countBits(9)).toEqual(2);
    expect(countBits(10)).toEqual(2);
  });
});
