//1162. As Far From Land As Possible
//given an n x n 'grid' - containing only values 0 and 1
//where 0 represents water and 1 represents land
//find a water cell such that its distance to the nearest land cell is maximized
//return the distand - if no land or water exists in the grid, return -1

//Approach:
//using BFS with queue
var maxDistanceFromLand = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let containZero = false;
    let maxDistance = -1;
    let directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    let queue = [];

    //grabbing all 1s information to the queue
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1) queue.push([row, col, 0]);
            else containZero = true;
        }
    }

    //base case
    if (queue.length === 0 || !containZero) return -1;

    //BFS
    while (queue.length) {
        let curr = queue.shift();
        maxDistance = Math.max(maxDistance, curr[2]);

        for (let i = 0; i < directions.length; i++) {
            let r = directions[i][0] + curr[0];
            let c = directions[i][1] + curr[1];

            if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] === 0) {
                queue.push([r, c, curr[2] + 1]);
                grid[r][c] = 1; //visited
            }
        }
    }
    
    return maxDistance;
}
//TC: O(n^2)
//SC: O(n^2)
maxDistanceFromLand([[1,0,1],[0,0,0],[1,0,1]]); //2 - (1, 1) is as far as possible from all the land with distance 2
//  1  0  1
//  0  0  0
//  1  0  1

maxDistanceFromLand([[1,0,0],[0,0,0],[0,0,0]]); //4 - (2,2) is as far as possible from all the land with distance 4
//  1  0  0
//  0  0  0
//  0  0  0
