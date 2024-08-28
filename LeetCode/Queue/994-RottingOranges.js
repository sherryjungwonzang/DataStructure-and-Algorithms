//994. Rotting Oranges
//given an m x n grid - where each cell can have one of three values:
//0 - representing an empty cell
//1 - representing a fresh orange
//2 - representing a rotten orange

//every minute, any fresh orange that is 4-directionallt adjacent to a rotten orange becomes rotten
//return the minimum number of minutes that must elapse until no cell has a fresh oranges
//if this is impossible, return -1

//Approach:
//using BFS with queue
var rottingOranges = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let dir = [ [0, 1], [1, 0], [0, -1], [-1, 0] ]; //4 directions

    let oranges = 0;
    let time = 0;
    let queue = [];

    //collecting fresh oranges count and rotten oranges
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) oranges++; //fresh oranges
            else if (grid[r][c] === 2) queue.push([r, c, 0]); //rotten oranges
        }
    }

    //BFS
    while(queue.length && oranges) {
        let [currR, currC, mins] = queue.shift(); //curr

        //fresh oranges
        if (grid[currR][currC] === 1) {
            grid[currR][currC] = 2; //mark it as rotten

            oranges--; //when oranges is 0 - meaning all oranges are rotten
            
            time = mins;
        }

        //looping nextR and nextC
        for (let [r, c] of dir) {
            let [nextR, nextC] = [currR + r, currC + c];

            //inbound checking
            if (nextR < 0 || nextR > m - 1 || nextC < 0 || nextC > n - 1) continue;

            //checking fresh oranges around rotten oranges
            if (grid[nextR][nextC] === 1) queue.push([nextR, nextC, mins + 1]);
        }
    }

    return oranges ? -1 : time;
}
//TC: O(m x n) x 4 - taking up every cell in all 4 directions
//SC: O(m x n) - all oranges are rotten so all elements goes into the queue
rottingOranges([[2,1,1], [1,1,0], [0,1,1]]); //4
//  2 1 1
//  1 1 0
//  0 1 1

//oranges = 0
//time = 0
//queue = [ ]
//collecting oranges: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
//queue = [ [0, 0, 0], [0, 1, 1], [1, 0, 1], [0, 2, 2], [1, 1, 2], [2, 1, 3], [2, 2, 4] ]

//oranges = 0 -> 6
//time = 0
//queue = [ [0, 0, 0], [0, 1, 1], [1, 0, 1], [0, 2, 2], [1, 1, 2], [2, 1, 3], [2, 2, 4] ]
//curr = [0, 0, 0]
//nextR          nextC
//0 + 0 = 0       1 + 0 = 1
//1 + 0 = 1       0 + 0 = 0
//-1 + 0 = -1     0 + 0 = 0   -> invalid
//0 + 0 = 0      -1 + 0 = -1  -> invalid

//queue = [ [0, 1, 1], [1, 0, 1], [0, 2, 2], [1, 1, 2], [2, 1, 3], [2, 2, 4] ]
//curr = [0, 0, 0], [0, 1, 1]
//  2 2 1
//  1 1 0
//  0 1 1
//oranges = 0 -> 6 -> 5
//time = 0 -> 1
//nextR          nextC
//0 + 0 = 0       1 + 1 = 2
//1 + 0 = 1       0 + 1 = 1
//-1 + 0 = -1     0 + 1 = 1   -> invalid
//0 + 0 = 0      -1 + 1 = 0  -> rotten

//queue = [ [1, 0, 1], [0, 2, 2], [1, 1, 2], [2, 1, 3], [2, 2, 4] ]
//curr = [0, 0, 0], [0, 1, 1], [1, 0, 1]
//  2 2 1
//  2 1 0
//  0 1 1
//oranges = 0 -> 6 -> 5 -> 4
//time = 0 -> 1 -> 1
//nextR          nextC
//0 + 1 = 1       1 + 0 = 1
//1 + 1 = 2       0 + 0 = 0 -> empty
//-1 + 1 = 0     0 + 0 = 0   -> rotten
//0 + 1 = 1      -1 + 0 = -1  -> invalid

//queue = [ [0, 2, 2], [1, 1, 2], [2, 1, 3], [2, 2, 4] ]
//curr = [0, 0, 0], [0, 1, 1], [1, 0, 1], [0, 2, 2]
//  2 2 2
//  2 1 0
//  0 1 1
//oranges = 0 -> 6 -> 5 -> 4 -> 3
//time = 0 -> 1 -> 1 -> 2
//nextR          nextC
//0 + 0 = 0       1 + 2 = 3 -> invalid
//1 + 0 = 1       0 + 2 = 2 -> empty
//-1 + 0 = -1     0 + 2 = 2 -> invalid
//0 + 0 = 0      -1 + 2 = 1 -> rotten

//queue = [ [1, 1, 2], [2, 1, 3], [2, 2, 4] ]
//curr = [0, 0, 0], [0, 1, 1], [1, 0, 1], [0, 2, 2], [1, 1, 2]
//  2 2 2
//  2 2 0
//  0 1 1
//oranges = 0 -> 6 -> 5 -> 4 -> 3 -> 2
//time = 0 -> 1 -> 1 -> 2 -> 2
//nextR          nextC
//0 + 1 = 1       1 + 1 = 2 -> empty
//1 + 1 = 2       0 + 1 = 1 
//-1 + 1 = 0     0 + 1 = 1 -> rotten
//0 + 1 = 1      -1 + 1 = 0 -> rotten

//queue = [ [2, 1, 3], [2, 2, 4] ]
//curr = [0, 0, 0], [0, 1, 1], [1, 0, 1], [0, 2, 2], [1, 1, 2], [2, 1, 3]
//  2 2 2
//  2 2 0
//  0 2 1
//oranges = 0 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1
//time = 0 -> 1 -> 1 -> 2 -> 2 -> 3
//nextR          nextC
//0 + 2 = 2       1 + 1 = 2
//1 + 2 = 3       0 + 1 = 1 -> invalid
//-1 + 2 = 1     0 + 1 = 1 -> rotten
//0 + 2 = 2      -1 + 1 = 0 -> empty

//queue = [ [2, 2, 4] ]
//curr = [0, 0, 0], [0, 1, 1], [1, 0, 1], [0, 2, 2], [1, 1, 2], [2, 1, 3], [2, 2, 4]
//  2 2 2
//  2 2 0
//  0 2 2
//oranges = 0 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0
//time = 0 -> 1 -> 1 -> 2 -> 2 -> 3 -> 4
//nextR          nextC
//0 + 2 = 2       1 + 2 = 3 -> invalid
//1 + 2 = 3       0 + 2 = 2 -> invalid
//-1 + 2 = 1     0 + 2 = 2 -> empty
//0 + 2 = 2      -1 + 2 = 1 -> rotten

rottingOranges([[2,1,1], [0,1,1], [1,0,1]]); //-1
//the orange in the bottom left corner (row 2, col 0) is never rotten
//because rotting only happens 4-directionally

rottingOranges([[0,1]]); //0
//since there are already no fresh oranges at minute 0
