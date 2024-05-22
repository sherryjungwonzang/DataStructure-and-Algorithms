//1091. Shortest Path in Binary Matrix
//given an n x n binary matrix 'grid'
//return the length of the shortest clear path in the matrix
//if there is no clear path, return -1

//a clear path in a binary matrix is a path from the top-left cell to the bottom-right cell
//all the visited cells of the path are 0
//all the adjacent cells of the path are 8-directionally connected
//the length of a clear path is the number of visited cells of this path

//Approach:
//using BFS with queue
var shortestPath = (grid) => {
    if (grid[0][0] === 1) return -1; //no path to go

    let dir = [ [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1] ];

    //create queue with default value
    let queue = [[0, 0, 1]];

    //BFS
    while (queue.length) {
        //extract current x and y from queue
        let [currX, currY, count] = queue.shift();

        if (currX === grid.length - 1 && currY === grid[0].length - 1) return count; //meaning reach out to the bottom-right

        //looping through 8 directions
        for (let [x, y] of dir) {
            let [nextX, nextY] = [currX + x, currY + y];

            //inbound
            if (nextX < 0 || nextX > grid.length - 1 || nextY < 0 || nextY > grid[0].length - 1 || grid[nextX][nextY] === 1) continue;

            queue.push([nextX, nextY, count + 1]);
            //update visited position to 1
            grid[nextX][nextY] = 1;
        }
    }
    return -1;
}
//TC: O(n)
//SC: O(n)
shortestPath([0,1], [1,0]); //2
// 0 1
// 1 0

shortestPath([0,0,0], [1,1,0], [1,1,0]); //4
// 0 0 0
// 1 1 0
// 1 1 0

shortestPath([1,0,0], [1,1,0], [1,1,0]); //-1
// 1 0 0
// 1 1 0
// 1 1 0
