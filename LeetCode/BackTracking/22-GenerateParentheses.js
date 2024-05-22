//22. Generate Parentheses
//given 'n' pairs of parentheses
//write a function to generate all combinations of well-formed parentheses

//Approach:
//using recursive with one helper function
var generateParentheses = (n) => {
  let stack = [];
  let res = [];

  function recurse (open, close) {
      //found the all combos
      if (open === close && open === n) {
          res.push(stack.join(''));
          return res;
      }

      //adding open
      if (open < n) {
          stack.push('(');
          recurse(open + 1, close);
          stack.pop(); //backtracking
      }

      //adding close
      if (close < open) { //valid status for close
          stack.push(")");
          recurse(open, close + 1);
          stack.pop(); //backtracking
      }
  }

  recurse(0, 0);

  return res;
}
generateParentheses(3); //["((()))","(()())","(())()","()(())","()()()"]

generateParentheses(1); //["()"]
