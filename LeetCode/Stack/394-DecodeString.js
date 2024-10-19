//394. Decode String
//the encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times
//note that k is guaranteed to be a positive integer

//you may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc
//furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k
//for example, there will not be input like 3a or 2[4]

//the test cases are generated so that the length of the output will never exceed 105

//given an encoded string
//return its decoded string

//Approach:
//using stack
var decodeString = (s) => {
    let stack = []; //to collect only chars
    let currStr = ''; //what str to repeat
    let currNum = 0; //how many to repeat

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            //collecting str and num
            stack.push(currStr);
            stack.push(currNum);

            //resetting
            currStr = '';
            currNum = 0;
        } else if (s[i] === ']') { //need to repeat
            let prevNum = stack.pop();
            let prevStr = stack.pop();

            //repeating based on prevNum count
            currStr = prevStr + currStr.repeat(prevNum); 
        } else if (s[i] >= '0' && s[i] <= '9') {
            currNum = currNum * 10 + Number(s[i]);
        } else {
            currStr += s[i];
        }
    }

    return currStr;
}
decodeString("3[a]2[bc]"); //"aaabcbc"
//stack = []
//currStr = ''
//currNum = 0

// 3 [ a ] 2 [ b c ] 
// ^
//0 <= '3' <= 9 -> 0 * 10 + 3 = 3
//currNum = 0 -> 3

// 3 [ a ] 2 [ b c ] 
//   ^
//sequence starting -> pushing currStr and currNum
//stack = [ '', 3 ]
//currStr = '' -> ''
//currNum = 0 -> 3 -> 0

// 3 [ a ] 2 [ b c ] 
//     ^
//'a' is string -> adding to currStr
//currStr = '' -> '' -> 'a'

// 3 [ a ] 2 [ b c ] 
//       ^
//sequence is over -> creating substring
//stack = [ '', 3 ]
//popping from stack -> prevNum = 3
//                      prevStr = ''
//currStr = '' + 'a'.repeat(3) = '' + 'aaa'
//        = 'aaa'

// 3 [ a ] 2 [ b c ] 
//         ^
//0 <= '2' <= 9 -> 0 * 10 + 2 = 2
//currNum = 0 -> 3 -> 0 -> 2

// 3 [ a ] 2 [ b c ] 
//           ^
//sequence starting -> pushing currStr and currNum
//stack = [ 'aaa', 2 ]
//currStr = 'aaa' -> ''
//currNum = 0 -> 3 -> 0 -> 2 -> 0

// 3 [ a ] 2 [ b c ] 
//             ^
//'b' is string -> adding to currStr
//currStr = 'aaa' -> '' -> 'b'

// 3 [ a ] 2 [ b c ] 
//               ^
//'c' is string -> adding to currStr
//currStr = 'aaa' -> '' -> 'bc'

// 3 [ a ] 2 [ b c ] 
//                 ^
//sequence is over -> creating substring
//stack = [ 'aaa', 2 ]
//popping from stack -> prevNum = 2
//                      prevStr = 'aaa'
//currStr = 'aaa' + 'bc'.repeat(2) = 'aaa' + 'bcbc'
//        = 'aaabcbc'

//"aaabcbc"

decodeString("3[a2[c]]"); //"accaccacc"

decodeString("2[abc]3[cd]ef"); //"abcabccdcdcdef"
