import {consonantValue} from "../../src/codewars/consonant-value";

describe('Bit counting', () => {
  it('should return the number of bits', () => {
    expect(consonantValue('zodiac')).toEqual(26);
    expect(consonantValue('chruschtschov')).toEqual(80);
    expect(consonantValue('khrushchev')).toEqual(38);
    expect(consonantValue('strength')).toEqual(57);
    expect(consonantValue('catchphrase')).toEqual(73);
    expect(consonantValue('mischtschenkoana')).toEqual(80);
  });
});
