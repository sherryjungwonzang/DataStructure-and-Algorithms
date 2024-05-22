//463. Island Perimeter
//given row x col 'grid' - representing a map where grid[i][j] = 1 represents a land, grid[i][j] = 0 represents water
//grid cells are connected with horizontally/vertically - not diagonally
//the grid is completely surrounded by water, and there is exactly one island - one or more connected land cells

//the island does not have "lakes" - meaning the water inside is not connected to the water around the island
//one cell is a square with side length 1
//the grid is rectangular, width and height do not exceed 100
//determine the perimeter of the island

//Approach:
//perimeter formula: islands * 4 - neighbors * 2
//duplicate side of islands has 2 side - so subtract 2 from neighbors
var islandPerimeter = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let islands = 0; //the num of land cells encountered
    let neighbors = 0; //the num of adjacent land cells

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                islands++;
                //checking adjacents cells
                if (i - 1 >= 0 && grid[i - 1][j] === 1) neighbors++;
                if (j - 1 >= 0 && grid[i][j - 1] === 1) neighbors++;
            }
        }
    }
    return islands * 4 - neighbors * 2; //perimeter formula
}
//TC:O (n x m) - n is the num of rows and m is the num of cols in the grid
//SC: O(1)
islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]); //12
//  0  1  0  0
//  1  1  1  0
//  0  1  0  0
//  1  1  0  0

islandPerimeter([[1]]); //4

islandPerimeter([[1,0]]); //4
