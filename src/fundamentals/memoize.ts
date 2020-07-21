export function memoize(fn: Function) {
  const cache = {};

  return function(...args) {
    if (!cache[args.toString()]) {
      cache[args.toString()] = fn.apply(this, args);
    }

    return cache[args.toString()];
  }
}
