//1034. Coloring a border
//given an m x n integer matirx 'grid' and three integers row, col, color
//each value in the grid represents the color of the grid square at that location
//two squares are called adjacent if they are next to each other in any of the 4 directions
//two squares belong to the same connected component if they have the same color and they are adjacent
//the border of a connected component is all the squares in the connected component that are either adjacent to a square not in the component
//or on the boundary of the grid
//you should color the border of the connected component that contains the sqaure grid[row][col] with color
//return the final grid

//Approach:
//using DFS
var coloringBorder = (grid, row, col, color) => {
    let m = grid.length;
    let n = grid[0].length;
    let visited = new Set();
    let directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
    let pos = grid[row][col];

    //DFS
    function dfs(row, col) {
        let key = `${row}, ${col}`;

        //base cases
        if (visited.has(key)) return 1;
        if (row < 0 || row === m) return 0;
        if (col < 0 || col === n) return 0;
        if (grid[row][col] !== pos) return 0;

        visited.add(key);

        let invalid = 1;
        //traversing
        directions.forEach(([x, y]) => {
            invalid *= dfs(row + x, col + y);
        });

        if (invalid) return 1; //no changing
        else grid[row][col] = color; //changing

        return 1;
    };

    dfs(row, col);

    return grid;
}
//TC: O(n * m)
//SC: O(n * m)
coloringBorder(grid = [[1,1],[1,2]], row = 0, col = 0, color = 3); //[[3,3],[3,2]]
// 1 1      3 3
// 3 2   -> 3 2
 
coloringBorder(grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 3); //[[1,3,3],[2,3,3]]
// 1 2 2      1 3 3
// 2 3 2  ->  2 3 3

coloringBorder(grid = [[1,1,1],[1,1,1],[1,1,1]], row = 1, col = 1, color = 2); //[[2,2,2],[2,1,2],[2,2,2]]
// 1 1 1      2 2 2
// 1 1 1  ->  2 2 2
// 1 1 1      2 2 2
