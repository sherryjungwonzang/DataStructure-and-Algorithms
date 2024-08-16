//1277. Count square submatrices with all ones
//given a m * n matrix of ones and zeroes
//return how many square submatrices have all ones

//Approach:
//using DP
var countSquareSubmatrices = (matrix) => {
    let count = 0;
    let m = matrix.length;
    let n = matrix[0].length;

    //DP
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) continue;

            //check left, top, diagonal side
            if (i > 0 && j > 0) matrix[i][j] += Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]);

            count += matrix[i][j]; //need to count every value
        }
    }

    return count;
}
countSquareSubmatrices([
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]); //15 - There are 10 squares of side 1, 4 squares of side 2, 1 square of side 3
//Total number of squares = 10 + 4 + 1 = 15.

//m = 3, n = 4
//count = 0
//i = 0, j = 0 -> "0"
//i = 0, j = 1 -> continue
//i = 0, j = 2 -> continue
//i = 0, j = 3 -> continue

//i = 1, j = 0 -> continue
//i = 1, j = 1 -> matrix[1][1] += min(1, 1, 0) = 1 + 0 = 1
//i = 1, j = 2 -> matrix[1][2] += min(1, 1, 1) = 1 + 1 = 2
//i = 1, j = 3 -> matrix[1][3] += min(1, 1, 1) = 1 + 1 = 2
//  [0,1,1,1]
//  [1,1,2,2]
//  [0,1,1,1]

//i = 2, j = 0 -> continue
//i = 2, j = 1 -> matrix[2][1] += min(0, 1, 1) = 1 + 0 = 1
//i = 2, j = 2 -> matrix[2][2] += min(1, 2, 1) = 1 + 1 = 2
//i = 2, j = 3 -> matrix[2][3] += min(1, 2, 2) = 2 + 1 = 3
//  [0,1,1,1]
//  [1,1,2,2]
//  [0,1,2,3]

countSquareSubmatrices([
  [1,0,1],
  [1,1,0],
  [1,1,0]
]); //7
//There are 6 squares of side 1.  
//There is 1 square of side 2. 
//Total number of squares = 6 + 1 = 7
