//62. Unique Paths
//given the two integers'm' and 'n'
//return the num of possible unique paths that robot can take to reach the bottom-right corner

//there is a robot on an 'm x n' grid
//the robot is initially located at the top-left corner - grid[0][0]
//the robot tries to move to the bottom-right corner - grid[m-1][n-1]
//the robot can only move either down or right at any point in time

//Approach:
//using 2D Array
//setting the first row and column as 1 - there is only one way of getting to that position
var uniquePaths = (m, n) => {
    let dp = Array.from(Array(m), () => new Array(n));  //2D DP array
    let x = dp.length;
    let y = dp[0].length;

    //looping first row and col with setting as 1 - only one way of getting to that position
    for (let i = 0; i < x; i++) dp[i][0] = 1;
    for (let i = 0; i < y; i++) dp[0][i] = 1;

    //the rest of DP
    for (let i = 1; i < x; i++) {
        for (let j = 1; j < y; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}
//TC: O(m * n) - traversing every single value within the grid
//SC: O(m * n) - storing new values within DP Array
uniquePaths(3, 7); //28
//DP:
// 0 | 1 | 1 | 1  | 1  | 1  | 1 |
// 1 | 2 | 3 | 4  | 5  | 6  | 7 |
// 1 | 3 | 6 | 10 | 15 | 21 | 28 |

uniquePaths(3, 2); //3
//explanation: from the top-left corner, there are total of 3 ways to each the bottom-right corner
//right -> down -> down
//down -> down -> right
//down -> right -> down
 
//DP:
// 0 | 1 |
// 1 | 2 |
// 1 | 3 |
