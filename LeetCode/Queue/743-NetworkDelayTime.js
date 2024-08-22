//743. Network Delay Time
//given a network of n nodes, labeled from1 to n
//also given times, a list of travel times as directed edges times[i] = (u_i, v_i, w_i)
//where u_s is the source node, v_i is the target node, and w_i is the time it takes for a signal to travel from source to target

//we will send a signal from a given node k
//return the min time it takes for all the n nodes to receive the signal
//if it is impossible for all the n nodes to receive the signal, return -1

//Approach:
//using priority queue with BFS and graph
var networkDelayTime = (times, n, k) => {
    let adjList = [];

    //creating adjList based on source node
    for ([u, v, w] of times) {
        if (!adjList[u]) adjList[u] = [];
        adjList[u].push([v, w]);
    }

    //BFS
    function bfs() {
        let queue = new MinPriorityQueue({ compare: (a, b) => a[1] - b[1] });
        let visited = new Set();
        let maxPath = 0;

        queue.enqueue([k, 0]); //starting from given source node with distance 0

        //checking neighbors
        while (!queue.isEmpty()) {
            let [node, w] = queue.dequeue(); //curr

            if (visited.has(node)) continue;

            visited.add(node);

            maxPath = Math.max(maxPath, w); //updating the distance

            if (adjList[node]) {
                let neigh = adjList[node];

                for (let [adjNode, adjW] of neigh) {
                    if (!visited.has(adjNode)) queue.enqueue([adjNode, w + adjW]); //adding curr distance
                }
            }
        }

        return visited.size === n ? maxPath : -1;
    };

    return bfs();
}
networkDelayTime(times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2); //2
//adjList = [__, [ [1, 1], [3, 1] ], [4, 1], ____]
//            1           2            3       4 

//visited = { }
//queue = [2, 0]
//curr = [2, 0]

//visited = { 2, }
//2 has nieghbors -> [1, 1 + 0 = 1], [3, 1 + 0 = 1]
//queue = [1, 1], [3, 1]

//curr = [2, 0], [1, 1]
//visited = { 2, 1, }
//1 has no nieghbors 
//maxPath = 0 -> (0, 1) = 1

//queue = [3, 1]
//curr = [2, 0], [1, 1], [3, 1]
//visited = { 2, 1, 3, }
//3 has nieghbors -> [4, 1 + 1 = 2]
//queue = [4, 2]
//maxPath = 0 -> (0, 1) = 1 -> (1, 1) = 1

//curr = [2, 0], [1, 1], [3, 1], [4, 2]
//visited = { 2, 1, 3, 4 }
//4 has no nieghbors 
//queue = [ ]
//maxPath = 0 -> (0, 1) = 1 -> (1, 1) = 1 -> (1, 2) = 2

//visited size = n

networkDelayTime(times = [[1,2,1]], n = 2, k = 1); //1

networkDelayTime(times = [[1,2,1]], n = 2, k = 2); //-1
