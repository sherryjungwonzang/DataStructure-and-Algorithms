//766. Toeplitz Matrix
//given an m x n matrix
//return true if the matrix is Toeplitz

//Toeplitz - if every diagonal from top-left to bottom-right has the same elements
var toeplitzMatrix = (matrix) => {
    //setting inbound range
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[0].length - 1; j++) {
            if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false;
            }
        }
    }
    return true;
}
//TC: O(n + m)
//SC: O (1)
toeplitzMatrix([[1,2,3,4], [5,1,2,3], [9,5,1,2]]); //true
//the diagonals are "[9]", "[5, 5]", "[1,1,1]", "[2,2,2]", "[3,3]", "[4]"
//in each diagonalall elements are the same, so the answer is true

toeplitzMatrix([[1,2], [2,2]]); //false
//the diagonal "[1,2]" has difference elements
