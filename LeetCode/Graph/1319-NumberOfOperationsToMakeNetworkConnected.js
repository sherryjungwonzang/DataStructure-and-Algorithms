//1319. Number Of Operations To Make Network Connected
//there are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network 
//where connections[i] = [a_i, b_i] represents a connection between computers a_i and b_i
//any computer can reach any other computer directly or indirectly through the network

//given an initial computer network connections
//you can extract certain cables between two directly connected computers,
//and place them between any pair of disconnected computers to make them directly connected
//return the min number of times you need to do this in order to make all the computers connected - if not, return -1

//Approach:
//using graph with DFS
var makeConnected = (n, connections) => {
    //base case
    if (connections.length < n - 1) return -1;

    let networkCount = 0;
    let neighbors = {};
    let visited = Array(n).fill(false);

    //adjacent list
    for (let i = 0; i < n; i++) neighbors[i] = [];
    for (let connection of connections) {
        neighbors[connection[0]].push(connection[1]);
        neighbors[connection[1]].push(connection[0]);
    }

    //traversing
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            networkCount++;
        }
    };

    //DFS
    function dfs(node) {
        //to avoid duplicates
        visited[node] = true;

        for (let neighbor of neighbors[node]) {
            if (!visited[neighbor]) dfs(neighbor);
        }
    };

    return networkCount - 1; //sincew one connection connects 2 networks
}
makeConnected(4, [[0,1], [0,2], [1,2]]); //1 - remove cable between computer 1 and 2 and place betweem computers 1 and 3
//neighbors - {
//              0: [1, 2]
//              1: [0, 2]
//              2: [0, 1]
//              3: []
//}

//visited = [F, F, F, F]

//dfs(0) -> dfs(1) and dfs(2) for neighbors
//visited = [T, F, F, F]

//dfs(1) -> dfs(0) and dfs(2) for neighbors
//dfs(0) already visited
//visited = [T, T, F, F]

//dfs(2) -> dfs(0) and dfs(1) for neighbors
//dfs(0) and dfs(1) already visited
//visited = [T, T, T, F]
//networkCount = 0 - > 1

//dfs(3) -> no neighbors
//visited = [T, T, T, T]
//networkCount = 0 - > 1 -> 2

//networkCount - 1 = 1

makeConnected(6, [[0,1],[0,2],[0,3],[1,2],[1,3]]); //2

makeConnected(6, [[0,1],[0,2],[0,3],[1,2]]); //-1 - There are not enough cables
