//Pacific Atlantic Water Flow (417)
//there is an m x n rectangular that borders both Pacific Ocean and Atlantic Ocean
//Pacific Ocean touches the island's let and top edges
//Atlantic Ocean touches the island's right and bottom edges

//Island is partitioned into a grid of square cells
//given an m x n integer matrix, heights where heights[r][c] - represents the height above sea level of the cell at coordinate (r, c)

//Island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east and west if the neighboring is less than or equal to the current cell's height
//water can flow from any cell adjacent to an ocean into the ocean

//return a 2D list of grid coordinates result where result[i] = [r_i, c_i]
//denotes that rain water can flow from cell (r_i, c_i) to both the Pacific and Atlantic ocean
var pacificAtlantic = (heights) => {
  //extract out the rows and columns length
  let r = heights.length; //row length
  let c = heights[0].length; //column length

  //Two Queues
  let pacificQueue = [];
  let atlanticQueue = [];

  //loop through the entire border
  //push into the specific queue if the current value is touching the pacific/atlantic
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i === 0 || j === 0) {
        //bordering the pacific - need to push into Queue
        pacificQueue.push([i, j]);
      }

      //bordering the atlantic - need to push into Queue
      if (i === r-1 || j === c-1) {
        atlanticQueue.push([i, j]); 
      }
    }
  }

  //BFS
  function bfs(queue) {
    //state whether the value is valid or not
    const isValid = (x, y) => x >= 0 && y >= 0 && x < r && y < c; //valid status
    //specify the directions that we can take - up/down/left/right
    const directions = [[0,1], [0,-1], [1,0], [-1,0]];

    //create a 2D array - where all values are initialized to false
    //Array.from('foo')) -> Array ["f", "o", "o"]
    const visited = Array.from(Array(r), () => new Array(c).fill(false)); 

    //starting BFS 
    while(queue.length) {
      //extracting x and y from queue
      const [x, y] = queue.shift(); 
      //set true in the visited array
      visited[x][y] = true;

      //starting 4 directions
      for (let dir in directions) {
        //extract next
        let nextX = x + dir[0];
        let nextY = y + dir[1];
      
        //if it is invalid or being visited - continue
        if (!isValid(nextX, nextY) || visited[nextX][nextY]) continue;
        
        //for checking bfs
        //to check whether the height at the next position is greater than or equal to the height at the current position
        if (heights[nextX][nextY] >= heights[x][y]) {
          queue.push([nextX, nextY]); //push the next positions into the queue
        }
      }
    }
    return visited; 
  }

  const pacific = bfs(pacificQueue);
  const atlantic = bfs(atlanticQueue);

  const result = []; 
  
  for (let x = 0; x < r; x++) {
    for (let y = 0; y < c; y++) {
      if (pacific[x][y] && atlantic[x][y]) {
        result.push([x, y]); //have all the trus values for the border in the pacific and atlantic
      }
    }
  }
  return result;
} 
//TC: O(m * n) - m is the num of rows and n is the num of columns
//SC: O (m * n) - m is the num of rows and n is the num of columns
pacificAtlantic([1,2,2,3,5], [3,2,3,4,4], [2,4,5,3,1], [6,7,1,4,5], [5,1,1,2,4]); //[[0,4], [1,3], [1,4], [2,2], [3,0], [3,1], [4,0]]
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
