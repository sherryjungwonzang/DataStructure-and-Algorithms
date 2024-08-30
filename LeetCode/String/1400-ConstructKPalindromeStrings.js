//1400. Construct K Palindrome Strings
//given a string s and an integer k
//return true if you can use all the characters in s to construct k palindrome strings or false otherwise

//Approach:
//using map

//palindrome cases:
//one char at the middle and the same sequences mirrored by both sides (abcba)
//two same chars at the middle and same mirrored sequences by both sides (abccba)
var constructKPalindromeStrings = (s, k) => {
    //base case
    if (s.length < k) return false;
    
    //to store char frequency
    let map = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = 1;
        else map[s[i]]++;
    }

    let arr = Object.values(map); //extract values from map
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) count++; //meaning not palindrome
    }

    if (count <= k) return true;
    return false;
}
constructKPalindromeStrings("annabelle", 2); //true - Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
//"a n n a b e l l e"
//map = { a: 2 
//        n: 2
//        b: 1
//        e: 2
//        l: 2
//}

//arr = [2, 2, 1, 2, 2]
//       ^
//2 % 2 = 0 -> continue
//2 % 2 = 0 -> continue
//1 % 2 != 0 -> count = 0 -> 1
//2 % 2 = 0 -> continue
//2 % 2 = 0 -> continue

//count = 1 <= k = 3 -> return true

constructKPalindromeStrings("leetcode", 3); //false - impossible to construct 3 palindromes using all characters of s
//"l e e t c o d e"
//map = { l: 1 
//        e: 3
//        t: 1
//        c: 1
//        o: 1
//        d: 1
//}

//arr = [1, 3, 1, 1, 1, 1]
//       ^
//1 % 2 != 0 -> count = 0 -> 1
//3 % 2 != 0 -> count = 0 -> 1 -> 2
//1 % 2 != 0 -> count = 0 -> 1 -> 2 -> 3
//1 % 2 != 0 -> count = 0 -> 1 -> 2 -> 3 -> 4
//1 % 2 != 0 -> count = 0 -> 1 -> 2 -> 3 -> 4 -> 5
//1 % 2 != 0 -> count = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

//count = 6 > k = 3 -> return false

constructKPalindromeStrings("true", 4); //true - the only possilbe solution is to put each character in a separate string
