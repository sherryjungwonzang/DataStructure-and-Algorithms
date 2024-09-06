//387. First Unique Character In String
//given a string 's'
//find the first non-repeating character in it and return its index
//if it does not exist, return -1

//Approach:
//using map
var firstUniqueChar = (s) => {
    let map = {};

    for (let char of s) map[char] = (map[char] || 0) + 1;

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i; //the first index 
    }

    return -1;
}
firstUniqueChar("leetcode"); //0 - l's index
//map = {
//    l: 1.
//    e: 3,
//    t: 1,
//    c: 1,
//    o: 1,
//    d: 1,
//}

//i = 0 -> map[s[0]] = 1

firstUniqueChar("loveleetcode"); //2 - v's index
//map = {
//    l: 3.
//    o: 2,
//    v: 1,
//    e: 4,
//    t: 1,
//    c: 1,
//    d: 1,
//}

//i = 0 -> map[s[0]] != 1
//i = 1 -> map[s[1]] != 1
//i = 2 -> map[s[2]] = 1

firstUniqueChar("aabb"); //-1
