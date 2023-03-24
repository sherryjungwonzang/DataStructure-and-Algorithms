//4. Number of Islands(200)
//given an array m x n 2d Binary grid 'grid' which represents a map of '1's land and '0''s water
//return the number of islands
//an island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically
//may assume all four edges of the grid are all surrounded by water

//Approach:
//update 'count' variable when the dfs loops all directions and change it to 0
//DFS recursive call - to check all possible solutions
//base case: neighbors are equal to 0 and whether it is inbound
var numOfIslands = (grid) => {
  let count = 0;

  //to find all the positions in the grid that are equal to 1
  for (let i = 0; i < grid.length; i++) { //row
    for (let j = 0; j < grid[i].length; j++) { //column
      //recursive function when it is "1" - to check all other possible positions
      if (grid[i][j] === "1") {
        count += dfs(grid, i, j); //i is row, j is column
      }
    }
  }

  function dfs(grid, row, col) {
    //base cases
    //1. neighbors are equal to 0 - which means water
    //2. row and col is inbound
    if (row < 0 || row > grid.length - 1 
        || col < 0 || col > grid[row].length - 1 
        || grid[row][col] === "0") {
      return;
    }

    //to set a grid at row column to equal 0
    grid[row][col] = "0"; //need to stop any further dfs calls from going back to the previous position 

    //four directions
    dfs(grid, row + 1, col); //down direction
    dfs(grid, row - 1, col); //up direction
    dfs(grid, row, col + 1); //right direction
    dfs(grid, row, col - 1); //left direction

    //finally, we find all neighboring islands
    //need to return 1
    return 1;
  }
  return count;
}
//TC: O(m * n) - m is the num of rows, n is the num of columns
//SC: O(m * n)
numOfIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]); //1

numOfIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]); //3
