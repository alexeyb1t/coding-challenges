/**
 * Given an array (arr) as an argument complete the function
 * countSmileys that should return the total number of smiling faces.
 * Rules for a smiling face:
 * - Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
 * - A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
 * - Every smiling face must have a smiling mouth that should be marked with either ) or D.
 * No additional characters are allowed except for those mentioned.
 * Valid smiley face examples:
 * :) :D ;-D :~)
 * Invalid smiley faces:
 * ;( :> :} :] 
 */

export function countSmileys(arr: string[]): number {
  const eyes = [':', ';'];
  const noses = ['-', '~'];
  const smiles = [')', 'D'];

  return arr.filter(smileItem => (
    smileItem.length === 2 ? (
      eyes.indexOf(smileItem[0]) > -1 &&
      smiles.indexOf(smileItem[1]) > -1
    ) : (
        eyes.indexOf(smileItem[0]) > -1 &&
        noses.indexOf(smileItem[1]) > -1 &&
        smiles.indexOf(smileItem[2]) > -1
      )
  )).length;
}
