//856. Score of Parentheses
//given a balanced parentheses string's'
//return the score of the string
//the score of a balanced parentheses string is based on the following rule:

//"()" has score 1
//AB has score A + B - where A and B are balanced parentheses strings
//(A) has score 2 * A - where A is a balanced parentheses string

//Approach:
//using stack for tracking and calculating the score of parenthesis
var scoreOfParentheses = (s) => {
    let stack = [0];

    for (let char of s) {
        //( is calculating as 0
        if (char === "(") {
            stack.push(0);
        } else {
            let curr = stack.pop();

            if (curr === 0) { //meaning there is only "(" in s and need to calculate ")"
                stack[stack.length - 1] += 1;
            } else { //meaning there is ")" right in front of this
                stack[stack.length - 1] += curr * 2;
            }
        }
    }
    return stack[0];
}
scoreOfParentheses("()"); //1

scoreOfParentheses("(())"); //2
//                  ^
//stack = [0, 0]
//                   ^
//stack = [0, ]
//curr = 0
//curr is 0 so adding 1 to stack = [0, 1, ]
//                    ^
//stack = [0, 1, ]
//curr = 1
//curr is 1 so need to add 1 * 2 to stack
//stack = [2]

scoreOfParentheses("()()"); //2
//                  ^
//stack = [0, 0]
//                   ^
//stack = [ ]
//curr = 0
//curr is 0 so adding 1 to stack = [1, ]
//                    ^
//stack = [1, 0]
//                     ^
//stack = [1, ]
//curr = 0
//curr is 0 so adding 1 to stack = [2]
