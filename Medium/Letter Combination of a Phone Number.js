//Letter Combination of a Phone Number
//goven a string containing digits from 2-9 inclusive
//return all possible letter combinations
const letterCombinations = (digits) => {
    if (digits === null || digits.length === 0) return [];

    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    
    const res = []; //array
    const combi = (i, s) => {
        if (i === digits.length) {
            res.push(s);
            return;
        }

        for (const c of map[digits[i]]) {
            combi(i + 1, s + c);
        }
    };

    combi(0, '');
    return res;
}
