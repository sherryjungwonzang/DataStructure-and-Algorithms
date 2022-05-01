//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var check = {
        '{':'}',
        '(':')',
        '[':']'
    };
    var stack = new Array();
    for(let i=0;i<s.length;i++){
        if(stack.length===0) {
            stack.push(s[i]);
        }
        else{
            console.log(stack[stack.length-1])
            if(s[i]!==check[stack[stack.length-1]]) stack.push(s[i]);
            else stack.pop();   
        }
    }
    if(stack.length===0) return true;
    else return false;
};
