export function vowels(str: string): number {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

vowels('Some String');

export function vowels1(str: string): number {
  return str.split('').reduce((acc, current) => {
    if (current.match(/[aeiou]/gi)) {
      acc += 1;
    }
    return acc;
  }, 0);
}
