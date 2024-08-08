//63. Unique Paths2
//given an m x n integer array 'grid'
//there is a robot initially located at the top-left corner - grid[0][0]
//the robot tried to move to the bottom-right corner - grid[m-1][n-1]
//the robot can only move either down or right at any point in time

//an obstacle and space are makred as 1 or 0 respectively in grid
//a path that the robot takes cannot include any square that is an obstacle

//return the number of possible unique paths that the robot can take to reach the bottom-right corner
//the testcases are generated so that the answer will be less than or equal to 2 * 10^9

//Approach:
//using DP - upon sub-problems
var uniquePaths2 = (obstacleGrid) => {
    let  m = obstacleGrid.length; //row
    let  n = obstacleGrid[0].length; //col
    let dp = Array.from(Array(m),  () => Array(n).fill(0));

    //looping through rows
    for (let i = 0; i < m; i++) {
        //checking value in the cell
        if (obstacleGrid[i][0] === 1) { 
            dp[i][0] = 0; //obstacle in the grid
            break;
        } else { //no obstacle
            dp[i][0] = 1;
        }
    };

    //looping through cols
    for (let j = 0; j < n; j++) { 
        if (obstacleGrid[0][j] === 1) {
            dp[0][j] = 0;
            break;
        } else {
            dp[0][j] = 1;
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
// Grid                                        DP  
// 0 0 0                                     0 0 0 
// 0 1 0 -> there is an obstacle             0 0 0 
// 0 0 0                                     0 0 0

//checking row first
// DP 
// 1 0 0 
// 1 0 0
// 1 0 0
//no obstacle -> change 0 to 1 in DP array

//checking column 
// DP 
// 1 1 1 
// 1 0 0
// 1 0 0
//no obstacle -> change 0 to 1 in DP array

//checking the rest of Grid -> (1, 1): obstacle
// DP 
// 1 1 1 
// 1 0 1 -> obstacle(1,1): leave it as 0
// 1 1 2
//(1,2): 0[0,2] + 1[1,1] = 1
//(2,1): 0[1,1] + 1[2,0] = 1
//(2,2): 1[2,1] + 1[1,2] = 2

uniquePaths2([[0,1], [0,0]]); //1
