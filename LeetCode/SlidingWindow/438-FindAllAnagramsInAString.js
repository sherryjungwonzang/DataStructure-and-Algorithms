//438. Find all anagrams in a string
//given two strings s and p
//return an array of all the start indices of p's anagrams in s
//you may return the answer in any order
//an anagram is a word or phrase formed by rearranging the letters of a different word or phrase
//typically using all the original letters exactly once

//Approach:
//using two pointers and sliding window
var allAnagramsInString = (s, p) => {
    //base case
    if (!s || s.length < p.length) return [];

    let map = {}; //for frequency
    let count = 0;
    let res = [];
    let start = 0;
    let end = 0;

    //populating frequency
    for (let char of p) {
        if (map[char] === undefined) count++;
        map[char] = (map[char] || 0) + 1;
    }

    //sliding window
    while (end <= s.length) {
        //current character
        let endChar = s[end];

        if (map[endChar] !== undefined) {
            map[endChar] -= 1;

            if (map[endChar] === 0) count--;
        }
        end++;

        //check valid anagram or not
        //move sliding window to right
        while (count === 0) {
            let startChar = s[start];

            if (map[startChar] !== undefined) {
                map[startChar] += 1;

                if (map[startChar] > 0) count++;
            }

            //valid anagram - add start index to res
            if (end - start === p.length) res.push(start);
            start++; 
        }
    }
    return res;
}
//TC: O(S + P)
//SC: O(1)
allAnagramsInString(s = "cbaebabacd", p = "abc"); //[0, 6]
//The substring with start index = 0 is "cba", which is an anagram of "abc"
//The substring with start index = 6 is "bac", which is an anagram of "abc"

//map = { a: 1 -> 0 -> -1 -> -2 -> -1 -> 0
//        b: 1 -> 0 -> -1 -> -2 -> -1 -> 0 -> 1
//        c: 1 -> 0 -> 1 -> 0
//}

//s = "c b a e b a b a c d"
//     s
//     e

//count = 3 -> 2

//     s
//       e
//count = 3 -> 2 -> 1

//     s
//         e
//count = 3 -> 2 -> 1 -> 0 -> 1
//res = [ 0 ] -> 3-0 = p.length

//       s
//           e
//count = 3 -> 2 -> 1 -> 0 -> 1

//       s
//              e
//count = 3 -> 2 -> 1 -> 0 -> 1

//       s
//                 e
//count = 3 -> 2 -> 1 -> 0 -> 1

//       s
//                    e
//count = 3 -> 2 -> 1 -> 0 -> 1

//       s
//                       e
//count = 3 -> 2 -> 1 -> 0 -> 1 -> 0

//       s
//                          e
//count = 3 -> 2 -> 1 -> 0 -> 1 -> 0

//          s
//                          e
//count = 3 -> 2 -> 1 -> 0 -> 1 -> 0

//             s
//                          e
//count = 3 -> 2 -> 1 -> 0 -> 1 -> 0

//                s
//                          e
//count = 3 -> 2 -> 1 -> 0 -> 1 -> 0

//                   s
//                          e
//count = 3 -> 2 -> 1 -> 0 -> 1 -> 0

//                      s
//                          e
//count = 3 -> 2 -> 1 -> 0 -> 1 -> 0 -> 1
//res = [ 0, 6 ] -> 9-6 = p.length

allAnagramsInString(s = "abab", p = "ab"); //[0,1,2]
//The substring with start index = 0 is "ab", which is an anagram of "ab"
//The substring with start index = 1 is "ba", which is an anagram of "ab"
//The substring with start index = 2 is "ab", which is an anagram of "ab"
