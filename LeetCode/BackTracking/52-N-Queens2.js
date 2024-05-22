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

  //helper function
  //1. isValid - to check whether the column has an attacking queen or not
  //whether posDiag or negDiag
  const isValid = (r, c) => !(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c));

  //2. addQueen - for adding the queen to its position
  //within the positive diagonal and the negative diagonal
  const addQueen = (r, c) => {
    col.add(c);
    posDiag.add(r + c);
    negDiag.add(r - c);
  }

  //3. removeQueen - to remove queens when doing backtracking
  const removeQueen = (r, c) => {
    col.delete(c);
    posDiag.delete(r + c);
    negDiag.delete(r - c);
  }

  //backtracking
  function recurse(row) {
    //base case
    if (row === n) count++;

    //looping through columns
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        addQueen(row, col);

        //update count after recursing the next row
        count = recurse(row + 1, count);

        //backtracking
        removeQueen(row, col);
      }
    }
    return count;
  }
  return recurse(0);
}
nQueens2(4); //2 - there are two distinct solutions to the 4-queens puzzle as shown

nQueens2(1); //1
