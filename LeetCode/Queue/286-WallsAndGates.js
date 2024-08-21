//286. Walls and Gates
//given an m x n grid 'rooms' initialized with these three possible values:
//-1: a wall or an obstacle
//0: a gate
//INF: infinity means an empty room
//we use the value 2^31 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647

//fill each empty room with the distance to its nearest gate
//if it is impossible to reach a gate, it should be filled with INF

//Approach:
//usign BFS with queue
var wallsAndGate = (rooms) => {
    //setting
    let WALL = -1;
    let GATE = 0;
    let EMPTY = 2147483647;

    let m = rooms.length;  
    let n = rooms[0].length;
    let queue = [];

    let dir = [ [0, 1], [1, 0], [0, -1], [-1, 0] ];

    //to find the gate position
    for (let i = 0;  i < m; i++) {
        for (let j = 0; j < n; j++) {
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
            if (nextX < 0 || nextX > m - 1 || nextY < 0 || nextY > n - 1 || rooms[nextX][nextY] !== EMPTY) continue;

            //populating the grid
            rooms[nextX][nextY] = rooms[currX][currY] + 1;

            queue.push([nextX, nextY]);
        }
    }
}
//TC: O(m * n)
//SC: O(m * n)
wallsAndGate([[2147483647,-1,0,2147483647], [2147483647,2147483647,2147483647,-1], [2147483647,-1,2147483647,-1], [0,-1,2147483647,2147483647]]); //[[3,-1,0,1], [2,2,1,-1], [1,-1,2,-1], [0,-1,3,4]]
//[EMPTY,     -1,         0,      EMPTY ]
//[EMPTY,   EMPTY,     EMPTY,     -1    ]
//[EMPTY,     -1,      EMPTY,     -1    ]
//[    0,     -1,      EMPTY,     EMPTY ]

//-> queue = [ [0, 2], [3, 0] 
//curr = [0, 2]
//currX = 0, currY = 2
//nextX =  0 + 0 = 0   || nextY = 2 + 1 = 3 V
//         0 + 1 = 1   || nextY = 2 + 0 = 2 V
//         0 + 0 = 0   || nextY = 2 - 1 = 1 -> wall
//         0 - 1 = -1  || nextY = 2 + 0 = 2 -> invalid

//rooms[0, 2] = 0 + 1 => rooms[0, 3] = 1 & rooms[1, 2] = 1
//[EMPTY,     -1,         0,       1    ]
//[EMPTY,   EMPTY,        1,      -1    ]
//[EMPTY,     -1,      EMPTY,     -1    ]
//[    0,     -1,      EMPTY,     EMPTY ]

//queue = [ [3, 0], [0, 3], [1, 2],

//curr = [3, 0]
//currX = 3, currY = 0
//nextX =  3 + 0 = 3   || nextY = 0 + 1 = 1 -> wall
//         3 + 1 = 4   || nextY = 0 + 0 = 0 -> invalid
//         3 + 0 = 3   || nextY = 0 - 1 = -1 -> invalid
//         3 - 1 = 2   || nextY = 0 + 0 = 0  V

//rooms[3, 0] = 0 + 1 => rooms[2, 0] = 1
//[EMPTY,     -1,         0,       1    ]
//[EMPTY,   EMPTY,        1,      -1    ]
//[    1,     -1,      EMPTY,     -1    ]
//[    0,     -1,      EMPTY,     EMPTY ]

//queue = [ [0, 3], [1, 2], [2, 0],

//curr = [0, 3]
//currX = 0, currY = 3
//nextX =  0 + 0 = 0   || nextY = 3 + 1 = 4 -> invalid
//         0 + 1 = 1   || nextY = 3 + 0 = 3 -> wall
//         0 + 0 = 0   || nextY = 3 - 1 = 2 -> gate
//         0 - 1 = -1  || nextY = 3 + 0 = 3 -> invalid

//[EMPTY,     -1,         0,       1    ]
//[EMPTY,   EMPTY,        1,      -1    ]
//[    1,     -1,      EMPTY,     -1    ]
//[    0,     -1,      EMPTY,     EMPTY ]

//queue = [ [1, 2], [2, 0],

//curr = [1, 2]
//currX = 1, currY = 2
//nextX =  1 + 0 = 1   || nextY = 2 + 1 = 3 -> wall
//         1 + 1 = 2   || nextY = 2 + 0 = 2 V
//         1 + 0 = 1   || nextY = 2 - 1 = 1 V
//         1 - 1 = 0   || nextY = 2 + 0 = 2 -> gate

//rooms[1, 2] = 1 + 1 = 2 => rooms[2, 2] = 2 & rooms[1, 1] = 2 
//[EMPTY,     -1,         0,       1    ]
//[EMPTY,      2,         1,      -1    ]
//[    1,     -1,         2,      -1    ]
//[    0,     -1,      EMPTY,     EMPTY ]

