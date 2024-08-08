//980. Unique Paths3
//given an m x n integer array 'grid' where grid[i][j] could be:
//1 - representing the starting square, there is exactly one starting square
//2 - representing the ending square, there is exactly one ending square
//0 - representing empty squares we can walk over
//-1 - representing obstacles that we cannot walk over
//return the num of 4-drectional walks from the starting square to the ending square that walk over every non-obstacle square exactly once

//Approach:
//using DFS
var uniquePaths3 = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let res = 0;
    let stepsCount = 0;
    let startRow = 0;
    let endRow = 0;
    let startCol = 0;
    let endCol = 0;

    //to check start and end position
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) { //starting squares
                startRow = i;
                startCol = j;
            } else if (grid[i][j] === 2) { //ending squares
                endRow = i;
                endCol = j;
            } else if (grid[i][j] === 0) { //counting empty spaces
                stepsCount++;
            }
        }
    }

    //DFS
    function dfs(row, col, steps) {
        //boundary checking
        if (row < 0 || row >= m ||
            col < 0 || col >= n ||
            grid[row][col] === -1
        ) return;

        //destination
        if (row === endRow && col === endCol) {
            if (steps === 0) res++;
            return;
        }

        let temp = grid[row][col];
        grid[row][col] = -1; //to prevent backtracking
        steps--;

        //4 directions
        dfs(row + 1, col, steps);
        dfs(row - 1, col, steps);
        dfs(row, col + 1, steps);
        dfs(row, col - 1, steps);

        grid[row][col] = temp;
        steps++;
        return;
    };

    dfs(startRow, startCol, stepsCount + 1);

    return res;
}
uniquePaths3([[1,0,0,0],[0,0,0,0],[0,0,2,-1]]); //2
//We have the following two paths: 
//1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
//2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

uniquePaths3([[1,0,0,0],[0,0,0,0],[0,0,0,2]]); //4
//1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
//2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
//3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
//4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

uniquePaths3([[0,1],[2,0]]); //0
