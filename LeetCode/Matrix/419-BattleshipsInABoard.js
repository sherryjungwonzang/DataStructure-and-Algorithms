//419. Battleships In A Board
//given an m x n matrix board where each cell is a battleship 'X' or empty '.'
//return the number of the battleships on board

//battleships can only be placed horizontally or vertically on board
//in other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column),
//where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships)

//Approach:
//using DFS
var battleships = (board) => {
    let count = 0;
    let m = board.length; //row
    let n = board[0].length; //col

    //DFS
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            //battleship
            if (board[i][j] === 'X') {
                //no left amd top value
                if (i === 0 && j === 0) count++;
                //checking left
                else if (i === 0) {
                    if (board[i][j - 1] === ".") count++;
                }
                //checking top
                else if (j === 0) {
                    if (board[i - 1][j] === ".") count++;
                }
                //checking top and left side
                else {
                    if (board[i - 1][j] === "." && board[i][j - 1] === ".") count++;
                }
            }
        }
    }

    return count;
}
battleships(board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]); //2
//X _ _ X
//_ _ _ X
//_ _ _ X

//i = 0, j = 0: "X"
//count = 0 -> 1

//i = 0, j = 3: "X" -> checking left
//board[0][2] = "." -> valid
//count = 0 -> 1 -> 2

//i = 1, j = 3: "X" -> checking left and top
//board[0][3] = "X" & board[1][2] = "." -> not valid
//count = 0 -> 1 -> 2 -> 2

//i = 2, j = 3: "X" -> checking left and top
//board[1][3] = "X" & board[2][2] = "." -> not valid
//count = 0 -> 1 -> 2 -> 2 -> 2

battleships([["."]]); //0
