//1.4 Palindrome Permutation
//given a string, to check if it is a permutation of a palindrome
//palindrome is a word or phrase that is the same forwards and backwards
//permutation is a rearrangement of letters
//palindrome does not need to be limited to just dictionary words
//can ignore casing and non-letter characters

//O(n) time and O(n) space
function isPalindromePermutation (string) {
    let oddFreqCount = 0;
    const freq = {};

    for (const char of string) {
        //only runs if char is an english letter
        //skip spaces
        if (char.toLowerCase() != char.toUpperCase()) {
            freq[char] ? freq[char]++ : freq[char] = 1;
            (freq[char] % 2 === 0) ? oddFreqCount-- : oddFreqCount++;
        }
    }
    return oddFreqCount <= 1
}


//another solution
function PalinPermutation(str) {
    const sanitized = str.toUpperCase().split(" ").join("");
    const freq = new Map();

    for (let i = 0; i < sanitized.length; i++) {
        const char = sanitized.charAt(i);
        const prevFreq = freq.get(char) || 0;
        freq.set(char, prevFreq + 1);
    }

    let oddCount = 0;
    for (let char of freq) {
        if (char[1] % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount < 2;
}

console.log(PalinPermutation("Tact Coa")) //true
console.log(PalinPermutation("Tact boa")) //false


module.exports = replaceSpaces
