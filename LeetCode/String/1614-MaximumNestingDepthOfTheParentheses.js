//1614. Maximum Nesting Depth of the parentheses
//given a cvalid parentheses string 's'
//return the nesting depth of 's'
//the nesting depth is the max number of nested parentheses
var maxNestingDepth = (s) => {
    let count = 0; //counting "("
    let max = 0;

    for (let char of s) {
        if (char === "(") count++;
        max = Math.max(count, max);

        if (char === ")") count--;
    }
    return max;
}
maxNestingDepth("(1+(2*3)+((8)/4))+1"); //3
//digit 8 is inside of 3 nested parentheses in the string

maxNestingDepth("(1)+((2))+(((3)))"); //3
//digit 3 is inside of 3 nested parentheses in the string

maxNestingDepth("()(())((()()))"); //3
