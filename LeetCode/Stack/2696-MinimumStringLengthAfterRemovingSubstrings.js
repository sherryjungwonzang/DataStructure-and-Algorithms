//2696. Minimum String Length After Removing Substrings
//given a string s consisting only of uppercase English letters
//can apply some operations to this string where, in one operation
//you can remove any occurrence of one of the substrings "AB" or "CD" from s
//return the minimum possible length of the resulting string that you can obtain

//Approach:
//using stack
var minStringLength = (s) => {
    let stack = [];

    for (let char of s) {
        //check AB or CD
        if (stack.length && (char === "B" && stack[stack.length - 1] === "A") || (char === "D" && stack[stack.length - 1] === "C")) stack.pop();
        else stack.push(char);
    }

    return stack.length;
}
minStringLength("ABFCACDB"); //2
//"A B F C A C D B"
// ^
//stack = [ A ]

//"A B F C A C D B"
//   ^
//char = B and prev is A -> pop
//stack = [ ]

//"A B F C A C D B"
//     ^
//stack = [ F ]

//"A B F C A C D B"
//       ^
//stack = [ F C ]

//"A B F C A C D B"
//         ^
//stack = [ F C A ]

//"A B F C A C D B"
//           ^
//stack = [ F C A C ]

//"A B F C A C D B"
//             ^ 
//char = D and prev is C -> pop
//stack = [ F C A ]

//"A B F C A C D B"
//               ^ 
//char = B and prev is A -> pop
//stack = [ F C ] -> 2

minStringLength("ACBBD"); //5
//"A C B B D"
// ^
//stack = [ A ]

//"A C B B D"
//   ^
//stack = [ A C ]

//"A C B B D"
//     ^
//stack = [ A C B ]

//"A C B B D"
//       ^
//stack = [ A C B B ]

//"A C B B D"
//         ^
//stack = [ A C B B D ] -> 5
