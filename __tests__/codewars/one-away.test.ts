import {oneAway} from "../../src/codewars/one-away";

describe('One Away', () => {
  it('should check if one char is absent', () => {
    expect(oneAway('pale', 'ple')).toEqual(true);
    expect(oneAway('pales', 'pale')).toEqual(true);
    expect(oneAway('pale', 'bale')).toEqual(true);
    expect(oneAway('pale', 'bake')).toEqual(false);
  });
});
