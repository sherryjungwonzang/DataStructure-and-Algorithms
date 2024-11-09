//1446. Consecutive Characters
//the power of the string is the maximum length of a non-empty substring that contains only one unique character
//given a string s
//return the power of s

//Approach:
//using sliding windows
var consecutiveChars = (s) => {
    let power = 1;
    let start = 0;
    
    for (let end = 1; end < s.length; end++) {
        //resetting
        if (s[start] !== s[end]) start = end;

        //updating with the length
        power = Math.max(power, end - start + 1);
    }

    return power;
}
//TC: O(n)
//SC: O(1)
consecutiveChars("leetcode"); //2 - "ee"

consecutiveChars("abbcccddddeeeeedcba"); //5 - "eeeee"
// a b b c c c d d d d e e e e e d c b a
// -
// s s
//   e
//s != e -> resetting
//power = 1 

// a b b c c c d d d d e e e e e d c b a
// ---
//   s
//   e
//s = e
//power = 1 -> max(1, 1 - 1 + 1) = 1

// a b b c c c d d d d e e e e e d c b a
//   ---
//   s
//     e
//s = e
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2

// a b b c c c d d d d e e e e e d c b a
//     ---
//   s   s
//       e
//s != e -> resetting
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2

// a b b c c c d d d d e e e e e d c b a
//       -
//       s
//       e
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2

// a b b c c c d d d d e e e e e d c b a
//       ---
//       s
//         e
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2

// a b b c c c d d d d e e e e e d c b a
//       -----
//       s
//           e
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3

// a b b c c c d d d d e e e e e d c b a
//       -------
//       s     s
//             e
//s != e -> resetting
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3

// a b b c c c d d d d e e e e e d c b a
//             -
//             s
//             e
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3

// a b b c c c d d d d e e e e e d c b a
//             ----
//             s
//               e
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3

// a b b c c c d d d d e e e e e d c b a
//             -----
//             s
//                 e
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3 -> (3, 8 - 6 + 1) = 3

// a b b c c c d d d d e e e e e d c b a
//             -------
//             s
//                   e
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3 -> (3, 8 - 6 + 1) = 3 -> (3, 9 - 6 + 1) = 4

// a b b c c c d d d d e e e e e d c b a
//             ---------
//             s       s
//                     e
//s != e -> resetting
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3 -> (3, 8 - 6 + 1) = 3 -> (3, 9 - 6 + 1) = 4

// a b b c c c d d d d e e e e e d c b a
//                     -
//                     s
//                     e
//s = e
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3 -> (3, 8 - 6 + 1) = 3 -> (3, 9 - 6 + 1) = 4 -> (4, 10 -10 + 1) = 4

// a b b c c c d d d d e e e e e d c b a
//                     ---
//                     s
//                       e
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3 -> (3, 8 - 6 + 1) = 3 -> (3, 9 - 6 + 1) = 4 -> (4, 10 - 10 + 1) = 4 -> (4, 11 - 10 + 1) = 4

// a b b c c c d d d d e e e e e d c b a
//                     -----
//                     s
//                         e 
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3 -> (3, 8 - 6 + 1) = 3 -> (3, 9 - 6 + 1) = 4 -> (4, 10 - 10 + 1) = 4 -> (4, 11 - 10 + 1) = 4 -> (4, 12 - 10 + 1) = 4

// a b b c c c d d d d e e e e e d c b a
//                     -------
//                     s
//                           e 
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3 -> (3, 8 - 6 + 1) = 3 -> (3, 9 - 6 + 1) = 4 -> (4, 10 - 10 + 1) = 4 -> (4, 11 - 10 + 1) = 4 -> (4, 12 - 10 + 1) = 4
//-> (4, 13 - 10 + 1) = 4

// a b b c c c d d d d e e e e e d c b a
//                     ---------
//                     s
//                             e 
//s = e 
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3 -> (3, 8 - 6 + 1) = 3 -> (3, 9 - 6 + 1) = 4 -> (4, 10 - 10 + 1) = 4 -> (4, 11 - 10 + 1) = 4 -> (4, 12 - 10 + 1) = 4
//-> (4, 13 - 10 + 1) = 4 -> (4, 14 - 10 + 1) = 5

// a b b c c c d d d d e e e e e d c b a
//                     -----------
//                     s         s
//                               e 
//s != e -> resetting
//power = 1 -> max(1, 1 - 1 + 1) = 1 -> (1, 2 - 1 + 1) = 2 -> (2, 3 - 3 + 1) = 2 -> (2, 4 - 3 + 1) = 2 -> (2, 5 - 3 + 1) = 3 -> (3, 6 - 6 + 1) = 3 -> (3, 7 - 6 + 1) = 3 -> (3, 8 - 6 + 1) = 3 -> (3, 9 - 6 + 1) = 4 -> (4, 10 - 10 + 1) = 4 -> (4, 11 - 10 + 1) = 4 -> (4, 12 - 10 + 1) = 4
//-> (4, 13 - 10 + 1) = 4 -> (4, 14 - 10 + 1) = 5
//...
//power = 5
