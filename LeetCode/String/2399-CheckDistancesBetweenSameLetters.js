//2399. Check Distances Between Same Letters
//given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice
//also given a 0-indexed integer array distance of length 26
//each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25)
//in a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]
//if the ith letter does not appear in s, then distance[i] can be ignored
//return true if s is a well-spaced string, otherwise return false

//Approach:
//using hash map
var checkDistance = (s, distance) => {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            //calculating distance
            let diff = i - map[s[i]] - 1;
            let char = s[i].charCodeAt() - 97;

            //un-matching distance
            if (distance[char] !== diff) return false;
        } else {
            map[s[i]] = i;
        }
    }
    
    return true;
}
checkDistance(s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //true
//a b a c c b || distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//^
//map = {
//  a: 0,
//}

//a b a c c b || distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//  ^
//map = {
//  a: 0,
//  b: 1,
//}

//a b a c c b || distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//    ^                      ^
//a is already in map -> diff = 2 - map[a] - 1 = 2 - 0 - 1 = 1
//                       char = a.charCodeAt() - 97 = 0
//map = {
//  a: 0, <-
//  b: 1,
//}
//distance = diff -> true

//a b a c c b || distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//      ^                     
//map = {
//  a: 0,
//  b: 1,
//  c: 3
//}
//distance = diff -> true

//a b a c c b || distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//        ^                      ^
//c is already in map -> diff = 4 - map[c] - 1 = 4 - 3 - 1 = 0
//                       char = c.charCodeAt() - 97 = 2                
//map = {
//  a: 0,
//  b: 1,
//  c: 3 <-
//}
//distance = diff -> true

//a b a c c b || distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//          ^                  ^
//b is already in map -> diff = 5 - map[b] - 1 = 5 - 1 - 1 = 3
//                       char = b.charCodeAt() - 97 = 1                
//map = {
//  a: 0,
//  b: 1, <-
//  c: 3 
//}
//distance = diff -> true

//True

checkDistance(s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //false
