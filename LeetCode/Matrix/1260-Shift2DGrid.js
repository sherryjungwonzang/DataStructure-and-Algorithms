//1260. Shift 2D Grid
//given a 2D grid of size m x n and an integer k
//need to shift grid k times

//in one shift operation:
//element ar grid[i][j] moves to grid[i][j + 1]
//element at grid[i][n - 1] moves to grid[i + 1][0]
//element at grid[m - 1][n - 1] moves to grid[0][0]

//return  the 2D grid after applying shift operation k times

//Approach:
//converting matrix to array and convert it back
var shift2DGrid = (grid, k) => {
    //converting matrix to array
    let arr = grid.flat();
    let n = grid[0].length;
    let res = [];

    while (k--) arr.unshift(arr.pop());

    //converting matrix back to array
    while (arr.length) res.push(arr.splice(0, n));

    return res;
}
shift2DGrid(grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1); //[[9,1,2],[3,4,5],[6,7,8]]
//  1  2  3
//  4  5  6
//  7  8  9

//arr = [1,2,3,4,5,6,7,8,9]
//len = 3

//k = 1 -> 0
//unshift 9 and pop at the index 0
//arr = [9,1,2,3,4,5,6,7,8]

//splice from 0 to 3
//[9,1,2], [3,4,5], [6,7,8]

shift2DGrid(grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4); //[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
//  3  8 1  9
//  19 7 2  5
//  4  6 11 1
//  12 0 21 13

//arr = [3,8,1,9,19,7,2,5,4,6,11,10,12,0,21,13]
//len = 4

//k = 4 -> 3
//unshift 13 and pop at the index 0
//arr = [13,3,8,1,9,19,7,2,5,4,6,11,10,12,0,21]

//k = 4 -> 3 -> 2
//unshift 21 and pop at the index 0
//arr = [21,13,3,8,1,9,19,7,2,5,4,6,11,10,12,0]

//k = 4 -> 3 -> 2 -> 1
//unshift 0 and pop at the index 0
//arr = [0,21,13,3,8,1,9,19,7,2,5,4,6,11,10,12]

//k = 4 -> 3 -> 2 -> 1 -> 0
//unshift 12 and pop at the index 0
//arr = [12,0,21,13,3,8,1,9,19,7,2,5,4,6,11,10]

//splice from 0 to 4
//[12,0,21,13], [3,8,1,9], [19,7,2,5], [4,6,11,10]
