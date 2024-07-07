//1275. Find Winner On Tic Tac Toe Game
//tic-tac-toe is played by two players A and B on a 3 x 3 grid
//the rules of tic-tac-toe are:

//players take turns placing characters into empty squares ' '
//the first player A always place 'X' characters, while the second player B always places '0' characters
//'X' and '0' charactercs are always placed into empty squares, never on filled ones
//the game ends when there are three of the same (non-empty) character filling any row, column, or diagonal
//the game also ends if all squares are non-empty
//no more moves can be played if the game is over

//given a 2D array 'moves' where moves[i] = [row_i, col_i] indicates the i_th move will be played on grid[row_i][col_i]
//return the winner of the game if it exists (A or B)
//in case the game ends in a draw return "Draw"
//if there are still movements to play return "Pending"

//you can assume that moves is valid
//the grid is initially empty, and A will play first

//Approach:
//using flag to track player is A or B
var findWinnerTicTacToe = (moves) => {
    let rows = new Array(3).fill(0);
    let cols = new Array(3).fill(0);
    let isA = true; //always A is the first
    let diagonal = 0;
    let antiDiagonal = 0;

    //traversing
    for (let i = 0; i < moves.length; i++) {
        //A: 1, B: -1
        let counter = isA ? 1 : -1;

        //switching to B
        isA = !isA;

        let row = moves[i][0];
        let col = moves[i][1];

        //filling the each array
        rows[row] +=  counter;
        cols[col] +=  counter;

        //checking diagonal or antidiagonal
        if (row === col) diagonal += counter; //main diagonal
        if (row + col === 2) antiDiagonal += counter; //antidiagonal: row + col = 2

        //check whether we have a res already or not
        if (rows[row] === 3 || cols[col] === 3 || antiDiagonal === 3 || diagonal === 3) return "A";
        else if (rows[row] === -3 || cols[col] === -3 || antiDiagonal === -3 || diagonal === -3) return "B";
    };

    //some moves are still left to be made
    return moves.length === 9 ? "Draw" : "Pending";
}
findWinnerTicTacToe([[0,0],[2,0],[1,1],[2,1],[2,2]]); //"A"
//  X  _  _
//  _  X  _
//  O  O  X

findWinnerTicTacToe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]); //"B"
//  X  X  O
//  X  O  _
//  O  _  _

findWinnerTicTacToe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]); //"Draw"
//  X  X  O
//  O  O  X
//  X  O  X
