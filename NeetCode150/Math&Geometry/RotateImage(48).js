//Rotate Image (48)
//given n x n 2D matrix - representing an image, rotate the image by 90 degrees(clockwise)
//to rotate the image in-place - to modify the input 2D matrix directly
//do not allocate another 2D matrix and do the rotation

//Approach:
//1. Transpose - flip the row and column based on diagonal line
//2. Reverse elements and move inwards
var rotateImage = (matrix) => {
  //1. transpose
  //loop through the rows and columns
  //need to set same position with i(row) and j(column) - for flipping
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) { //for flip -> j = i | remove duplicates
      //flipping
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp; 
    }
  }

  //2. Reverse elements and move inwards
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) { //matrix.length/2 - for inwards
      //flipping
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j]; //inwards
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
}
rotateImage([[1,2,3],[4,5,6],[7,8,9]]); //[[7,4,1], [8,5,2], [9,6,3]])
//1   2   3
//4   5   6
//7   8   9

//transpose
//1   4   7
//2   5   8
//3   6   9

//Reverse elements and move inwards
//7   4   1
//8   5   2
//9   6   3

rotateImage([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]); //[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// 5   1   9   11
// 2   4   8   10
// 13  3   6    7
// 15  14  12  16

//transpose
// 5   2   13   15
// 1   4   3    14
// 9   8   6    12
// 11  10  7    16

//Reverse elements and move inwards
//15  13  2  5
//14   3  4  1
//12   6  8  9
//16   7 10  11
