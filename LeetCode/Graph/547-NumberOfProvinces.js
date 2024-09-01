//547. Number of Provinces
//there are 'n' cities
//some of them are connected while some are noe
//if city 'a' is connected directly with city 'b' - and city b is connected directly with city 'c'
//then city a is connected indirectly with city c

//a province is a group of directly or indirectly connected cities and no other cities outside of the group

//you are given an n x n matrix isConnected - where isConnected[i][j] = 1
//if the i_th city and the j_th city are directly connected
//and isConnected[i][j] = 0 otherwise

//Approach:
//using DFS with recursion
var numProvinces = (isConnected) => {
    let m = isConnected.length;
    let n = isConnected[0].length;
    let adjList = {};
    let count = 0;
    let visited = new Set();

    //loop through rows and columns
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let curr = isConnected[i][j];

            //there is a connection
            if (curr === 1) {
                if (!adjList[i]) adjList[i] = [j];
                else adjList[i].push(j);
            }
        }
    }

    //loop keys
    for (let key in adjList) {
        //keys within object always string
        let keyNum = parseInt(key);

        count += dfs(keyNum);
    }

    //DFS
    function dfs(node) {
        //base case
        if (visited.has(node)) return 0;

        visited.add(node);

        for (let neighbors of adjList[node]) dfs(neighbors);

        return 1;
    } 

    return count;
}
numProvinces([[1,1,0], [1,1,0], [0,0,1]]); //2
//  1 1 0
//  1 1 0
//  0 0 1

//curr = [0][0] = 1     || [0][1] = 1     || [1][0] = 1             || [1][1] = 1                || [2][2] = 1
//adjList = { 0: [0] }  || { 0: [0, 1] }  || { 0: [0, 1], 1: [0] }  || { 0: [0, 1], 1: [0, 1] }  || { 0: [0, 1], 1: [0, 1], 2: [2] }

//adjList = {
//    0: [0, 1], 
//    1: [0, 1], 
//    2: [2], 
//}
//count = 0
//visited = { }
//keyNum = 0, 1, 2

//starting dfs(0)
//visitied = { 0, }
//neighbor: 0 -> already visited
//          1 -> dfs(1)

//dfs(1)
//visitied = { 0, 1, }
//neighbor: 0 -> already visited
//          1 -> already visited

//dfs(0) = 1 -> count = 0 -> 1
//dfs(1) = 0 -> count = 0 -> 1 -> 1

//dfs(2)
//visitied = { 0, 1, 2 }
//neighbor: 2 -> already visited
//dfs(2) = 1 -> count = 0 -> 1 -> 1 -> 2

numProvinces([1,0,0], [0,1,0], [0,0,1]); //3
//  1 0 0
//  0 1 0
//  0 0 1

//curr = [0][0] = 1     || [1][1] = 1                || [2][2] = 1
//adjList = { 0: [0] }  || { 0: [0], 1: [1] }  || { 0: [0], 1: [1], 2: [2] }

//adjList = {
//    0: [0], 
//    1: [1], 
//    2: [2], 
//}
//count = 0
//visited = { }
//keyNum = 0, 1, 2

//starting dfs(0)
//visitied = { 0, }
//neighbor: 0 -> already visited
//dfs(0) = 1 -> count = 0 -> 1

//dfs(1)
//visitied = { 0, 1 }
//neighbor: 1 -> already visited
//dfs(1) = 1 -> count = 0 -> 1 -> 2

//dfs(2)
//visitied = { 0, 1, 2 }
//neighbor: 2 -> already visited
//dfs(2) = 1 -> count = 0 -> 1 -> 2 -> 3
