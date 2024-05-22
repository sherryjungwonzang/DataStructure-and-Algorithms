//1351. Count negative numbers in a sorted matrix
//given a m x n matrix 'grid' - which is sorted in non-increasing order both row-wise and column-wise
//return the number of negative numbers in grid

//Approach:
//traversing the matrix and stop when we encounter the negative elements
//the rest of the values will be negative after the first negative element finding
//matrix[i].length - j: formula to find the rest of values after the first negative element
var countNegativeNums = (grid) => {
    let count = 0;

    for (let i = 0; i < grid.length; i++ ) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) { //negative value
                count += grid[i].length - j; //collect all negative elements to count
                break;
            }
        }
    }
    return count;
}
//TC: O(m * n)
//SC: O(1)
countNegativeNums([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]); //8 - there are 8 negative numbers in the matrix

countNegativeNums([[3,2],[1,0]]); //0
