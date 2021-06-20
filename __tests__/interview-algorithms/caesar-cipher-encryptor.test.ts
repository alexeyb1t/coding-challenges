import {caesarCipherEncryptor} from "../../src/interview-algorithms/caesar-cipher-encryptor";

describe('Caesar Cipher Encryptor', () => {
  it('should return an encrypted string', () => {
    const str = 'xyz';
    const key = 2;
    const expectedResult = 'zab';

    expect(caesarCipherEncryptor(str, key)).toEqual(expectedResult);
  });
});
