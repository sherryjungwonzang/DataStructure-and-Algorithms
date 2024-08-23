//513. Find bottom left treee value
//given the root of a binary tree
//return the leftmost value in the last row of the tree

//Approach:
//using BFS with queue and level-order traversal
var bottomLeftTreeValue = (root) => {
    let queue = [root];
    let leftMost;

    //BFS
    while (queue.length) {
        let curr = queue.shift();

        leftMost = curr.val;  //update with the value of dequeued node

        //putting in the queue from right to left
        if (curr.right) queue.push(curr.right);
        if (curr.left) queue.push(curr.left);
    }

    return leftMost;
}
//TC: O(n) - n is the num of nodes in binary tree
//SC: O(m) - max num of nodes at any level in the binary tree
bottomLeftTreeValue([1,2,3,4,null,5,6,null,null,7]); //7
//        1
//      2    3
//    4    5   6
//       7

//queue = [ [1,2,3,4,null,5,6,null,null,7] ]
//curr = [1,2,3,4,null,5,6,null,null,7] 
//leftMost = 1
//queue = [ [2, 4, null] ]

//queue = [ [3, 5, 6, 7, null, null,null], [2, 4, null] ]
//curr = [1, 2, 3, 4, 5], [3, 5, 6, 7, null, null,null]
//leftMost = 3
//queue = [ [2, 4, null] || [6], [5, 7, null], ]

//queue = [ [6], [5, 7, null], ]
//curr = [1, 2, 3, 4, 5], [3, 5, 6, 7, null, null,null], [2, 4, null] 
//leftMost = 2
//queue = [ [6], [5, 7, null], [4] ]

//queue = [ [6], [5, 7, null], [4] ]
//curr = [1, 2, 3, 4, 5], [3, 5, 6, 7, null, null,null], [2, 4, null], [6]
//leftMost = 6

//queue = [ [5, 7, null], [4] ]
//curr = [1, 2, 3, 4, 5], [3, 5, 6, 7, null, null,null], [2, 4, null], [6], [5, 7, null]
//leftMost = 5
//queue = [ [4], [7] ]

//queue = [ [4], [7] ]
//curr = [1, 2, 3, 4, 5], [3, 5, 6, 7, null, null,null], [2, 4, null], [6], [5, 7, null], [4]
//leftMost = 4

//queue = [ [7] ]
//curr = [1, 2, 3, 4, 5], [3, 5, 6, 7, null, null,null], [2, 4, null], [6], [5, 7, null], [4], [7]
//leftMost = 7
//queue = [ ]

bottomLeftTreeValue([2,1,3]); //1
//   2
// 1   3

bottomLeftTreeValue([1,2,3,4,5]); //4
//        1
//      2    3
//    4    5   
