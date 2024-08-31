//1514. Path With Maximum Probability
//given an undirected weighted graph of n nodes - 0-indexed
//represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b
//with a probability of success of traversing that edge succProb[i]

//given two nodes start and end
//find the path with the max probability of success to go from start to end
//return its success probability
//if there is no path from start to end, return 0

//Approach:
//using BFS with queue and Graph
var maxProbability = (n, edges, succProb, start, end) => {
    let visited = new Array(n).fill(0);
    let adjList = visited.reduce((m, _, i) => m.set(i, []), new Map());
    
    //base setting
    visited[start_node] = 1;

    //creating adjList
    edges.forEach(([from, to], i) => {
        adjList.get(from).push([to, succProb[i]]);
        adjList.get(to).push([from, succProb[i]]);
    });

    let queue = [ [start_node, 1] ];

    //BFS
    while (queue.length) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let [currNode, currProb] = queue.shift(); //curr

            if (adjList.has(currNode)) {
                for (let [nextNode, nextProb] of adjList.get(currNode)) {
                    let newProb = currProb * nextProb;

                    if (newProb > visited[nextNode]) { //maxProb
                        visited[nextNode] = newProb;

                        queue.push([nextNode, visited[nextNode]]);
                    }
                }
            }
        }
    }

    return visited[end_node];
}
maxProbability(n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2); //0.25000
//here are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25

//adjList = {
//      0: [ [1, 0.5], [2, 0,2] ]
//      1: [ [0, 0.5], [2, 0,5] ]
//      2: [ [1, 0.5], [0, 0.2] ]
//}
//visited = [1, 0, 0]

//queue = [ [0, 1] ]
//curr = [0, 1]
//nextNode = 1 || nextProb: 0.5
//newProb = 1 * 0.5 = 0.5
//0.5 > 0 -> updating visited = [1, 0.5, 0]

//nextNode = 2 || nextProb: 0.2
//newProb = 1 * 0.2 = 0.2
//0.2 > 0 -> updating visited = [1, 0.5, 0.2]
//queue = [ [1, 0.5], [2, 0.2] ]

//queue = [ [1, 0.5], [2, 0.2] ]
//curr = [0, 1], [1, 0.5]
//nextNode = 0 || nextProb: 0.5
//newProb = 0.5 * 0.5 = 0.25
//0.25 < 1

//nextNode = 2 || nextProb: 0.5
//newProb = 0.5 * 0.5 = 0.25
//0.25 > 0.2 -> updating visited = [1, 0.5, 0.25]
//queue = [ [2, 0.2], [2, 0.5] ]


//queue = [ [2, 0.2], [2, 0.5] ]
//curr = [0, 1], [1, 0.5], [2, 0.2]
//nextNode = 1 || nextProb: 0.5
//newProb = 0.2 * 0.5 = 0.1
//0.1 < 0.5

//nextNode = 0 || nextProb: 0.2
//newProb = 0.2 * 0.2 = 0.04
//0.04 < 1

//queue = [ [2, 0.5] ]
//curr = [0, 1], [1, 0.5], [2, 0.2], [2, 0.5]
//nextNode = 1 || nextProb: 0.5
//newProb = 0.5 * 0.5 = 0.25
//0.25 < 0.5

//nextNode = 0 || nextProb: 0.2
//newProb = 0.5 * 0.2 = 0.1
//0.1 < 1

//visited[2] = 0.25

maxProbability(n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2); //0.30000

maxProbability( n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2); //0.00000 - there is no path between 0 and 2

