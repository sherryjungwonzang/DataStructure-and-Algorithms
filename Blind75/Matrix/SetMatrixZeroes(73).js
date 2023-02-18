//set Matrix Zeroes(73)
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


