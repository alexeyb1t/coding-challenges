export function nthFibonacci(n: number) {
  function fib(num) {
    if (num <= 1) {
      return num;
    }

    const hash = {};

    if (!hash[n]) {
      hash[n] = fib(num - 1) + fib(num - 2);
    }

    return hash[n];
  }

  return fib(n - 1);
}
