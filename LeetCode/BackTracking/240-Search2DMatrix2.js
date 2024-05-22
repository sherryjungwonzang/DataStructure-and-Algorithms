//240. Search a 2D matrix2
//write an efficient algorithm that searched for a value target in an m x n matrix 'matrix'
//this matrix has the following properties:
//integers in each row are sorted in ascending from left to right
//integers in each column are sorted in ascending from top to bottom

//Approach:
//using binary search
var search2DMatrix2 = (matrix) => {
    let m = matrix.length;
    let n = matrix[0].length;

    let row = 0;
    let col = n - 1;
    while(row < n && col >= 0) {
        if (matrix[row][col] === target) return true;
        if (matrix[row][col] > target) { //meaning need to adjust the range to left side
            col--;
        } else { //meaning need to adjust the range to the down side
            row ++;
        }
    }
    return false;
}
//TC: O(m + n)
//SC: O(1)
search2DMatrix2(matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5); //true
//row: 0, col: 4 -> 15 > target -> col--
//row: 0, col: 3 -> 11 > target -> col--
//row: 0, col: 2 -> 7 > target -> col--
//row: 0, col: 1 -> 4 < target -> row++
//row: 1, col: 1 -> 5 = target -> true

search2DMatrix2(matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20); //false

//Another approach - time limit exceeded
var search2DMatrix2 =  (matrix) => {
    //base case 
    if (!matrix || !matrix.length) return false;

    let m = matrix.length - 1;
    let n = matrix[0].length - 1;
    
    function recurse (startRow, endRow, startCol, endCol) {
        //base case
        if (startRow > endRow || startCol > endCol) return false;
    
        //find mid value
        let middleRow = Math.floor((endRow - startRow) / 2) + startRow;
        let middleCol = Math.floor((endCol - startCol) / 2) + startCol;
    
        if (matrix[middleRow][middleCol] === target) return true;
        if (matrix[middleRow][middleCol] < target) {
            return recurse(middleRow + 1, endRow, startCol, endCol) || recurse(startRow, middleRow, middleCol + 1, endCol);
        } else {
            return recurse(startRow, endRow, startCol, middleCol - 1) || recurse(startRow, middleRow - 1, middleCol, endCol);
        }
    }
    return recurse(0, m, 0, n);
}
