//794. Valid Tic-Tac-Toe State
//the board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'. The ' ' character represents an empty square

//here are the rules of Tic-Tac-Toe:
//players take turns placing characters into empty squares ' '
//the first player always places 'X' characters, while the second player always places 'O' characters
//'X' and 'O' characters are always placed into empty squares, never filled ones
//the game ends when there are three of the same (non-empty) character filling any row, column, or diagonal
//the game also ends if all squares are non-empty
//no more moves can be played if the game is over

//given a Tic-Tac-Toe board as a string array board
//return true if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game
var validTictactoe = (boards) => {
    let X = 0;
    let O = 0;
    let countX = 0;
    let countO = 0;
    
    //checking the count of X and O
    for (let board of boards) {
        for (let i = 0; i < 3; i++) {
            //X
            if (board[i] === "X") X++;
            else if (board[i] === "O") O++;
        }
    }

    //checking the tic-tac-toe winner of X case
    if (boards[0][0] === "X" && boards[0][1] === "X" && boards[0][2] === "X") countX++; //first row
    if (boards[1][0] === "X" && boards[1][1] === "X" && boards[1][2] === "X") countX++; //second row
    if (boards[2][0] === "X" && boards[2][1] === "X" && boards[2][2] === "X") countX++; //third row
    
    if (boards[0][0] === "X" && boards[1][0] === "X" && boards[2][0] === "X") countX++; //first column
    if (boards[0][1] === "X" && boards[1][1] === "X" && boards[2][1] === "X") countX++; //second column
    if (boards[0][2] === "X" && boards[1][2] === "X" && boards[2][2] === "X") countX++; //last column
    
    if (boards[0][0] === "X" && boards[1][1] === "X" && boards[2][2] === "X") countX++; //left to right diagonal
    if (boards[0][2] === "X" && boards[1][1] === "X" && boards[2][0] === "X") countX++; //right to left diagonal

    //checking the tic-tac-toe winner of O case
    if (boards[0][0] === "O" && boards[0][1] === "O" && boards[0][2] === "O") countO++; //first row
    if (boards[1][0] === "O" && boards[1][1] === "O" && boards[1][2] === "O") countO++; //second row
    if (boards[2][0] === "O" && boards[2][1] === "O" && boards[2][2] === "O") countO++; //third row
    
    if (boards[0][0] === "O" && boards[1][0] === "O" && boards[2][0] === "O") countO++; //first column
    if (boards[0][1] === "O" && boards[1][1] === "O" && boards[2][1] === "O") countO++; //second column
    if (boards[0][2] === "O" && boards[1][2] === "O" && boards[2][2] === "O") countO++; //last column
    
    if (boards[0][0] === "O" && boards[1][1] === "O" && boards[2][2] === "O") countO++; //left to right diagonal
    if (boards[0][2] === "O" && boards[1][1] === "O" && boards[2][0] === "O") countO++; //right to left diagonal

    //checking valid reachable or not
    //playerX wins when O count is less than 1
    //playerO wins when X and O count is equal
    if (X === 0 && O > 0) return false;
    if (countX > 0 && countO > 0) return false;

    if (countX > 0) {
        if (X - O !== 1) return false;
        else return true;
    }

    if (countO > 0) {
        if (X - O !== 0) return false;
        else return true;
    }

    if (X - O !== 1 && X - O !== 0) return false;

    return true;
}
//TC: O(1)
//SC: O(1)
validTictactoe(board = ["XOX","O O","XOX"]); //true
//  X O X
//  O _ O
//  X O X

//X = 0 -> 4
//O = 0 -> 4
//countX = 0
//countO = 0

//checking validation
//X != 0 -> true
//countX & countO not greater than 0 -> true
//X - O != 1 & = 0 -> true

//true

validTictactoe(board = ["XOX"," X ","   "]); //false
//  X O X
//  _ X _
//  _ _ _

//X = 0 -> 3
//O = 0 -> 1
//countX = 0
//countO = 0

//checking validation
//X != 0: F & O > 0: T -> false

//false

validTictactoe(board = ["O  ","   ","   "]); //false
//  O _ _
//  _ _ _
//  _ _ _
