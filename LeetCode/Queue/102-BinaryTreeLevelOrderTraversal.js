//102. Binary Tree Level Order Traversal
//given the root of a binary tree
//return the level order traversal of its nodes' value
//ex: from left to right, level by level

//Approach:
//using BFS with Queue - to restrict processing order of an array to FIFO basis
var binaryTreeLevelOrderTraversal = (root) => {
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
//Queue = [ 3 ] - initializing with the root node
//level = [ ] 
//curr = 
//res = [ ]

//Queue = [ 9 20 ] - adding node's left and right child (if it has)
//level = [3] 
//curr = 3
//the first level is done -> add into res

//Queue = [ 20 ] - adding node's left and right child (if it has)
//level = [3], [ 9 ] 
//curr = 9

//Queue = [ 15 7 ] - adding node's left and right child (if it has)
//level = [3], [9,20] 
//curr = 9 20
//the second level is done -> add into res

//Queue = [ 7 ] - adding node's left and right child (if it has)
//level = [3], [9,20], [15] 
//curr = 15 

//Queue = [ ] - adding node's left and right child (if it has)
//curr = 15 7
//level = [3], [9,20], [15,7] 
//res = [ [3], [9, 20], [15, 7] ]
//the third level is done -> add into res
//when the queue is empty at all -> return res

binaryTreeLevelOrderTraversal([1]); //[[1]]

binaryTreeLevelOrderTraversal([]); //[]
