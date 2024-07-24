//1631. Path With Minimum Effort
//you are a hiker preparing for an upcoming hike
//given heights, a 2D array of size rows x cols - where heights[row][col] represents the height of cell (row, col)
//are situated in the top-left cell, (0, 0) and you hope to travel to the bottom-right cell - (rows - 1, cols - 1)
//can move up, down, left, or right and you wish to find a route that requires the min effort

//a route's effort is the max absolute difference in heights between two consecutive cells of the route
//return the min effort required to travel from the top-left cell to the bottom-right cell

//Approach:
//using BFS with queue
var pathMinEffort = (heights) => {
    let m = heights.length; //row
    let n = heights[0].length; //col
    let currEffort = Array.from(Array(m), () => Array(n).fill(Infinity));
    let queue = [ [0, 0, 0] ]; //[effort, row, col]
    let dirs = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];

    currEffort[0][0] = 0;

    //BFS
    while (queue.length) {
        let [effort, row, col] = queue.shift(); //curr

        if (effort > currEffort[row][col]) continue;
        if (row === m - 1 && col === n - 1) return effort;

        for (let [dr, dc] of dirs) {
            //new row and col
            let newRow = row + dr;
            let newCol = col + dc;

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                //new effort
                let newEffort = Math.max(effort, Math.abs(heights[row][col] - heights[newRow][newCol]));

                //sorting
                if (newEffort < currEffort[newRow][newCol]) {
                    currEffort[newRow][newCol] = newEffort;
                    queue.push([newEffort, newRow, newCol]);
                    queue.sort((a, b) => a[0] - b[0]);
                }
            }
        }
    }
    return -1;
}
//TC: O((R * C) * log(R * C))
//SC: O(R * C) - r is the num of rows and c is the num of cols in grid
pathMinEffort([[1,2,2],[3,8,2],[5,3,5]]); //2
//[1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells
//  1  2  2
//  3  8  2
//  5  3  5

pathMinEffort([[1,2,3],[3,8,4],[5,3,5]]); //1
//[1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells
//  1  2  3
//  3  8  4
//  5  3  5

pathMinEffort([[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]); //0 - this route does not require any effort
//  1  2  1  1  1
//  1  2  1  2  1
//  1  2  1  2  1
//  1  2  1  2  1
//  1  1  1  2  1
