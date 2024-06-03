//1161. Maximum Level Sum Of Binary Tree
//given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on
//return the smallest level x such that the sum of all the values of nodes at level x is maximal

//Approach:
//using BFS with queue
var maxLevelSumBinaryTree = (root) => {
    let level = 0;
    let maxLevel = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let queue = [root];

    //BFS
    while (queue.length) {
        let levelSize = queue.length;
        let currSum = 0;
        level++;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            currSum += curr.val;

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        if (currSum > maxSum) {
            maxSum = currSum;
            maxLevel = level;
        }
    };

    return maxLevel;
}
//TC: O(h + w) - h is the height of tree and w is width of tree
//SC: O(w)
maxLevelSumBinaryTree([1,7,0,7,-8,null,null]); //2
//Level 1 sum = 1.
//Level 2 sum = 7 + 0 = 7.
//Level 3 sum = 7 + -8 = -1.
//So we return the level with the maximum sum which is level 2

//      1 <-
//    7   0 
//  7  -8
//level = 0 -> 1
//maxLevel = 0 -> 1
//maxSum = min safe integer -> 1
//queue = [ 1 ]

//queue = [ 7, 0]
//curr = [ 1 ]
//currSum = 0 -> 1

//      1 
//    7   0  <-
//  7  -8
//level = 0 -> 1 -> 2
//maxLevel = 0 -> 1 -> 2
//maxSum = min safe integer -> 1 -> 7
//queue = [ 7, 0 ]

//queue = [ 0 7 -8]
//curr = [ 1 7 ]
//currSum = 0 -> 1 || -> 7


//level = 0 -> 1 -> 2
//maxLevel = 0 -> 1 -> 2
//maxSum = min safe integer -> 1 -> 7 -> 7
//queue = [ 7, 0 ]

//queue = [ 7 -8 ]
//curr = [ 1 7 0 ]
//currSum = 0 -> 1 || -> 7 -> 7

//      1 
//    7   0  
//  7  -8   <-
//level = 0 -> 1 -> 2 -> 3
//maxLevel = 0 -> 1 -> 2 -> 2
//maxSum = min safe integer -> 1 -> 7 -> 7 -> 7
//queue = [ 7, 0 ]

//queue = [ 7 -8 ]
//curr = [ 1 7 0 7 ]
//currSum = 0 -> 1 || -> 7 -> 7 || -> 7


//level = 0 -> 1 -> 2 -> 3
//maxLevel = 0 -> 1 -> 2 -> 2 -> 2
//maxSum = min safe integer -> 1 -> 7 -> 7 -> 7 -> 7
//queue = [ 7, 0 ]

//queue = [ -8 ]
//curr = [ 1 7 0 7 -8 ]
//currSum = 0 -> 1 || -> 7 -> 7 || -> 7 -> -1

//maxLevel = 2

maxLevelSumBinaryTree([989,null,10250,98693,-89388,null,null,null,-32127]); //2
