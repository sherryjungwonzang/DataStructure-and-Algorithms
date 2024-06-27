//688. Knight Probability in Chessboard
//on an n x n chessboard, a knight starts at the cell (row, col) and attempts to make exactly k moves
//the rows and columns are 0-indexed, so that top-left cell is (0, 0) and the bottom-right cell is (n - 1, n - 1)

//a chess knight has 8 possible moves it can make, as illustrated 
//each move is two cells in a cardinal direction, then one cell in an orthogonal direction

//the knight continues moving until it has made exaclty k moves or has moved off the chessboard
//return the probability that the knight remains on the board after it has stopped moving

//Approach:
//using DP
var knightProbabilityChessboard = (n, k, row, column) => {
  //directions
  let dirs = [ [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2] ];
  let dp = [...Array(k + 1)].map(() => [...Array(n)].map(() => Array(n).fill(0)));

  //setting as start point
  dp[0][row][col] = 1;

  //recursing
  for (let t = 1; t <= k; t++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        //recursing all directions
        for (let [dx, dy] of dirs) {
          let x = i + dx;
          let y = j + dy;

          //recursive calls to all 8 moves & dividng by 8 for calculatiung the probability
          if (x >= 0 && x < n && y >= 0 && y < n) dp[t][i][j] += dp[t - 1][x][y] / 8;
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += dp[k][i][j];
    }
  }

  return res;
}
knightProbabilityChessboard(3, 2, 0, 0); //0.06250

knightProbabilityChessboard(1, 0, 0, 0); //1.00000
