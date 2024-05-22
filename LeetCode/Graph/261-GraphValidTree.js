//261. Graph Valid Tree
//graph of n nodes labeled from 0 to n - 1
//given an integer n and a list of edges where edges[i] = [a_i, b_i] - indicating that there is an undirected edge between nodes a_i and b_i
//return true if the edges of the given graph make up a valid tree, otherwise false

//Approach:
//using adjacencyList and Set
//Set - to keep track of the nodes that I have visited
//if we already visited + and that node's neighbor is equal to parent -> there is no cycle | return false
//when root is False -> meaning it is a valid tree
//when root is True -> not a valid tree
var graphValidTree = (n, edges) => {
    let adjList = {};

    for (let i = 0; i < n; i++) {
        adjList[i] = []; //empty array - want to include the zero-th element in
    }

    //create the connection
    for (let [a, b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    let visited = new Set();

    //checking for a cycle
    function checkCycle(curr, parent) {
        visited.add(curr);

        let neighbors = adjList[curr];

        if (neighbors.length) {
            for (let neigh of neighbors) {
                if (visited.has(neigh)) {
                    if (neigh !== parent) return true; //meaning there is a cycle
                } else {
                    if (checkCycle(neigh, curr)) return true;
                }
            }
        }
        return false;
    }

    if (checkCycle(0, -1)) return false; //parent at the root node will be -1

    //checking disjointed set
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            return false; //meaning there are more than one graph
        }
    }
    return true; //meaning valid true
}
//TC: O (n + e) - n is the num of nodes traversing through within the tree | e is the num of edges between those nodes
//SC: O (n + e)
graphValidTree(5, [[0,1], [0,2], [0,3], [1,4]]); // true - there is no cycle 
//adjList = { 0: [1, 2, 3], 1: [0, 4], 2: [0], 3: [0], 4: [1] } | n = 5
//     0
//   / | \
//  1  2  3
//  |
//  4 

//check Cycle
//visited = { 0 }
//neighbors = [1, 2, 3]

//1) neigh = 1 -> not in visited -> checkCycle(1, 0)
//checkCycle(1, 0)
//visited = { 0 1 }
//neighbors = [0, 4]
//neigh = 0 -> is in visited -> 0 === 0 -> return false
//visited = { 0 1 4 }
//neighbors = [1]
//neigh = 1 -> is in visited -> 1 === 1 -> return false

//2) neigh = 2 -> not in visited -> checkCycle(2, 0)
//checkCycle(2, 0)
//visited = { 0 1 4 2 }
//neighbors = [0]
//neigh = 0 -> is in visited -> 0 === 0 -> return false

//3) neigh = 3 -> not in visited -> checkCycle(2, 0)
//checkCycle(2, 0)
//visited = { 0 1 4 2 3 }
//neighbors = [0]
//neigh = 0 -> is in visited -> 0 === 0 -> return false


graphValidTree(5, [[0,1], [1,2], [2,3], [1,3], [1,4]]); //false - there is a cycle
//adjList = { 0: [1], 1: [0, 2, 3, 4], 2: [1, 3], 3: [1, 2], 4: [1] }
//  0 -- 1 -- 2
//       |  \ |
//       4    3

//check Cycle
//visited = { 0 }
//neighbors = [1]

//1) neigh = 1 -> not in visited -> checkCycle(1, 0)
//checkCycle(1, 0)
//visited = { 0 1 }
//1's neighbors = [0, 2, 3, 4]
//neigh = 0 -> is in visited -> 0 === 0 -> return false
//visited = { 0 1 }
//neigh = 2 -> is not in visited ->checkCycle(2, 1)
//visited = { 0 1 2 }
//2's neighbors = [1, 3]
//neigh = 1 -> is in visited -> 1 === 0 -> return true
//neigh = 3 -> is not in visited -> checkCycle(3, 2)
//neigh = 2 -> is not in visited ->checkCycle(2, 1)
//visited = { 0 1 2 3 } 
//3's neighbors = [1, 2]
//neigh = 1 -> is in visited -> 1 === 0 -> return true
//neigh = 2 -> is in visited -> 2 === 0 -> return true
