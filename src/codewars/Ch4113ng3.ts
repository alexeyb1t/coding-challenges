/**
 * Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g.
 * "Fundamentals" --> "Fund4m3nt41s"
 */
export function nerdify(txt: string) {
    return txt.replace(/[aA]/g, '4').replace(/[eE]/, '3').replace(/[l]/, '1');
}

export function nerdify2(txt: string): string {
    const nerdLetters = { "A": "4", "a": "4", "E": "3", "e": "3", "l": "1" };
    return txt.replace(/[AaEel]/g, letter => nerdLetters[letter]);
}

export function nerdify3(txt){
    return txt.replace(/[aelAE]/g, a => ({'a': 4, 'e': 3, 'l':1 }[a.toLowerCase()]));
}
