//241. Different Ways to add parentheses
//given a string 'expression' of numbers and operators
//return all possible results from computing all the different possible ways to group numbers and operators
//you may return the anwer in any order

//Approach:
//divide the string into left and right side
//recursive call on each left and right side
//later calculate based on the operator and left and right string
var diffWaysToCompute = (expression) => {
    //calculation function
    function calculate (num1, num2, operator) {
        switch(operator) {
            case '+':
                return num1 + num2;
            
            case '-':
                return num1 - num2;
            
            case '*':
                return num1 * num2;
        }
    }

    //base case
    //parseInt: parses a string argument and returns an integer of the specified radix
    if (!expression.includes('+') && !expression.includes('-') && !expression.includes('*')) return [parseInt(expression)];

    let res = [];
    for (let i = 0; i < expression.length; i++) {
        let curr = expression[i];

        //if the pointer is operator
        if (curr === '+' || curr === '-' || curr === '*') {
            let leftPart = expression.substring(0, i);
            let rightPart = expression.substring(i + 1);

            //recursive call
            let leftRes = diffWaysToCompute(leftPart);
            let rightRes = diffWaysToCompute(rightPart);

            //calculation
            for (let left of leftRes) {
                for (let right of rightRes) {
                    res.push(calculate(left, right, curr));
                }
            }
        }
    }
    return res;
}
//TC: O (2^n)
//SC: O(n)
diffWaysToCompute("2-1-1"); //[0, 2]
//((2-1)-1) = 0 
//(2-(1-1)) = 2

diffWaysToCompute("2*3-4*5"); //[-34,-14,-10,-10,10]
//(2*(3-(4*5))) = -34 
//((2*3)-(4*5)) = -14 
//((2*(3-4))*5) = -10 
//(2*((3-4)*5)) = -10 
//(((2*3)-4)*5) = 10
