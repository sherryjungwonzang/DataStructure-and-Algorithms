//1572. Matrix Diagonal Sum
//given a square matrix 'mat'
//return the sum of the matrix diagonals
//only include the sum of all the elements on the primary diagonal and all the elements on the secondary
//that are not part of the primary diagonal
var matrixDiagonalSum = (mat) => {
    let row = 0;
    let col = mat.length - 1;
    let res = 0;

    for (let i = 0; i < mat.length; i++) {
        if (row === col) res += mat[row][col]; //only calculate once since it is duplicate
        else res += mat[i][row] + mat[i][col]; //primary diagonal and secondary diagonal

        row++;
        col--;
    }
    return res;
}
matrixDiagonalSum([[1,2,3], [4,5,6], [7,8,9]]); //25
//Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
//Notice that element mat[1][1] = 5 is counted only once

matrixDiagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]]); //8

matrixDiagonalSum([[5]]); //5
