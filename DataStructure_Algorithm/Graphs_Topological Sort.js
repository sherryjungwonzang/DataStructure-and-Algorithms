//Topological Sort
//ex: task scheduler where one task depends on a previous task being done
//ex: JavaScript library dependency manager where it has to figure out which libraries to import before others
//modified DFS that uses a stack to record the order

//has a visited set to ensure that the recursive call does not result in an infinite loop
//for a given node, that node is added to the visited set
//and the neighbors that have not been visited are visited in the next recursive call
//at the end of the recursive call, unshift is used to add the current node's value to the stack
//the order is chronological

DirectedGraph.prototype.topologicalSortUtil = (v, visited, stack) => {
    visited.add(v);

    for (var item in this.edges[v]) {
        if (visited.has(item) == false) {
            this.topologicalSortUtil(item, visited, stack);
        }
    }
    stack.unshift(v);
};

DirectedGraph.prototype.topologicalSort = () => {
    var visited = {};
    var stack = [];

    for (var item in this.edges) {
        if (visited.has(item) == false) {
            this.topologicalSortUtil(item, visited, stack);
        }
    }
    return stack;
};

var g = new DirectedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('B', 'A');
g.addEdge('D', 'C');
g.addEdge('D', 'B');
g.addEdge('B', 'A');
g.addEdge('A', 'F');
g.addEdge('E', 'C');

var topologicalOrder = g.topologicalSort();
console.log(g);
//directedGraph {
//V: 6,
//E: 6,
//edges: {
    //A: {F: 0}, 
    //B: {A: 0}, 
    //C: {}, 
    //D: {C: 0, B: 0},
    //E: {C; 0},
    //F: {} }
//}
console.log(topologicalOrder);
//['E', 'D', 'C', 'B', 'A', 'F']

//Time Complexity: O(V+E)
//Space Complexity: O(V)
//V: number of vertices
//E: number of edges

