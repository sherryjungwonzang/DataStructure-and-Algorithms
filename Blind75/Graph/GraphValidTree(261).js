//Graph Valid Tree(261)
////graph of n nodes labeled from 0 to n - 1
//given an integer n and a list of edges where edges[i] = [a_i, b_i] - indicating that there is an undirected edge between nodes a_i and b_i
//return true if the edges of the given graph make up a valid tree, otherwise false

//Approach:
//using adjacencyList and Set
//Set - to keep track of the nodes that I have visited
//if we already visited + and that node's neighbor is equal to parent -> there is no cycle | return false
//when root is not True -> meaning it is a valid tree
var graphValidTree = (n, edges) => {
  //creating adjacency list
  let adjList = {};

  for (let i = 0; i < n; i++) {
    //empty array - want to include the zero-th element in 
    adjList[i] = [];
  }

  //create the connection
  for (let [a, b] of edges) {
    adjList[a].push(b);
    adjList[b].push(a);
  }


  //check for a cycle
  let visited = new Set();

  //check whether there is a cycle or not
  function checkCycle(current, parent) {
    visited.add(current);
    let neighbors = adjList[current];

    if (neighbors.length) {
      for (let neigh of neighbors) {
        if (visited.has(neigh)) { 
          //check for cycle
          //if visited has the neigh but the neighbor is equal to parent
          if (neigh !== parent) return true; //there is a cycle
        } else {
          //neigh is found we've been visited but the neigh is equal to parent
          if (checkCycle(neigh, current)) {
            return true;
          }
        }
      } 
    }
    return false;
  }

  if (checkCycle(0, -1)) return false; //(current index, parent) - parent at the root node will be -1

  //to check if there is a disjointed set
  for (let i = 0; i < n; i++) {
    //to check if visited has i
    if (!visited.has(i)) {
      return false; //there are more than one graph
    }
  }
  return true;
}
//TC: O (n + e) - n is the num of nodes traversing through within the tree | e is the num og edges between those nodes
//SC: O (n + e)
graphValidTree(5, [[0,1], [0,2], [0,3], [1,4]]); // true - there is no cycle 
//adjList = { 0: [1, 2, 3], 1: [0, 4], 2: [0], 3: [0], 4: [1] } | n = 5
//     0
//   / | \
//  1  2  3
//  |
//  4 

//check Cycle
//visited = { 0 }
//neighbors = [1, 2, 3]

//1) neigh = 1 -> not in visited -> checkCycle(1, 0)
//checkCycle(1, 0)
//visited = { 0 1 }
//neighbors = [0, 4]
//neigh = 0 -> is in visited -> 0 === 0 -> return false
//visited = { 0 1 4 }
//neighbors = [1]
//neigh = 1 -> is in visited -> 1 === 1 -> return false

//2) neigh = 2 -> not in visited -> checkCycle(2, 0)
//checkCycle(2, 0)
//visited = { 0 1 4 2 }
//neighbors = [0]
//neigh = 0 -> is in visited -> 0 === 0 -> return false

//3) neigh = 3 -> not in visited -> checkCycle(2, 0)
//checkCycle(2, 0)
//visited = { 0 1 4 2 3 }
//neighbors = [0]
//neigh = 0 -> is in visited -> 0 === 0 -> return false


graphValidTree(5, [[0,1], [1,2], [2,3], [1,3], [1,4]]); //false - there is a cycle
//adjList = { 0: [1], 1: [0, 2, 3, 4], 2: [1, 3], 3: [1, 2], 4: [1] }
//  0 -- 1 -- 2
//       |  \ |
//       4    3

//check Cycle
//visited = { 0 }
//neighbors = [1]
