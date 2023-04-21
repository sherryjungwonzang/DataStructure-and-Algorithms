//52. N-Queens2
//the n-queens puzzle is the problem of placing 'n' queens on an n x n chessboard such that no two queens attack each other
//given an integer 'n'
//return the number of distinct solutions to the n-queens puzzle
var nQueens2 = (n) => {
  //variables
  let col = new Set();
  let posDiag = new Set();
  let negDiag = new Set();
  let count = 0;

  //helper function - isValid()
  //to check whether the column has an attacking queen 
  //whether postivie diagonal or negative diagonal
  const isValid = (r, c) => !(col.has(c) || posDiag.has(r + c) || negDiag(r - c));

  //for adding the queen to its position
  //within the positive diagonal and the negative diagonal
  const addQueen = (r, c) => {
    col.add(c);
    posDiag.add(r + c);
    negDiag.add(r - c);
  }

  //removing queens
  const removeQueen = (r, c) => {
    col.delete(c);
    posDiag.delete(r + c);
    negDiag.delete(r - c);
  }

  //backtracking
  function recurse(row) {
    //base case
    if (row === n) {
      count++;
    }

    //loop through columns
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        addQueen(row, col);

        count = recurse(row + 1, count);

        removeQueen(row, col);
      }
    }
    return count;
  }
  return recurse(0);
}
nQueens2(4); //2 - there are two distinct solutions to the 4-queens puzzle as shown
nQueens2(1); //1
