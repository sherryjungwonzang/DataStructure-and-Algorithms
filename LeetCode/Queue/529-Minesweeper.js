//529. Minesweeper
//let's play the minesweeper game!
//given an m x n char matrix board representing the game board where:
//'M' represents an unrevealed mine,
//'E' represents an unrevealed empty square,
//'B' represents a revealed blank square that has no adjacent mines (i.e., above, below, left, right, and all 4 diagonals),
//digit ('1' to '8') represents how many mines are adjacent to this revealed square, and 'X' represents a revealed mine

//also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares ('M' or 'E')
//return the board after revealing this position according to the following rules:
//if a mine 'M' is revealed, then the game is over. You should change it to 'X'
//if an empty square 'E' with no adjacent mines is revealed, then change it to a revealed blank 'B' and all of its adjacent unrevealed squares should be revealed recursively
//if an empty square 'E' with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines

//return the board when no more squares will be revealed

//Approach:
//using BFS
var minesweeper = (board, click) => {
    let m = board.length; //row
    let n = board[0].length; //col
    let dirs = [-1, 0, 1];
    let queue = [click];

    //BFS
    while (queue.length) {
        let mine = 0;
        let neighbors = [];
        let [currRow, currCol] = queue.shift(); //curr

        //find mine
        if (board[currRow][currCol] === "M") {
            //marked as revealed mine
            board[currRow][currCol] = "X";
            
            continue;
        }

        if (board[currRow][currCol] !== "E") continue;

        //checking neighbors
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                //same value with click
                if (i === 1 && j === 1) continue;

                let neighborRow = currRow + dirs[i];
                let neighborCol = currCol + dirs[j];

                //checking neighbors in boundary
                if (valid(neighborRow, neighborCol)) {
                    let neighborVal = board[neighborRow][neighborCol];

                    //found mines
                    if (neighborVal === "X" || neighborVal === "M") mine++;
                    else if (neighborVal === "E") neighbors.push([neighborRow, neighborCol]);
                }
            }
        }

        if (mine > 0) board[currRow][currCol] = mine.toString();
        else { //meaning no adjacent mines
            board[currRow][currCol] = "B";

            queue.push(...neighbors);
        }
    }

    //checking boundary
    function valid(row, col) {
        return row >= 0 && col >= 0 && row < m && col < n;
    };

    return board;
}
minesweeper([["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]); //[["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
//  E E E E E    B 1 E 1 B
//  E E M E E -> B 1 M 1 B
//  E E E E E    B 1 1 1 B
//  E E E E E    B B B B B 

minesweeper(board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], click = [1,2]); //[["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
//  B 1 E 1 B    B 1 E 1 B
//  B 1 M 1 B -> B 1 X 1 B
//  B 1 1 1 B    B 1 1 1 B
//  B B B B B    B B B B B
