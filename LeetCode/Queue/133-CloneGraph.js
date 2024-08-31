//133. Clone Graph
//given a reference of a node in a connected undirected graph
//return a deep copy of the graph

//Approach:
//using BFS with queue
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = (node) => {
    //base case
    if (!node) return null;

    let newNode = new Node(node.val);
    let queue = [node];
    let visited = new Map();

    //base setting
    visited.set(node, newNode);

    //BFS
    while(queue.length) {
        let curr = queue.shift();

        for (let neighbor of curr.neighbors) {
            if (!visited.has(neighbor)) {
                let newNeighbor = new Node(neighbor.val);

                queue.push(neighbor);
                
                visited.set(neighbor, newNeighbor);
            }

            visited.get(curr).neighbors.push(visited.get(neighbor));
        }
    }

    return newNode;
}
//TC: O(v + e) -  n is the num of vertices, e is the num of edges
//SC: O(v) - v is the num of nodes in graph
cloneGraph([[2,4], [1,3], [2,4], [1,3]]); //[[2,4], [1,3], [2,4], [1,3]]
// 1 --- 2
// |     |
// 4 --- 3

//newNode = 1 
//visited = { [1, node(1)] }
//queue = [ 1 ]
//curr = 1
//neigh = 2 -> newNeighbor = Node(2)
//        4 -> NewNeighbot = Node(4)
//visited = { [1, node(1)], [2, node(2)], [4: node(4)] }
//queue = [ 2, 4 ]

//queue = [ 2, 4 ]
//curr = 1, 2
//neigh = 1 -> get(2): node(2) -> neighbors.push(node(2)) => 1's copy: 2
//        3 -> NewNeighbor = Node(3)
//visited = { [1, node(1)], [2, node(2)], [4: node(4)], [3, node(3)] }
//queue = [ 4, 3 ]

//queue = [ 4, 3 ]
//curr = 1, 2, 4
//neigh = 1 -> get(4): node(4) -> neighbors.push(node(4)) => 1's copy: 4
//        3 -> get(4): node(4) -> neighbors.push(node(4)) => 3's copy: 4

//queue = [ 3 ]
//curr = 1, 2, 4, 3
//neigh = 2 -> get(3): node(3) -> neighbors.push(node(3)) => 2's copy: 3
//        4 -> get(3): node(3) -> neighbors.push(node(3)) => 4's copy: 3

cloneGraph([[]]); //[[]]

cloneGraph([]); //[] 
