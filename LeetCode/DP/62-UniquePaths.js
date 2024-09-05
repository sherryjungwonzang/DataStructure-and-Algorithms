//62. Unique Paths
//given the two integers 'm' and 'n'
//return the num of possible unique paths that robot can take to reach the bottom-right corner

//there is a robot on an 'm x n' grid
//the robot is initially located at the top-left corner - grid[0][0]
//the robot tries to move to the bottom-right corner - grid[m-1][n-1]
//the robot can only move either down or right at any point in time

//Approach:
//using 2D DP array
var uniquePaths = (a, b) => {
    let dp = Array.from(Array(a), () => new Array(b));  //2D DP array
    let m = dp.length;
    let n = dp[0].length;

    //looping first row and col with setting as 1 - only one way of getting to that position
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let i = 0; i < n; i++) dp[0][i] = 1;

    //the rest of DP
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[a - 1][b - 1];
}
//TC: O(m * n) - traversing every single value within the grid
//SC: O(m * n) - storing new values within DP Array
uniquePaths(3, 7); //28
//DP:
// [  ,  ,  ,  ,  ,  ,  ]            [ 1, 1, 1, 1, 1, 1, 1]
// [  ,  ,  ,  ,  ,  ,  ]     ->     [ 1, 2, 3, 4, 5, 6, 7]
// [  ,  ,  ,  ,  ,  ,  ]            [ 1, 3, 6, 10, 15, 21, 28]

//i = 1, j = 1 -> dp[1][1] = dp[0][1] + dp[1][0] = 1 + 1 = 2
//i = 1, j = 2 -> dp[1][2] = dp[0][2] + dp[1][1] = 1 + 2 = 3
//i = 1, j = 3 -> dp[1][3] = dp[0][3] + dp[1][2] = 1 + 3 = 4
//i = 1, j = 4 -> dp[1][4] = dp[0][4] + dp[1][3] = 1 + 4 = 5
//i = 1, j = 5 -> dp[1][5] = dp[0][5] + dp[1][4] = 1 + 5 = 6
//i = 1, j = 6 -> dp[1][6] = dp[0][6] + dp[1][5] = 1 + 6 = 7

//i = 2, j = 1 -> dp[2][1] = dp[1][1] + dp[2][0] = 2 + 1 = 3
//i = 2, j = 2 -> dp[2][2] = dp[1][2] + dp[2][1] = 3 + 3 = 6
//i = 2, j = 3 -> dp[2][3] = dp[1][3] + dp[2][2] = 4 + 6 = 10
//i = 2, j = 4 -> dp[2][4] = dp[1][4] + dp[2][3] = 5 + 10 = 15
//i = 2, j = 5 -> dp[2][5] = dp[1][5] + dp[2][4] = 6 + 15 = 21
//i = 2, j = 6 -> dp[2][6] = dp[1][6] + dp[2][5] = 7 + 21 = 28
