//Dijkstra algorithm
DirectedGraph.prototype.Dijkstra = (source) => {
    //create vertex set Q
    var Q = {};
    var dist = {};
    for (var vertex in this.edges) {
        //unknown distances set to infinity
        dist[vertex] = Infinity;

        //add v to Q
        Q[vertex] = this.edges[vertex];
    }
    //Distance from source to source init to 0
    dist[source] = 0;

    while(!_isEmpty(Q)) {
        var u = _extractMin(Q, dist); //get the min distance

        //remove u from Q
        delete Q[u];

        //for each neighbor, v of u:
        //where v is still in Q
        for (var neighbor in this.edges[u]) {
            //current distance
            var alt = dist[u] + this.edges[u][neighbor];

            //a shorter path has been found
            if (alt < dist[neighbor]) dist[neighbor] = alt;
        }
    }
    return dist;
}

var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 1);
digraph1.addEdge("C", "A", 1);
digraph1.addEdge("A", "D", 1);
console.log(digraph1);
//directedGraph {
//V: 4,
//E: 4,
//edges: {A: {B: 1, D: 1}, B: {C: 1}, C: {A: 1}, D: {}}
//}

digraph1.Dijkstra("A");
//{A: 0, B: 1, C: 2, D: 1}

//Time Complexity: O(V^2+E)
//V: number of vertices
//E: number of edges
