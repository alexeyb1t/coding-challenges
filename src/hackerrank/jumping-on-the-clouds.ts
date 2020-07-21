export function jumpingOnTheClouds(clouds: number[]): number {
  let stepsCount = 0;
  let currentPosition = 0;
  const thunderheadCloud = 1;

  clouds.forEach((cloudItem, index) => {
    if (currentPosition === index) {
      if (clouds[index + 2] !== thunderheadCloud) {
        if (clouds.length < index + 2) {
          currentPosition = index + 1;
        } else {
          currentPosition = index + 2;
          stepsCount += 1;
        }
      } else {
        currentPosition = index + 1;
        stepsCount += 1;
      }
    }
  });

  return stepsCount;
}
