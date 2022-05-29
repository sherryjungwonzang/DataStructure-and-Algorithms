
//2. DIRECTED GRAPH
//defining with the edges property
function DirectedGraph() {
    this.edges = {};
}

//adding the vertex
DirectedGraph.prototype.addVertex = (vertex) => {
    this.edges[vertex] = {};
}

//given an edge that starts at the origin vertex and ends at the destination vertex
//to add edges into the directed graph, the weight should be set on the origin vertex
DirectedGraph.prototype.addEdge = (origVertex, destVertex, weight) {
    if (weight === undefined) weight = 0;
    
    this.edges[origVertex][destVertex] = weight;
}

var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 2);
digraph1.addEdge("C", "A", 3);


//removing a vertex and an edge for a directed graph
DirectedGraph.prototype.removeEdge = (origVertex, destVertex) => {
    if (this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined) delete this.edges[origVertex][destVertex];
}

DirectedGraph.prototype.removeVertex = (vertex) => {
    for (var adjacentVertex in this.edges[vertex]) {
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
}
