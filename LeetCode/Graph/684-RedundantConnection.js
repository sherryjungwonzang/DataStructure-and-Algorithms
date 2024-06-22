//684. Redundant connection
//in this problem, a tree is an undirected graph that is connected and has no cycles
//you are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added
//the added edge has two different vertices chosen from 1 to n and was not an edge that already existed
//the graph is represented as an array 'edges' of length 'n' where edges[i] = [a_i, b_i]
//which indicates that there is an edge between nodes a_i and b_i in the graph
//return an edge that can be removed so that the resulting graph is a tree of n nodes
//if there are multiple answers, return the answer that occurs last in the input

//Approach:
//using DFS and graph
var redundantConnection = (edges) => {
    let adjList = {};

    //building graph & adjlist
    for (let edge of edges) {
        let [v, e] = edge;

        if (!adjList[v]) adjList[v] = [];
        if (!adjList[e]) adjList[e] = [];

        adjList[v].push(e);
        adjList[e].push(v);

        //traverse the graph and check for a cycle
        if (dfs(e, v, v)) return [v, e];
    }

    //dfs
    function dfs(node, target, prev) {
        if (node === target) return true;

        for (let subnode of adjList[node]) {
            if (subnode !== prev && dfs(subnode, target, node)) return true;
        }
        return false;
    }
}
redundantConnection([[1,2], [1,3], [2,3]]); //[2,3]

redundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]]); //[1,4]
