//221. Maximal Square
//given an m x n binary matrix filled with 0's and 1's
//find the largest square containing only 1's and return its area

//Approach:
//using DP
var maximalSquare = (matrix) => {
    let m = matrix.length; //row
    let n = matrix[0].length; //col
    let max = 0;
    let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
    
    //base case
    if(m == 0) return 0;

    //DP
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            //only 1's
            if (matrix[i - 1][j - 1] === "1") {
                //checking above, left, diagonal above-left value
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;

                max = Math.max(max, dp[i][j]);
            }
        }
    }
    
    return max * max; //square
}
//TC: O(m * n)
//SC: O(m * n)
maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]); //4
//  1,0,1,0,0
//  1,0,1,1,1
//  1,1,1,1,1
//  1,0,0,1,0
//m = 4, n = 5

//DP
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//max = 0

//i = 1, i = 1
//dp[1][1] = min(dp[0][1], dp[1][0], dp[0][0] + 1) = (0, 0, 0) + 1 = 1 
//   0 0 0 0 0 0
//   0 1 0 0 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//max = 0 -> max (0, 1) = 1

//i = 1, j = 3
//dp[1][3] = min(dp[0][3], dp[1][2], dp[0][2]) + 1 = (0, 0, 0) + 1 = 1
//   0 0 0 0 0 0
//   0 1 0 1 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//max = 0 -> max (0, 1) = 1 -> max (0, 1) = 1

//i = 2, i = 1
//dp[2][1] = min(dp[1][1], dp[2][0], dp[1][0] + 1) = (1, 0, 0) + 1 = 1 
//   0 0 0 0 0 0
//   0 1 0 1 0 0
//   0 1 0 0 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//max = 0 -> max (0, 1) = 1 -> max (0, 1) = 1 -> max (0, 1) = 1
//....
//   0 0 0 0 0 0
//   0 1 0 1 0 0
//   0 1 0 1 1 1
//   0 1 1 1 2 2
//   0 1 0 0 1 0
//max = 0 -> max (0, 1) = 1 -> max (0, 1) = 1 -> max (0, 1) = 1 -> ... -> 2
//max * max = 2 * 2 = 4

maximalSquare([["0","1"],["1","0"]]); //1
//  0  1
//  1  0

//DP
//  0 0 0
//  0 0 0
//  0 0 0
//max = 0

//[0][1] = 1
//dp[1][1] = min(0, 0, 0) + 1 = 1
//  0 0 0
//  0 0 1
//  0 0 0
//max = 0 -> 1

//[1][0] = 1
//dp[2][1] = min(0, 0, 0) + 1 = 1
//  0 0 0
//  0 0 1
//  0 1 0
//max = 0 -> 1 -> 1

//max * max = 1
