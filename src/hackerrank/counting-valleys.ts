/**
 * If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

  _/\      _
     \    /
      \/\/
 He enters and leaves one valley.
 */

export function countingValleys(numberOfSteps: number, pathDescription: string): number {
  const uphill = 'U';
  const downhill = 'D';

  const seeLevels = [0];
  for (let i = 0; i < pathDescription.length; i++) {
    const currentItem = pathDescription[i];
    const lastSeeLevelItem = seeLevels[seeLevels.length - 1];

    if (lastSeeLevelItem != null) {
      if (currentItem === uphill) {
        seeLevels.push(lastSeeLevelItem + 1);
      } else if (currentItem === downhill) {
        seeLevels.push(lastSeeLevelItem - 1);
      }
    }
  }

  let valleysCount = 0;
  for (let i = 0; i < seeLevels.length; i++) {
    const currentItem = seeLevels[i];
    const previousSeeLevelItem = seeLevels[i - 1];
    if (previousSeeLevelItem < 0 && currentItem === 0) {
      valleysCount += 1;
    }
  }

  return valleysCount;
}
