//1971. Find if path exists in graph
//there is a bi-directional graph with 'n' vertices - where each vertex is labeled from 0 to n-1(inclusive)
//the edges in the graph are represented as a 2D integer array 'edges' - where each edges[i]=[u_i, v_i] denotes a bi-directional edge between vertext u_i and v_i
//every vertext pair is connected by at most one edge and no vertex has an edge to itself

//you want to determine if there is a valid path that exists from vertex 'source' to vertex 'destination'

//given edges and the integers n, source and destination
//return true if there is a valid path from source to destination
//otherwise, false
var findPath = (n, edges, source, destination) => {
    let graph = new Map();
    let visited = new Set();
    
    //creating an adjList
    for (let [v, e] of edges) {
        //for vertices
        if (graph.has(v)) {
            graph.get(v).push(e); //getting key and push value in the map
        } else {
            graph.set(v, [e]);
        }

        //for edges
        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }

    //creating DFS function
    function dfs(vertex) {
        visited.add(vertex);

        let neighbors = graph.get(vertex);

        if (neighbors && neighbors.length > 0) {
            for (let i = 0; i < neighbors.length; i++) {
                if (!visited.has(neighbors[i])) {
                    dfs(neighbors[i]);
                }
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

findPath(6, [[0,1], [0,2], [3,5], [5,4], [4,3]], 0, 5); //false
//there is no path from vertext 0 to vertex 5
