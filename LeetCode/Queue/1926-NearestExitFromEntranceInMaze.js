//1926. Nearest Exit From Entrance In Maze
//given an m x n matrix 'maze' - 0-indexed with empty cells represented as '.' and walls represented as '+'
//also given the 'entrance' of the maze - where [entrance_row, entrance_col] denotes the row and column of the cell you are initially standing at

//in one step, you can move one cell up, down, left and right
//cannot step into a cell with a wall and cannot step outside the maze
//goal is to find the nearest exit from the entrance
//an exit is defined as an empty cell that is at the border of the maze
//the entrance does not count as an exit

//return the num of steps in the shortest path from the entrance to the nearest exit
//or -1 if no such path exists

//Approach:
//using BFS with queue
var nearestExit = (maze, entrance) => {
    let m = maze.length;
    let n = maze[0].length;

    //checking validation
    function isValid(row, col) {
        return row >= 0 && col >= 0 && row < m && col < n && maze[row][col] !== '+';
    }

    //checking exit
    function isExit(row, col) {
        return (row === 0 || col === 0 || row === m - 1 || col === n - 1) && maze[row][col] === '.';
    }

    //creating visited array
    let visited = [];

    for (let i = 0; i < m; i++) {
        visited.push(new Array(maze[0].length).fill(false));
    }
    
    visited[entrance[0]][entrance[1]] = true; //marking true as visited entrance


    //BFS
    let queue = [ entrance ];
    let dirs = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
    let steps = 0;

    while (queue.length) {
        let next = [];

        steps++; //entrance is not an exit but steps

        for (let i = 0; i < queue.length; i++) {
            let [row, col] = queue[i]; //curr

            //next row and col
            for (let [dx, dy] of dirs) {
                let nextRow = row + dx;
                let nextCol = col + dy;

                if (isValid(nextRow, nextCol) && !visited[nextRow][nextCol]) {
                    if (isExit(nextRow, nextCol)) return steps;
                    else {
                        visited[nextRow][nextCol] = true;

                        next.push([nextRow, nextCol]);
                    }
                }
            }
        }

        queue = next; //updating queue with nextqueue
    }
    
    return -1;
}
nearestExit(maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]); //1 - [0, 2] is the nearest exit
// +  +  .  +
// .  .  .  +
// +  +  +  .

//visited = [ F, F, F, F ]
//          [ F, F, T, F ]
//          [ F, F, F, F ]

//steps = 0
//queue = [ [1, 2] ]
//curr = [1, 2]
//steps = 0 -> 1

//nextR               nextC
//0 + 1 = 1           1 + 2 = 3 -> +
//1 + 1 = 2           0 + 2 = 2 -> +
//-1 + 1 = 0          0 + 2 = 2 -> . & row = 0: is Exit
//0 + 1 = 1           -1 + 2 = 1 -> .
//return steps = 1

nearestExit(maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]); //2 - [1, 2] is the nearest exit
// +  +  +
// .  .  .
// +  +  +

//visited = [ F, F, F ]
//          [ T, F, F ]
//          [ F, F, F ]

//steps = 0
//queue = [ [1, 0] ]
//curr = [1, 0]
//steps = 0 -> 1

//nextR               nextC
//0 + 1 = 1           1 + 0 = 1 -> .
//1 + 1 = 2           0 + 0 = 0 -> +
//-1 + 1 = 0          0 + 0 = 0 -> +
//0 + 1 = 1           -1 + 0 = -1 -> invalid
//next = [1, 1]
//visited = [ F, F, F ]
//          [ T, T, F ]
//          [ F, F, F ]

//queue = [ [1, 1] ]
//curr = [1, 0], [1, 1]
//steps = 0 -> 1 -> 2

//nextR               nextC
//0 + 1 = 1           1 + 1 = 2 -> . & nextC = n - 1: is Exit
//1 + 1 = 2           0 + 1 = 1 -> +
//-1 + 1 = 0          0 + 1 = 1 -> +
//0 + 1 = 1           -1 + 1 = 0 -> entrance
//return steps = 2

nearestExit(maze = [[".","+"]], entrance = [0,0]); //-1 - there are no exits in thie maze
