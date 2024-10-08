//104. Maximum Depth of Binary Tree
//given the root of a binary tree
//return its maximum depth - the num of nodes along the longest path from the root node down to the farthest leaf node

//Approach:
//BFS with queue
var maxDepth_BFS = (root) => {
    //base case
    if (!root) return 0;

    let depth = 0;
    let queue = [root];

    //BFS
    while (queue.length) {
        let len =  queue.length;

        for (let i = 0; i < len; i++) {
            let curr = queue.shift();

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        } 

        depth++;
    }
    
    return depth;
}
maxDepth_BFS([3,9,20,null,null,15,7]); //3
//    3
//  9   20
//    15   7
//queue = [ [3, 9, 20, null, null, 15, 7] ] 
//current = [ 3, 9, 20, null, null, 15, 7 ] 
//depth = 0 -> 1

//queue = [ [9], [20, 15, 7] ] 
//current = [ 3, 9, 20, null, null, 15, 7 ], [9]
//depth = 0 -> 1 -> 2

//queue = [ [20, 15, 7] ] 
//current = [ 3, 9, 20, null, null, 15, 7 ], [9], [20, 15, 7]
//depth = 0 -> 1 -> 2 -> 2

//queue = [ [15], [7] ]
//current = [ 3, 9, 20, null, null, 15, 7 ], [9], [20, 15, 7], [15]
//depth = 0 -> 1 -> 2 -> 2 -> 3

//queue = [ [7] ]
//current = [ 3, 9, 20, null, null, 15, 7 ], [9], [20, 15, 7], [15], [7]
//depth = 0 -> 1 -> 2 -> 2 -> 3 -> 3

//queue = [ ]

maxDepth_BFS([1,null,2]); //2
//   1
//      2
//queue = [ 1 ]  | [ 2 ]  | [ ] 
//current = [  ] | [ 1 ]  | [ 1 2 ]   
//depth = 0      |  1     |   2 
