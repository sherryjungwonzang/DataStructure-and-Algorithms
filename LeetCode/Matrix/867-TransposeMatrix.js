//867. Transpose Matrix
//given a 2D integer array matrix
//return the transpose of matrix
//the transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and col indices
var transposeMatrix = (matrix) => {
    let m = matrix.length;
    let n = matrix[0].length;
    let res = Array.from({ length: n }, () => Array(m).fill(0));
    
    //tranposing
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[i][j] = matrix[j][i];
        }
    }

    return res;
}
transposeMatrix(matrix = [[1,2,3],[4,5,6]]); //[[1,4],[2,5],[3,6]]
//  1  2  3     
//  4  5  6

//res = 0, 0    1  4
//      0, 0 -> 2  5
//      0, 0    3  6

//i = 0, j = 0 -> [0][0] = res[0][0]
//i = 0, j = 1 -> [0][1] = res[1][0]
//i = 0, j = 2 -> [0][2] = res[2][0]
//i = 1, j = 0 -> [1][0] = res[0][1]
//i = 1, j = 1 -> [1][1] = res[1][1]
//i = 1, j = 2 -> [1][2] = res[2][1]

transposeMatrix(matrix = [[1,2,3],[4,5,6],[7,8,9]]); //[[1,4,7],[2,5,8],[3,6,9]]
//  1  2  3
//  4  5  6 
//  7  8  9 

//res = 0, 0, 0    1  4  7 
//      0, 0, 0 -> 2  5  8
//      0, 0, 0    3  6  9

//i = 0, j = 0 -> [0][0] = res[0][0]
//i = 0, j = 1 -> [0][1] = res[1][0]
//i = 0, j = 2 -> [0][2] = res[2][0]
//i = 1, j = 0 -> [1][0] = res[0][1]
//i = 1, j = 1 -> [1][1] = res[1][1]
//i = 1, j = 2 -> [1][2] = res[2][1]
//i = 2, j = 0 -> [2][0] = res[0][2]
//i = 2, j = 1 -> [2][1] = res[1][2]
//i = 2, j = 2 -> [2][2] = res[2][2]
