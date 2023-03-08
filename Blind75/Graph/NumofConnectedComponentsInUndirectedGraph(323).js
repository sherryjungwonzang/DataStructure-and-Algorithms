//Number of Connected Components in an Undirected Graph (323)
//have a graph of n nodes
//given an integer n and an array edges - where edges[i] = [a_i, b_i] indicating that there is an edge between a_i and b_i in the graph
var connectedComponents = (n, edges) => {
  let count = 0;
  let adjList = {};

  //initialize each value within adjList
  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of edges) {
    //undirected graph - need to push in both neighbors in both directions
    adjList[u].push(v);
    adjList[v].push(u);
  }

  let visited = new Set();

  //DFS - loop through adjList with keys
  function dfs(node) {
    if (visited.has(node)) return 0;

    //need to add the node to visited
    visited.add(node);

    //loop through the neighbors
    for (let n  of adjList[node]) {
      dfs(n);
    }
    return 1;
  }


  for (let key in adjList) {
    //key -> going to be string 
    //need to convert it to an integer
    key = parseInt(key);

    count += dfs(key)
  }
  return count;

}
connectedComponents(5, [[0,1], [1,2], [3,4]]); //2
// 0 -- 1     3
//      |     |
//      2     4
//adjList = { 0: [1], 1: [0,2], 2: [1], 3: [4], 4: [3] }
//count = 0
//visited = { }

//starting with the first key: 0 in adjList
//visited = { 0 } | 0's neighbor -> 1
//visited = { 0 1 } | 1's neighbor -> 0, 2
//visited = { 0 1 2 } -> 0 is already visited so add 2 | 2's neighbor -> 1 (already visited)
//return 1 -> add to count

//count = 0 -> 1

//starting with the second key: 1 in adjList -> already visited
//starting with the third key: 2 in adjList -> already visited

//starting with the fourth key: 3 in adjList
//visited = { 0 1 2 3 } | 3's neighbor -> 4
//visited = { 0 1 2 3 4 } | 4's neighbor -> 3 (already visited)
//return 1 -> add to count

//count = 0 -> 1 -> 2

//starting with the fifth key: 4 in adjList -> already visited
//return count = 2












