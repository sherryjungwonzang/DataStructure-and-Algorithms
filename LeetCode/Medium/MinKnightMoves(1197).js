//1197. Minimum Knight Moves
//in an infinite chess board with coordinates from -infinity to + infinity
//you have a knight at square [0,0]

//a kinght has a 8 possible moves that can make
//each move is two squares in a cardinal direction
//then one square in an orthogonal direction

//return the minimum number of steps needed to move the knight to the square [x, y]
//it is guaranteed the answer exists

//Approach:
//using BFS and queue
var minKnightMoves = (x, y) => {
  //setting all possible directions
  let dir = [ [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
  
  //setting variables
  //to track all the visited positions
  let seen = new Set();
  //queue initializing with the knoghts position
  let queue = [[0, 0]]; 
  let steps = 0;

  //BFS
  while(queue.length) {
    //initializing next array - to store the next array position
    let next = [];

    while(queue.length) {
      let current = queue.shift();
      //extracting currentX and currentY 
      let currentX = current[0];
      let currentY = current[1];

      //checking whether it is equal to target x, y
      if (currentX === x && currentY === y) return steps;
      
      //if not, check all the possible positions from this initial position
      for (let d of dir) {
        //need to get the next position
        let nextX = currentX + d[0];
        let nextY = currentY + d[1];

        if (!seen.has(nextX + "," + nextY)) {
          //add it to seen and push into next
          seen.add(nextX + "," + nextY);
          next.push([nextX, nextY]);
        }
      }
    }
    //after looping all the possible directions
    steps++;
    //update q to next position
    queue = next;
  }
}
minKnightMoves(2, 1); //1 - [0, 0] -> [2, 1]

minKnightMoves(5, 5); //4 - [0,0] -> [2,1] -> [4,2] -> [3,4] -> [5,5]
