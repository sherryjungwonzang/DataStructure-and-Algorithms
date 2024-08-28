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
        "left": [0, -1, "right"], "right": [0, 1, "left"],
        "up": [-1, 0, "down"], "down": [1, 0, "up"] 
    };

    let paths = {
        1: ["left", "right"], 2: ["up", "down"],
        3: ["left", "down"], 4: ["right", "down"],
        5: ["up", "left"], 6: ["up", "right"]
    };

    //BFS
    while(queue.length) {
        let [currRow, currCol, currStreet] = queue.shift(); //curr

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
            if (nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol < n) {
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
}
hasValidPath([2,4,3], [6,5,2]); //true
//  2 4 3
//  6 5 2

//visited = [ T, F, F, F, F, F ]
//queue = [ [0, 0, 2] ]
//curr = [0, 0, 2]
//i = 0 
//dir = paths[currStreet][0] = paths[2][0] = "up"
//[rowDir, colDir, oppoDir] = dirs[up] = [-1, 0, "down"]
//nextRow = 0 + -1 -> invalid
//nextCol = 0 + 0

//i = 1
//dir = paths[currStreet][1] = paths[2][1] = "down"
//[rowDir, colDir, oppoDir] = dirs[down] = [1, 0, "up"]
//nextRow = 0 + 1 = 1
//nextCol = 0 + 0 = 0
//index = (1 * 3) + 0 = 3
//nextStreet = grid[1][0] = 6
//queue = [ [1, 0, 6] ]
//visited = [ T, F, F, T, F, F ]


//visited = [ T, F, F, T, F, F ]
//queue = [ [1, 0, 6] ]
//curr = [0, 0, 2], [1, 0, 6]
//i = 0
//dir = paths[currStreet][0] = paths[6][0] = "up"
//[rowDir, colDir, oppoDir] = dirs[up] = [-1, 0, "down"]
//nextRow = 1 + -1 = 0
//nextCol = 0 + 0 = 0
//already visited

//i = 1
//dir = paths[currStreet][1] = paths[6][1] = "right"
//[rowDir, colDir, oppoDir] = dirs[right] = [0, 1, "left"]
//nextRow = 1 + 0 = 1
//nextCol = 0 + 1 = 1
//index = (1 * 3) + 1 = 4
//nextStreet = grid[1][1] = 5
//queue = [ [1, 1, 5] ]
//visited = [ T, F, F, T, T, F ]


//visited = [ T, F, F, T, T, F ]
//queue = [ [1, 1, 5] ]
//curr = [0, 0, 2], [1, 0, 6], [1, 1, 5],
//i = 0
//dir = paths[currStreet][0] = paths[5][0] = "up"
//[rowDir, colDir, oppoDir] = dirs[up] = [-1, 0, "down"]
//nextRow = 1 + -1 = 0
//nextCol = 1 + 0 = 1
//index = (0 * 3) + 1 = 1
//nextStreet = grid[0][1] = 4
//queue = [ [0, 1, 4] ]
//visited = [ T, T, F, T, T, F ]

//i = 1
//dir = paths[currStreet][1] = paths[5][1] = "left"
//[rowDir, colDir, oppoDir] = dirs[right] = [0, -1, "right"]
//nextRow = 1 + 0 = 1
//nextCol = 1 - 1 = 0
//already visited


//visited = [ T, F, F, T, T, T ]
//queue = [ [0, 1, 4] ]
//curr = [0, 0, 2], [1, 0, 6], [1, 1, 5], [0, 1, 4]
//i = 0
//dir = paths[currStreet][0] = paths[4][0] = "right"
//[rowDir, colDir, oppoDir] = dirs[right] = [0, 1, "left"]
//nextRow = 0 + 0 = 0
//nextCol = 1 + 1 = 2
//index = (0 * 3) + 2 = 2
//nextStreet = grid[0][2] = 3
//queue = [ [0, 2, 3] ]
//visited = [ T, T, T, T, T, F ]

//i = 1
//dir = paths[currStreet][1] = paths[4][1] = "down"
//[rowDir, colDir, oppoDir] = dirs[down] = [1, 0, "up"]
//nextRow = 0 + 1 = 1
//nextCol = 1 + 0 = 1
//already visited


//visited = [ T, F, T, T, T, T ]
//queue = [ [0, 2, 3] ]
//curr = [0, 0, 2], [1, 0, 6], [1, 1, 5], [0, 1, 4], [0, 2, 3]
//i = 0
//dir = paths[currStreet][0] = paths[3][0] = "left"
//[rowDir, colDir, oppoDir] = dirs[left] = [0, -1, "right"]
//nextRow = 0 + 0 = 0
//nextCol = 2 - 1 = 1
//already visited

//i = 1
//dir = paths[currStreet][1] = paths[3][1] = "down"
//[rowDir, colDir, oppoDir] = dirs[down] = [1, 0, "up"]
//nextRow = 0 + 1 = 1
//nextCol = 2 + 0 = 2
//index = (1 * 3) + 2 = 5
//nextStreet = grid[1][2] = 2
//queue = [ [1, 2, 2] ]
//visited = [ T, T, T, T, T, T ]
//True

hasValidPath([[1,2,1], [1,2,1]]); //false

hasValidPath([1,1,2]); //false



