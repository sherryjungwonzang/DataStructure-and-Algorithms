//434. Number Of Segments In String
//given a string s
//return the number of segments in the string
//a segment is deficed to be a contiguous sequence of non-space characters
var numSegments = (s) => {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;
    }

    return count;
}
numSegments("Hello, my name is John"); //5 - ["Hello,", "my", "name", "is", "John"]
//"Hello, my name is John"
// ^
//s[0] not empty & (i = 0 || s[-1] is empty): True
//count = 0 -> 1

//"Hello, my name is John"
//  ^
//s[1] not empty & (i != 0 || s[0] is "H"): False
//count = 0 -> 1

//"Hello, my name is John"
//   ^
//s[2] not empty & (i != 0 || s[1] is "e"): False
//count = 0 -> 1

//"Hello, my name is John"
//    ^
//s[3] not empty & (i != 0 || s[2] is "l"): False
//count = 0 -> 1

//"Hello, my name is John"
//     ^
//s[4] not empty & (i != 0 || s[3] is "l"): False
//count = 0 -> 1

//"Hello, my name is John"
//      ^
//s[5] not empty & (i != 0 || s[4] is "o"): False
//count = 0 -> 1

//"Hello, my name is John"
//       ^
//s[6] is empty & (i != 0 || s[5] is ","): False
//count = 0 -> 1

//"Hello, my name is John"
//        ^
//s[7] is empty & (i != 0 || s[6] is empty): True
//count = 0 -> 1 -> 2

//"Hello, my name is John"
//         ^
//s[8] is not empty & (i != 0 || s[7] is "m"): False
//count = 0 -> 1 -> 2

//"Hello, my name is John"
//          ^
//s[9] is  empty & (i != 0 || s[8] is "y"): False
//count = 0 -> 1 -> 2

//"Hello, my name is John"
//           ^
//s[10] is not empty & (i != 0 || s[9] is empty): True
//count = 0 -> 1 -> 2 -> 3
//...
//segments: "Hello", "my", "name", "is", "John"

numSegments("Hello"); //1
