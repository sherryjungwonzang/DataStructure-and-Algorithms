//289. Game of life
//the board is made up of an m x n grid of cells - where each cell has an initial state:
//live - represented by 1 or dead - represented by 0
//each cell interacts with its 8 neighbors = horizontal, vertical, diagonal and using four rules

//1. any live cell with fewer than two live neighbors dies as if caused by under-population
//2. any live cell with two or three live neighbors lives on to the next generation
//3. any live cell with more than three live neighbors dies - as if over-production
//4. any dead cell with exactly three live neighbors becomes a live cell - as if by reproduction

//the next state is created by applying the above rules simultaneously to every cell in the current state
//where births and deaths occur simultaneously

//given the current state of the m x n grid 'board'
//return the next state
var gameOfLife = (board) => {
    let m = board.length;
    let n = board[0].length;
    let dirs =[[1,-1],[1,0],[1,1],[0,-1],[0,1],[-1,-1],[-1,0],[-1,1]];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let lives = 0;
            //checking all cells around 8 directions
            for (let dir of dirs) {
                //outbounds
                if (dir[0] + r < 0 || dir[0] + r >= m ||
                    dir[1] + c < 0 || dir[1] + c >= n) continue;
                //counting live cells 
                if (board[dir[0] + r][dir[1] + c] === 1 || board[dir[0] + r][dir[1] + c] === 2) lives++;
            }

            //Rule 4: dead cell with three lives - becomes live
            if (board[r][c] === 0 && lives === 3) board[r][c] = 3; 
            //Rule 1 & 3: live cell with more than 3 live, fewer than 2 - dies
            if (board[r][c] === 1 && (lives < 2 || lives > 3)) board[r][c] = 2;
        }
    }

    //transferring the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] %= 2;
        }
    }
}
gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]); //[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
//  0 1 0    0 0 0
//  0 0 1 -> 1 0 1
//  1 1 1    0 1 1
//  0 0 0    0 1 0

gameOfLife([[1,1], [1,0]]); //[[1,1],[1,1]]
//  1 1    1 1
//  1 0 -> 1 1
//dead cell with three live neighbors becomes a live cell
