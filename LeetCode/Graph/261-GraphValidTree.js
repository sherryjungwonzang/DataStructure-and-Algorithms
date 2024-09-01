//261. Graph Valid Tree
//graph of n nodes labeled from 0 to n - 1
//given an integer n and a list of edges where edges[i] = [a_i, b_i] - indicating that there is an undirected edge between nodes a_i and b_i
//return true if the edges of the given graph make up a valid tree, otherwise false

//Approach:
//using DFS with recursion
var graphValidTree = (n, edges) => {
    let adjList = {};
    let visited = new Set();

    //create the connection
    for (let i = 0; i < n; i++) adjList[i] = []; 
    for (let [a, b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    //DFS - checking for a cycle
    function dfs(curr, parent) {
        let neighbors = adjList[curr];
        
        visited.add(curr);

        if (neighbors.length) {
            for (let neigh of neighbors) {
                if (visited.has(neigh)) {
                    if (neigh !== parent) return true; //meaning there is a cycle
                } else {
                    if (dfs(neigh, curr)) return true;
                }
            }
        }

        return false; //meaning there is no cycle
    }

    //checking disjointed set
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) return false; //meaning there are more than one graph
    }

    if (dfs(0, -1)) return false; //parent at the root node will be -1

    return true; //meaning valid true
}
//TC: O (n + e) - n is the num of nodes traversing through within the tree | e is the num of edges between those nodes
//SC: O (n + e)
graphValidTree(5, [[0,1], [0,2], [0,3], [1,4]]); // true - there is no cycle 
//     0
//   / | \
//  1  2  3
//  |
//  4 

//adjList: {
//    0: [1, 2, 3],
//    1: [0, 4],
//    2: [0],
//    3: [0],
//    4: [1]
//}
//visitied = { }

//starting from dfs(0, -1)
//visitied = { 0, }
//neighbor: 1 -> dfs(1, 0)
//          2 -> dfs(2, 0)
//          3 -> dfs(3, 0)

//dfs(1, 0)
//visitied = { 0, 1, }
//neighbor: 0 -> already visited || 0 == parent || False(no cycle)
//          4 -> dfs(4, 1)
 
//dfs(4, 1)
//visited = { 0, 1, 4 }
//neighbor: 1 -> already visited || 1 == parent || False(no cycle)

//dfs(2, 0)
//visited = //visited = { 0, 1, 4, 2 }
//neighbor: 0 -> already visited || 0 == parent || False(no cycle)

//dfs(3, 0)
//visited = //visited = { 0, 1, 4, 2, 3 }
//neighbor: 0 -> already visited || 0 == parent || False(no cycle)
//Graph valid tree - no cycle

graphValidTree(5, [[0,1], [1,2], [2,3], [1,3], [1,4]]); //false - there is a cycle
//  0 -- 1 -- 2
//       |  \ |
//       4    3

//adjList: {
//    0: [1],
//    1: [0, 2, 3, 4],
//    2: [1, 3],
//    3: [1, 2],
//    4: [1]
//}
//visitied = { }

//starting from dfs(0, -1)
//visitied = { 0, }
//neighbor: 1 -> dfs(1, 0)

//dfs(1, 0)
//visitied = { 0, 1, }
//neighbor: 0 -> already visited || 0 == parent || False(no cycle)
//          2 -> dfs(2, 1)
//          3 -> dfs(3, 1)
//          4 -> dfs(4, 1)

// dfs(2, 1)
//visitied = { 0, 1, 2, }
//neighbor: 1 -> already visited || 1 == parent || False(no cycle)
//          3 -> dfs(3, 2)

//dfs(3, 2)
//visitied = { 0, 1, 2, 3 }
//neighbor: 1 -> already visited || 1 != parent || True(has cycle)
//          2 -> already visited || 1 = parent || False(no cycle)

//non valid graph tree - has cycle
