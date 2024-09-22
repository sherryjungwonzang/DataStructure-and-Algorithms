//682. Baseball Game
//you are keeping the scores for a baseball game with strange rules
//at the beginning of the game, you start with an empty record
//given a list of strings 'operations'. where operations[i] is the i_th operation you musy apply to the record and is one of the following:

//an integer x: record a new score of x
//'+': recored a new score that is the sum of the previous two scores
//'D': record a new score that is the double of the previous score
//'C': invalidate the previous score, removing it from the record

//return the sum of all scores on the record after applying all the operations

//Approach:
//using stack
var baseballGame = (operations) => {
    let stack = [];

    operations.forEach((operation) => {
        //changing to int for calculation
        if (parseInt(operation)) stack.push(parseInt(operation));
        else if (operation === "+") stack.push((stack[stack.length - 1] || 0) + (stack[stack.length - 2] || 0));
        else if (operation === "D") stack.push((stack[stack.length - 1] || 0) * 2);
        else if (operation === "C") stack.pop();
    });

    return stack.reduce((a, b) => a + b, 0);
}
baseballGame(["5","2","C","D","+"]); //30
//stack = []
//["5", "2", "C", "D", "+"]
//  ^
//stack = [ 5, ]

//["5", "2", "C", "D", "+"]
//       ^
//stack = [ 5, 2, ]

//["5", "2", "C", "D", "+"]
//            ^
//stack = [ 5,  ] -> pop 2

//["5", "2", "C", "D", "+"]
//                 ^
//stack = [ 5, 10,  ] -> 5 * 2 = 10

//["5", "2", "C", "D", "+"]
//                      ^
//stack = [ 5, 10, 15 ] -> 5 + 10 = 15

//5 + 10 + 15 = 30

baseballGame(["5","-2","4","C","D","9","+","+"]); //27
//stack = []
//["5", "-2", "4", "C", "D", "9", "+", "+"]
//  ^
//stack = [ 5, ]

//["5", "-2", "4", "C", "D", "9", "+", "+"]
//       ^
//stack = [ 5, -2, ]

//["5", "-2", "4", "C", "D", "9", "+", "+"]
//             ^
//stack = [ 5, -2, 4 ]

//["5", "-2", "4", "C", "D", "9", "+", "+"]
//                  ^
//stack = [ 5, -2,  ] -> pop -4

//["5", "-2", "4", "C", "D", "9", "+", "+"]
//                       ^
//stack = [ 5, -2, -4  ] -> -2 * 2 = -4

//["5", "-2", "4", "C", "D", "9", "+", "+"]
//                           ^
//stack = [ 5, -2, -4, 9  ]

//["5", "-2", "4", "C", "D", "9", "+", "+"]
//                                 ^
//stack = [ 5, -2, -4, 9, 5  ] -> 9 + -4 = 5

//["5", "-2", "4", "C", "D", "9", "+", "+"]
//                                      ^
//stack = [ 5, -2, -4, 9, 5, 14 ] -> 9 + 5 = 14

//5 + -2 + -4 + 9 + 5 + 14 = 27

baseballGame(["1","C"]); //0
//stack = []
//["1", "C"]
//  ^
//stack = [ 1, ]

//["1", "C"]
//       ^
//stack = [ ] -> pop 1

//0
