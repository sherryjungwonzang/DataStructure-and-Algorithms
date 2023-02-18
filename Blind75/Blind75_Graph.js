//Blind75 - Graph
//1. Clone Graph
//given a reference of a node in a connected undirected graph
//return a deep copy of the graph

//Approach: traverse and keep adding node to the visited map
//using DFS
function Node (val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

//recursive approach
function cloneGraph(node) {
  let visited = {}; //mapping between the node and its copy
  
  function dfs(node) {
    //base cases
    if (!node) return node; //if node === null
    if (visited[node.val] !== null) return visited[node.val]; //!!visited[node.val]

    let copy = new Node(node).val;
    visited[node.val] = copy;

    //recurrence relation
    for (let neighbor of node.neighbors) {
      //from starting - it should be an empty array
      //create a connection between each node
      copy.neighbors.push(dfs(neighbor)); //pushing into neighbors of our copy of this recursive
    }
    return copy;
  }
  return dfs(node);
}
//Time complexity: O(n+e)
//Space complexity: O(v) - v is the value of visited


cloneGraph([[2,4], [1,3], [2,4], [1,3]]); //[[2,4], [1,3], [2,4], [1,3]]
// 1 --- 2
// |     |
// 4 --- 3
//1 - copy: 1*, neighbor: 2*, 4*
//2 - copy: 2*, neighbor: 3*, 1*
//3 - copy: 3*, neighbor: 2*, 4*
//4 - copy: 4*, neighbor: 1*, 3*

//there are 4 nodes in the graph
//1st node: (val==1)'s neighbors are 2nd node (val==2) and 4th node (val==4)
//2nd node: (val==2)'s neighbors are 1st node (val==1) and 3rd node (val==3)
//3rd node: (val==3)'s neighbors are 2nd node (val==2) and 4th node (val==4)
//4th node: (val==4)'s neighbors are 1st node (val==1) and 3rd node (val==3)

cloneGraph([[]]); //[[]]
cloneGraph([]); //[] 


//2. Course Schedule (207)
//total of numCourses - have to take
//labeled from 0 to numCourses - 1
//given an array 'prerequisites' - where prerequisites[i] = [ai, bi] indicating that you must take course bi first if you want to take course ai
//ex: [0,1] - to take course 0 - have to first take course 1
//return true if you can finish all courses - otherwise return false

//Approach: Graph-adjacencyList and Set() 
//need to loop through the keys with adjacency list and run DFS for those keys
var courseSchedule = (numCourses, prerequisites) => {
  //to store neighbors
  let adjacencyList = {}; 
  //creating a Set for visited
  let visited = new Set(); 

  //populate the adjacency list - mapping b to a
  for (let [a, b] of prerequisites) {
    //if we don't have a value already in the adjacency list
    if (!adjacencyList[a]) {
      adjacencyList[a] = [b]; //create it being an array containing B
    } else { //need to push in at position a within the adjacency list
      adjacencyList[a].push(b);
    }
  }

  //need to loop through the keys with adjacency list and run DFS for those keys
  function dfs(curr) { 
    //check visited whether it has curr - if it has, then we have a cycle -> false
    if (visited.has(curr)) return false;

    if (adjacencyList[curr] === []) return true;

    //add two visited value of curr
    visited.add(curr);
    //check its neighbors
    if (adjacencyList[curr]) { //if there is a neighbor to check
      //loop through the neighbor
      for (let neighbor of adjacencyList[curr]) {
        //carry out the DFS on this
        if (!dfs(neighbor)) {
          return false;
        }
      }
    }
    //once curr has been visited, we need to delete the curr from this
    visited.delete(curr);
    //as long as we visited all neighbors within the adjacency list at current - set it to empty array
    adjacencyList[curr] = [];

    return true;
  }

  //run DFS for those keys
  for (let key in adjacencyList) {
    if (!dfs(key)) {
      return false;
    }
  }
  return true;
}
courseSchedule(2, [[1,0]]); //true - total 2 courses to take: to take course 1 - should take course 0
//adjacencyList[1]: [0]
//visited: { 1 0 }
//neighbor: 0 -> dfs(0) -> true
//delete 0
//visited: { 1 } | adjacencyList[1]: [] -> true



courseSchedule(2, [[1,0], [0,1]]); //false - total 2 courses to take: to take course 1 - should finish course 0 | to take course 0 - should take course 1
//adjacencyList[1]: [0]
//adjacencyList[0]: [1]