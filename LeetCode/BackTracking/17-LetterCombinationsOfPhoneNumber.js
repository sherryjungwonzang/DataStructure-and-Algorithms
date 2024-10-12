//17. Letter combinations of a phone number
//given a string containing digits from 2-9 inclusive
//return all possible letter combinations that the number could represent
//return the answer in any order
//a mapping of digits to letters - just like on the telephone buttons - is given
//note that 1 does not map to any letters

//  1     2     3
//       abc   def

//  4     5     6
// ghi   jkl   mno

//  7     8     9
//pqrs   tuv   wxyz

//  *     0     #
//  +     -     ^

//Approach:
//using recursion with backtracking
var letterCombinations = (digits, start = 0) => {
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    //base case
    if (digits === "") return [];
    if (start >= digits.length) return [''];

    let digit = digits[start];
    let letters = map[digit];
    let combinations = [];

    //recursive calls
    let suffixCombinations = letterCombinations(digits, start + 1);

    //combinin letters
    for (let letter of letters) {
        for (let suffix of suffixCombinations) {
            combinations.push(letter + suffix);
        }
    }

    return combinations;
}
letterCombinations("23"); //["ad","ae","af","bd","be","bf","cd","ce","cf"]

letterCombinations(""); //[]

letterCombinations("2"); //["a","b","c"]
