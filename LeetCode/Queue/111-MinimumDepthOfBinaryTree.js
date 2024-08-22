//111. Minimum Depth of Binary Tree
//given a binary tree, find its minimum depth
//the minimum depth is the num of nodes along the shortest path from the root node down to the nearest leaf node

//Approach:
//using BFS with queue
var minDepthBinaryTree = (root) => {
    //base case
    if (root === null) return 0;

    let minDepth = 1; //since root it is already 1
    let queue = [root];

    //BFS
    while (queue.length) {
        let len = queue.length;

        while(len) {
            let curr = queue.shift();

            //leaf node
            if(curr.left === null && curr.right === null) return minDepth;
            else {
                //child nodes
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
minDepthBinaryTree([3,9,20,null,null,15,7]); //2 - 3 & 9
//    3
//  9  20
//    15  7

//queue = [ [3, 9, 20, null, null, 15, 7] ], len = 1
//curr = [3, 9, 20, null, null, 15, 7]
//queue = [ [9], [20, 15, 7] ], len = 2
//minDepth = 1 -> 2

//queue = [ [9], [20, 15, 7] ], len = 2
//curr = [3, 9, 20, null, null, 15, 7], [9]
//9's left and right are empty -> leaf node

minDepthBinaryTree([2,null,3,null,4,null,5,null,6]); //5
//  2
//    3
//     4
//       5
//        6

//queue = [ [2,null,3,null,4,null,5,null,6] ], len = 1
//curr = [2,null,3,null,4,null,5,null,6]
//queue = [ [3,null,4,null,5,null,6] ], len = 1
//minDepth = 1 -> 2

//queue = [ [3,null,4,null,5,null,6] ], len = 1
//curr = [2,null,3,null,4,null,5,null,6], [3,null,4,null,5,null,6]
//queue = [ [4,null,5,null,6] ], len = 1
//minDepth = 1 -> 2 -> 3

//queue = [ [4,null,5,null,6] ], len = 1
//curr = [2,null,3,null,4,null,5,null,6], [3,null,4,null,5,null,6], [4,null,5,null,6] 
//queue = [ [5,null,6] ], len = 1
//minDepth = 1 -> 2 -> 3 -> 4

//queue = [ [5,null,6] ], len = 1
//curr = [2,null,3,null,4,null,5,null,6], [3,null,4,null,5,null,6], [4,null,5,null,6], [5,null,6] 
//queue = [ [6] ], len = 1
//minDepth = 1 -> 2 -> 3 -> 4 -> 5

//queue = [ [6] ], len = 1
//curr = [2,null,3,null,4,null,5,null,6], [3,null,4,null,5,null,6], [4,null,5,null,6], [5,null,6], [6]
//6's left and right are empty -> leaf node
