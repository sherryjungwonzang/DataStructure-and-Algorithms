//107. Binary Tree Level Order TraversalII
//given the root of a binary tree
//return the bottom-up level order traversal of its nodes' values
//for example: from left to right, level by level from left to roof

//Approach:
//using queue with BFS
var binaryTreeLevelOrderTraversal2 = (root) => {
    //base case
    if (!root) return [];

    let res = [];
    let queue = [root];

    //BFS
    while(queue.length) {
        let level = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);

            level.push(curr.val);
        }

        res.push(level);
    }

    return res.reverse();
}
//TC: O(n) - visit each individual node
//SC: O(n) - allocate space for queue
binaryTreeLevelOrderTraversal([3, 9, 20, null, null, 15, 7]); //[[15,7],[9,20],[3]]
//    3
//  9   20 
//    15   7

//level = [ ] , levelSize = 1
//res = [ ]

//queue = [ [3, 9, 20, null, null, 15, 7] ]
//curr =  [3, 9, 20, null, null, 15, 7]
//queue = [ [9], [20, 15, 7] ]
//level = [ 3,  ] , levelSize = 1 -> 0
//res = [ [3], ]

//queue = [ [9], [20, 15, 7] ]
//curr =  [3, 9, 20, null, null, 15, 7], [9]
//9 has no left and right child
//level = [ 3, 9 ] , levelSize = 2 -> 1

//queue = [ [20, 15, 7] ]
//curr =  [3, 9, 20, null, null, 15, 7], [9], [20, 15, 7]
//queue = [ [15], [7] ]
//level = [ 3, 9, 20 ] , levelSize = 2 -> 1 -> 0
//res = [ [3], [9, 20], ]

//queue = [ [15], [7] ]
//curr =  [3, 9, 20, null, null, 15, 7], [9], [20, 15, 7], [15]
//15 has no left and right child
//level = [ 3, 9, 15, ] , levelSize = 2 -> 1

//queue = [ [7] ]
//curr =  [3, 9, 20, null, null, 15, 7], [9], [20, 15, 7], [15], [7]
//7 has no left and right child
//level = [ 3, 9, 15, 7 ] , levelSize = 2 -> 1 -> 0
//res = [ [3], [9, 20], [15, 7] ]
//res.reverse => [ [15,7], [9,20], [3] ]

binaryTreeLevelOrderTraversal([1]); //[[1]]

binaryTreeLevelOrderTraversal([]); //[]
