import {RestoreIpAddress} from "../../src/codewars/restore-ip-address";

describe('RestoreIpAddress', () => {
  describe('Empty string', () => {
    it('should return an empty string', () => {
      const ipAddress = '';
      const expectedResult = [];

      expect(RestoreIpAddress.restoreIpAddress(ipAddress)).toEqual(expectedResult);
    });
  });

  describe('With null', () => {
    it('should return an empty array', () => {
      const ipAddress = null;
      const expectedResult = [];

      expect(RestoreIpAddress.restoreIpAddress(ipAddress)).toEqual(expectedResult);
    });
  });

  describe('With valid ip string', () => {
    it('should return an array of possible ip addresses', () => {
      const ipAddress = '25525511135';
      const expectedResult = ['255.255.11.135', '255.255.111.35'];

      expect(RestoreIpAddress.restoreIpAddress(ipAddress)).toEqual(expectedResult);
    });

    it('should return an array of possible ip addresses', () => {
      const ipAddress = '0000';
      const expectedResult = ['0.0.0.0'];

      expect(RestoreIpAddress.restoreIpAddress(ipAddress)).toEqual(expectedResult);
    });
  });
});
