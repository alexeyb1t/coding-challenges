export function anagram(first: string, second: string): boolean {
  const cleanString = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
  return cleanString(first) === cleanString(second);
}

export function anagram1(first: string, second: string): boolean {
  const firstHash = first
    .toLowerCase()
    .split('')
    .filter(i => i.match(/[a-z]/i))
    .reduce((acc, current) => {
      acc[current] = acc[current] + 1 || 1;
      return acc;
    }, {});

  const secondHash = second
    .toLowerCase()
    .split('')
    .filter(i => i.match(/[a-z]/i))
    .reduce((acc, current) => {
      acc[current] = acc[current] + 1 || 1;
      return acc;
    }, {});

  return Object.keys(firstHash).every(key => firstHash[key] === secondHash[key]);
}
