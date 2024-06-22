//802. Find Eventual Safe States
//there is a directed graph of 'n' nodes with each node labeled from 0 to n - 1
//the graph is represented by a 0-indexed 2D integer array 'graph' - where graph[i] is an integer array of nodes
//adjacent to node i, meaning there is an edge from node i to each node in graph[i]

//a node is a terminal node if there are no outgoing edges
//a node is a safe node if every possible path starting from that node leads to a terminal node or another safe node

//return an array containing all the safe nodes of the graph

//Approach:
//using Map and DFS for traversing neighbors
//setting false if there is a cycle in map
//setting true if there is no cycle in map
var findEventualSafeStates = (graph) => {
    let m = graph.length;
    let res = [];
    let map = new Map();

    //travering graph
    for (let i = 0; i < m; i++) {
        if (dfs(graph, i, map)) res.push(i);
    }

    function dfs(graph, node, map) {
        //base case
        if (map.has(node)) return map.get(node);

        //setting as false initially
        map.set(node, false);

        //traversing each node's neighbors
        for (let neigh of graph[node]) {
            if (!dfs(graph, neigh, map)) return false;
        }

        //setting as true if there is no cycle
        map.set(node, true);

        return true;
    };

    return res;
}
findEventualSafeStates([[1,2],[2,3],[5],[0],[5],[],[]]); //[2,4,5,6]
//Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
//Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6

//map: {}
//[[1,2],[2,3],[5],[0],[5],[],[]]
//   0     1    2   3   4   5  6
//   ^
//map: { 0: F, 1: F, 2: F }

//              ^
//map: { 0: F, 1: F, 2: F, 5: F }

//                          ^
//map: { 0: F, 1: F, 2: F -> T, 5: F -> T }
//res = [2, 5]

//          ^
//map: { 0: F, 1: F, 2: F -> T, 5: F -> T, 3: F }

//                       ^
//map: { 0: F, 1: F, 2: F -> T, 5: F -> T, 3: F, 4: F -> T }
//res = [2, 5, 4]

//                                 ^
//map: { 0: F, 1: F, 2: F -> T, 5: F -> T, 3: F, 4: F -> T, 6: F -> T }
//res = [2, 5, 4, 6]

//-> res = [2, 4, 5, 6]

findEventualSafeStates([[1,2,3,4],[1,2],[3,4],[0,4],[]]); //[4]
//Only node 4 is a terminal node, and every path starting at node 4 leads to node 4
