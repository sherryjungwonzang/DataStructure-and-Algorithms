//395. Longest Substring With At Least K Repeating Characters
//given a string s and an integer k
//return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k
//if no such substring exists, return 0

//Approach:
//using recursion
var kRepeatingChars = (string, k) => {
    //base case
    if (!string || !string.length) return 0;

    let frequency = {};

    //checking frequency
    for (let char of string) frequency[char] = frequency[char] + 1 || 1;

    //checking substring
    for (let i = 0; i < string.length; i++) {
        let curr = string[i];

        if (frequency[curr] < k) {
            return Math.max(longestSubstring(string.slice(0, i), k), longestSubstring(string.slice(i + 1), k));
        }
    }

    return string.length;
}
kRepeatingChars(string = "aaabb", k = 3); //3 - 'aaa'
//frequency = { 
//  a: 3,
//  b: 2
//}

//a a a b b
//^ ^ ^ 
//curr = a -> frequency: 3 = k

//a a a b b
//      ^  
//curr = b -> frequency: 2 < k
//max(recurse(slice(0, 3), 3), recurse(slice(4), 3)) => recurse('aaa', 3), recurse('b', 3)

//recurse('aaa', 3)
//frequency = { a: 3 }
// a a a
// ^
//curr = a -> frequency: 3 = k
//return 3

//recurse('b', 3)
//frequency = { b: 1 }
// b
// ^
//curr = b -> frequency: 1 < k
//max(recurse(slice(0, 1), 3), recurse(slice(2), 3)) => recurse('', 3), recurse('', 3)

//recurse(slice(2), 3)) => recurse('', 3), recurse('', 3) =  0

//back to max(recurse('aaa', 3), recurse('b', 3)) = max(3, 0) = 3
//3

kRepeatingChars(string = "ababbc", k = 2); //5 - 'ababb'
//frequency = { 
//  a: 2,
//  b: 3,
//  c: 1
//}

// a b a b b c
// ^
//curr = a -> frequency: 2 = k

// a b a b b c
//   ^
//curr = b -> frequency: 3 > k

// a b a b b c
//           ^
//curr = c -> frequency: 1 < k
//max(recurse(slice(0, 5), 2), recurse(slice(6), 2)) => recurse('ababb', 2), recurse('', 2)

//recurse('ababb', 2)
//frequency = { 
//  a: 2,
//  b: 3,
//}

// a b a b b
// ^
//curr = a -> frequency: 2 = k

// a b a b b
//   ^
//curr = b -> frequency: 3 > k
//return 5

//back to recurse('ababb', 2), recurse('', 2) = max(5, 0) = 5
//5
