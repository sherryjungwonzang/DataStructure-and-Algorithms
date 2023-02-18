//Blind75 - Matrix
//1. set Matrix Zeroes(73)
//given an m x n integer 'matrix'
//if an element is 0 - set its entire row and colum to 0's
function setMatrixZeroes (matrix) {
  //extract and gather the row and column of zero
  let zeroPosition = [];

  //loop through the matrix and find all the zeroes -> into zeroPosition
  //store the position of the row and the position of the column in zeroPosition
  for (let i = 0; i < matrix.length; i++) { //matrix.length: row
    for (let j = 0; j < matrix[0].length; j++) { //matrix[0].length: column
      if (matrix[i][j] === 0) {
        zeroPosition.push([i, j]);
      }
    }
  }

  //based on the information from zeroPosition,
  //where row is equal to 1 - update all values to 0
  //where colum is equal to 1 - update all values to 0
  for (let i = 0; i < zeroPosition.length; i++) {
    //extract the row and column
    const [row, col] = zeroPosition[i];

    //loop through the rows - and change the value
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }

    //loop through the columns - and change the value
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }
}
//TC: O(m * n)
//SC: O(m + n)

setMatrixZeroes([[1,1,1], [1,0,1], [1,1,1]]); //[[1,0,1], [0,0,0], [1,0,1]]
// 1,1,1
// 1,0,1
// 1,1,1

//zeroPosition = [ [1,1] ] -> representing the zero position
//where row of [1,1] is equal to 1 - update all values to 0
//where colum of [1,1] is equal to 1 - update all values to 0

//[row, col] = [1,1]
//matrix[0][1] = 0; -> [1,0,1]
//matrix[1][0] = 0; -> [0,0,1]


setMatrixZeroes([[0,1,2,0], [3,4,5,2], [1,3,1,5]]); //[[0,0,0,0], [0,4,5,0], [0,3,1,0]]
// 0,1,2,0
// 3,4,5,2
// 1,3,1,5

//zerpPosition = [ [0,0],[0,3] ]

//i = 0            | i = 1            | i = 2            | i = 3
//[row, col] = [0,0],[0,3]
//matrix[0][0] = 0 | matrix[1][0] = 0 | matrix[2][0] = 0 | matrix[3][0] = 0
//matrix[0][0] = 0 | matrix[0][1] = 0 | matrix[0][2] = 0 | matrix[0][3] = 0

//matrix[0][3] = 0 | matrix[1][3] = 0 | matrix[2][3] = 0 | matrix[3][3] = 0
//matrix[0][0] = 0 | matrix[0][1] = 0 | matrix[0][2] = 0 | matrix[0][3] = 0

//---> [0,0,0,0], [0,4,5,0], [0,3,1,0]


//2. Spiral Matrix (54)
//given an m x n matrix
//return all elements of the matrix in spiral order
var spiralMatrix = (matrix) => {
  //define the variables
  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let size = matrix.length * matrix[0].length; 
  let nums = []; //to store all values as we traverse through the entire matrix

  //end clause
  //need to end the looping when the res contains all the values within the matrix
  //if the size is equal to res -> end
  while(nums.length < size) {
    //loop through the first row
    for (let i = left; i < right && nums.length < size; i++) {
      //need to add values to the empty array after looping 
      nums.push(matrix[top][i]); //matrix[top] is static = 0
    }
    top++; //need to exclude the the first row from the search critetia

    //loop through the last column
    for (let i = top;  i <= bottom && nums.length < size; i++) {
      nums.push(matrix[i][right]); //matrix[right] is static = matrix[0].length-1
    }
    right--; //to exclude the last column from the search criteria

    //loop through the last row
    for (let i = right; i >= left && nums.length < size; i--) {
      nums.push(matrix[bottom][i]); //matrix[bottom] is static = matrix.length-1
    }
    bottom--; //to exclude the last row from the search criteria

    //loop through the first column
    for (let i = bottom; i >= top & nums.length < size; i--) {
      nums.push(matrix[i][left]);
    }
    left++; //to exclude the first column from the search criteria
  }
  return nums;
}
spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); //[1,2,3,6,9,8,7,4,5]
// l[0]    r[2]
//  1   2   3  r1 -> top[0]
//  4   5   6  r2 
//  7   8   9  r3 -> bottom[2]


spiralMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]); //[1,2,3,6,9,8,7,4,5]// l[0]    r[2]
// l[0]        r[3]
//  1   2   3   4 r1 -> top[0]
//  5   6   7   8 r2 
//  9  10  11  12 r3 -> bottom[2]