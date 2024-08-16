//64. Minimum Path Sum
//given a m x n grid filled with non negative numbers
//find a path from top left to bottom right, which minimizes the sum of all numbers along its path
//you can move either down or right at any point in time

//Approach:
//using DP with 2D array
var minPathSum = (grid) => {
    let m = grid.length;
    let n = grid[0].length;

    //DP
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            //base case
            if (i === 0 && j === 0) continue; 
            //boundary row and col
            else if (i === 0) grid[i][j] += grid[i][j - 1]; //adding left position value
            else if (j === 0) grid[i][j] += grid[i - 1][j]; //adding top position value
            else { //inside row and col
                //checking left and top value
                if (grid[i][j] + grid[i][j - 1] < grid[i][j] + grid[i - 1][j]) grid[i][j] += grid[i][j - 1]; //adding left
                else grid[i][j] += grid[i - 1][j]; //adding top value
            }
        }
    }

    return grid[m - 1][n - 1];
}
minPathSum([1,3,1],[1,5,1],[4,2,1]); //7: 1 -> 3 -> 1 -> 1 -> 1 minimizes the sum
//  1, 3, 1
//  1, 5, 1
//  4, 2, 1

//m = 3, n = 3
//i = 0, j = 0 -> continue
//i = 0, j = 1 -> grid[0][1] += grid[0][0] = 4
//  1, 4, 1
//  1, 5, 1
//  4, 2, 1
//i = 0, j = 2 -> grid[0][2] += grid[0][1] = 5
//  1, 4, 5
//  1, 5, 1
//  4, 2, 1

//i = 1, j = 0 -> grid[1][0] += grid[0][0] = 2
//  1, 4, 5
//  2, 5, 1
//  4, 2, 1

//i = 1, j = 1 -> grid[1][1] + grid[1][0] = 5 + 2 = 7 < grid[1][1] + grid[0][1] = 5 + 4 = 9 
//adding left value -> grid[1][1] += grid[1][0] = 7
//  1, 4, 5
//  2, 7, 1
//  4, 2, 1

//i = 1, j = 2 -> grid[1][2] + grid[1][1] = 1 + 7 = 8 > grid[1][2] + grid[0][2] = 1 + 5 = 9 
//adding left value -> grid[1][1] += grid[0][2] = 6
//  1, 4, 5
//  2, 7, 6
//  4, 2, 1

//i = 2, j = 0 -> grid[2][0] += grid[1][0] = 6
//  1, 4, 5
//  2, 7, 6
//  6, 2, 1

//i = 2, j = 1 -> grid[2][1] + grid[2][0] = 2 + 4 = 6 < grid[2][1] + grid[1][1] = 2 + 7 = 9 
//adding left value -> grid[2][1] += grid[1][0] = 8
//  1, 4, 5
//  2, 7, 6
//  6, 8, 1

//i = 2, j = 2 -> grid[2][2] + grid[2][1] = 1 + 8 = 9 > grid[2][2] + grid[1][2] = 1 + 6 = 7
//adding left value -> grid[2][2] += grid[1][2] = 7
//  1, 4, 5
//  2, 7, 6
//  6, 8, 7

minPathSum([[1,2,3],[4,5,6]]); //12: 1 -> 2 -> 3 -> 6 minimuzes the sum
