export function palindrome(str: string): boolean {
  return str.split('').every((current, i) => (current === str[str.length - i - 1]));
}


export function palindrome1(str: string): boolean {
  return str === str.split('').reverse().join('');
}
