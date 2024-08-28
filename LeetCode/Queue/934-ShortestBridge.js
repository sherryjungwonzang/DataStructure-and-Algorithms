//934. Shortest Bridge
//given an n x n binary matrix grid - where 1 represents land and 0 represents water
//an island is a 4-directionally commected group of 1's not connected to any other 1's
//there are exactly two islands in grid
//you may change 0's to 1's to connect the two islands to form one island
//return the smallest number of 0's you must flip to connect the two islands

//Approach:
//using DFS and BFS at the same time
var shortestBridge = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let dir = [ [0,1], [1,0], [0,-1], [-1,0] ];
    let queue = [];
    let foundIsland = false;

    //need to find only one first island
    for (let r = 0; r < m; r++) {
        if (foundIsland) break; //when we find the first island

        for (let c = 0; c < n; c++) {
            if (grid[r][c]) {
                foundIsland = true;

                dfs(r, c);
                
                break;
            }
        }
    }

    //DFS - to find the island
    function dfs(r, c) {
        queue.push([r, c, 0]); //row, col, distance

        grid[r][c] = '#'; //setting the visited as #

        for (let [x, y] of dir) {
            let [nextR, nextC] = [r + x, c + y];
            
            if (nextR < 0 || nextR > m - 1 || nextC < 0 || nextC > n - 1) continue;
            if (grid[nextR][nextC] === 1) dfs(nextR, nextC);
        }
    }

    //BFS - to find the distance to another island
    while(queue.length) {
        let [currR, currC, distance] = queue.shift(); //curr

        //base case
        if (grid[currR][currC] === '#' && distance) continue;

        grid[currR][currC] = '#';

        for (let [x, y] of dir) {
            let [nextR, nextC] = [currR + x, currC + y];

            //bound checking
            if (nextR < 0 || nextR > m - 1 || nextC < 0 || nextC > n - 1) continue;

            //find the another island
            if (grid[nextR][nextC] === 1) return distance; 

            //need to loop through non-visited
            if (grid[nextR][nextC] !== '#') queue.push([nextR, nextC, distance + 1]); 
        }
    }
}
shortestBridge([[1,1,1,0], [0,1,0,0], [0,0,0,1], [0,0,1,1]]); //2
// 1  1  1  0
// 0  1  0  0
// 0  0  0  1
// 0  0  1  1

//DFS
//foundIsland = false
//r = 0, c = 0 -> grid[0][0] = 1 
//queue = [ [0, 0, 0] ]
//-> dfs(0, 0)
// #  1  1  0
// 0  1  0  0
// 0  0  0  1
// 0  0  1  1

//nextR          nextC
//0 + 0 = 0       1 + 0 = 1 -> land
//1 + 0 = 1       0 + 0 = 0 -> water
//-1 + 0 = -1     0 + 0 = 0 -> invalid
//0 + 0 = 0      -1 + 0 = -1 -> invalid

//-> dfs(0, 1)
//queue = [ [0, 0, 0], [0, 1, 0], ]
// #  #  1  0
// 0  1  0  0
// 0  0  0  1
// 0  0  1  1

//nextR          nextC
//0 + 0 = 0       1 + 1 = 2 -> land
//1 + 0 = 1       0 + 1 = 1 -> land
//-1 + 0 = -1     0 + 1 = 1 -> invalid
//0 + 0 = 0      -1 + 1 = 0 -> #

//-> dfs(0, 2)
//queue = [ [0, 0, 0], [0, 1, 0], [0, 2, 0] ]
// #  #  #  0
// 0  1  0  0
// 0  0  0  1
// 0  0  1  1

//nextR          nextC
//0 + 0 = 0       1 + 2 = 3 -> water
//1 + 0 = 1       0 + 2 = 2 -> water
//-1 + 0 = -1     0 + 2 = 2 -> invalid
//0 + 0 = 0      -1 + 2 = 1 -> #

