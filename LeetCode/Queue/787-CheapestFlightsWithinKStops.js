//787. Cheapest Flights Within K Stops
//there are n cities connected by some number of flights
//you are given an array flights where flights[i] = []from_i, to_i, price_i] 
//indicates that there is a flight from city from_i to city to_i with cost price_i

//given three integers src, dst and k
//return the cheapest price from src to dst with at most k stops
//if there is no such route, return -1

//Approach:
//using BFS with queue and Graph
var cheapestFlighst = (n, flights, src, dst, k) => {
    let adjList = new Map();
    let visited = new Array(n).fill(Infinity);

    //base setting
    visited[src] = 0;

    //creating graph with adjlist
    for (let [from, to, price] of flights) {
        if (!adjList.has(from)) adjList.set(from, []);

        adjList.get(from).push([to, price]);
    }

    let queue = [ [src, 0] ];

    k++;

    //BFS
    while (k-- > 0 && queue.length) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let [currNode, currPrice] = queue.shift(); //curr

            if (adjList.has(currNode)) {
                for (let [nextNode, nextPrice] of adjList.get(currNode)) {
                    let newPrice = currPrice + nextPrice;

                    //updating 
                    if (newPrice < visited[nextNode]) {
                        visited[nextNode] = newPrice;

                        queue.push([nextNode, newPrice]);
                    }
                }
            }
        }
    }

    return visited[dst] === Infinity ? -1 : visited[dst];
}
//TC: O(v + e) - v is the num of vertices and e is the num of edges in the graph
//SC: O(v + e) - v is the num of vertices and e is the num of edges in the graph
cheapestFlighst(n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1); //700
//adjList = { 
//    0: [1, 100],
//    1: [ [2, 100], [3, 600] ]
//    2: [ [0, 100], [3, 200] ]
//}

//visited = [ 0, Infi, Infi, Infi]
//k = 1 -> 2
//queue = [ [0, 0] ]
//curr = [0, 0]
//nextNode = 1 || nextPrice = 100
//-> newPrice =  0 + 100 = 100
//updating visited = [ 0, 100, Infi, Infi ]
//queue = [ [1, 100] ]

//k = 1 -> 2 -> 1
//queue = [ [1, 100] ]
//curr = [0, 0], [1, 100]
//nextNode = 2 || nextPrice = 100
//-> newPrice =  100 + 100 = 200
//updating visited = [ 0, 100, 200, Infi ]

//nextNode = 3 || nextPrice = 600
//-> newPrice =  100 + 600 = 700
//updating visited = [ 0, 100, 200, 700 ]
//queue = [ [2, 200], [3, 700] ]

//k-- is not over 0
//visited[3] = 700

cheapestFlighst(n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0); //500
//adjList = { 
//    0: [ [1, 100], [2, 500] ]
//    1: [ [2, 100] ]
//}

//visited = [ 0, Infi, Infi ]
//k = 0 -> 1
//queue = [ [0, 0] ]
//curr = [0, 0]
//nextNode = 1 || nextPrice = 100
//-> newPrice =  0 + 100 = 100
//updating visited = [ 0, 100, Infi ]

//nextNode = 5 || nextPrice = 500
//-> newPrice =  0 + 500 = 500
//updating visited = [ 0, 100, 500 ]
//queue = [ [1, 100], [2, 500] ]

//k-- is not over 0
//visited[2] = 500

cheapestFlighst(n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1); //200
