//1905. Count Sub Islands
//given two m x n binary matrices 'grid1' and 'grid2'
//containing only 0's water and 1's representing land
//an island is a group of 1's connected 4-directionally - horizontal or vertical
//any cells outside of the grid are considered water cells

//an island in grid2 is considered a sub-island if there is an island that contains all the cells that make up this island in grid2
//return the number of islands in 'grid2' that are considered sub-islands

//Approach:
//using DFS
var countSubIslands = (grid1, grid2) => {
    let m = grid2.length;
    let n = grid2[0].length;
    let count = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid2[r][c] === 1) {
                subIsland = true;
                dfs(r, c);

                if (subIsland) count++;
            }
        }
    }

    //DFS
    function dfs(row, col) {
        //boundary
        if (row < 0 || row >= m || col < 0 || col >= n || grid2[row][col] !== 1) return;

        grid2[row][col] = '#'; //visited
        if (grid1[row][col] !== 1) subIsland = false;

        //recursive call
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    };

    return count;
}
countSubIslands(grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]); //3
//  1 1 1 0 0       1 1 1 0 0 
//  0 1 1 1 1       0 0 1 1 1
//  0 0 0 0 0       0 1 0 0 0
//  1 0 0 0 0       1 0 1 1 0
//  1 1 0 1 1       0 1 0 1 0
//   grid1            grid2



countSubIslands(grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]); //2
//  1 0 1 0 1       0 0 0 0 0 
//  1 1 1 1 1       1 1 1 1 1
//  0 0 0 0 0       0 1 0 1 0
//  1 1 1 1 1       0 1 0 1 0
//  1 0 1 0 1       1 0 0 0 1
//   grid1            grid2
