//36. Valid Sudoku
//determine if a 9 x 9 Sudoku board is valid
//only the filled cells need to be validated accodring to the following rules

//each row must contain the digits1-9 without repetition
//each column must contain the digits 1-9 without repetition
//each of the nin 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition

//sudoku board (partially filled) could be valid but it not necessarily solvable
//only the filled cells need to be validated according to the mentioned rules

//Approach1:
//using one for loop with setting different set for every row and column and every sub-boxes
//faster than the brute force approach but taking more space in memory
var validSudoku = (board) => {
    //row checking
    for (let i = 0; i < board.length; i++) {
        const set = new Set();

        for (let j = 0; j < board[i].length; j++) {
            const cell  = board[i][j];

            if (cell === '.') continue;

            if (set.has(cell)) {
                return false;
            } else {
                set.add(cell);
            }
        }
    }


    //column checking
    for (let i = 0; i < board.length; i++) {
        const set = new Set();

        for (let j = 0; j < board[i].length; j++) {
            const cell = board[j][i];

            if (cell === ".") continue;

            if (set.has(cell)) {
                return false;
            } else {
                set.add(cell);
            }
        }
    }


    //sub-boxes checking
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const set = new Set();
        
            //sub-boxes
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    //cell of sub-boxes
                    const cell = board[3 * i + k][3 * j + l];

                    if (cell === ".") continue;

                    if (set.has(cell)) {
                        return false;
                    } else {
                        set.add(cell);
                    }
                }
            }
        }
    }
    return true;
}
validSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]); //true

validSudoku(
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]); //false
