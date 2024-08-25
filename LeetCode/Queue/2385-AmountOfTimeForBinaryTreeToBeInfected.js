//2385. Amount Of Time For Binary Tree To Be Infected
//given the 'root' of a binary tree with unique values and an integer 'start'
//at minute 0, an infection starts from the node with value start

//each minute, a node becomes infected it:
//the node is currently uninfected
//the node is adjacent to an infected node

//return the number of minutes needed for the entire tree to be infected

//Approach:
//using DFS for creating a graph and BFS for calculating the distance
var timeForInfected = (root, start) => {
    //1. creating a graph to collect adjacent nodes - "num: [child]" format
    let adj = {};

    function dfs(root, parent) {
        //base case
        if (!root) return null;

        //DFS - need to check adjacent values of both parent and root
        //parent is highest value in each respective tree
        //root is the value of the root itself in a row
        if (parent) {
            //if there is no parent in adj - empty set
            if (!(parent in adj)) adj[parent] = [];
            adj[parent].push(root.val);

            if (!(root.val in adj)) adj[root.val] = [];
            adj[root.val].push(parent);
        }

        //root value and dfs in each child
        if (root.left) dfs(root.left, root.val);
        if (root.right) dfs(root.right, root.val);
    };

    dfs(root, null);


    //2. Measuring the distance with BFS level order traversal
    let distance = 0;
    let visited = new Set();
    visited.add(start);
    let queue = [start];

    //BFS
    while (queue.length) {
        let levelSize = queue.length;

        distance++;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            let children = adj[curr];

            //no children node
            if (!children) continue;

            //if there is children
            for (let child of children) {
                if (visited.has(child)) continue;
                visited.add(child);
                queue.push(child); //adding to the queue
            }
        }
    }



    //3. Subtract one as BFS is inclusive in calculating distance
    return distance - 1;
}
timeForInfected(root = [1,5,3,null,4,10,6,9,2], start = 3); //4
//The following nodes are infected during:
//- Minute 0: Node 3
//- Minute 1: Nodes 1, 10 and 6
//- Minute 2: Node 5
//- Minute 3: Node 4
//- Minute 4: Nodes 9 and 2
//It takes 4 minutes for the whole tree to be infected so we return 4

//adj = {}
//starting from dfs([1,5,3,null,4,10,6,9,2], null)
//Left: dfs([5,null,4,9,2], 1)                      ||  Right: dfs([3,10,6], 1)

//-> dfs([5,null,4,9,2], 1)                             -> dfs([3,10,6], 1)
//1 is not in adj -> adj = {1: [5, ], 5: [1, ] }         3 is not in adj -> adj = {1: [5, 3], 5: [1, ], 3: [1] }  
//Right: dfs([4,9,2], 5)                                Left: dfs([10], 3)    || Right: dfs([6], 3)

//-> dfs([4,9,2], 5)                                    -> dfs([10], 3)          -> dfs([6], 3)
//4 is not in adj                                      10 is not in adj          6 is not in adj
//-> adj = {1: [5, 3], 5: [1, 4 ], 3: [1], 4: [5 ] }    adj = {1: [5, 3], 5: [1, 4 ], 3: [1,10,6], 4: [5 ], 10: [3], 6: [3] } 
//Left: dfs([9], 4)  || Right: dfs([2], 4)

//-> dfs([9], 4)        -> dfs([2], 4)
//9 is not in adj        2 is not in adj
//adj = {1: [5, 3], 5: [1, 4 ], 3: [1,10,6], 4: [5, 9, 2], 10: [3], 6: [3], 9:[4], 2: [4]} 

//adj = {
//  1: [5,3],
//  5: [1,4 ],
//  3: [1,10,6],
//  4: [5,9,2],
//  10: [3],
//  6: [3],
//  9:[4],
//  2: [4]
//}

//visited = { 3 }
//distance = 0 -> 1
//queue = [ 3 ]
//curr = 3
//children = [1, 10, 6] -> visited does not have 1, 10, 6
//visited = { 3, 1, 10, 6 }
//queue = [ 1, 10, 6 ]

//distance = 0 -> 1 -> 2
//queue = [ 1, 10, 6 ]
//curr = 3 1
//children = [5, 3] -> visited does not have 5 | have 3
//visited = { 3, 1, 10, 6, 5 }
//queue = [ 10, 6, || 5 ]

//queue = [ 10, 6, || 5 ]
//curr = 3 1 10
//children = [3] -> visited have 3
//visited = { 3, 1, 10, 6, 5 }

//queue = [ 6 || 5 ]
//curr = 3 1 10 6
//children = [3] -> visited have 3
//visited = { 3, 1, 10, 6, 5 }

//distance = 0 -> 1 -> 2 -> 3
//queue = [ 5 ]
//curr = 3 1 10 6 5
//children = [1, 4] -> visited have 1 | not 4
//visited = { 3, 1, 10, 6, 5, 4}
//queue = [ || 4 ]

//distance = 0 -> 1 -> 2 -> 3 -> 4
//queue = [ 4 ]
//curr = 3 1 10 6 5 4
//children = [5, 9, 2] -> visited have 5 | not 9, 2
//visited = { 3, 1, 10, 6, 5, 4, 9, 2}
//queue = [ 9, 2 ]

//distance = 0 -> 1 -> 2 -> 3 -> 4 -> 5
//queue = [ 9, 2 ]
//curr = 3 1 10 6 5 4 9
//children = [4] -> visited have 4
//visited = { 3, 1, 10, 6, 5, 4, 9, 2}

//queue = [ 2 ]
//curr = 3 1 10 6 5 4 9 2
//children = [4] -> visited have 4
//visited = { 3, 1, 10, 6, 5, 4, 9, 2}

//distance - 1 = 5 - 1 = 4

timeForInfected([1], 1); //0 - at minute 0, the only node in the tree is infected so we return 0
