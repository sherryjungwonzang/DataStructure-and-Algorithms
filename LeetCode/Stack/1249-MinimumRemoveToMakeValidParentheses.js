//1249. Minimum remove to make valid parentheses
//given a string s of '(' and ')' and lowercase English characters
//your task is to remove the min nuumber of parenthaeses '(' and ')' in anu positions
//so that the resulting parentheses string is calid and return any valid string

//formally, a parentheses string is valid if and only if:
//it is the empty string, contains only lowercase characters or
//it can be written as AB (A concatenated with B) - where A and B are valid strings, or
//it can be writted as (A) - where A is a valid string

//Approach:
//using stack for tracking parentheses
var minRemoveToMakeValid = (s) => {
    let stack = [];
    let res = s.split("");

    //traversing s
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === "(") {
            stack.push(i);
        } else if (char === ")") {
            //if stack is empty - make ) as ''
            if (stack.length === 0) {
                res[i] = '';
            } else { //stack is not empty
                stack.pop();
            }
        }
    }
    //having an extra ( bracket
    for (let i = 0; i < stack.length; i++) {
        let char = stack[i];
        res[char] = '';
    }
    return res.join("");
}
//TC: O(n)
//SC: O(n)
minRemoveToMakeValid("lee(t(c)o)de)"); //"lee(t(c)o)de" - "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

minRemoveToMakeValid("a)b(c)d"); //"ab(c)d"

minRemoveToMakeValid("))(("); //"" - ann empty string is also valid
