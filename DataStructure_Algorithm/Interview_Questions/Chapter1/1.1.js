//1.1 Is Unique
//implement an algorithm to determine if a string has all unique characters

//O(n) time and O(n) space
function isUnique(string) {
    const freq = {};

    for(const char of string) {
        if(freq[char]) {
            return false
        } else {
            freq[char] = true
        }
    }
    return true;
}

//O(n^2) time and O(1) space
function isUnique(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) return false
        }
    }
    return true;
}

module.exports = isUnique
