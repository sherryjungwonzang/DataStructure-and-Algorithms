//22. Generate Parentheses
//given 'n' pairs of parentheses
//write a function to generate all combinations of well-formed parentheses

//Approach:
//using recursive with backtracking
var generateParentheses = (n) => {
    let stack = [];
    let res = [];

    //recursion
    function recurse(open, close) {
        //found all combos
        if (open === close && open == n) {
            res.push(stack.join(''));

            return res;
        }

        //adding open
        if (open < n) {
            stack.push('(');

            //recursive
            recurse(open + 1, close);

            //backtracking
            stack.pop();
        }


        //adding close
        if (close < open) {
            stack.push(')');

            //recursive
            recurse(open, close + 1);

            //backtracking
            stack.pop();
        }
    }

    recurse(0, 0);

    return res;
}
generateParentheses(3); //["((()))","(()())","(())()","()(())","()()()"]

generateParentheses(1); //["()"]
