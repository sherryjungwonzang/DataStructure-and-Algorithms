//785. Is Graph Bipartite?
//there is an undirected graph with 'n' nodes = where each node is numbered between 0 and n - 1
//given a 2D array 'graph' - where graph[u] is an array of nodes that node u is adjacent to
//more formally, for each v in graph[u], there is an undirected edge between node u and node v

//there are no self-edges graph[u] does not contain u
//there are no parallel edges(graph[u]) does not contain duplicate values
//if v is in graph[u], then u is in graph[v] - the graph is undirected
//the graph may not be connected, meaning there may be two nodes u and v such that there is no path between them

//return trus if and only if it is bipartite

//Appraoch:
//using BFS with queue
var bipartiteGraph = (graph) => {
    let n = graph.length;
    let color = new Array(n).fill(-1); //not colored
    let queue = [];

    //base case
    if (!n) return false;

    //looping until there is no source node and graph is not connected
    for (let i = 0; i < n; i++) {
        if (color[i] !== -1) continue;
        color[i] = 1; //coloring as 1 
        queue.push(i);

        //BFS
        while (queue.length) {
            let curr = queue.shift();
            let next = 1 - color[curr];

            for (let idx = 0; idx < graph[curr].length; idx++) {
                //finding all neighbors
                let neigh = graph[curr][idx];
                
                if (color[neigh] === color[curr]) return false;
                else if (color[neigh] === -1) {
                    color[neigh] = next; //updating as next value
                    queue.push(neigh); //adding neighbor value in queue
                } //else - continue
            }
        }
    }
    return true; //bipartite
}
//TC: O(v + e) - v:vertices and e:edges
//SC: O(v) - looping through each vertext and edge (neighboring) once
bipartiteGraph([[1,2,3],[0,2],[0,1,3],[0,2]]); //false
//  0 -  1
//  |  \ |
//  3 -  2

bipartiteGraph([[1,3],[0,2],[1,3],[0,2]]); //true
//  0 -  1
//  |    |
//  3 -  2
