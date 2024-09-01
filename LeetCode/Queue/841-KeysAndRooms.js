//841. Keys and Rooms
//there are n rooms labeled from 0 to n-1 and all rooms are locked except for room 0
//goal is to visit all the rooms
//cannot enter a locked room without having its key

//when you visit a room, may not find a set of disticnt keys in it
//each key has a number on it - denoting which room it unlocks
//can take all of them with you to unlock the other rooms

//given an array 'rooms' - where rooms[i] is the set of keys that can obtain if you visited room i
//return true if you can visit all the rooms, otherwise false

//Approach:
//using BFS with queue
var keysAndRooms = (rooms) => {
    let n = rooms.length;
    let queue = [ rooms[0] ];
    let visited = new Array(n).fill(false);

    //base setting
    visited[0] = true;

    //BFS
    while (queue.length) {
        let curr = queue.shift();

        for (let nextRoom of curr) {
            if (visited[nextRoom]) continue;

            visited[nextRoom] = true;

            queue.push(rooms[nextRoom]); 
        }
    }

    return visited.every((i) => i);
}
keysAndRooms([[1], [2], [3], []]); //true - We visit room 0 and pick up key 1 | We then visit room 1 and pick up key 2 | We then visit room 2 and pick up key 3 | We then visit room 3 | Since we were able to visit every room, we return true
//visited = [T, F, F, F]
//queue = [ [1] ]
//curr = 1
//nextRoom: 1 
//visited = [T, T, F, F]
//queue = [ [2] ]

//queue = [ [2] ]
//curr = 1, 2
//nextRoom: 2 
//visited = [T, T, T, F]
//queue = [ [3] ]

//queue = [ [3] ]
//curr = 1, 2, 3
//nextRoom: 3 
//visited = [T, T, T, T]

//True

keysAndRooms([[1,3],[3,0,1],[2],[0]]); //false - We can not enter room number 2 since the only key that unlocks it is in that room
//              0      1     2   3
// 0 ----- 3
//  \     /       2
//   \  /
//     1

//visited = [T, F, F, F]
//queue = [ [1] ]
//curr = [1]
//nextRoom: 1 
//visited = [T, T, F, F]
//queue = [ [3, 0, 1] ]

//queue = [ [3, 0, 1] ]
//curr = [1], [3]
//nextRoom: 3
//visited = [T, T, F, T]
//queue = [ [0] ]

//queue = [ [0] ]
//curr = [1], [3], [0]
//nextRoom: 0
//already visited -> False
