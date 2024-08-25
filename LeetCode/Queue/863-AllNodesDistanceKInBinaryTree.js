//863. All nodes distance K in binary tree
//given the 'root' of a binary tree, the value of target node 'target' and an integer 'k'
//return an array of the valus of all nodes that have a distance k from the target node

//Approach:
//using BFS with queue and using undirected graph
var allNodesDistanceK = (root, target, k) => {
    let adjList = {};
    let res = [];

    //1. creating undirected graph: having edges but no directions
    function createGraph(node, parent) {
        //base case
        if (!node) return;

        let neighbor = [];

        //left
        if (node.left) {
            neighbor.push(node.left.val);

            createGraph(node.left, node.val);
        }

        //right
        if (node.right) {
            neighbor.push(node.right.val);

            createGraph(node.right, node.val);
        }

        if (parent !== null) neighbor.push(parent);

        adjList[node.val] = neighbor;
    };

    createGraph(root, null); //converting binary tree to undirected graph


    let visited = new Set();
    let queue = [ [target.val, 0] ];

    //2. BFS
    while (queue.length) {
        let [node, distance] = queue.shift();

        if (visited.has(node)) continue;
        if (distance === k) res.push(node);
        if (distance > k) return res;

        //checking neighbors
        for (let adj of adjList[node]) {
            queue.push([adj, distance + 1]);
        }

        visited.add(node);
    }

    return res;
}
allNodesDistanceK(root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2); //[7,4,1]
//           3
//     5           1
//  6     2      0    8
//      7   4

//creating undirected graph
//-> createGraph([3,5,1,6,2,0,8,null,null,7,4], null)
//3's left = [5,6,2,null,null,7,4]      || 3's right = [1,0,8]
//neighbor = [5, 1] - adjList: {3: [5, 1]}
//createGraph([5,6,2,null,null,7,4], 3) || createGraph([1,0,8], 3)

//createGraph([5,6,2,null,null,7,4], 3)                   ||                    createGraph([1,0,8], 3)
//5's left = [6]        || 5's right = [2, 7, 4]                     1's left = [0]        || 1's right = [8]
//neighbors = [6, 2, 3]- adjList: {5: [6, 2, 3]}                          neighbors = [0, 8, 3] - adjList: {1: [0, 8, 3]}
//createGraph([6], 5)       || createGraph([2,7,4], 5)            createGraph([0], 1)       || createGraph([8], 1)  
//adjList: { 6: [5] }    2's left: [7]   ||    2's right: [4]         neighbors = [1]         neighbors = [1]
//               neighbors = [7, 4, 5]                               adjList: {0: [1]}       adjList: {8: [1]}
//                    adjList: { 7: [2] }  || adjList: { 4: [2] } 

//adjList:
//{  0: [1]         5: [6, 2, 3]
//   1: [0, 8, 3]   6: [5]
//   2: [7, 4, 5]  7:[2]
//   3: [5, 1]     8:[1]
//   4: [2]                     }

//visited = { }
//queue = [ [5, 0] ]
//curr = [5, 0]
//queue = [ [6, 1], [2, 1], [3, 1] ]
//visited = { 5, }

//queue = [ [6, 1], [2, 1], [3, 1] ]
//curr = [5, 0], [6, 1]
//queue = [ [2, 1], [3, 1] || [5, 2] ]
//visited = { 5, 6, }

//queue = [ [2, 1], [3, 1] || [5, 2] ]
//curr = [5, 0], [6, 1], [2, 1]
//queue = [ [3, 1] || [5, 2] || [7, 2], [4, 2], [5, 2] ]
//visited = { 5, 6, 2 }

//queue = [ [3, 1] || [5, 2] || [7, 2], [4, 2], [5, 2] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1]
//queue = [ [5, 2] || [7, 2], [4, 2], [5, 2] || [5, 2], [1, 2] ]
//visited = { 5, 6, 2, 3 }

//queue = [ [5, 2] || [7, 2], [4, 2], [5, 2] || [5, 2], [1, 2] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1], [5, 2]
//visited has '5' - continue

//queue = [ [7, 2], [4, 2], [5, 2] || [5, 2], [1, 2] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1], [5, 2], [7, 2]
//distance = k = 2
//res = [ 7, ]
//queue = [ [4, 2], [5, 2] || [5, 2], [1, 2] || [2, 3] ]
//visited = { 5, 6, 2, 3, 7 }

//queue = [ [4, 2], [5, 2] || [5, 2], [1, 2] || [2, 3] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1], [5, 2], [7, 2], [4, 2]
//distance = k = 2
//res = [ 7, 4  ]
//queue = [ [5, 2] || [5, 2], [1, 2] || [2, 3] || [2, 3] ]
//visited = { 5, 6, 2, 3, 7, 4 }

//queue = [ [5, 2] || [5, 2], [1, 2] || [2, 3] || [2, 3] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1], [5, 2], [7, 2], [4, 2], [5, 2]
//visited has '5' - continue

//queue = [ [5, 2], [1, 2] || [2, 3] || [2, 3] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1], [5, 2], [7, 2], [4, 2], [5, 2], [5, 2]
//visited has '5' - continue

//queue = [ [1, 2] || [2, 3] || [2, 3] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1], [5, 2], [7, 2], [4, 2], [5, 2], [5, 2], [1, 2]
//distance = k = 2
//res = [ 7, 4, 1 ]
//queue = [ [2, 3] || [2, 3] || [0, 3], [8, 3], [3, 3] ]
//visited = { 5, 6, 2, 3, 7, 4, 1 }

//queue = [ [2, 3] || [2, 3] || [0, 3], [8, 3], [3, 3] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1], [5, 2], [7, 2], [4, 2], [5, 2], [5, 2], [1, 2], [2, 3] 
//visited has '2' - continue

//queue = [ [2, 3] || [0, 3], [8, 3], [3, 3] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1], [5, 2], [7, 2], [4, 2], [5, 2], [5, 2], [1, 2], [2, 3], [2, 3] 
//visited has '2' - continue

//queue = [ [0, 3], [8, 3], [3, 3] ]
//curr = [5, 0], [6, 1], [2, 1], [3, 1], [5, 2], [7, 2], [4, 2], [5, 2], [5, 2], [1, 2], [2, 3], [2, 3], [0, 3]
//distance > k -> return res
//[7, 4, 1]

allNodesDistanceK(root = [1], target = 1, k = 3); //[]
