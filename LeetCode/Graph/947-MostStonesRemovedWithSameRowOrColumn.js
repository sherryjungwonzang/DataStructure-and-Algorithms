//947. Most Stones Removed With Same Row Or Column
//on a 2D plane, we place n stones at some integer coordinate points
//each coordinate point may have at most one stone
//a stone can be removed if it shares either the same row or the same column as another stone that has not been removed

//given an array stones of length n where stones[i] = [xi, yi] represents the location of the ith stone
//return the largest possible number of stones that can be removed

//Approach:
//using DFS
var removedStones = (stones) => {
    let m = stones.length;
    let adj = Array.from({ length: m }, () => []);
    let visited = new Set();
    let count = 0;
    
    //building the graph
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m; j++) {
            //checking row and col same 
            if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
                //making adjacent connection
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }

    //DFS
    function dfs(node) {
        visited.add(node);

        for (let neigh of adj[node]) {
            if (!visited.has(neigh)) dfs(neigh);
        }
    }

    //find the num of connected components
    for (let i = 0; i < m; i++) {
        if (!visited.has(i)) {
            dfs(i);

            count++;
        }
    }

    return m - count;
}
//TC: O(n^2)
//SC: O(n)
removedStones(stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]); //5
//adj = [ [], [], [], [], [], [] ]

//building the graph
//[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]           [0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]             [0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]
//   i       j                                                 i               j                                           i                       j       j       j
//i = 0, j = 1 -> checking [0][0] = [1][0]: 0 = 0 T         i = 0, j = 2 -> checking [0][0] = [2][0]: 0 != 1 F          i = 0, j = 3 -> checking [0][0] = [3][0]: 0 != 1 F
//                         [0][1] = [1][1]: 0 != 1 F                                 [0][1] = [2][1]: 0 = 0 T                                    [0][1] = [3][1]: 0 != 2 F
//T -> add connection on adj                                T -> add connection on adj                                  i = 0, j = 4 -> checking [0][0] = [4][0]: 0 != 2 F
//adj[0] -> add 1 || adj[1] -> add 0                        adj[0] -> add 2 || adj[2] -> add 0                                                   [0][1] = [4][1]: 0 != 1 F
//adj = [ [1, ], [0, ], [], [], [], [] ]                    adj = [ [1, 2], [0, ], [0, ], [], [], [] ]                  i = 0, j = 5 -> checking [0][0] = [5][0]: 0 != 2 F
//                                                                                                                                               [0][1] = [5][1]: 0 != 2 F

//[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]           [0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]             [0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]
//          i       j        j                                        i                        j                                  i                                j   
//i = 1, j = 2 -> checking [1][0] = [2][0]: 0 != 1 F        i = 1, j = 4 -> checking [1][0] = [4][0]: 0 != 2 F          i = 1, j = 3 -> checking [1][0] = [5][0]: 0 != 2 F
//                         [1][1] = [2][1]: 1 != 0 F                                  [1][1] = [4][1]: 1 = 1 T                                   [1][1] = [5][1]: 1 != 2 F
//i = 1, j = 3 -> checking [1][0] = [3][0]: 0 != 1 F        T -> add connection on adj                                  F -> no connection
//                         [1][1] = [3][1]: 1 != 2 F        adj[1] -> add 4 || adj[4] -> add 1 
//F -> no connection                                        adj = [ [1, 2], [0, 4], [0, ], [], [1], [] ] 

//[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]           [0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]            
//                   i       j                                                 i               j       j          
//i = 2, j = 3 -> checking [2][0] = [3][0]: 1 = 1 T         i = 2, j = 4 -> checking [2][0] = [4][0]: 1 != 2 F 
//                         [2][1] = [3][1]: 0 != 2 F                                 [2][1] = [4][1]: 0 != 1 F
//T -> add connection on adj                                i = 2, j = 5 -> checking [2][0] = [5][0]: 1 != 2 F
//adj[2] -> add 3 || adj[3] -> add 2                                                 [2][1] = [5][1]: 0 != 2 F 
//adj = [ [1, 2], [0, 4], [0, 3], [2], [1], [] ]            F -> no connection

//[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]           [0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]            
//                          i        j                                                 i               j       
//i = 3, j = 4 -> checking [3][0] = [4][0]: 1 != 2 F        i = 3, j = 5 -> checking [3][0] = [5][0]: 1 != 2 F 
//                         [3][1] = [4][1]: 2 != 1 F                                 [3][1] = [5][1]: 2 = 2 T
//F -> no connection                                        T -> add connection on adj  
//                                                          adj[3] -> add 5 || adj[5] -> add 3
//                                                          adj = [ [1, 2], [0, 4], [0, 3], [2, 5], [1], [3] ] 

//[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]        
//                                   i        j     
//i = 4, j = 5 -> checking [4][0] = [5][0]: 2 = 2 T 
//                         [4][1] = [5][1]: 1 != 2 F 
//T -> add connection on adj         
//adj[4] -> add 5 || adj[5] -> add 4        
//adj = [ [1, 2], [0, 4], [0, 3], [2, 5], [1, 5], [3, 4] ]

//starting DFS
//adj = [ [1, 2], [0, 4], [0, 3], [2, 5], [1, 5], [3, 4] ]
//i = 0 -> dfs(0)
//visited = { 0, }
//-> neigh: 1: dfs(1)
//          2: dfs(2)

//dfs(1)
//visited = { 0, 1, }
//-> neigh: 0: already visited
//          4: dfs(4)

//dfs(4)
//visited = { 0, 1, 4, }
//-> neigh: 1: already visited
//          5: dfs(5)

//dfs(5)
//visited = { 0, 1, 4, 5, }
//-> neigh: 3: dfs(3)
//          4: already visited

//dfs(3)
//visited = { 0, 1, 4, 5, 3, }
//-> neigh: 2: dfs(2)
//          5: already visited

//dfs(2)
//visited = { 0, 1, 4, 5, 3, 2 }
//-> neigh: 0: already visited
//          3: already visited
//count = 0 -> 1

//6 - 1 = 5

removedStones(stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]); //3
//adj = [ [ 1, 3 ], [ 0, 4 ], [], [ 0, 4 ], [ 1, 3 ] ]

//starting DFS
//i = 0 -> dfs(0)
//visited = { 0, }
//-> neigh: 1: dfs(1)
//          3: dfs(2)

//dfs(1)
//visited = { 0, 1, }
//-> neigh: 0: already visited
//          4: dfs(4)

//dfs(4)
//visited = { 0, 1, 4,  }
//-> neigh: 1: already visited
//          3: dfs(3)

//dfs(3)
//visited = { 0, 1, 4, 3, }
//-> neigh: 0: already visited
//          4: already visited
//count = 0 -> 1

//i = 1 -> already visited
//i = 2 -> dfs(2)
//visited = { 0, 1, 4, 3, 2 }
//-> neigh: null
//count = 0 -> 1 -> 2

//5 - 2 = 3

removedStones(stones = [[0,0]]); //0
