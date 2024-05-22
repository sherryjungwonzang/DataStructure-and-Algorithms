//695. Max Area of Island
//you are given an m x n binary matrix 'grid'
//an island is a group of 1's - representing land connected 4-directionally - vertical or horizontal
//you may assume all four edges of the grid are surrounded by water

//the area of an island is the num of cells with a value 1 in the island
//return the max area of an island in grid
//if there is no island, return 0

//Approach:
//using DFS with recursion
var maxAreaIsland = (grid) => {
    let res = 0;
    let m = grid.length;
    let n = grid[0].length;

    //DFS
    function recurse(r, c) {
        //inbound 
        if (r < 0 || r >= m || c < 0 || c >= n || !grid[r][c]) return 0;

        grid[r][c] = 0; //replacing 1 with 0

        return 1 + recurse(r + 1, c) + recurse(r - 1, c), recurse(r, c + 1), recurse(r, c - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) res = Math.max(res, recurse(i, j));
        }
    }

    return res;
}
//TC: O(n x m) - n and m are the lengths of the sides of the grid
//SC: O(l) - l is the size of the largest island
maxAreaIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]); //6
//not 11 - since there are not connected through 4-directionally
//0,0,1,0,0,0,0,1,0,0,0,0,0
//0,0,0,0,0,0,0,1,1,1,0,0,0
//0,1,1,0,1,0,0,0,0,0,0,0,0
//0,1,0,0,1,1,0,0,1,0,1,0,0
//0,1,0,0,1,1,0,0,1,1,1,0,0
//0,0,0,0,0,0,0,0,0,0,1,0,0
//0,0,0,0,0,0,0,1,1,1,0,0,0
//0,0,0,0,0,0,0,1,1,0,0,0,0


maxAreaIsland([[0,0,0,0,0,0,0,0]]); //0
