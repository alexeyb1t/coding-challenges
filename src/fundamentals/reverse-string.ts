export function reverseString(str: string): string {
  return str.split('').reduce((acc, current) => (current + acc), '');
}

export function reverseString1(str: string): string {
  return str.split('').reverse().join('');
}

export function reverseString2(str: string) {
  let reversedStr = '';

  for (let current of str) {
    reversedStr = current + reversedStr;
  }

  return reversedStr;
}

export function reverseStrin3(str: string): string {
  const stack = [];

  for (let i = str.length - 1; i >= 0; i--) {
    stack.push(str[i]);
  }

  return stack.join('');
}

export function reverseString4(str: string): string {
  const stack = [];
  const strArr = str.split('');

  while (stack.length !== str.length) {
    stack.push(strArr.pop());
  }

  return stack.join('');
}
