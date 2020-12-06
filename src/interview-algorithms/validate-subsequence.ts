export function validateSubsequence(array: number[], sequence: number[]): boolean {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx += 1;
    }
    arrIdx += 1;
  }

  return seqIdx === sequence.length;
}

export function validateSubsequence2(array: number[], sequence: number[]): boolean {
  let count = 0;
  let sequenceIndex = 0;
  let sequenceItem = sequence[sequenceIndex];

  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    if (num === sequenceItem) {
      count += 1;
      sequenceIndex += 1;
      sequenceItem = sequence[sequenceIndex];
    }

    if (count === sequence.length) {
      break;
    }
  }

  return count === sequence.length;
}
