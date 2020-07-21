export function maxChar(str: string): string {
  const dictionary = {};

  for (let current of str) {
    dictionary[current] = dictionary[current] ? dictionary[current] + 1 : 1;
  }

  let max = dictionary[str[0]];
  let maxProp = str[0];
  for (let i in dictionary) {
    if (dictionary.hasOwnProperty(i)) {
      if (dictionary[i] > max) {
        max = dictionary[i];
        maxProp = i;
      }
    }
  }

  return maxProp;
}

