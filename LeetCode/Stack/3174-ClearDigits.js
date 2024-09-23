//3174. Clear Digits
//given a string s
//task is to remove all digits by doing this operation repeatedly:
//delete the first digit and the closest non-digit character to its left
//return the resulting string after removing all digits

//Approach:
//using stack
var clearDigits = (s) => {
    let stack = [];

    for (let char of s) {
        //non-digit
        if (char >= '0' && char <= '9') {
            if (stack.length > 0 && stack[stack.length - 1] >= 'a' && stack[stack.length - 1] <= 'z') stack.pop();
        } else { //alphabets
            stack.push(char);
        }
    }

    return stack.join('');
}
//TC: O(n)
//SC: O(n)
clearDigits("abc"); //"abc"
//"a b c"
// ^
//char = 'a' -> push
//stack = [ a ]

//"a b c"
//   ^
//char = 'b' -> push
//stack = [ a b ]

//"a b c"
//     ^
//char = 'c' -> push
//stack = [ a b c ] -> "abc"

clearDigits("cb34"); //""
//"c b 3 4"
// ^
//char = 'c' -> push
//stack = [ c ]

//"c b 3 4"
//   ^
//char = 'b' -> push
//stack = [ c b ]

//"c b 3 4"
//     ^
//char = '3' -> non digit & prev is 'b' -> pop
//stack = [ c ]

//"c b 3 4"
//       ^
//char = '4' -> non digit & prev is 'c' -> pop
//stack = [ ] -> ""
