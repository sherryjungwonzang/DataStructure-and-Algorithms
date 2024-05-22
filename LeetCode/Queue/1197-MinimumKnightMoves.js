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
    //dirs
    let dir = [ [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1] ];

    let seen = new Set(); //to track all visited positions
    let queue = [[0, 0]];
    let steps = 0;

    //BFS
    while (queue.length) {
        let next = []; //to store next array position

        while(queue.length) {
            //extracting current position
            let curr = queue.shift();
            let currX = curr[0];
            let currY = curr[1];

            if (currX === x & currY === y) return steps;

            //check all possible positions
            for (let d of dir) {
                //extracting next position
                let nextX = currX + d[0];
                let nextY = currY + d[1];

                if (!seen.has(nextX + "," + nextY)) {
                    seen.add(nextX + "," + nextY);
                    next.push([nextX, nextY]);
                }
            }
        }
        steps++; //after looping all the possible directions

        queue = next; //updating queue
    }
}
minKnightMoves(2, 1); //1 - [0, 0] -> [2, 1]

minKnightMoves(5, 5); //4 - [0,0] -> [2,1] -> [4,2] -> [3,4] -> [5,5]
