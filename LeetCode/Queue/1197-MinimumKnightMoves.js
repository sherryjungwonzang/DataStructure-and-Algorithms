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
    //8 directions
    let dir = [ [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1] ];
    let seen = new Set(); //to track all visited positions
    let queue = [[0, 0, 0]];

    //BFS
    while (queue.length) {
        let next = []; //to store next array position

        while(queue.length) {
            //extracting current position
            let [currX, currY, steps] = queue.shift(); //curr

            if (currX === x & currY === y) return steps;

            //check all possible positions
            for (let d of dir) {
                //extracting next position
                let [nextX, nextY] = [currX + d[0], currY + d[1]]

                if (!seen.has(nextX + "," + nextY)) {
                    seen.add(nextX + "," + nextY);
                    next.push([nextX, nextY, steps + 1]);
                }
            }
        }

        queue = next; //updating queue
    }
}
minKnightMoves(5, 5); //4 - [0,0] -> [2,1] -> [4,2] -> [3,4] -> [5,5]
//seen = { }
//steps = 0
//queue = [ [0, 0, 0] ]

//curr = [0, 0, 0]
//nextX          nextY
// 0 - 2 = -2       0 - 1 = -1 
// 0 - 1 = -1       0 - 2 = -2
// 0 + 1 = 1       0 - 2 = -2
// 0 + 2 = 2       0 - 1 = -1
// 0 + 2 = 2       0 + 1 = 1
// 0 + 1 = 1       0 + 2 = 2 
// 0 - 1 = -1       0 + 2 = 2 
// 0 - 2 = -1       0 + 1 = 1 
//seen = { [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-1, 1] }
//next = [ [-2, -1, 1], [-1, -2, 1], [1, -2, 1], [2, -1, 1], [2, 1, 1], [1, 2, 1], [-1, 2, 1], [-1, 1, 1] ]

//queue = [ [-2, -1, 1], [-1, -2, 1], [1, -2, 1], [2, -1, 1], [2, 1, 1], [1, 2, 1], [-1, 2, 1], [-1, 1, 1] ]
//curr = [-2, -1, 1]
//nextX          nextY
// -2 - 2 = -4       -1 - 1 = -2
// -2 - 1 = -3       -1 - 2 = -3
// -2 + 1 = -1       -1 - 2 = -3
// -2 + 2 = 0       -1 - 1 = -2
// -2 + 2 = 0       -1 + 1 = 0
// -2 + 1 = -1       -1 + 2 = 1 
// -2 - 1 = -3       -1 + 2 = 1 
// -2 - 2 = -4       -1 + 1 = 0
//... 


minKnightMoves(2, 1); //1 - [0, 0] -> [2, 1]