//queue = [ [2, 0], [2, 2], [1, 1] 

//curr = [2, 0]
//currX = 2, currY = 0
//nextX =  2 + 0 = 2   || nextY = 0 + 1 = 1  -> wall
//         2 + 1 = 3   || nextY = 0 + 0 = 0 -> gate
//         2 + 0 = 2   || nextY = 0 - 1 = -1 -> invalid
//         2 - 1 = 1   || nextY = 0 + 0 = 0 V

//rooms[2, 0] = 1 + 1 = 2 => rooms[1, 0] = 2
//[EMPTY,     -1,         0,       1    ]
//[    2,      2,         1,      -1    ]
//[    1,     -1,         2,      -1    ]
//[    0,     -1,      EMPTY,     EMPTY ]

//queue = [[2, 2], [1, 1], [1, 0]

//curr = [2, 2]
//currX = 2, currY = 2
//nextX =  2 + 0 = 2   || nextY = 2 + 1 = 3 -> wall
//         2 + 1 = 3   || nextY = 2 + 0 = 2 V
//         2 + 0 = 2   || nextY = 2 - 1 = 1 -> wall
//         2 - 1 = 1   || nextY = 2 + 0 = 3 -> wall

//rooms[2, 2] = 2 + 1 = 3 => rooms[3, 2] = 3
//[EMPTY,     -1,         0,       1    ]
//[    2,      2,         1,      -1    ]
//[    1,     -1,         2,      -1    ]
//[    0,     -1,         3,     EMPTY ]

//queue = [[1, 1], [1, 0], [3, 2]

//curr = [1, 1]
//currX = 1, currY = 1
//nextX =  1 + 0 = 1   || nextY = 1 + 1 = 2
//         1 + 1 = 2   || nextY = 1 + 0 = 1 -> wall
//         1 + 0 = 1   || nextY = 1 - 1 = 0 
//         1 - 1 = 0   || nextY = 1 + 0 = 1 -> wall

//[EMPTY,     -1,         0,       1    ]
//[    2,      2,         1,      -1    ]
//[    1,     -1,         2,      -1    ]
//[    0,     -1,         3,     EMPTY ]

//queue = [[1, 0], [3, 2]

//curr = [1, 0]
//currX = 1, currY = 0
//nextX =  1 + 0 = 1   || nextY = 0 + 1 = 1
//         1 + 1 = 2   || nextY = 0 + 0 = 0
//         1 + 0 = 1   || nextY = 0 - 1 = -1 -> invalid
//         1 - 1 = 0   || nextY = 0 + 0 = 0 V

//rooms[1, 0] = 2 + 1 =  3 => rooms[0, 0] = 3
//[    3,     -1,         0,       1    ]
//[    2,      2,         1,      -1    ]
//[    1,     -1,         2,      -1    ]
//[    0,     -1,         3,     EMPTY ]

//queue = [[3, 2], [0, 0]

//curr = [3, 2]
//currX = 3, currY = 2
//nextX =  3 + 0 = 3   || nextY = 2 + 1 = 3 V
//         3 + 1 = 4   || nextY = 2 + 0 = 2 -> invalid
//         3 + 0 = 3   || nextY = 2 - 1 = 1 -> wall
//         3 - 1 = 2   || nextY = 2 + 0 = 2 

//rooms[3, 2] = 3 + 1 = 4 => rooms[3, 3] = 4
//[    3,     -1,         0,       1    ]
//[    2,      2,         1,      -1    ]
//[    1,     -1,         2,      -1    ]
//[    0,     -1,         3,      4     ]

//queue = [[0, 0], [3, 3]

//curr = [0, 0]
//currX = 0, currY = 0
//nextX =  0 + 0 = 0   || nextY = 0 + 1 = 1 -> wall
//         0 + 1 = 1   || nextY = 0 + 0 = 0 
//         0 + 0 = 0   || nextY = 0 - 1 = -1 -> invalid
//         0 - 1 = -1   || nextY = 0 + 0 = 0  -> invalid

//[    3,     -1,         0,       1    ]
//[    2,      2,         1,      -1    ]
//[    1,     -1,         2,      -1    ]
//[    0,     -1,         3,      4     ]

//queue = [[3, 3]
//currX = 3, currY = 3
//nextX =  3 + 0 = 3   || nextY = 3 + 1 = 4 -> invalid
//         3 + 1 = 4   || nextY = 3 + 0 = 3 -> invalid
//         3 + 0 = 3   || nextY = 3 - 1 = 2
//         3 - 1 = 2   || nextY = 3 + 0 = 3 

//queue = [ ]

//[    3,     -1,         0,       1    ]
//[    2,      2,         1,      -1    ]
//[    1,     -1,         2,      -1    ]
//[    0,     -1,         3,      4     ]

wallsAndGate([[-1]]); //[[-1]]
