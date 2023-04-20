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
//using DFS with recursive calls
var keysAndRooms = (rooms) => {
  let visited = new Set();
  let keyList = new Set();

  //DFS
  function dfs(currRoom, currKeys) {
    if (visited.has(currRoom)) {
      return;
    } else {
      visited.add(currRoom);
    }

    //loop through room's keys and add them to currKey set
    for (let key of rooms[currRoom]) {
      currKeys.add(key);
    }

    //loop through keys
    for (let key of currKeys) {
      //recursive calls
      dfs(key, currKeys);
    }
  }
  dfs(0, keyList);

  return visited.size === rooms.length;
}
//TC: O(n + m) - n is the num of rooms and m is the num of keys
//SC: O(n)
keysAndRooms([[1], [2], [3], []]); //true - We visit room 0 and pick up key 1 | We then visit room 1 and pick up key 2 | We then visit room 2 and pick up key 3 | We then visit room 3 | Since we were able to visit every room, we return true

keysAndRooms([[1,3],[3,0,1],[2],[0]]); //false - We can not enter room number 2 since the only key that unlocks it is in that room
//              0      1     2   3

//creating a graph based on array
// 0 ----- 3
//  \     /       2
//   \  /
//     1

