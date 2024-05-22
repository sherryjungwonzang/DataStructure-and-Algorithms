//1021. Remove Outermost Parentheses
//A valid parentheses string is either empty "", "(" + A + ")" or A + B
//where A and B are valid parentheses strings, and + represent string concatenation
//for example, "", "()", "(())()" and "(()(()))" are all valid parentheses strings

//a valid parentheses string s is primitive if it is non empty and there does not exist a way to split it into s = A + B
//with A and B nonempty valid parentheses strings

//given a valid parentheses string s
//consider its primitive decomposition: s = p1 + p2 + ... +Pk are primitive valid parentheses strings
//return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s

//Approach:
//using Stack
//if stack is empty - meaning that we reached out the outermost parentheses
var removeOutermostParentheses = (s) => {
    let stack = [];
    let res = "";

    for (let char of s) {
        if (char === "(") {
            if (stack.length) res += char; //if stack is not empty
            
            stack.push(char);
        } else { //char = ")"
            stack.pop();

            if (stack.length) res += char;
        }
    }
    return res;
}
removeOutermostParentheses("(()())(())"); // "()()()"
//The input string is "(()())(())", with primitive decomposition "(()())" + "(())"
//After removing outer parentheses of each part, this is "()()" + "()" = "()()()"

removeOutermostParentheses("(()())(())(()(()))"); //"()()()()(())"
//The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))"
//After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())"

removeOutermostParentheses("()()"); //""
//The input string is "()()", with primitive decomposition "()" + "()"
//After removing outer parentheses of each part, this is "" + "" = ""
