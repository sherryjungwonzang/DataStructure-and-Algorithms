//64. Minimum Path Sum
//given a m x n grid filled with non negative numbers
//find a path from top left to bottom right, which minimizes the sum of all numbers along its path
//you can move either down or right at any point in time

//Approach:
//using 2D array with DP
var minPathSum = (grid) => {
  let m = grid.length;
  let n = grid[0].length;

  //DP
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      else if (i === 0) grid[i][j] += grid[i][j - 1]; //adding left position value
      else if (j === 0) grid[i][j] += grid[i - 1][j]; //adding top position value
      else {
        //checking the sum with left position value and top position value
        //if sum with top position value is greater than left position value - adding left value
        if (grid[i][j] + grid[i][j - 1] < grid[i][j] + grid[i - 1][j]) grid[i][j] += grid[i][j - 1];
        else grid[i][j] += grid[i - 1][j]; //adding top value 
      }
    }
  }
  return grid[m - 1][n - 1];
}
minPathSum([1,3,1],[1,5,1],[4,2,1]); //7: 1 -> 3 -> 1 -> 1 -> 1 minimizes the sum

minPathSum([[1,2,3],[4,5,6]]); //12: 1 -> 2 -> 3 -> 6 minimuzes the sum
