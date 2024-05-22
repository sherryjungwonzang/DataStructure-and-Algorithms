//1391. Check if there is a valid path in a grid
//given an m x n 'grid'
//each cell of grid represents a street
//the street of grid[i][j] can be:
//1 - a street connecting the left cell and the right cell
//2 - a street connecting the upper cell and the lower cell
//3 - a street connecting the left cell and the lower cell
//4 - a street connecting the right cell and the lower cell
//5 - a street connecting the left cell and the upper cell
//6 - a street connecting the right cell and the upper cell

//initially start at the street of the upper-left cell (0, 0)
//a valid path in the grid is a path that starts from the upper left cell (0,0)
//and ends at the bottom-right cell (m - 1, n - 1)
//the path should only follow the streests

//return true if there is a valid path in the grid or false otherwise

//Approach:
//using BFS with queue
var hasValidPath = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let visited = new Array (m * n).fill(false);
    visited[0] = true;
    
    let queue = [ [0, 0, grid[0][0]] ];

    let dirs = {
        "left": [0, -1, "right"],
        "right": [0, 1, "left"],
        "up": [-1, 0, "down"],
        "down": [1, 0, "up"]
    };

    let paths = {
        1: ["left", "right"],
        2: ["up", "down"],
        3: ["left", "down"],
        4: ["right", "down"],
        5: ["up", "left"],
        6: ["up", "right"]
    }

    //BFS
    while(queue.length > 0) {
        //current position
        let [currRow, currCol, currStreet] = queue.shift();

        //base case
        if (currRow === m - 1 && currCol === n - 1) return true;

        //checking possible paths
        for (let i = 0; i < 2; i++) {
            let currDir = paths[currStreet][i];

            //direction setting
            let [rowDir, colDir, oppoDir] = dirs[currDir]; 

            //to check whether we can go through paths position
            let nextRow = currRow + rowDir;
            let nextCol = currCol + colDir;

            //checking inbound or not
            if (checkBound(nextRow, nextCol)) {
                //next grid position
                let index = (nextRow * n) + nextCol;
                let nextStreet = grid[nextRow][nextCol];

                if (!visited[index] && paths[nextStreet].includes(oppoDir)) {
                    visited[index] = true;
                    queue.push([nextRow, nextCol, nextStreet]);
                }
            }
        }
    }
    return false;

    function checkBound (row, col) {
        return row >= 0 && row < m && col >= 0 && col < n;
    }
}
hasValidPath([2,4,3], [6,5,2]); //true

hasValidPath([[1,2,1], [1,2,1]]); //false

hasValidPath([1,1,2]); //false
