//802. Find Eventual Safe States
//there is a directed graph of 'n' nodes with each node labeled from 0 to n - 1
//the graph is represented by a 0-indexed 2D integer array 'graph' - where graph[i] is an integer array of nodes
//adjacent to node i, meaning there is an edge from node i to each node in graph[i]

//a node is a terminal node if there are no outgoing edges
//a node is a safe node if every possible path starting from that node leads to a terminal node or another safe node

//return an array containing all the safe nodes of the graph

//Approach:
//Using DFS with recursion
var findEventualSafeStates = (graph) => {
    let visited = new Array(graph.length).fill(0); //0 - unvisited, 1 - visiting, 2 - visited
    let res = [];

    for (let i = 0; i < graph.length; i++) {
        if (dfs(i)) res.push(i);
    }

    //DFS
    function dfs(node) {
        //base case
        if (visited[node] === 1) return false;
        if (visited[node] === 2) return true;

        //visiting
        visited[node] = 1;

        //checking connections
        for (let next of graph[node]) {
            if (!dfs(next)) return false;
        }

        //visited
        visited[node] = 2;

        return true;
    }

    return res;
}
findEventualSafeStates([[1,2],[2,3],[5],[0],[5],[],[]]); //[2,4,5,6]
//Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them
//Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6

//visited = [0, 0, 0, 0, 0, 0, 0]
//res = [ ]

//i = 0 - starting with dfs(0)
//dfs(0)
//visited = [1, 0, 0, 0, 0, 0, 0]
//-> dfs(1)
//-> dfs(2)

//dfs(1)
//visited = [1, 1, 0, 0, 0, 0, 0]
//-> dfs(2)
//-> dfs(3)

//dfs(2)
//visited = [1, 1, 1, 0, 0, 0, 0]
//-> dfs(5)

//dfs(5)
//visited = [1, 1, 1, 0, 0, 1, 0]
//-> dfs([]) = null
//False
//visited = [1, 1, 1, 0, 0, 2, 0]

//dfs(2) is done -> visited = [1, 1, 2, 0, 0, 2, 0]

//dfs(3)
//visited = [1, 1, 2, 1, 0, 2, 0]
//-> dfs(0): visiting
//False

//i = 0 -> False
//dfs(0) -> dfs(1) = False
//          dfs(2) = False
//dfs(1) -> dfs(2) = False
//          dfs(3) = False
//res = [ ]

//i = 1
//dfs(1): already visiting
//visited = [1, 1, 2, 1, 0, 2, 0]
//False
//res = [ ]

//i = 2
//dfs(5): already visited
//visited = [1, 1, 2, 1, 0, 2, 0]
//True
//res = [ 2, ]

//i = 3
//dfs(0): already visiting
//visited = [1, 1, 2, 1, 0, 2, 0]
//False
//res = [ 2, ]

//i = 4
//dfs(4)
//visited = [1, 1, 2, 1, 1, 2, 0]
//-> dfs(5): already visited
//True
//visited = [1, 1, 2, 1, 2, 2, 0]
//res = [ 2, 4 ]

//i = 5
//dfs(5)
//visited = [1, 1, 2, 1, 2, 2, 0]
//-> next: []
//res = [ 2, 4, 5 ]

//i = 6
//dfs(6)
//visited = [1, 1, 2, 1, 2, 2, 1]
//-> next: []
//res = [ 2, 4, 5, 6 ]

findEventualSafeStates([[1,2,3,4],[1,2],[3,4],[0,4],[]]); //[4]
//Only node 4 is a terminal node, and every path starting at node 4 leads to node 4

//visited = [0, 0, 0, 0, 0]
//res = [ ]

//i = 0 - starting with dfs(0)
//dfs(0)
//visited = [1, 0, 0, 0, 0]
//-> dfs(1)
//-> dfs(2)
//-> dfs(3)
//-> dfs(4)

//dfs(1)
//visited = [1, 1, 0, 0, 0]
//-> dfs(1)
//-> dfs(2)

//i = 1
//dfs(1): already visiting
//visited = [1, 1, 0, 0, 0]
//False
//res = [ ]

//i = 2
//dfs(2)
//visited = [1, 1, 1, 0, 0]
//-> dfs(3)
//-> dfs(4)

//dfs(3)
//visited = [1, 1, 1, 1, 0]
//-> dfs(0)
//-> dfs(4)

//i = 3
//dfs(3): already visiting
//visited = [1, 1, 1, 1, 0]
//False
//res = [ ]

//i = 4
//dfs(4)
//visited = [1, 1, 1, 1, 1]
//-> next: []
//visited = [1, 1, 1, 1, 2]
//res =[ 4 ]
