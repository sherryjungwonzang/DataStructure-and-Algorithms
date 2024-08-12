//886. Possible Bipartition
//we want to split a group of 'n' people - labeled from 1 to n into two groups of any size
//each person may dislike some other people, and they should not go into the same group
//given the integer 'n' and the array 'dislikes'
//where dislikes[i] = [a_i, b_i] indicates that the person labeled a_i does not like the person labeled b_i
//return true if it is possible to split everyone into two groups in this way

//Approach:
//using graph adjacency list and DFS
var possibleBipartition = (n, dislikes) => {
    let graph = Array.from({ length: n + 1 }, () => []); //to store person and dislike relationship
    let colors = new Array(n + 1).fill(-1); //to track color on each node
    let isBipartition = true;

    //adjacency list
    for (let [u, v] of dislikes) {
        graph[u].push(v);
        graph[v].push(u);
    };

    for (let i = 1; i <= n; i++) {
        //not colored - start dfs
        if (colors[i] === -1) {
            dfs(i, 0);

            if (!isBipartition) return false;
        }
    };

    //DFS - use 2 colors to represent 2 groups
    function dfs(node, color) {
        //base case
        if (!isBipartition) return;

        colors[node] = color; //color the curr node

        //traverse adjacent nodes
        for (let neighbor of graph[node]) {
            //not colored
            if (colors[neighbor] === -1) {
                dfs(neighbor, 1 - color); //opposite color
            } else if (colors[neighbor] === color) { //dislike relationship
                isBipartition = false;
                return;
            }
        }
    };

    return isBipartition;
}
//TC: O(v + e) - v is the num of nodes and e is the num of edges
//SC: O(v + e) - dfs is O(v) and colors is O(v)
possibleBipartition(4, [[1,2], [1,3], [2,4]]); //true - The first group has [1,4], and the second group has [2,3]
//graph = [ [], [], [], [], [] ]
//colors = [-1, -1, -1, -1, -1]
//isBipartition = true

//adjacency list
//graph = [ [], [2,3], [1,4], [1], [2] ]
//           0    1      2     3    4

//starting froom dfs(1, 0)
//colors[1] = 0
//colors = [-1, 0, -1, -1, -1]
//1's neighbors: 2 and 3
//2: colors[2] = -1 -> dfs(2, 1)
//3: colors[3] = -1 -> dfs(3, 1)

//dfs(2, 1)
//colors[2] = 1
//colors = [-1, 0, 1, -1, -1]
//2's neighbors: 1 and 4
//1: colors[1] = 0 != 1
//4: colors[4] = -1 -> dfs(4, 0)

//dfs(4, 0)
//colors[4] = 0
//colors = [-1, 0, 1, -1, 0]
//4's neighbors: 2
//2: colors[2] = 1 != 0

//dfs(3, 1)
//colors[3] = 1
//colors = [-1, 0, 1, 1, 0]
//3's neighbor: 1
//1: colors[1] = 0 != 1

//True

possibleBipartition(3, [[1,2],[1,3],[2,3]]); //false - We need at least 3 groups to divide them. We cannot put them in two groups
//graph = [ [], [], [], [] ]
//colors = [-1, -1, -1, -1]
//isBipartition = true

//adjacency list
//graph = [ [], [2,3], [1,3], [1,2] ]
//           0    1      2      3  

//starting froom dfs(1, 0)
//colors[1] = 0
//colors = [-1, 0, -1, -1]
//1's neighbors: 2 and 3
//2: colors[2] = -1 -> dfs(2, 1)
//3: colors[3] = -1 -> dfs(3, 1)

//dfs(2, 1)
//colors[2] = 1
//colors = [-1, 0, 1, -1]
//2's neighbors: 1 and 3
//1: colors[1] = 0 != 1
//3: colors[3] = -1 -> dfs(3, 0)

//dfs(3, 0)
//colors[3] = 0
//colors = [-1, 0, 1, 0]
//3's neighbors: 1 and 2
//1: colors[1] = 0 = 0 -> isBipartition = false

//False




