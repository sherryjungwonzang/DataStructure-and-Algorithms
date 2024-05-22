//242. Valid Anagram
//given two strings 's' and 't'
//return true if an anagram of s and false otherwise
//anagram is a word or phrase formed by rearranging the letters of a different word or phrase

//Approach:
//using Hash map
//frequency map -  to store the frequency through s & update frequency map

//1) create a frequency map - with 's'
//2) checking strings in 't' with map(s)
//3) By decreasing the frequency, if frequency reaches 0 -> return true
var validAnagram = (s, t) => {
    //edge case
    if (s.length !== t.length) return false;

    //hash map
    let map = {};

    //checking with s
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];

        if (!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter]++;
        }
    }

    //comparing with t
    for (let i = 0; i < t.length; i++) {
        let letter = t[i];

        if (map[letter] === undefined) return false;

        if (map[letter] < 1) return false;

        map[letter]--; //when it finds the same letter between s and t
    }
    return true;
}
//TC:O(n + m) - n is that we create the hash table, m is for looping through 't'
//SC:O(n) - store all values of string 's' within hash table
validAnagram("anagram", "nagaram"); //true
//map = { a: 3, n: 1, g: 1, r: 1, m: 1 }
//comparing
//map = { a: 0, n: 0, g: 0, r: 0, m: 0 }
//true

validAnagram("rat", "car"); //false
//map = { r: 1, a: 1, t: 1 }
//comparing
//map = { r: 0, a: 0, t: 1 } | c is undefined
//false
