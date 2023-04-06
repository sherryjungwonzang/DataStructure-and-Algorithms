//1091. Shortest Path in Binary Matrix
//given an n x n binary matrix 'grid'
//return the length of the shortest clear path in the matrix
//if there is no clear path, return -1

//a clear path in a binary matrix is a path from the top-left cell to the bottom-right cell
//all the visited cells of the path are 0
//all the adjacent cells of the path are 8-directionally connected
//the length of a clear path is the number of visited cells of this path
var shortestPath = (grid) => {
  if (grid[0][0] === 1) return -1; //there is no path going from top-left to bottom-right

  //all possible 8 directions
  let directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

  //creating a queue with initializing witht he first indices and count as 1
  let queue = [[0,0,1]];

  while(queue.length) {
    //extract currentX and currentY from queue
    let [currX, currY, count] = queue.shift();

    //if we are in the botoom-right position
    if (currX === grid.length - 1 && currY === grid[0].length - 1) {
      return count;
    }

    //looping through 8 directions
    for (let [x, y] of directions) {
      let [nextX, nextY] = [currX + x, currY + y];

      //to check the next position is inbound & if it is equal to 0
      if (nextX < 0 || nextX > grid.length - 1 || nextY < 0 ||nextY > grid[0].length - 1 || grid[nextX][nextY] === 1) continue;

      queue.push([nextX, nextY, count + 1]);
      grid[nextX][nextY] = 1;
    }
  }
  return -1;
}
shortestPath([0,1], [1,0]); //2\
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
