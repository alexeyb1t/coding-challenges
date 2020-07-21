export function stringCompression(original: string): string {
  const compressed = [];
  let counter = 1;

  original.split('').forEach((currentChar, index, self) => {
    if (currentChar === self[index + 1]) {
      counter += 1;
    } else {
      compressed.push(`${currentChar}${counter}`);
      counter = 1;
    }
  });

  const result = compressed.join('');

  return original.length <= result.length ? original : result;
}

console.log(stringCompression('aaa'));
