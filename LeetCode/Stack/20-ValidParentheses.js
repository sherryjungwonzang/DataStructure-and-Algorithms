//20. Valid Parentheses
//given a string 's' containing just the characters '(', ')', '{', '}', and ']'
//determine if the input string is valid

//an input string is valid if:
//open brackets must be closed by the same type of brackets
//open brackets must be closed in the correct order
//every close bracket has a corresponding open bracket of the same type

//Approach:
//using Stack - needs to be in the correct order
//only put open brackets in the Stack
//pop off from the stack and compare with the close bracket 
//if it is equal to then return true | if not equal to then return false
var validParentheses = (s) => {
    //creating stack
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        //current char
        let char = s[i];

        //putting only open brackets in the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            //get previous value
            let prevVal = stack.pop();

            //create num of cases
            if (prevVal === '(' && char !== ')') return false;
            if (prevVal === '{' && char !== '}') return false;
            if (prevVal === '[' && char !== ']') return false;
            if (prevVal === undefined) return false; //test case - where all of the values are close brackets
        }
    }
    return stack.length === 0; //need to empty it at the end
}
//TC: O(n) - need to traverse the entire string
//SC: O(n) - store all the values in the stack
validParentheses("( )"); //true
//                i
//stack = [ ( ]
//pop off - ( from stack and check if the next value is the close bracket of the same value or not
//                  i
//compare ( and ) -> TRUE

validParentheses("( ) [ ] { }"); //true
//                i
//stack = [ ( ]
//pop off - ( from stack and check if the next value is the close bracket of the same value or not
//                  i
//compare ( and ) -> TRUE
//stack = [ ]
//                     i
//stack = [ [ ]
//pop off - [ from stack and check if the next value is the close bracket of the same value or not
//                       i
//compare [ and ] -> TRUE
//stack = [ ]
//                          i
//stack = [ { ]
//pop off - { from stack and check if the next value is the close bracket of the same value or not
//                             i
//compare { and } -> TRUE
//stack = [ ]
//stack.length === 0 -> return TRUE

validParentheses("( ]"); //false
//                i
//stack = [ ( ]
//pop off - ( from stack and check if the next value is the close bracket of the same value or not
//                  i
//compare ( and ] -> !==
//prevVal = '(' !== char = ']' -> FALSE
