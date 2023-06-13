//22. Generate Parentheses
//given 'n' pairs of parentheses
//write a function to generate all combinations of well-formed parentheses
var generateParentheses = (n) => {
  //setting res as empty array - to add all possible parentheses formats
  const res = [];

  //helper function - to generate all possible combinations with recursive
  function generateCombo(leftPCount, rightPCount, partialP) {
    //remove all the invalid ones
    if (leftPCount > rightPCount) return;

    //checking leftPCount and rightPCount - partial combo is being a complete sets
    if (!leftPCount && !rightPCount) res.push(partialP);

    //checking valid things/combinations- using recursion
    if (leftPCount > 0) generateCombo(leftPCount - 1, rightPCount, partialP + '(');
    if (rightPCount > 0) generateCombo(leftPCount, rightPCount - 1, partialP + ')');
  }
  generateCombo(n, n, '');

  return res;
} 
generateParentheses(3); //["((()))","(()())","(())()","()(())","()()()"]
//leftPCount = 3
//rightPCount = 3
//partialP = ''

//recursive call starting
//left) generateCombo(2, 3, '' + '(') -> '('
//left) generateCombo(1, 3, '(' + '(') -> '(('
//left) generateCombo(0, 3, '((' + '(') -> push '(((' into res
//res = ["((("]

//recursive call starting
//right) generateCombo(3, 2, '' + ')') -> ')'
//right) generateCombo(3, 1, ')' + ')') -> '))'
//right) generateCombo(3, 0, '))' + ')') -> push ')))' into res
//res = ["((()))"]
//continue on finding combination

generateParentheses(1); //["()"]
//leftPCount = 1
//rightPCount = 1
//partialP = ''

//recursive call starting
//left) generateCombo(0, 1, '' + '(') -> push '(' into res
//res = ["("]
//right) generateCombo(1, 0, '' + ')') -> push ')' into res
//res = ["()"]
