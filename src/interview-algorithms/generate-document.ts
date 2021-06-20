export function generateDocument(characters: string, document: string): boolean {
  const createCounts = (str: string) => {
    return str.split('').reduce((acc: {[key: string]: number}, current: string) => {
      if (acc[current] === undefined) {
        acc[current] = 1;
      } else {
        acc[current] += 1;
      }
      return acc;
    }, {});
  };

  const documentCharCounts = createCounts(document);
  const characterCounts = createCounts(characters);

  return document.split('').every(letter => {
    return characterCounts[letter] >= documentCharCounts[letter];
  });
}

export function generateDocument2(characters: string, document: string): boolean {
  function countCharacterFrequency(character: string, target: string) {
    let frequency = 0;

    for (const char of target) {
      if (char === character) {
        frequency += 1;
      }
    }

    return frequency;
  }

  for (const character of document) {
    const documentFrequency = countCharacterFrequency(character, document);
    const charactersFrequency = countCharacterFrequency(character, characters);

    if (documentFrequency > charactersFrequency) {
      return false;
    }
  }

  return true;
}
