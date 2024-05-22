//107. Binary Tree Level Order TraversalII
//given the root of a binary tree
//return the bottom-up level order traversal of its nodes' values
//for example: from left to right, level by level from left to roof

//Approach:
//using queue with BFS
//all the same with 102. Binary Tree level order traversal1 solution
var binaryTreeLevelOrderTraversal2 = (root) => {
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

//.reverse() -> [ [15, 7], [9, 20], [3] ]

binaryTreeLevelOrderTraversal([1]); //[[1]]

binaryTreeLevelOrderTraversal([]); //[]
