export function removeDups(original: number[]): number[] {
  return original.filter((item, index, self) => self.indexOf(item) === index);
}
