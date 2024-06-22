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

      if (i > 0 && j > 0) {
        //only check diagonal, left side and top side
        matrix[i][j] += Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]);
      }

      count += matrix[i][j]; //need to count every value
    }
  }
  return count;
}
countSquareSubmatrices([
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]); //15
//There are 10 squares of side 1.
//There are 4 squares of side 2.
//There is  1 square of side 3.
//Total number of squares = 10 + 4 + 1 = 15.

countSquareSubmatrices([
  [1,0,1],
  [1,1,0],
  [1,1,0]
]); //7
//There are 6 squares of side 1.  
//There is 1 square of side 2. 
//Total number of squares = 6 + 1 = 7
