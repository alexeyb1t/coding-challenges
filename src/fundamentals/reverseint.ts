export function reverseInt(int: number): number {
  return Math.sign(int) * parseInt(int.toString().split('').reverse().join(''));
}

reverseInt(500);
