//Undirected graph
//creating a weighted undirected graph
//adding vertices and edges

//first, creating a new class for an undirected graph
//should have an object to store the edges
function UndirectedGraph() {
    this.edges = {};
}

//second, adding edges, vertices(nodes) 
//taking the adjacency list approach
////by having vertices as objects inside the this.edges object which edge values are stored
UndirectedGraph.prototype.addVertex = (vertex) => {
    this.edges[vertex] = {};
}

//third, adding weighted edges into the undirected graphs
//both in vertices in the this.edges objects are used to set the weight
UndirectedGraph.prototype.addEdge = (vertex1, vertex2, weight) => {
    if (weight == undefined) weight = 0;

    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}


var graph1 = new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1,2,1);
graph1.edges; //1: {2: 0}, 2: {1: 0}

graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(2,3,8);
graph1.addEdge(3,4,10);
graph1.addEdge(4,5,100);
graph1.addEdge(1,5,88);

//Removing an edge from a vertex
//lookup the edges object for that vertex in this.edges
//and delete it using javascript's delete operator
UndirectedGraph.prototype.removeEdge = (vertex1, vertex2) => {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined) delete this.edges[vertex1][vertex2];
    if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined) delete this.edges[vertex2][vertex1];
}

//delete an entire vertex
//anythine a vertex is removed, all edges connected to it also must be removed
UndirectedGraph.prototype.removeVertex = (vertex) => {
    for (var adjacentVertex in this.edges[vertex]) {
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
}

var graph2 = new UndirectedGraph();
graph2.addVertex(1);
graph2.addVertex(2);
graph2.addEdge(1,2,1);
graph2.edges; //1: {2: 0}, 2: {1: 0}

graph2.addVertex(3);
graph2.addVertex(4);
graph2.addVertex(5);
graph2.addEdge(2,3,8);
graph2.addEdge(3,4,10);
graph2.addEdge(4,5,100);
graph2.addEdge(1,5,88);

graph2.removeVertex(5);
graph2.removeVertex(1);
graph2.removeEdge(2,3);

