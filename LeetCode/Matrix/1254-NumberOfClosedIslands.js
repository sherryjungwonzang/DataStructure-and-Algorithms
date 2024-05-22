//1254. Number of closed islands
//given a 2D 'grid' consists of 0s - land and 1s - water
//an island is a maximal 4-directionally connected group of 0s and a closed island is an island totally
//all left, right, top, bottom surrounded by 1s
//return the num of closed islands

//Approach:
//using DFS with recursive call
var closedIslands = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;

    //checking whether the island is closed or not
    function recurse(row, col) {
        if (row < 0 || row >= m || col < 0 || col >= n) return false;
        if (grid[row][col] === 1) return true; //water or visited
        grid[row][col] = 1; //mark as visited

        let top = recurse(row - 1, col);
        let bottom = recurse(row + 1, col);
        let left = recurse(row, col - 1);
        let right = recurse(row, col + 1);

        return left && right && top && bottom;
    };

    //traversing the grid and count closed islands
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0 && recurse(i, j)) count++;
        }
    }

    return count;
}
//TC: O(m * n)
//SC: O(m * n)
closedIslands([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]); //2
//[1,1,1,1,1,1,1,0]
//[1,0,0,0,0,1,1,0]
//[1,0,1,0,1,1,1,0]
//[1,0,0,0,0,1,0,1]
//[1,1,1,1,1,1,1,0]

closedIslands([[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]); //1
//[0,0,1,0,0]
//[0,1,0,1,0]
//[0,1,1,1,0]

closedIslands(grid = [[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,0,1,0,1],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]]); //2
//[1,1,1,1,1,1,1]
//[1,0,0,0,0,0,1]
//[1,0,1,1,1,0,1]
//[1,0,1,0,1,0,1]
//[1,0,1,1,1,0,1]
//[1,0,0,0,0,0,1]
//[1,1,1,1,1,1,1]
