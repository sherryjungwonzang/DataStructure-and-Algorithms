var Graph = require('./Graph.js');
var Queue = require('./Queue.js');


//4.1 Route Between Nodes
//given a directed graph and two nodes
//algorithm to find out whether there is a route from S to E

//concurrently implement BFS on both sides of the graph
//to minimize the levels that the graph has to search
var checkRoute = (val1, val2, graph) => {
    var q1 = new Queue();
    var q2 = new Queue();
    var visited1 = {};
    var visited2 = {};

    //insert values into q1 and q2
    visited1[val1] = true;
    visited2[val2] = true;

    if (graph.hasNode(val1)) {
        for (var edge in graph.findEdges(val1)) {
            q1.add(edge);
        }
    }

    if (graph.hasNode(val2)) {
        for (var edge in graph.findEdges(val2)) {
            q2.add(edge);
        }
    }

    //take turns dequeuing until empty
    var nextEdge1;
    var nextEdge2;

    while(!q1.isEmpty() || !q2.isEmpty()) {
        //if has a queue, return true
        if (!q1.isEmpty()) {
            nextEdge1 = q1.remove();
            if (nextEdge1 === val2) {
                return true;
            }

            if (visited1[nextEdge1] === undefined) {
                visited1[nextEdge1] = true;

                if (graph.hasNode(nextEdge1)) {
                    for (var edge in graph.findEdges(nextEdge1)) {
                        q1.add(edge);
                    }
                }
            }
        }

        if (!q2.isEmpty()) {
            nextEdge2 = q2.remove();
            if (nextEdge2 === val1) {
                return true;
            }

            if (visited2[nextEdge2] === undefined) {
                visited2[nextEdge2] = true;

                if (graph.hasNode(nextEdge2)) {
                    for (var edge in graph.findEdges(nextEdge2)) {
                        q2.add(edge);
                    }
                }
            }
        }
    }
    return false;
};

//TEST
var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');

console.log(checkRoute('A', 'C', graph)); //true
console.log(checkRoute('A', 'E', graph)); //false
console.log(checkRoute('B', 'A', graph)); //true
console.log(checkRoute('D', 'E', graph)); //true
