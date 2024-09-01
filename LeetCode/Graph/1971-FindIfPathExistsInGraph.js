//1971. Find if path exists in graph
//there is a bi-directional graph with 'n' vertices - where each vertex is labeled from 0 to n-1(inclusive)
//the edges in the graph are represented as a 2D integer array 'edges' - where each edges[i]=[u_i, v_i] denotes a bi-directional edge between vertext u_i and v_i
//every vertext pair is connected by at most one edge and no vertex has an edge to itself

//you want to determine if there is a valid path that exists from vertex 'source' to vertex 'destination'

//given edges and the integers n, source and destination
//return true if there is a valid path from source to destination
//otherwise, false
var findPath = (n, edges, source, destination) => {
    let adjList = new Map();
    let visited = new Set();
    
    //creating an adjList
    for (let [v, e] of edges) {
        //for vertices
        if (adjList.has(v)) adjList.get(v).push(e); //getting key and push value in the map
        else adjList.set(v, [e]);
        
        //for edges
        if (adjList.has(e)) adjList.get(e).push(v);
        else adjList.set(e, [v]);
    }

    //DFS
    function dfs(vertex) {
        visited.add(vertex);

        let neighbors = adjList.get(vertex);

        if (neighbors && neighbors.length) {
            for (let i = 0; i < neighbors.length; i++) {
                if (!visited.has(neighbors[i])) dfs(neighbors[i]);
            }
        }
    }

    dfs(source);

    return visited.has(destination);
}
findPath(3, [[0,1], [1,2], [2,0]], 0, 2); //true
//there are two paths from vertex 0 to vertex 2
//0 -> 1 -> 2
//0 -> 2

//adjList = {
//  0: [1, 2]
//  1: [0, 2]
//  2: [0, 1]
//}
//visited = { }

//starting from dfs(0)
//visitied = { 0, }
//neighbor: 1 -> dfs(1)
//          2 -> dfs(2)

//dfs(1) 
//visitied = { 0, 1, }
//neighbor: 0 -> already visited
//          2 -> dfs(2)

//dfs(2) 
//visitied = { 0, 1, 2, }
//neighbor: 0 -> already visited
//          1 -> already visited
//True


findPath(6, [[0,1], [0,2], [3,5], [5,4], [4,3]], 0, 5); //false
//there is no path from vertext 0 to vertex 5

//adjList = {
//  0: [1, 2]
//  1: [0]
//  2: [0]
//  3: [5]
//  5: [3]
//}
//visited = { }

//starting from dfs(0)
//visitied = { 0, }
//neighbor: 1 -> dfs(1)
//          2 -> dfs(2)

//dfs(1)
//visitied = { 0, 1, }
//neighbor: 0 -> already visited

//dfs(2)
//visitied = { 0, 1, 2, }
//neighbor: 0 -> already visited

//nothing connected anymore
//False
