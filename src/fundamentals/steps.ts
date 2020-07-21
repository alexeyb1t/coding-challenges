export function steps(num: number): string[] {
  const result = [];
  for (let i = 1; i <= num; i++) {
    result.push(new Array(i).fill('*').join(''));
  }

  return result;
}

export function steps1(n: number): void {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

export function steps2(n: number, row: number, stairs: string = ''): void {
  if (n === row) {
    return;
  }

  if (n === stairs.length) {
    console.log(stairs);
    return steps2(n, row + 1);
  }

  if (stairs.length <= row) {
    stairs += '#'
  } else {
    stairs += ' ';
  }

  steps2(n, row, stairs);
}
