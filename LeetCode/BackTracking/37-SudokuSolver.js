//37. Sudoku Solver
//write a program to solve a Sudoku puzzle by filling the empty cells

//sudoku solution must satisfy all of the following rules:
//each of the digits 1-9 must occur exactly once in each row
//each of the digits 1-9 must occur exactly once in each column
//each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid
//the '.' character indicates empty cells

//Approach:
//using recursion with backtracking
var sudokuSolver = (board) => {
    let m = board.length;
    const EMPTY = ".";
    const possibleNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let emptySpaces = []; //all positions are empty

    //looping board
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            //empty
            if (board[i][j] === EMPTY) emptySpaces.push({ row: i, col: j });
        }
    };

    //validating
    function isValid(num, row, col, board) {
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;

        //checking 3 x 3 grid
        for (let i = 0; i < m; i++) {
            //duplicates
            if (board[row][i] === num || board[i][col] === num) return false;

            //checking 3 x 3 matrix
            for (let i = startRow; i < startRow + 3; i++) { //row
                for (let j = startCol; j < startCol + 3; j++) { //col
                    //duplicates
                    if (board[i][j] === num) return false;
                }
            }
        }

        return true;
    }

    //backtracking
    function recurse(emptySpaceIndex) {
        //base case
        if (emptySpaceIndex >= emptySpaces.length) return true;

        //extracting row and col
        let {row, col} = emptySpaces[emptySpaceIndex];

        //checking validation
        for (let i = 0; i < possibleNumbers.length; i++) {
            let num = possibleNumbers[i];

            //validation
            if (isValid(num, row, col, board)) {
                board[row][col] = num;

                //recursive calls
                if (recurse(emptySpaceIndex + 1)) return true;

                //backtracking
                board[row][col] = EMPTY;
            }
        }

        return false;
    };

    recurse(0);

    return board;
}
sudokuSolver(
    [["5","3",".",".","7",".",".",".","."],
     ["6",".",".","1","9","5",".",".","."],
     [".","9","8",".",".",".",".","6","."],
     ["8",".",".",".","6",".",".",".","3"],
     ["4",".",".","8",".","3",".",".","1"],
     ["7",".",".",".","2",".",".",".","6"],
     [".","6",".",".",".",".","2","8","."],
     [".",".",".","4","1","9",".",".","5"],
     [".",".",".",".","8",".",".","7","9"]]
); 
//[["5","3","4","6","7","8","9","1","2"],
// ["6","7","2","1","9","5","3","4","8"],
// ["1","9","8","3","4","2","5","6","7"],
// ["8","5","9","7","6","1","4","2","3"],
// ["4","2","6","8","5","3","7","9","1"],
// ["7","1","3","9","2","4","8","5","6"],
// ["9","6","1","5","3","7","2","8","4"],
// ["2","8","7","4","1","9","6","3","5"],
// ["3","4","5","2","8","6","1","7","9"]]
