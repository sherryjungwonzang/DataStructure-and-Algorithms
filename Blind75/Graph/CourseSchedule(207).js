//Course Schedule (207)
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
