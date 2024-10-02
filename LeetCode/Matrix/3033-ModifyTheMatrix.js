//3033. Modify The Matrix
//given a 0-indexed m x n integer matrix 'matrix'
//create a new 0-indexed matrix called 'answer'
//make answer equal to matrix, then replace each element with the value -1 with the max element in its respective column
//return the matrix answer
var modifyMatrix = (matrix) => {
    let m = matrix.length; //row
    let n = matrix[0].length; //col
    let colMax = Array(n).fill(0); //to collect max value from column

    //find the max value from each column
    for (let j = 0; j < n; j++) {
        let max = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < m; i++) {
            max = Math.max(max, matrix[i][j]);
        }

        //filling separate matrix with max col val
        colMax[j] = max;
    }

    //replacing
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === -1) matrix[i][j] = colMax[j];
        }
    }

    return matrix;
}
modifyMatrix([[1,2,-1],[4,-1,6],[7,8,9]]); //[[1,2,9],[4,8,6],[7,8,9]]
//  1  2  -1    1  2  9
//  4  -1  6 -> 4  8  6
//  7  8   9    7  8  9

//m = 3, n = 3
//colMax  = [0, 0, 0]

//j = 0, i = 0 = "1"                    ||    j = 0, i = 1 = "4"     ||    j = 0, i = 2 = "7"
//max(Number.MIN_SAFE_INTEGER, 1) = 1         max(1, 4) = 4                max(4, 7) = 7
//max = Number.MIN_SAFE_INTEGER -> 1 -> 4 -> 7
//colMax  = [7, 0, 0]

//j = 1, i = 0 = "2"                    ||    j = 1, i = 1 = "-1"     ||    j = 1, i = 2 = "8"
//max(Number.MIN_SAFE_INTEGER, 2) = 2         max(2, -1) = 2                max(2, 8) = 8
//max = Number.MIN_SAFE_INTEGER -> 2 -> 2 -> 8
//colMax  = [7, 8, 0]

//j = 2, i = 0 = "-1"                    ||    j = 2, i = 1 = "6"     ||    j = 2, i = 2 = "9"
//max(Number.MIN_SAFE_INTEGER, -1) = -1        max(-1, 6) = 6                max(6, 9) = 9
//max = Number.MIN_SAFE_INTEGER -> -1 -> 6 -> 9
//colMax  = [7, 8, 9]

//replacing
//i = 0, j = 2: -1 <-> matrix[0][2] = colMax[2] = 9
//i = 1, j = 1: -1 <-> matrix[1][1] = colMax[1] = 8

modifyMatrix([[3,-1],[5,2]]); //[[3,2],[5,2]]
//  3  -1     3  2  
//  5   2  -> 5  2
