//3090. Maximum Length Substring WIth Two Occurences
//given a string s
//return the max length of a substring such that it contains at most two occurrences of each character

//Approach:
//using sliding windows
var maxLenTwoOccurences = (s) => {
    let map = {};
    let maxLen = 0;
    let left = 0;

    //filling map
    for (let i = 0; i < s.length; i++) map[s[i]] = 0;

    //tracking frequency
    for (let right = 0; right < s.length; right++) {
        map[s[right]] += 1;

        //sliding window
        while (map[s[right]] > 2) {
            map[s[left]] -= 1;

            left++;
        }

        currLen = (right - left + 1);

        maxLen = Math.max(maxLen, currLen);
    }

    return maxLen;
}
maxLenTwoOccurences("bcbbbcba"); //4 - bcba
//map = {
//    b = 0
//    c = 0
//    a = 0
//}
//maxLen = 0

//"b c b b b c b a"
// R
// L
//map = {
//    b = 0 -> 1
//    c = 0
//    a = 0
//}
//currLen = 0 - 0 + 1 = 1 
//maxLen = 0 -> (0, 1) = 1

//"b c b b b c b a"
//   R
// L
//map = {
//    b = 0 -> 1
//    c = 0 -> 1
//    a = 0
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 1
//maxLen = 0 -> (0, 1) = 1 -> (1, 1) = 1

//"b c b b b c b a"
//     R
// L
//map = {
//    b = 0 -> 1 -> 2
//    c = 0 -> 1
//    a = 0
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 2 -> 2 - 0 + 1 = 3
//maxLen = 0 -> (0, 1) = 1 -> (1, 2) = 2 -> (2, 3) = 3

//"b c b b b c b a"
// -----
//       R
//   L
//   -----
//map = {
//    b = 0 -> 1 -> 2 -> 3| -> 2
//    c = 0 -> 1
//    a = 0
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 2 -> 2 - 0 + 1 = 3 -> 3 - 1 + 1 = 3
//maxLen = 0 -> (0, 1) = 1 -> (1, 2) = 2 -> (2, 3) = 3 -> (3, 3) = 3

//"b c b b b c b a"
//   -----
//         R
//     L
//     -----
//map = {
//    b = 0 -> 1 -> 2 -> 3| -> 2 -> 3
//    c = 0 -> 1 -> 0
//    a = 0
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 2 -> 2 - 0 + 1 = 3 -> 3 - 1 + 1 = 3 -> 4 - 2 + 1 = 3
//maxLen = 0 -> (0, 1) = 1 -> (1, 2) = 2 -> (2, 3) = 3 -> (3, 3) = 3 -> (3, 3) = 3

//"b c b b b c b a"
//     -----
//           R
//       L
//       -----
//map = {
//    b = 0 -> 1 -> 2 -> 3| -> 2 -> 3| -> 2
//    c = 0 -> 1 -> 0 -> 1
//    a = 0
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 2 -> 2 - 0 + 1 = 3 -> 3 - 1 + 1 = 3 -> 4 - 2 + 1 = 3 -> 5 - 3 + 1 = 3
//maxLen = 0 -> (0, 1) = 1 -> (1, 2) = 2 -> (2, 3) = 3 -> (3, 3) = 3 -> (3, 3) = 3 -> (3, 3) = 3

//"b c b b b c b a"
//       -----
//             R
//         L
//         -----
//map = {
//    b = 0 -> 1 -> 2 -> 3| -> 2 -> 3| -> 2 -> 3| -> 2
//    c = 0 -> 1 -> 0 -> 1
//    a = 0
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 2 -> 2 - 0 + 1 = 3 -> 3 - 1 + 1 = 3 -> 4 - 2 + 1 = 3 -> 5 - 3 + 1 = 3 -> 6 - 4 + 1 = 3
//maxLen = 0 -> (0, 1) = 1 -> (1, 2) = 2 -> (2, 3) = 3 -> (3, 3) = 3 -> (3, 3) = 3 -> (3, 3) = 3 -> (3, 3) = 3

//"b c b b b c b a"
//         -----
//               R
//         L
//         -------
//map = {
//    b = 0 -> 1 -> 2 -> 3| -> 2 -> 3| -> 2 -> 3| -> 2
//    c = 0 -> 1 -> 0 -> 1
//    a = 0 -> 1
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 2 -> 2 - 0 + 1 = 3 -> 3 - 1 + 1 = 3 -> 4 - 2 + 1 = 3 -> 5 - 3 + 1 = 3 -> 6 - 4 + 1 = 3 -> 7 - 4 + 1 = 4
//maxLen = 0 -> (0, 1) = 1 -> (1, 2) = 2 -> (2, 3) = 3 -> (3, 3) = 3 -> (3, 3) = 3 -> (3, 3) = 3 -> (3, 3) = 3 -> (3, 4) = 4

//4 = bcba

maxLenTwoOccurences("aaaa"); //2 - aa
//map = {
//    a = 0
//}
//maxLen = 0

//"a a a a"
// R
// L
//map = {
//    a = 0 -> 1
//}
//currLen = 0 - 0 + 1 = 1 
//maxLen = 0 -> (0, 1) = 1

//"a a a a"
//   R
// L
//map = {
//    a = 0 -> 1 -> 2
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 2
//maxLen = 0 -> (0, 1) = 1 -> (1, 2) = 2

//"a a a a"
//     R
//   L
//map = {
//    a = 0 -> 1 -> 2 -> 3| -> 2
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 2 -> 2 - 1 + 1 = 2
//maxLen = 0 -> (0, 1) = 1 -> (1, 2) = 2 -> (2, 2) = 2

//"a a a a"
//       R
//     L
//map = {
//    a = 0 -> 1 -> 2 -> 3| -> 2 -> 3 |-> 2
//}
//currLen = 0 - 0 + 1 = 1 -> 1 - 0 + 1 = 2 -> 2 - 1 + 1 = 2 -> 3 - 2 + 1 = 2
//maxLen = 0 -> (0, 1) = 1 -> (1, 2) = 2 -> (2, 2) = 2 -> (2, 2) = 2

//2 = aa
