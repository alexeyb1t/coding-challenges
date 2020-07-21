export function fib(n: number): number {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

export function fib1(n: number): number {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const prePrevious = result[i - 2];
    const previous = result[i - 1];
    result.push(prePrevious + previous);
  }

  return result[n];
}
