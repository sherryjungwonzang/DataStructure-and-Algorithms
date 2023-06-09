//36. Valid Sudoku
//determine if a 9 x 9 Sudoku board is valid
//only the filled cells need to be validated accodring to the following rules

//each row must contain the digits1-9 without repetition
//each column must contain the digits 1-9 without repetition
//each of the nin 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition

//sudoku board (partially filled) could be valid but it not necessarily solvable
//only the filled cells need to be validated according to the mentioned rules

//Approach:
//using one for loop with setting different set for every row and column and every sub-boxes
//faster than the brute force approach but taking more space in memory
var validSudoku = (board) => {
  //setting three different sets
  const rows = [], cols = [], boxes = [];

  //initialzing sets - having 9 sets for 9 rows, 9 sets for 9 columns, 9 sets for 9 boxes
  for (let i = 0; i < board.length; i++) {
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set());
  }

  //looping through board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      //setting the cell from board
      const cell = board[i][j];
      //setting each sub-boxes with dividing i and j of 3
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);

      if (cell === ".") continue;

      //checking duplicates - row and column
      if (rows[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell)) {
        return false;
      } else {
        rows[i].add(cell);
        cols[j].add(cell);
        boxes[boxNum].add(cell);
      }
    } 
  }
  return true;
}
validSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]); //true

validSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]); //false
