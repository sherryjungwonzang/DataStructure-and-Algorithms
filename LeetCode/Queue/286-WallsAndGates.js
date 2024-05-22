//286. Walls and Gates
//given an m x n grid 'rooms' initialized with these three possible values:
//-1:  a wall or an obstacle
//0:  a gate
//INF:  infinity means an empty room
//we use the value 2^31 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647

//fill each empty room with the distance to its nearest gate
//if it is impossible to reach a gate, it should be filled with INF

//Approach:
//usign BFS with queue
var wallsAndGate = (rooms) => {
    //setting
    const WALL = -1;
    const GATE = 0;
    const EMPTY = 2147483647;

    let queue = [];

    let dir = [ [0, 1], [1, 0], [0, -1], [-1, 0] ];

    //to find the gate position
    for (let i = 0;  i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === GATE) queue.push([i, j]);
        }
    }

    //BFS
    while (queue.length) {
        let curr = queue.shift();
        let currX = curr[0];
        let currY = curr[1];

        //looping through every directions
        for (let d of dir) {
            let nextX = currX + d[0];
            let nextY = currY + d[1];

            //inbound
            if (nextX < 0 || nextX > rooms.length - 1 || nextY < 0 || nextY > rooms[0].length - 1 || rooms[nextX][nextY] !== EMPTY) continue;

            //populating the grid
            rooms[nextX][nextY] = rooms[currX][currY] + 1;

            queue.push([nextX, nextY]);
        }
    }
}
//TC: O(m * n)
//SC: O(m * n)
wallsAndGate([[2147483647,-1,0,2147483647], [2147483647,2147483647,2147483647,-1], [2147483647,-1,2147483647,-1], [0,-1,2147483647,2147483647]]); //[[3,-1,0,1], [2,2,1,-1], [1,-1,2,-1], [0,-1,3,4]]

wallsAndGate([[-1]]); //[[-1]]
