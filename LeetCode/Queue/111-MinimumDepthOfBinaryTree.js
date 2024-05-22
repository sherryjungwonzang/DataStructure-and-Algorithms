//111. Minimum Depth of Binary Tree
//given a binary tree, find its minimum depth
//the minimum depth is the num of nodes along the shortest path from the root node down to the nearest leaf node

//Approach:
//using BFS with queue
var minDepthBinaryTree = (root) => {
    //base case
    if (root === null) return 0;

    let minDepth = 1; //initializing as 1 - since on root it is already 1
    let queue = [root];

    //BFS
    while (queue.length) {
        let len = queue.length;

        while(len) {
            let curr = queue.shift();

            if(curr.left === null && curr.right === null) { //leaf node
                return minDepth;
            } else {
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
            len--;
        }
        minDepth++;
    }
    return minDepth;
}
//TC: O(n) - worst case: to traverse the entire tree
//SC: O(n) - store values of this tree within queue
minDepthofBinaryTree([3,9,20,null,null,15,7]); //2 - 3 & 9
//    3
//  9  20
//    15  7

//queue = [ 3 | 9 20 ]
//current = 3
//minDepth = 1

//queue = [ 20 | 15 7]
//current = 3 9
//minDepth = 2
//return 2

minDepthofBinaryTree([2,null,3,null,4,null,5,null,6]); //5
