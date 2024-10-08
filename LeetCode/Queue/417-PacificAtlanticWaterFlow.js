//417. Pacific Atlantic Water Flow
//there is an m x n rectangular that borders both Pacific Ocean and Atlantic Ocean
//Pacific Ocean touches the island's let and top edges
//Atlantic Ocean touches the island's right and bottom edges

//Island is partitioned into a grid of square cells
//given an m x n integer matrix, heights where heights[r][c] - represents the height above sea level of the cell at coordinate (r, c)

//Island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east and west if the neighboring is less than or equal to the current cell's height
//water can flow from any cell adjacent to an ocean into the ocean

//return a 2D list of grid coordinates result where result[i] = [r_i, c_i]
//denotes that rain water can flow from cell (r_i, c_i) to both the Pacific and Atlantic ocean

//Approach:
//using BFS with two queues - pacific queue and atlantic queue
var pacificAtlantic = (heights) => {
    let r = heights.length; //row
    let c = heights[0].length; //col

    //two queues
    let pacificQueue = [];
    let atlanticQueue = [];

    //push into each into queue
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            //bordering the pacific
            if (i === 0 || j === 0) pacificQueue.push([i, j]);

            //bordering the atlantic
            if (i === r - 1 || j === c - 1) atlanticQueue.push([i, j]);
        }
    }

    function bfs(queue) {
        //valid border
        let isValid = (x, y) => x >= 0 && y >= 0 && x < r && y < c;

        //directions
        let directions = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];

        //creating 2D array - to track visited position
        //Array.from('foo') -> Array ["f", "o", "o"]
        let visited = Array.from(Array(r), () => new Array(c).fill(false));

        //BFS
        while(queue.length) {
            const [x, y] = queue.shift(); //curr
   
            visited[x][y] = true; 

            //4 directions
            for (let dir of directions) {
                //next direction
                let nextX = x + dir[0];
                let nextY = y + dir[1];

                if (!isValid(nextX, nextY) || visited[nextX][nextY]) continue;

                //only can go higher or equal value
                if (heights[nextX][nextY] >= heights[x][y]) queue.push([nextX, nextY]);
            }
        };

        return visited;
    }

    let res = [];
    let pacific = bfs(pacificQueue);
    let atlantic = bfs(atlanticQueue);

    for (let x = 0; x < r; x++) {
        for (let y = 0; y < c; y++) {
            //duplicated visited are answer
            if (pacific[x][y] && atlantic[x][y]) res.push([x, y]);
        }
    }

    return res;
}
//TC: O(m * n) - m is the num of rows and n is the num of columns
//SC: O (m * n) - m is the num of rows and n is the num of columns
pacificAtlantic([[1,2,2,3,5], [3,2,3,4,4], [2,4,5,3,1], [6,7,1,4,5], [5,1,1,2,4]]); //[[0,4], [1,3], [1,4], [2,2], [3,0], [3,1], [4,0]]
//[0,4]: [0,4] - Pacific Ocean
//       [0,4] - Atlantic OCean
//[1,3]: [1,3] -> [0,3] - Pacific Ocean
//       [1,3] -> [1,4] - Atlantic Ocean
//[1,4]: [1,4] -> [1,3] -> [0,3] - Pacific Ocean
//       [1,4] - Atlantic Ocean
//[2,2]: [2,2] -> [1,2] -> [0,2] - Pacific Ocean
//       [2,2] -> [2,3] -> [2,4] - Atlantic Ocean
//[3,0]: [3,0] - Pacific Ocean
//       [3,0] -> [4,0] - Atlantic Ocean
//[3,1]: [3,1] -> [3,0] - Pacific Ocean
//       [3,1] -> [4,1] - Atlantic Ocean
//[4,0]: [4,0] - Pacific Ocean
//       [4,0] - Atlantic Ocean
