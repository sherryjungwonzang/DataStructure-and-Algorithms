//59. Spiral Matrix2
//given a positive integer 'n'
//generate n x n matrix filled with elements from 1 to n^2 in spiral order

//Approach:
//looping through the matrix and add value with increasing - starting from 1 at 0,0 position
var spiralMatrix2 = (n) => {
    //making matrix
    let matrix = new Array(n).fill([]).map((arr) => new Array(n).fill(0));

    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;
    let val = 1;

    while (top <= bottom) {
        //top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = val++;
        }
        top++;

        //right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = val++;
        }
        right--;

        //bottom row
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = val++;
        }
        bottom--;

        //left column
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = val++;
        }
        left++;
    }

    return matrix;
}
spiralMatrix2(3); //[[1,2,3],[8,9,4],[7,6,5]]
//[0, 0, 0]
//[0, 0, 0]
//[0, 0, 0]

//->
//[1, 2, 3]
//[8, 9, 4]
//[7, 6, 5]

spiralMatrix2(4); //[[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
