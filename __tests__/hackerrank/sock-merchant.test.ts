import { sockMerchant } from '../../src/hackerrank/sock-merchant';

describe("Sock Merchant", () => {
  it('should return the number of pairs', () => {
    const numberOfSocks = 9;
    const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    expect(sockMerchant(numberOfSocks, socks)).toEqual(3);
  });
});
