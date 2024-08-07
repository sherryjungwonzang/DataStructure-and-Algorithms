//807. Max Increase To Keep City Skyline
//there is a city composed of n x n blocks - where each block contains a single building shaped like a vertical square prism
//given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c

//a city's skyline is the outer contour formed by all the building when viewing the side of the city from a distance
//the skyline from each cardinal direction north, est, south and west may be different

//we are allowed to increase the height of any number of buildings by any amount - the amount can be different per building
//the height of a o-height building can also be increased
//however, increasing the height of a building should not affect the city's skyline from any cardinal direction
//return the max total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction

//Approach:
//using 2D array and greedy algorithm
var maxIncreaseKeepCitySkyline = (grid) => {
    let n = grid.length;
    let row = new Array(n).fill(Number.MIN_SAFE_INTEGER);
    let col = new Array(n).fill(Number.MIN_SAFE_INTEGER);

    //store max value of each row and col array
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            row[r] = Math.max(row[r], grid[r][c]);
            col[c] = Math.max(col[c], grid[r][c]);
        }
    }

    //visit every grid[r][c] and add min (row[r], col[c]) - grid[r][c]
    let res = 0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            res += Math.min(row[r], col[c]) - grid[r][c];
        }
    }

    return res;
}
//TC: O(n^2)
//SC: (n)
maxIncreaseKeepCitySkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]); //35
//gridNew = [ [8, 4, 8, 7],
//[7, 4, 7, 7],
//[9, 4, 8, 7],
//[3, 3, 3, 3] ]  

maxIncreaseKeepCitySkyline(grid = [[0,0,0],[0,0,0],[0,0,0]]); //0 - Increasing the height of any building will result in the skyline changing
