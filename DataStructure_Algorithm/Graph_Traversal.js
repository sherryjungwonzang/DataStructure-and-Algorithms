var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 2);
digraph1.addEdge("C", "A", 3);

//Graph Traversal
//1. Breadth First Search (BFS)
//similar to the level-order traversal for the tree data structure
DirectedGraph.prototype.traverseBFS = (vertex, fn) => {
    var queue = [];
    var visited = {};

    queue.push(vertex);

    while(queue.length) {
        vertex = queue.shift();

        if (!visited[vertex]) {
            visited[vertex] = true;
            fn(vertex);

            for (var adjacentVertex in this.edges[vertex]) queue.push(adjacentVertex);
        }
    }
}

digraph1.traverseBFS("B", (vertex) => {console.log(vertex)});
//Time Complexity: O(V+E)
//V: number of vertices
//E: number of edges



//2. Depth First Search (DFS)
//similar to the post-order traversal for the tree data structure
DirectedGraph.prototype.traverseDFS = (vertex, fn) => {
    var visited = {};
    this._traverseDFS(vertex, visited, fn);
}

DirectedGraph.prototype._traverseDFS = (vertex, visited, fn) => {
    visited[vertex] = true;
    fn(vertex);

    for (var adjacentVertex in this.edges[vertex]) {
        if (!visited[adjacentVertex]) this._traverseDFS(adjacentVertex, visited, fn);
    }
}
//Time Complexity: O(V+E)
//V: number of vertices
//E: number of edges