//-> dfs(1, 1)
//queue = [ [0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 1, 0] ]
// #  #  #  0
// 0  #  0  0
// 0  0  0  1
// 0  0  1  1

//nextR          nextC
//0 + 1 = 1       1 + 1 = 2 -> water
//1 + 1 = 2       0 + 1 = 1 -> water
//-1 + 1 = 0     0 + 1 = 1 -> #
//0 + 1 = 1      -1 + 1 = 0 -> water
//foundIsland = true

//BFS
//queue = [ [0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 1, 0] ]
//curr = [0, 0, 0]
// #  #  #  0
// 0  #  0  0
// 0  0  0  1
// 0  0  1  1
//nextR          nextC
//0 + 0 = 0       1 + 0 = 1 -> #
//1 + 0 = 1       0 + 0 = 0 -> 0
//-1 + 0 = -1     0 + 0 = 0 -> invalid
//0 + 0 = 0      -1 + 0 = -1 -> invalid
//queue = [ [0, 1, 0], [0, 2, 0], [1, 1, 0] || [1, 0, 1], ]

//queue = [ [0, 1, 0], [0, 2, 0], [1, 1, 0] || [1, 0, 1], ]
//curr = [0, 0, 0], [0, 1, 0]
// #  #  #  0
// 0  #  0  0
// 0  0  0  1
// 0  0  1  1
//nextR          nextC
//0 + 0 = 0       1 + 1 = 2 -> #
//1 + 0 = 1       0 + 1 = 1 -> #
//-1 + 0 = -1     0 + 1 = 1 -> invalid
//0 + 0 = 0      -1 + 1 = 0 -> #
//queue = [ [0, 2, 0], [1, 1, 0] || [1, 0, 1], ]

//queue = [ [0, 2, 0], [1, 1, 0] || [1, 0, 1], ]
//curr = [0, 0, 0], [0, 1, 0], [0, 2, 0]
// #  #  #  0
// 0  #  0  0
// 0  0  0  1
// 0  0  1  1
//nextR          nextC
//0 + 0 = 0       1 + 2 = 3 -> 0
//1 + 0 = 1       0 + 2 = 2 -> 0
//-1 + 0 = -1     0 + 2 = 2 -> invalid
//0 + 0 = 0      -1 + 2 = 1 -> #
//queue = [ [1, 1, 0] || [1, 0, 1]|| [0, 3, 1], [1, 2, 1], ]

//queue = [ [1, 1, 0] || [1, 0, 1]|| [0, 3, 1], [1, 2, 1], ]
//curr = [0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 1, 0] 
// #  #  #  0
// 0  #  0  0
// 0  0  0  1
// 0  0  1  1
//nextR          nextC
//0 + 1 = 1       1 + 1 = 2 -> 0
//1 + 1 = 2       0 + 1 = 1 -> 0
//-1 + 1 = 0     0 + 1 = 1 -> #
//0 + 1 = 1      -1 + 1 = 0 -> 0
//queue = [ [1, 0, 1]|| [0, 3, 1], [1, 2, 1] || [2, 1, 1] ]

//queue = [ [1, 0, 1] || [0, 3, 1], [1, 2, 1] || [2, 1, 1] ]
//curr = [0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 1, 0], [1, 0, 1]
// #  #  #  0
// #  #  0  0
// 0  0  0  1
// 0  0  1  1
//nextR          nextC
//0 + 1 = 1       1 + 0 = 1 -> #
//1 + 1 = 2       0 + 0 = 0 -> 0
//-1 + 1 = 0     0 + 0 = 0 -> #
//0 + 1 = 1      -1 + 0 = -1 -> invalid
//queue = [ [0, 3, 1], [1, 2, 1] || [2, 1, 1] || [2, 0, 2] ]

