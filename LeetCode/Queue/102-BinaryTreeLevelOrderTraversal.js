 //102. Binary Tree Level Order Traversal
//given the root of a binary tree
//return the level order traversal of its nodes' value
//ex: from left to right, level by level

//Approach:
//using BFS with queue 
var binaryTreeLevelOrderTraversal = (root) => {
    //base case
    if (root === null) return [];

    let res = [];
    let queue = [root];

    //BFS
    while(queue.length) {
        let level = [];
        let levelSize = queue.length;

        while(levelSize) {
            let curr = queue.shift();

            //checking child
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);

            level.push(curr.val);

            levelSize--;
        }

        res.push(level);
    }

    return res;
}
//TC: O(n) - visit each individual node
//SC: O(n) - allocate space for queue
binaryTreeLevelOrderTraversal([3, 9, 20, null, null, 15, 7]); //[[3], [9,20], [15,7]]
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

binaryTreeLevelOrderTraversal([1]); //[[1]]

binaryTreeLevelOrderTraversal([]); //[]
