//1020. Number of Enclaves
//given an m x n binary matrix grid - where 0 represents a sea cell and 1 represents a land cell
//a move consists of walking from one land cell to another adjacent land cell - 4 directionally
//or walking off the boundary of the grid
//return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves

//Approach:
//using DFS
//1. find all 1s on the boundary
//2. find all 1s connected to the boundary and set them as 0
//3. count the rest 1s
//4. return the count
var numOfEnclaves = (grid) => {
    let m = grid.length;
    let n = grid[0].length;

    //DFS
    function dfs(r, c) {
        //inbound checking
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) return;

        grid[r][c] = 0; //making 0 since it is in boundary
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    };

    //find all 1s from the boundary cells
    for (let i = 0; i < m; i++) {
        dfs(i, 0); //first column
        dfs(i, n - 1); //last column
    }

    for (let i = 0; i < n; i++) {
        dfs(0, i); //first row
        dfs(m - 1, i); //last row
    }

    //count the rest 1s
    let count = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1) count++;
        }
    }
    return count;
}
//TC: O(m x n) - n is the num of rows and m is the num of cols
//SC: O(m x n) - n is the num of rows and m is the num of cols
numOfEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]); //3
//There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary
// 0  0  0  0
// 1  0  1  0
// 0  1  1  0
// 0  0  0  0

numOfEnclaves([[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]); //0
// All 1s are either on the boundary or can reach the boundary
// 0  1  1  0
// 0  0  1  0
// 0  0  1  0
// 0  0  0  0