//queue = [ [0, 3, 1], [1, 2, 1] || [2, 1, 1] || [2, 0, 2] ]
//curr = [0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 1, 0], [1, 0, 1], [0, 3, 1]
// #  #  #  #
// #  #  0  0
// 0  0  0  1
// 0  0  1  1
//nextR          nextC
//0 + 0 = 0       1 + 3 = 4 -> invalid
//1 + 0 = 1       0 + 3 = 3 -> #
//-1 + 0 = -1     0 + 3 = 3 -> invalid
//0 + 0 = 0      -1 + 3 = 2 -> #
//queue = [ [1, 2, 1] || [2, 1, 1] || [2, 0, 2] ]

//queue = [ [1, 2, 1] || [2, 1, 1] || [2, 0, 2] ]
//curr = [0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 1, 0], [1, 0, 1], [0, 3, 1], [1, 2, 1] 
// #  #  #  #
// #  #  #  0
// 0  0  0  1
// 0  0  1  1
//nextR          nextC
//0 + 1 = 1       1 + 2 = 3 -> 0
//1 + 1 = 2       0 + 2 = 2 -> 0
//-1 + 1 = 0      0 + 2 = 2 -> #
//0 + 1 = 1      -1 + 2 = 1 -> #
//queue = [ [2, 1, 1] || [2, 0, 2] || [1, 3, 2], [2, 2, 2] ]

//queue = [ [2, 1, 1] || [2, 0, 2] || [1, 3, 2], [2, 2, 2] ]
//curr = [0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 1, 0], [1, 0, 1], [0, 3, 1], [1, 2, 1], [2, 1, 1]
// #  #  #  #
// #  #  #  0
// 0  #  0  1
// 0  0  1  1
//nextR          nextC
//0 + 2 = 2       1 + 1 = 2 -> 0
//1 + 2 = 3       0 + 1 = 1 -> 0
//-1 + 2 = 1      0 + 1 = 1 -> #
//0 + 2 = 2      -1 + 1 = 0 -> 0
//queue = [ [2, 0, 2] || [1, 3, 2], [2, 2, 2] || [3, 1, 2], ]

//queue = [ [2, 0, 2] || [1, 3, 2], [2, 2, 2] || [3, 1, 2], ]
//curr = [0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 1, 0], [1, 0, 1], [0, 3, 1], [1, 2, 1], [2, 1, 1], [2, 0, 2] 
// #  #  #  #
// #  #  #  0
// #  #  0  1
// 0  0  1  1
//nextR          nextC
//0 + 2 = 2       1 + 0 = 1 -> #
//1 + 2 = 3       0 + 0 = 0 -> 0
//-1 + 2 = 1      0 + 0 = 0 -> #
//0 + 2 = 2      -1 + 0 = -1 -> invalid
//queue = [ [1, 3, 2], [2, 2, 2] || [3, 1, 2] || [3, 0, 2] ]

//queue = [ [1, 3, 2], [2, 2, 2] || [3, 1, 2] || [3, 0, 2] ]
//curr = [0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 1, 0], [1, 0, 1], [0, 3, 1], [1, 2, 1], [2, 1, 1], [2, 0, 2], [1, 3, 2]
// #  #  #  #
// #  #  #  #
// #  #  0  1
// 0  0  1  1
//nextR          nextC
//0 + 1 = 1       1 + 3 = 4 -> invalid
//1 + 1 = 2       0 + 3 = 3 -> 1
//-1 + 1 = 0      0 + 3 = 3 -> #
//0 + 1 = 1      -1 + 3 = 2 -> invalid

//(2, 3) = 1 -> which menas found another island
//distance = 2

shortestBridge([[0, 1], [1, 0]]); //1
// 0  1
// 1  0

shortestBridge([[1,1,1,1,1], [1,0,0,0,1], [1,0,1,0,1], [1,0,0,0,1], [1,1,1,1,1]]); //1
// 1  1  1  1  1
// 1  0  0  0  1
// 1  0  1  0  1
// 1  0  0  0  1
// 1  1  1  1  1
