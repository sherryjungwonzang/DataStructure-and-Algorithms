//542. 01 Matrix
//given an m x n matrix binary matrix 'mat'
//return the distance of the nearest 0 for each cell
//the distance between two adjacent cells is 1

//Approach:
//using BFS with queue
var updateMatrix = (mat) => {
    //directions
    let directions = [ [0, -1], [0, 1], [1, 0], [-1, 0] ];
    let queue = [];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            //find 0's position and distance
            if (mat[i][j] === 0) {
                queue.push([i, j, 0]);
            } else {
                //changing 1 to Infinity
                mat[i][j] = Infinity;
            }
        }
    }

    //BFS
    while(queue.length) {
        let [currX, currY, dist] = queue.shift();

        //checking Inifinity is greater than the current distance and updating the value
        if (mat[currX][currY] > dist) mat[currX][currY] = dist;

        //looping through each directions from the current point
        for (let [x, y] of directions) {
            let [nextX, nextY, nextVal] = [currX + x, currY + y, dist + 1];

            //checking inbound
            if (nextX < 0 || nextX > mat.length - 1 || nextY < 0 || nextY > mat[0].length - 1) continue;

            //adding to the queue if the distance is showing Infinity
            if (mat[nextX][nextY] === Infinity) queue.push([nextX, nextY, nextVal]);
        }
    }
    return mat;
}
updateMatrix([[0,0,0],[0,1,0],[1,1,1]]); //[[0,0,0],[0,1,0],[1,2,1]]
// 0   0   0
// 0   1   0
// 1   1   1

//starting the loop for finding 0 to add into queue and 1 to change to Infinity
//queue = [ [0,0,0], [0,1,0], [0,2,0], [1,0,0], [1,2,0] ]
// 0     0     0
// 0    Infi   0
//Infi  Infi  Infi

//starting BFS
//currX   currY   dist              nextX     nextY    nextVal
//  0       0       0                          ...

//  0       1       0               0+0=0     1-1=0     0+1=1
//                                  0+0=0     1+1=2     0+1=1
//                                  0+1=1     1+0=1     0+1=1 -> Infi || push into queue
//                                  0-1=-1    1+0=1     0+1=1 

//  0       2       0               0+0=0     2-1=1     0+1=1
//                                  0+0=0     2+1=3     0+1=1
//                                  0+1=1     2+0=2     0+1=1
//                                  0-1=-1    2+0=2     0+1=1

//  1       0       0               1+0=1     0-1=-1    0+1=1
//                                  1+0=1     0+1=1     0+1=1
//                                  1+1=2     0+0=0     0+1=1 -> Infi || push into queue
//                                  1-1=0     0+0=0     0+1=1

//  1       2       0               1+0=1     2-1=1     0+1=1
//                                  1+0=1     2+1=3     0+1=1
//                                  1+1=2     2+0=2     0+1=1 -> Infi || push into queue
//                                  1-1=0     2+0=2     0+1=1

//queue = [ [0,0,0], [0,1,0], [0,2,0], [1,0,0], [1,2,0] | [1,1,1], [2,0,1], [2,2,1], [2,1,2] ]
//                0's positions                                  Infinity's positions

//starting BFS of Infinity's positions
//currX   currY   dist              nextX     nextY    nextVal
//  1       1       1               1+0=1     1-1=0     1+1=2
//                                  1+0=1     1+1=2     1+1=2
//                                  1+1=2     1+0=1     1+1=2 -> Infi || push into queue
//                                  1-1=0     1+0=1     1+1=2 

//  2       0       1                          ...
//  2       2       1                          ...
//  2       1       2                          ...

// 0   0   0
// 0   1   0
// 1   2   1

updateMatrix([[0,0,0],[0,1,0],[0,0,0]]); //[[0,0,0],[0,1,0],[0,0,0]]
// 0 0 0
// 0 1 0
// 0 0 0
