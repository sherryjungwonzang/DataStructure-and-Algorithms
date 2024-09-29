//2373. Largest Local Values In Matrix
//given an n x n integer matrix grid
//generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
//maxLocal[i][j] is equal to the largest value of the 3 x matrix in grid centered around row i + 1 and col j + 1
//in other wrods, we want to find the largest value in every contiguous 3 x 3 matrix in grid
//return the generated matrix
var largestValuesMatrix = (grid) => {
    let m = grid.length; //row
    let n = grid[0].length; //col
    let matrix = new Array(m - 2).fill(0).map(() => new Array(n - 2).fill(0)); //making an separate matrix

    //traversing grid
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < m - 2; j++) {
            //traversing 3 x 3 matrix
            matrix[i][j] = Math.max(
                grid[i][j], grid[i][j + 1], grid[i][j + 2],
                grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
                grid[i +2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]
            );
        }
    }

    return matrix;
}
//TC:O(n^2)
//SC:O(n^2)
largestValuesMatrix(grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]); //[[9,9],[8,6]]
//  9 9 8 1
//  5 6 2 6 --> 9 9 
//  8 2 6 4     8 6
//  6 2 2 2

//m = 4, n = 4
//matrix = [  ,  ]
//         [  ,  ]

//i = 0, j = 0                                              i = 0, j = 1
//3 x 3 matrix: [0][0] = 9, [0][1] = 9, [0][2] = 8          3 x 3 matrix: [0][1] = 9, [0][2] = 8, [0][3] = 1
//              [1][0] = 5, [1][1] = 6, [1][2] = 2                        [1][1] = 6, [1][2] = 2, [1][3] = 6
//              [2][0] = 8, [2][1] = 2, [2][2] = 6                        [2][1] = 2, [2][2] = 6, [2][2] = 4
//max value = 9                                             max value = 9
//matrix = [ 9, 9]
//         [  ,  ]

//i = 1, j = 0                                              i = 1, j = 1
//3 x 3 matrix: [1][0] = 5, [1][1] = 6, [1][2] = 2          3 x 3 matrix: [1][1] = 6, [1][2] = 2, [1][3] = 6
//              [2][0] = 8, [2][1] = 2, [2][2] = 6                        [2][1] = 2, [2][2] = 6, [2][3] = 4
//              [3][0] = 6, [3][1] = 2, [3][2] = 2                        [3][1] = 2, [3][2] = 2, [3][2] = 2
//max value = 8                                             max value = 6
//matrix = [ 9, 9]
//         [ 8, 6]

largestValuesMatrix(grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]); //[[2,2,2],[2,2,2],[2,2,2]]
//  1 1 1 1 1
//  1 1 1 1 1       2 2 2
//  1 1 2 1 1  -->  2 2 2
//  1 1 1 1 1       2 2 2
//  1 1 1 1 1
