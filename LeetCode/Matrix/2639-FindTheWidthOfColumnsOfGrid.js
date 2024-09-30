//2639. Find The Width Of Columns Of Grid
//given a 0-indexed m x n integer matrix 'grid'
//the width of a column is the max length of its integers
//for example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3
//return an integer array 'ans' of size n where ans[i] is the width of the ith column
//the length of an integer x with len digits is equal to len if x is non-negative and len + 1 otherwise
var columnWidth = (grid) => {
    let m = grid.length; //row
    let n = grid[0].length; //col
    let res = [];

    //traversing columns
    for (let j = 0; j < n; j++) { //col
        let length = 1;

        for (let i = 0; i < m; i++) { //row
            //checking each length
            length = Math.max(length, grid[i][j].toString().length);
        }

        //find max length
        res.push(length);
    }

    return res;
}
columnWidth(grid = [[-15,1,3],[15,7,12],[5,6,-2]]); //[3, 1, 2]
//  -15 1 3
//   15 7 12
//   5  6 -2

//traversing with first column
//j = 0, i = 0 -> "-15".length = 3  || j = 0, i = 1 -> "15".length = 2  || j = 0, i = 2 -> "".length = 1
//length = 1 -> (1, 3) = 3 -> (2, 3) = 3 -> (3, 1) = 3
//res = [ 3, ]

//traversing with second column
//j = 1, i = 0 -> "1".length = 1  || j = 1, i = 1 -> "7".length = 1  || j = 1, i = 2 -> "6".length = 1
//length = 1 -> (1, 1) = 1 -> (1, 1) = 1 -> (1, 1) = 1
//res = [ 3, 1 ]

//traversing with third column
//j = 2, i = 0 -> "3".length = 1  || j = 2, i = 1 -> "12".length = 2  || j = 2, i = 2 -> "-2".length = 2
//length = 1 -> (1, 1) = 1 -> (2, 1) = 2 -> (2, 2) = 2
//res = [ 3, 1, 2 ]

columnWidth(grid = [[1],[22],[333]]); //[3] - In the 0th column, 333 is of length 3
//  1
//  22
// 333
