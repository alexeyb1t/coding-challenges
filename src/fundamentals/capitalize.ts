export function capitalize(str: string): string {
  let result = str[0].toUpperCase();
  str = str.trim().toLowerCase();

  for (let i = 1; i < str.length; i++) {
    const previous = str[i - 1];

    if (previous === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

capitalize('SOME STring');

export function capitalize1(str: string): string {
  return str.trim().toLowerCase().split(' ').map(strItem => `${strItem[0].toUpperCase()}${strItem.slice(1)}`).join(' ');
}
