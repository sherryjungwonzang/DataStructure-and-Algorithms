//566. Reshape the matrix
//in MATLAB, there is a handy function called reshape - which can reshape an m x n matrix into a new one with a different size r x c keeping its original data
//given an m x n matrix 'mat' and two integers r and c - representing the num of rows and cols of the wanted reshaped matrix
//the reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were
//if the reshape operation with given parameters is possible and legal, output the new reshaped matrix
//otherwise, output the original matrix

//.flat(): create a new array with all sub-array elements concatenated into it recursively up to the specified depth
//.splice(): change the contents of an array by removing or replacing existing elements and/or adding new elements
var reshapeMatrix = (mat, r, c) => {
    let arr = mat.flat();
    let res = [];

    //base checking
    if (r * c !== arr.length) return mat;

    while (arr.length) {
        res.push(arr.splice(0, c));
    }
    return res;
}
reshapeMatrix(mat = [[1,2],[3,4]], r = 1, c = 4); //[[1,2,3,4]]
// 1  2
// 3  4    ->  1 2 3 4 

reshapeMatrix(mat = [[1,2],[3,4]], r = 2, c = 4); //[[1,2],[3,4]]
// 1  2         1  2
// 3  4    ->   3  4
