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

//m = 3, n = 3
//containZero = false
//maxDistance = -1
//queue = []

//collecting all 1s
//containZero = false -> true
//queue = [ [0, 0, 0], [0, 2, 0], [2, 0, 0], [2, 2, 0] ]

//curr = [0, 0, 0]
//maxDistance = -1 -> max(-1, 0) = 0
//r = 0 + 0 = 0       c = -1 + 0 = -1 -> outbound
//    0 + 0 = 0            1 + 0 = 1
//    1 + 0 = 1            0 + 0 = 0
//   -1 + 0 = -1           0 + 0 = 0 -> outbound
//queue = [ [0, 2, 0], [2, 0, 0], [2, 2, 0] || [0, 1, 1], [1, 0, 1] ]
//  1  1  1
//  1  0  0
//  1  0  1

//queue = [ [0, 2, 0], [2, 0, 0], [2, 2, 0] || [0, 1, 1], [1, 0, 1] ]
//curr = [0, 0, 0], [0, 2, 0]
//maxDistance = -1 -> max(-1, 0) = 0 -> max(0, 0) = 0
//r = 0 + 0 = 0       c = -1 + 2 = 1 -> already in
//    0 + 0 = 0            1 + 2 = 3 -> outbound
//    1 + 0 = 1            0 + 2 = 2
//   -1 + 0 = -1           0 + 2 = 2 -> outbound
//queue = [ [2, 0, 0], [2, 2, 0] || [0, 1, 1], [1, 0, 1] || [1, 2, 1] ]
//  1  1  1
//  1  0  1
//  1  0  1

//queue = [ [2, 2, 0] || [0, 1, 1], [1, 0, 1] || [1, 2, 1] ]
//curr = [0, 0, 0], [0, 2, 0], [2, 2, 0]
//maxDistance = -1 -> max(-1, 0) = 0 -> max(0, 0) = 0 -> max(0, 0) = 0
//r = 0 + 2 = 2       c = -1 + 2 = 1
//    0 + 2 = 2            1 + 2 = 3 -> outbound
//    1 + 2 = 3            0 + 2 = 2 -> outbound
//   -1 + 2 = 1            0 + 2 = 2 -> already in
//queue = [ [0, 1, 1], [1, 0, 1] || [1, 2, 1] || [2, 1, 1] ]
//  1  1  1
//  1  0  1
//  1  1  1

//queue = [ [0, 1, 1], [1, 0, 1] || [1, 2, 1] || [2, 1, 1] ]
//curr = [0, 0, 0], [0, 2, 0], [2, 2, 0], [0, 1, 1]
//maxDistance = -1 -> max(-1, 0) = 0 -> max(0, 0) = 0 -> max(0, 0) = 0 -> max(0, 1) = 1
//r = 0 + 0 = 0       c = -1 + 1 = 0 -> 0
//    0 + 0 = 0            1 + 1 = 2 -> 0
//    1 + 0 = 1            0 + 1 = 1 
//   -1 + 0 = -1           0 + 1 = 1 -> outbound
//queue = [ [1, 0, 1] || [1, 2, 1] || [2, 1, 1] || [1, 1, 2] ]
//  1  1  1
//  1  1  1
//  1  1  1

//queue = [ [1, 0, 1] || [1, 2, 1] || [2, 1, 1] || [1, 1, 2] ]
//curr = [0, 0, 0], [0, 2, 0], [2, 2, 0], [0, 1, 1], [1, 0, 1] 
//maxDistance = -1 -> max(-1, 0) = 0 -> max(0, 0) = 0 -> max(0, 0) = 0 -> max(0, 1) = 1 -> max(1, 1) = 1
//r = 0 + 1 = 1       c = -1 + 0 = -1 -> outbound
//    0 + 1 = 1            1 + 0 = 1 -> 0
//    1 + 1 = 2            0 + 0 = 0 -> 0
//   -1 + 1 = 0            0 + 0 = 0 -> 0

//queue = [ [1, 2, 1] || [2, 1, 1] || [1, 1, 2] ]
//curr = [0, 0, 0], [0, 2, 0], [2, 2, 0], [0, 1, 1], [1, 0, 1] , [1, 2, 1] 
//maxDistance = -1 -> max(-1, 0) = 0 -> max(0, 0) = 0 -> max(0, 0) = 0 -> max(0, 1) = 1 -> max(1, 1) = 1 -> max(1, 1) = 1
//r = 0 + 1 = 1       c = -1 + 2 = 1 -> 0
//    0 + 1 = 1            1 + 2 = 3 -> outbound
//    1 + 1 = 2            0 + 2 = 2 -> 0
//   -1 + 1 = 0            0 + 2 = 2 -> 0

//queue = [ [2, 1, 1] || [1, 1, 2] ]
//curr = [0, 0, 0], [0, 2, 0], [2, 2, 0], [0, 1, 1], [1, 0, 1] , [1, 2, 1], [2, 1, 1]
//maxDistance = -1 -> max(-1, 0) = 0 -> max(0, 0) = 0 -> max(0, 0) = 0 -> max(0, 1) = 1 -> max(1, 1) = 1 -> max(1, 1) = 1 -> max(1, 1) = 1
//r = 0 + 2 = 2       c = -1 + 2 = 1 -> 0
//    0 + 2 = 2            1 + 2 = 3 -> outbound
//    1 + 2 = 3            0 + 2 = 2 -> outbound
//   -1 + 2 = 1            0 + 2 = 2 -> 0

//queue = [ [1, 1, 2] ]
//curr = [0, 0, 0], [0, 2, 0], [2, 2, 0], [0, 1, 1], [1, 0, 1] , [1, 2, 1], [2, 1, 1], [1, 1, 2]
//maxDistance = -1 -> max(-1, 0) = 0 -> max(0, 0) = 0 -> max(0, 0) = 0 -> max(0, 1) = 1 -> max(1, 1) = 1 -> max(1, 1) = 1 -> max(1, 1) = 1 -> max(1, 2) = 2
//r = 0 + 1 = 1       c = -1 + 1 = 0 -> 0
//    0 + 1 = 1            1 + 1 = 2 -> 0
//    1 + 1 = 2            0 + 1 = 1 -> 0
//   -1 + 1 = 0            0 + 1 = 1 -> 0

maxDistanceFromLand([[1,0,0],[0,0,0],[0,0,0]]); //4 - (2,2) is as far as possible from all the land with distance 4
//  1  0  0
//  0  0  0
//  0  0  0
