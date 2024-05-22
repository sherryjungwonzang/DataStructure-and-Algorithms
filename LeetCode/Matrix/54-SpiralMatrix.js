//54. Spiral Matrix
//given an m x n matrix
//return all elements of the matrix in spiral order

//Approach:
//looping through the matrix and reducing the range
var spiralMatrix = (matrix) => {
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    
    let size = matrix.length * matrix[0].length;
    let res = [];

    while(res.length < size) {
        //first row
        for (let i = left; i <= right &&  res.length < size; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        //last column
        for (let i = top; i <= bottom && res.length < size; i++) {
            res.push(matrix[i][right]);
        }
        right--;

        //last row
        for (let i = right; i >= left && res.lenght < size; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;

        //first column
        for (let i = bottom; i >= top && res.length < size; i--) {
            res.push(matrix[i][left]);
        }
    }
    return res;
}
//TC: O (n * m) - visited each element in the matrix exactly one
//SC: O(1)
spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); //[1,2,3,6,9,8,7,4,5]
// l[0]    r[2]
//  1   2   3  r1 -> top[0]
//  4   5   6  r2 
//  7   8   9  r3 -> bottom[2]

//loop the first row and push - [0,0], [0,1], [0,2]
//loop the last column and push - [1,2], [2,2]
//loop the last row and push - [2,0], [2,1]
//loop the first column and push - [1,0]
//nums = [1, 2, 3, 6, 9, 8, 7, 4, 5]

spiralMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]); //[1,2,3,6,9,8,7,4,5]// l[0]    r[2]
// l[0]        r[3]
//  1   2   3   4  r1 -> top[0]
//  5   6   7   8  r2 
//  9  10  11  12  r3 -> bottom[2]
