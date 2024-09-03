//1208. Get Equal Substrings Within Budget
//given two strings s and t of the same length and an integer maxCost
//want to change s to t
//changing the i_th character of s to i_th character of t costs |s[i] - t[i]|
//return the max length of a substring of s that can be changed to be the same as the corresponding substring of t 
//with a cost less than or equal to maxCost
//if there is no substring from s that can be changed to its corresponding substring from t, return 0

//Approach:
//using sliding window
var equalSubstrings = (s, t, maxCost) => {
    let n = s.length;
    let start = 0;
    let currCost = 0;
    let maxLen = 0;

    //sliding window
    for (let end = 0; end < n; end++) {
        currCost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end));

        //shrinking the window
        while (currCost > maxCost) {
            currCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));

            start++;
        }

        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}
//TC: O(n)
//SC: O(1)
equalSubstrings("abcd", "bcdf", 3); //3 -  "abc" of s can change to "bcd"
//start = 0
//currCost = 0
//maxLen = 0

//s = "a b c d" t = "b c d f" 
//     ^             ^
//     -
//currCost = 0 -> |97 - 98 = 1| = 1
//maxLen = 0 -> max(0, 0 - 0 + 1) = 1

//s = "a b c d" t = "b c d f" 
//       ^             ^
//     ---
//currCost = 0 -> 1 -> |98 - 99 = 1| = 2
//maxLen = 0 -> max(0, 0 - 0 + 1) = 1 -> (1, 1 - 0 + 1) = 2

//s = "a b c d" t = "b c d f" 
//         ^             ^
//     -----
//currCost = 0 -> 1 -> 2 -> |99 - 100 = 1| = 3
//maxLen = 0 -> max(0, 0 - 0 + 1) = 1 -> (1, 1 - 0 + 1) = 2 -> (2, 2 - 0 + 1) = 3

//s = "a b c d" t = "b c d f" 
//           ^             ^
//     -------
//currCost = 0 -> 1 -> 2 -> 3 -> |100 - 102 = 2| = 5 > maxCost -> |97 - 98 = 1| = 4
//start = 0 -> 1
//       -----
//maxLen = 0 -> max(0, 0 - 0 + 1) = 1 -> (1, 1 - 0 + 1) = 2 -> (2, 2 - 0 + 1) = 3 -> (3, 3 - 1 + 1) = 3

equalSubstrings("abcd", "cdef", 3); //1 - each character in s costs 2 to change to character in t

equalSubstrings("abcd", "acde", 0); //1 - cannot make any change
