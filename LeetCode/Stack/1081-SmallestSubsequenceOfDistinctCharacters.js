//1081. Smallest Subsequence Of Distinct Characters
//given a string s
//return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once

//Approach:
//using stack
var smallestSubsequence = (s) => {
    let stack = []; //to store on lexicographical order
    let seen = new Set(); 
    let lastOccur = {}; 

    //checking the last occurence position
    for (let i = 0; i < s.length; i++) lastOccur[s[i]] = i;

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];

        if (!seen.has(curr)) {
            //to check lexicographical order
            while (stack.length && curr < stack[stack.length - 1] && i < lastOccur[stack[stack.length - 1]]) {
                //for correct order
                seen.delete(stack.pop());
            }

            seen.add(curr);

            stack.push(curr);
        }
    }

    return stack.join('');
}
smallestSubsequence("cbacdcbc"); //"acdb"
//lastOccur = {
//  c: 0 -> 3 -> 5 -> 7
//  b: 1 -> 6
//  a: 2
//  d: 4
//}

//i = 0
// c b a c d c b c
// ^
//not seen yet
//seen = { c, }
//stack = [c, ]

//i = 1
// c b a c d c b c
//   ^
//1 < lastOccur[stack[0] = c] = 7 -> not lexicographic order
//seen = { c, } -> { } -> { b, }
//stack = [ c, ] ->[ ] -> [ b, ]

//i = 2
// c b a c d c b c
//     ^
//2 < lastOccur[stack[0] = b] = 6 -> not lexicographic order
//seen = { c, } -> { } -> { b, } -> { } -> { a, }
//stack = [ c, ] ->[ ] -> [ b, ] ->[ ] -> [ a, ]

//i = 3
// c b a c d c b c
//       ^
//3 > lastOccur[stack[0] = a] = 2 -> lexicographic order
//seen = { c, } -> { } -> { b, } -> { } -> { a, c, }
//stack = [ c, ] ->[ ] -> [ b, ] ->[ ] -> [ a, c, ]

//i = 4
// c b a c d c b c
//         ^
//d < stack[1] = c: F  -> lexicographic order
//seen = { c, } -> { } -> { b, } -> { } -> { a, c, d, } 
//stack = [ c, ] ->[ ] -> [ b, ] -> [ ] -> [ a, c, d, ]

//i = 5
// c b a c d c b c
//           ^
//already in seen
//seen = { c, } -> { } -> { b, } -> { } -> { a, c, d, } 
//stack = [ c, ] ->[ ] -> [ b, ] -> [ ] -> [ a, c, d, ]

//i = 6
// c b a c d c b c
//             ^
//6 > lastOccur[stack[2] = d] = 4 -> lexicographic order
//seen = { c, } -> { } -> { b, } -> { } -> { a, c, d, b, } 
//stack = [ c, ] ->[ ] -> [ b, ] -> [ ] -> [ a, c, d, b, ]

//i = 7
// c b a c d c b c
//               ^
//already in seen
//seen = { c, } -> { } -> { b, } -> { } -> { a, c, d, b } 
//stack = [ c, ] ->[ ] -> [ b, ] -> [ ] -> [ a, c, d, b ]

//[ a, c, d, b ] -> 'acdb'

smallestSubsequence("bcabc"); //"abc"
