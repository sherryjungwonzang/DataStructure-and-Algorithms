//3142. Check If Grid Satisfies Conditions
//given a 2D matrix 'grid' of size m x n
//need to check if each cell grid[i][j] is:
//equal to the cell below: grid[i][j] == grid[i + 1][j] (if it exists)
//different from the cell to its right: grid[i][j] != grid[i][j + 1] (if it exists)
//return true if all the cells satisfy these conditions, otherwise return false
var gridSatisfiesConditions = (grid) => {
    let m = grid.length; //row
    let n = grid[0].length; //col

    for (let i = 0; i < m; i++) { //row
        for (let j = 0; j < n; j++) { //col
            //checking row limitation
            if (i < m - 1 && grid[i][j] !== grid[i + 1][j]) return false;
            //checking col limitation
            if (j < n - 1 && grid[i][j] === grid[i][j + 1]) return false;
        }
    }

    return true;
}
gridSatisfiesConditions([[1,0,2],[1,0,2]]); //true
//  1  0  2
//  1  0  2

//m = 2, n = 3
//i = 0, j = 0: "1"
//checking row: i = 0 < m - 1 = 1 && [0][0] == [1][0] -> true
//checking col: j = 0 < n - 1 = 2 && [0][0] != [0][1] -> true

//i = 0, j = 1: "0"
//checking row: i = 0 < m - 1 = 1 && [0][1] == [1][1] -> true
//checking col: j = 1 < n - 1 = 2 && [0][1] != [0][2] -> true

//i = 0, j = 2: "2"
//checking row: i = 0 < m - 1 = 1 && [0][2] == [1][2] -> true
//checking col: nothing to check

//i = 1, j = 0: "1"
//checking row: nothing to check
//checking col: j = 0 < n - 1 = 2 && [1][0] != [1][1] -> true

//i = 1, j = 1: "0"
//checking row: nothing to check
//checking col: j = 1 < n - 1 = 2 && [1][1] != [1][2] -> true

//i = 1, j = 2: "2"
//checking row: nothing to check
//checking col: nothing to check

//true

gridSatisfiesConditions([[1],[2],[3]]); //false
//  1
//  2
//  3

//m = 3, n = 1
//i = 0, j = 0: "1"
//checking row: i = 0 < m - 1 = 2 && [0][0] != [1][0] -> false
//checking col: nothing to check

//i = 1, j = 0: "2"
//checking row: i = 1 < m - 1 = 2 && [1][0] != [2][0] -> false
//checking col: nothing to check

//i = 1, j = 0: "3"
//checking row: nothing to check
//checking col: nothing to check

//false

gridSatisfiesConditions([[1,1,1],[0,0,0]]); //false
//  1  1  1
//  1  0  0

