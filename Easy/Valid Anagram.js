//Valid Anagram
//given two strings: s and t
//return true if t is an anagram of s
//anagram: a word or phrase formed by rearranging the letters of a different word of phrase
//using all the original letters exactly once

//Approach: Map
function isAnagram(s, t) {
    const map = {};
    
    s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
    t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);

    return Object.keys(map).every(k => map[k] === 0);
    //Object.keys(): returns an array whose elements are strings corresponding to the enumerable properties  
}

//Approach: Hashmap
var isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    let letters = {};

    //create hashmap for both words based on a counter
    for (let i = 0; i < s.length; i++) {
        letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1;
        letters[t[i]] = letters[t[i]] ? letters[t[i]] - 1 : -1;
    }

    for (let letter in letters) {
        //this check for duplicates
        //since if all letters are the same, we will end up with 0
        if (letters[letter] !== 0) return false;
    }
    return true;
}



//Approach: Sort
//sort both input and compare
var isAnagram = (s, t) => {
    return s.split('').sort().join('') == t.split('').sort().join('');
};
