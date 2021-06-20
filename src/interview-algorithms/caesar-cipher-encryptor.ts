export function caesarCipherEncryptor(string: string, key: number): string {
  const newLetters = [];
  const newKey = key % 26;

  for (const letter of string) {
    const newLetterCode = letter.charCodeAt(0) + newKey;
    const newLetter = newLetterCode <= 122
      ? String.fromCharCode(newLetterCode)
      : String.fromCharCode(96 + (newLetterCode % 122));
    newLetters.push(newLetter);
  }

  return newLetters.join('');
}

export function caesarCipherEncryptor2(string: string, key: number): string {
  function getNewLetter(letter: string, key: number) {
    const newLetterCode = letter.charCodeAt(0) + key;
    return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
  }

  const newLetters = [];
  const newKey = key % 26;

  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }

  return newLetters.join('');
}

export function caesarCipherEncryptor3(string: string, key: number): string {
  const alphabet = 'abcdefghigklmnopqrstuvwxyz'.split('');

  const letterToNumMap = alphabet.reduce(
    (acc: {[key: string]: number}, current: string, index: number) => (acc[current] = index, acc), {}
  );
  const numToLetterMap = alphabet.reduce(
    (acc: {[key: number]: string}, current: string, index: number) => (acc[index] = current, acc), {}
  );

  return string.split('').map(letter => {
    const numOrder = letterToNumMap[letter];
    return  numToLetterMap[(numOrder + key) % alphabet.length];
  }).join('')
}
