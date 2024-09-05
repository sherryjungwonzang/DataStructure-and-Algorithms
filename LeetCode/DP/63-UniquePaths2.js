//63. Unique Paths2
//given an m x n integer array 'grid'
//there is a robot initially located at the top-left corner - grid[0][0]
//the robot tried to move to the bottom-right corner - grid[m-1][n-1]
//the robot can only move either down or right at any point in time

//an obstacle and space are marked as 1 or 0 respectively in grid
//a path that the robot takes cannot include any square that is an obstacle

//return the number of possible unique paths that the robot can take to reach the bottom-right corner
//the testcases are generated so that the answer will be less than or equal to 2 * 10^9

//Approach:
//using DP
var uniquePaths2 = (obstacleGrid) => {
    let m = obstacleGrid.length; //row
    let n = obstacleGrid[0].length; //col
    let dp = Array.from(Array(m),  () => Array(n).fill(0));

    //looping through rows
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) { //obstacle in the grid
            dp[i][0] = 0; 
            break;
        } else { //no obstacle
            dp[i][0] = 1;
        }
    };

    //looping through cols
    for (let i = 0; i < n; i++) { 
        if (obstacleGrid[0][i] === 1) {
            dp[0][i] = 0;
            break;
        } else {
            dp[0][i] = 1;
        }
    };

    //populate the rest of DP array grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1)  dp[i][j] = 0; //obstacle
            else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}
uniquePaths2([[0,0,0], [0,1,0], [0,0,0]]); //2 - There is one obstacle in the middle of the 3x3 grid above.
//There are two ways to reach the bottom-right corner: 1. Right -> Right -> Down -> Down, 2. Down -> Down -> Right -> Right

// 0 0 0 
// 0 1 0 -> there is an obstacle 
// 0 0 0                        

//checking row first
// DP - [ 0, 0, 0 ]     [ 1, 0, 0 ]
//      [ 0, 0, 0 ] ->  [ 1, 0, 0 ]
//      [ 0, 0, 0 ]     [ 1, 0, 0 ]
//no obstacle in row -> change 0 to 1 in DP array

//checking column 
// DP - [ 1, 0, 0 ]     [ 1, 1, 1 ]
//      [ 1, 0, 0 ] ->  [ 1, 0, 0 ]
//      [ 1, 0, 0 ]     [ 1, 0, 0 ]
//no obstacle in col -> change 0 to 1 in DP array

//checking the rest of Grid -> (1, 1) in grid: obstacle -> change to 0 in DP
// DP - [ 1, 1, 1 ]
//      [ 1, 0, 1 ]
//      [ 1, 1, 2 ]
//i = 1, j = 1 in grid = obstalce -> dp[1][1] = 0
//i = 1, j = 2 in grid not obstacle -> dp[1][2] = dp[0][1] + dp[1][1] = 1 + 0 = 1  
//i = 2, j = 1 in grid not obstacle -> dp[2][1] = dp[1][1] + dp[2][0] = 0 + 1 = 1  
//i = 2, j = 2 in grid not obstacle -> dp[2][2] = dp[1][2] + dp[2][1] = 1 + 1 = 2

uniquePaths2([[0,1], [0,0]]); //1
