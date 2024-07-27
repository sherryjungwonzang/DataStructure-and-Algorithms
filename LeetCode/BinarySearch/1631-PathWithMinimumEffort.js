//1631. Path With Minimum Effort
//you are a hiker preparing for an upcoming hike
//given heights, a 2D array of size rows x cols - where heights[row][col] represents the height of cell (row, col)
//are situated in the top-left cell, (0, 0) and you hope to travel to the bottom-right cell - (rows - 1, cols - 1)
//can move up, down, left, or right and you wish to find a route that requires the min effort

//a route's effort is the max absolute difference in heights between two consecutive cells of the route
//return the min effort required to travel from the top-left cell to the bottom-right cell

//Approach:
//using DFS with Binary Search
var pathMinEffort = (heights) => {
    let m = heights.length; //row
    let n = heights[0].length; //col
    let dirs = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];

    //Binary Search
    let low = 0;
    let high = 1e6; //upper bound for binary search
    
    while (low < high) {
        let mid = low + Math.trunc((high - low) / 2);
        let visited = Array.from({ length: m }, () => Array(n).fill(false));
    
        //reducing upper bound
        if (dfs(0, 0, mid, visited)) high = mid;
        else low = mid + 1; //increasing lower bound
    }
        
    //DFS
    function dfs(row, col, effort, visited) {
        //base case
        if (row === m - 1 && col === n - 1) return true; //destination

        visited[row][col] = true;

        //directions
        for (let [dr, dc] of dirs) {
            let newRow = row + dr;
            let newCol = col + dc;

            //checking valid
            if (newRow >= 0 && newRow < m &&
                newCol >= 0 && newCol < n &&
                !visited[newRow][newCol] &&
                Math.abs(heights[newRow][newCol] - heights[row][col] <= effort))
            {
                //checking next row and col
                if (dfs(newRow, newCol, effort, visited)) return true;
            }
        }
        return false;
    };
   
    return low;
}
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
