//999. Available Captures For Rook
//given an 8 x 8 matrix representing a chessboard
//there is exactly one white rook represented by 'R', some number of white bishops 'B', and some number of black pawns 'p'
//empty squares are represented by '.'

//a rook can move any number of squares horizontally or vertically (up, down, left, right) until it reached another piece or the edge of the board
//a rook is attacking a pawn if it can move to the pawn's square in one move
//a rook cannot move through other pieces, such as bishops or pawns
//rook cannot attack a pawn if there is another piece blocking the path
//return the number of pawns the white rook is attacking

//Approach:
//using recursion to left, right, up, down
var rookCaptures = (board) => {
    let rook = findRook(board);
    let count = 0;

    //find rook position
    function findRook(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === "R") return { i, j };
            }
        }
    };

    //checking 4 directions
    count += checkLeft(board, rook.i, rook.j);
    count += checkRight(board, rook.i, rook.j);
    count += checkUp(board, rook.i, rook.j);
    count += checkDown(board, rook.i, rook.j);

    //checking LEFT
    function checkLeft(board, i, j) {
        let count = 0;

        while (true) {
            if (board[i][j] === "B") break; //blocking
            else if (board[i][j] === 'p') { //attacking
                count++;
                break;
            } else if (j === 0) {
                break;
            }

            j--;
        }

        return count;
    };

    //checking RIGHT
    function checkRight(board, i, j) {
        let count = 0;

        while (true) {
            if (board[i][j] === "B") break; //blocking
            else if (board[i][j] === 'p') { //attacking
                count++;
                break;
            } else if (j === board[i].length - 1) { //
                break; 
            }

            j++;
        }

        return count;
    };

    //checking UP
    function checkUp(board, i, j) {
        let count = 0;

        while (true) {
            if (board[i][j] === "B") break; //blocking
            else if (board[i][j] === 'p') { //attacking
                count++;
                break;
            } else if (i === 0) { //
                break; 
            }

            i--;
        }

        return count;
    };

    //checking DOWN
    function checkDown(board, i, j) {
        let count = 0;

        while (true) {
            if (board[i][j] === "B") break; //blocking
            else if (board[i][j] === 'p') { //attacking
                count++;
                break;
            } else if (i === board.length - 1) { //
                break; 
            }

            i++;
        }

        return count;
    };

    return count;
}
rookCaptures(board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]); //3
//[".", ".", ".", ".", ".", ".", ".", "."]
//[".", ".", ".", "p", ".", ".", ".", "."]
//[".", ".", ".", "p", ".", ".", ".", "."]
//["p", "p", ".", "R", ".", "p", "B", "."] -> rook: [3, 3]
//[".", ".", ".", ".", ".", ".", ".", "."]
//[".", ".", ".", "B", ".", ".", ".", "."]
//[".", ".", ".", "p", ".", ".", ".", "."]
//[".", ".", ".", ".", ".", ".", ".", "."]

//checkLeft(board, 3, 3)
//count = 0
//starting with [3, 3] -> j--
//[3, 2] -> '.' -> j--
//[3, 1] -> "p"
//count = 0 -> 1

//checkRight(board, 3, 3)
//count = 0
//starting with [3, 3] -> j++
//[3, 4] -> '.' -> j--
//[3, 5] -> "p"
//count = 0 -> 1 -> 2

//checkTop(board, 3, 3)
//count = 0
//starting with [3, 3] -> i--
//[2, 3] -> "p"
//count = 0 -> 1 -> 2 -> 3

//checkDown(board, 3, 3)
//count = 0
//starting with [3, 3] -> i++
//[4, 3] -> "." -> i++
//[5, 3] -> "B" -> break

rookCaptures(board = [[".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]); //0

rookCaptures(board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]); //3

