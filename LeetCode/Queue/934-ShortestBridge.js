//934. Shortest Bridge
//given an n x n binary matrix grid - where 1 represents land and 0 represents water
//an island is a 4-directionally commected group of 1's not connected to any other 1's
//there are exactly two islands in grid
//you may change 0's to 1's to connect the two islands to form one island
//return the smallest number of 0's you must flip to connect the two islands

//Approach:
//using dfs and bfs at the same time
var shortestBridge = (grid) => {
    let m = grid.length - 1;
    let n = grid[0].length - 1;
    let dir = [ [0,1], [1,0], [0,-1], [-1,0] ];
    let queue = [];
    let foundIsland = false;

    //need to find only one first island
    for (let r = 0; r < grid.length; r++) {
        if (foundIsland) break; //when we find the first island
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c]) {
                foundIsland = true;
                dfs(r, c);
                break;
            }
        }
    }

    //DFS
    function dfs(r, c) {
        queue.push([r, c, 0]); //row, col, distance

        grid[r][c] = '#'; //setting the visited as #

        for (let [x, y] of dir) {
            let [nextR, nextC] = [r + x, c + y];
            
            if (nextR < 0 || nextR > m || nextC < 0 || nextC > n) continue;
            if (grid[nextR][nextC] === 1) dfs(nextR, nextC);
        }
    }

    //BFS
    while(queue.length) {
        let [currR, currC, distance] = queue.shift();

        if (grid[currR][currC] === '#' && distance) continue;

        grid[currR][currC] = '#';

        for (let [x, y] of dir) {
            let [nextR, nextC] = [currR + x, currC + y];

            if (nextR < 0 || nextR > m || nextC < 0 || nextC > n) continue;
            if (grid[nextR][nextC] === 1) return distance; //find the another island
            if (grid[nextR][nextC] !== '#') queue.push([nextR, nextC, distance + 1]); //need to loop through non-visited
        }
    }
}
shortestBridge([[0, 1], [1, 0]]); //1
// 0  1
// 1  0

shortestBridge([[1,1,1,0], [0,1,0,0], [0,0,0,1], [0,0,1,1]]); //2
// 1  1  1  0
// 0  1  0  0
// 0  0  0  1
// 0  0  1  1

shortestBridge([[1,1,1,1,1], [1,0,0,0,1], [1,0,1,0,1], [1,0,0,0,1], [1,1,1,1,1]]); //1
// 1  1  1  1  1
// 1  0  0  0  1
// 1  0  1  0  1
// 1  0  0  0  1
// 1  1  1  1  1
