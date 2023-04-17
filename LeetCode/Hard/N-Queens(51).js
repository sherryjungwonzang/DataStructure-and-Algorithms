//51. N-Queens
//the n-queens puzzle is the problem of placing 'n' queens on an n x n chessboard such that no two queens attack each other
//given an integer 'n'
//return all distinct solutions to the n-queens puzzle
//may return the answer in any order

//each solution contains a distinct board configuration of the n-queens' placement
//where 'Q' and '.' both indicate a queen and an empty space, respectivelt
var nQueens = (n) => {
  if(n.length === 1) return [["Q"]];

  //check if the column or diagonals have an attacking queen
  //using Set to store
  let col = new Set();
  let posDiag = new Set();
  let negDiag = new Set();
  let res = []; //to restore results

  //create a 2 x 2 board
  //each value has a period in it as a string
  let board = Array.from(Array(n), () => new Array(n).fill("."));

  //helper functions
  //1) isValid - taking row and column || check if column does not have an attacking queen
  const isValid = (r, c) => !(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c));

  //2) addQueen - if the position is valid, need to add the queen
  const addQueen = (r, c) => {
    col.add(c);
    posDiag.add(r + c);
    negDiag.add(r - c);
    //need to add "Q"  tot he board at r and c
    board[r][c] = "Q";
  }

  //3) deleteQueen: for recursive call - backtracking
  //clean up the board - remove the queen from the board
  const removeQueen = (r, c) => {
    col.delete(c);
    posDiag.delete(r + c);
    negDiag.delete(r - c);
    //need to add "."  tot he board at r and c
    board[r][c] = ".";
  }

  //4) recursive backtracking function
  //by popping off so clean up afterwards to check all pther potential solutions
  function recurse(row) {
    //base case
    if (row === n) {
      //need to create a copy of the board - the original board to check for all other solutions
      //map over that board and join with a string - create a copy
      res.push([...board].map((row) => row.join("")));
    }

    //recurrence relation
    //looping through column
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        addQueen(row, col);
        //carry out the recurrence
        recurse(row + 1);

        //backtracking
        removeQueen(row, col);
      }
    }
  }
  recurse(0);

  return res;
}
nQueens(4); //[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] - There exist two distinct solutions to the 4-queens puzzle

nQueens(1); //[["Q"]]
