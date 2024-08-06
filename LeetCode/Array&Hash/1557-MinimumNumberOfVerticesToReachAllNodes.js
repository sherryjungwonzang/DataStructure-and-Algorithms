//1557. Minimum Number Of Vertices To Reach All Nodes
//given a directed acyclic graph with n vertices numbered from 0 to n - 1
//and an array edges where edges[i] = [from_i, to_i] - representing a directed edge from node from_i to node to_i
//find the smallest set of vertices from  which all nodes in the graph are reachable
//return the vertices in any order

//Approach:
//using array to track the node which does not have destination
var minNumVertices = (n, edges) => {
    let map = new Array (n);
    let res = [];

    //tracking destination
    for (let [index, val] of edges) map[val] = 1;
    for (let i = 0; i < n; i++) { //to find empty position
        if (!map[i]) res.push(i); //meaning not reachable
    }

    return res;
}
minNumVertices(n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]); //[0, 3]
//From 0 we can reach [0,1,2,5]
//From 3 we can reach [3,4,2,5]

minNumVertices(n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]); //[0, 2, 3]
//0, 3 and 2 are not reachable from any other node
