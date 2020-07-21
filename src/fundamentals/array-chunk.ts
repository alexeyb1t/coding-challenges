export function arrayChunk(numbers: number[], size: number): number[][] {
  const chunked = [];
  let index = 0;

  while (index < numbers.length) {
    chunked.push(numbers.slice(index, index + size));
    index += size;
  }

  return chunked;
}

export function arrayChunk2(numbers: number[], size: number): number[][] {
  return numbers.reduce((acc, current) => {
    const lastChunk = acc[acc.length - 1];

    if (!lastChunk || lastChunk.length === size) {
      acc.push([current]);
    } else {
      lastChunk.push(current);
    }

    return acc;
  }, []);
}

export function arrayChunk1(numbers: number[], size: number): number[][] {
  const chunked = [];

  numbers.forEach(num => {
    const lastChunk = chunked[chunked.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      chunked.push([num]);
    } else {
      lastChunk.push(num);
    }
  });

  return chunked;
}
