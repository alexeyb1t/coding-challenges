/**
 Your goal in this kata is to implement an difference function,
 which subtracts one list from another.
 It should remove all values from list a, which are present in list b.
 Kata.ArrayDiff(new int[] {1, 2}, new int[] {1}) => new int[] {2}
 If a value is present in b, all of its occurrences must be removed from the other:
 Kata.ArrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2}) => new int[] {1, 3}
 */

export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(number => !b.includes(number));
}
