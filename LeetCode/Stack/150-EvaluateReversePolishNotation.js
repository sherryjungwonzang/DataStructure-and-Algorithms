//150. Evaluate Reverse Polish Notation
//given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation
//evaluate the expression. Return an integer that represents the value of the expression

//Note that:
//the valid operators are '+', '-', '*', and '/'
//each operand may be an integer or another expression
//the division between two integers always truncates toward zero
//there will not be any division by zero
//the input represents a valid arithmetic expression in a reverse polish notation
//the answer and all the intermediate calculations can be represented in a 32-bit integer

//Approach:
//using stack
var evaluateRPN = (tokens) => {
    let stack = []; //to collect numbers

    for (let token of tokens) {
        //operators
        if (token.length === 1 && token.charCodeAt(0) < 48) {
            //popping numbers from stack
            let num2 = stack.pop();
            let num1 = stack.pop();
            let operator = token;
            let res = calc(num1, num2, operator);

            stack.push(res);
        } else { //numbers
            stack.push(parseInt(token, 10));
        }
    }

    //calculating
    function calc(num1, num2, operator) {
        if (operator === "+") return num1 + num2; //sum
        else if (operator === "-") return num1 - num2; //deduction
        else if (operator === "*") return num1 * num2; //multiply

        return Math.trunc(num1 / num2);
    }

    return stack.pop();
}
//TC: O(n)
//SC: O(n)
evaluateRPN(tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]); //22
//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//  ^     ^    ^    ^
//stack = [ 10, 6, 9, 3 ]

//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//                       ^
//stack = [ 10, 6, 9, 3 ]
//+ is 43 < 48 -> operator
//popping: 3 - num2, 9 - num1
//calc(9, 3, +) = 9 + 3 = 12
//stack = [ 10, 6, 9, 3 ] -> [ 10, 6, 12, ]

//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//                             ^
//stack = [ 10, 6, 12, -11, ]

//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//                                   ^
//stack = [ 10, 6, 12, -11, ]
//* is 42 < 48 -> operator
//popping: -11 - num2, 12 - num1
//calc(12, -11, +) = 12 * -11 = -132
//stack = [ 10, 6, ] -> [ 10, 6, -132, ]

//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//                                        ^
//stack = [ 10, 6, -132, ]
//'/' is 47 < 48 -> operator
//popping: -132 - num2, 6 - num1
//calc(-132, 6, /) = -132 / 6 = -0
//stack = [ 10, 6, -132 ] -> [ 10, -0 ]

//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//                                             ^
//stack = [ 10, -0 ]
//'*' is 42 < 48 -> operator
//popping: -0 - num2, 10 - num1
//calc(-0, 10, *) = -0 * 10 = 0
//stack = [ 10, -0 ] -> [ -0 ]

//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//                                                  ^
//stack = [ -0, 17 ]

//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//                                                        ^
//stack = [ -0, 17 ]
//'+' is 43 < 48 -> operator
//popping: 17 - num2, -0 - num1
//calc(-0, 17, +) = -0 + 17 = 17
//stack = [ -0, 17 ] -> [ 17 ]

//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//                                                             ^
//stack = [ 17, 5 ]

//["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
//                                                                  ^
//stack = [ 17, 5 ]
//'+' is 43 < 48 -> operator
//popping: 5 - num2, 17 - num1
//calc(5, 17, +) = 5 + 17 = 22
//stack = [ 17, 5 ] -> [ 22 ]

evaluateRPN(tokens = ["2","1","+","3","*"]); //9 - ((2 + 1) * 3)

evaluateRPN(tokens = ["4","13","5","/","+"]); //6 - (4 + (13 / 5))
