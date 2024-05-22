//51. N-Queens
//the n-queens puzzle is the problem of placing 'n' queens on an n x n chessboard such that no two queens attack each other
//given an integer 'n'
//return all distinct solutions to the n-queens puzzle
//may return the answer in any order

//each solution contains a distinct board configuration of the n-queens' placement
//where 'Q' and '.' both indicate a queen and an empty space, respectively
var nQueens = (n) => {
  if (n.length === 1) return [["Q"]];

  //check if the column or diagonals have an attacking queens
  //using Set to store
  let col = new Set();
  let posDiag = new Set();
  let negDiag = new Set();
  let res = [];

  //create a 2 x 2 board
  //each value has a period in it as a string
  let board = Array.from(Array(n), () => new Array(n).fill("."));

  //helper functions
  //1. isValid - current position is valid or not
  //taking row and column and check if column does not have an attacking queen
  //posDiag = r + c
  //negDiag = r - c
  //if col does not have attacking queen - c
  const isValid = (r, c) => !(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c));

  //2. addQueen - add the queen if the position is valid
  const addQueen = (r, c) => {
    col.add(c);
    posDiag.add(r + c);
    negDiag.add(r - c);
    board[r][c] = "Q"; //adding "Q" at r and c
  }


  //3. removeQueen - to remove the queen from the board to clean up the board
  //using on backtracking with recursive call
  const removeQueen = (r, c) => {
    col.delete(c);
    posDiag.delete(r + c);
    negDiag.delete(r - c);
    board[r][c] = "."; //turning back "." to the board at r and c
  }

  //4. recursive backtracking
  function recurse (row) {
    //base case
    if (row === n) {
      //need to create a copy of the board - the original board is used to check for all other solutions
      //map over that board and join with a string
      res.push([...board].map((row) => row.join("")));
    }

    //recurrence relation - looping through column
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        addQueen(row, col);
        recurse(row + 1); //carry out the recurrence
        removeQueen(row, col); //backtracking
      }
    }
  }
  recurse(0);

  return res;
}
nQueens(4); //[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] - There exist two distinct solutions to the 4-queens puzzle

nQueens(1); //[["Q"]]
