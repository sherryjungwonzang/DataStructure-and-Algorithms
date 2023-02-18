//Spiral Matrix (54)
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
