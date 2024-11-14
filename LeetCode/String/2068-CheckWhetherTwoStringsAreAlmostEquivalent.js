//2068. Check Whether Two Strings Are Almost Equivalent
//two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.
//given two strings word1 and word2, each of length n
//return true if word1 and word2 are almost equivalent, or false otherwise
//the frequency of a letter x is the number of times it occurs in the string

//Approach:
//using hash map
var areAlmostEquivalent = (word1, word2) => {
    let freq = {};

    //count frequencies
    for (let word of word1) freq[word] = (freq[word] || 0) + 1;
    for (let word of word2) freq[word] = (freq[word] || 0) - 1; //subtracting duplicates

    //check difference
    for (let char in freq) {
        if (Math.abs(freq[char]) > 3) return false;
    }

    return true;
}
areAlmostEquivalent(word1 = "aaaa", word2 = "bccb"); //false
//word1 = "a a a a"
//         ^
//freq = {
//  a: 1 -> 2 -> 3 -> 4
//}

//word2 = "b c c b"
//         ^
//freq = {
//  a: 1 -> 2 -> 3 -> 4
//  b: -1 -> -2
//  c: -1 -> -2
//}

//|4| > 3 -> false

areAlmostEquivalent(word1 = "abcdeef", word2 = "abaaacc"); //true

areAlmostEquivalent(word1 = "cccddabba", word2 = "babababab"); //true
//word1 = "c c c d d a b b a"
//         ^
//freq = {
//  c: 1 -> 2 -> 3
//  d: 1 -> 2
//  a: 1 -> 2
//  b: 1 -> 2
//}

//word2 = "b a b a b a b a b"
//         ^ ^ ^ ^ ^
//freq = {
//  c: 1 -> 2 -> 3
//  d: 1 -> 2
//  a: 1 -> 2 -> 1 -> 0 -> -1 -> -2
//  b: 1 -> 2 -> 1 -> 0 -> -1 -> -2 -> -3
//}

//|3| = 3 -> true
//|2| < 3 -> true
//|-2| < 3 -> true
//|-3| = 3 -> true
