//1609. Even Odd Tree
//a binary tree is named even-odd if it meets the following conditions:
//the root of the binary tree is at level index 0 - its children are at level index 1 - their children are at level index 2
//for every even-indexed level - all nodes at the level have odd integer values in strictly increasing order - from left to right
//for every odd-indexed level - all nodex at the level have even integer values in strictly decreasing order - from left to right

//given the root of a binary tree
//return trus if the binary tree is even-odd, otherwise return false

//Approach:
//using BFS with queue
var evenOddTree = (root) => {
    //base case
    if (!root) return true;

    let queue = [root];
    let level = 0;

    //BFS
    while (queue.length) {
        let levelSize = queue.length;
        let prevVal = (level % 2 === 0) ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            //even level - curr val should greater than previous value
            //odd level - curr val should less than previous value
            if (
                (level % 2 === 0 && (curr.val % 2 === 0 || curr.val <= prevVal)) || //even level
                (level % 2 === 1 && (curr.val % 2 === 1 || curr.val >= prevVal)) //odd level
            ) return false;

            prevVal = curr.val; //updating previous value

            //adding children
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        level++;
    }
    return true;
}
evenOddTree([1,10,4,3,null,7,9,12,8,6,null,null,2]); //true
//          1           -level 0
//      10      4       -level 1
//    3       7   9     -level 2
// 12  8    6       2   -level 3

//the node values on each level are:
//Level 0: [1]
//Level 1: [10,4]
//Level 2: [3,7,9]
//Level 3: [12,8,6,2]
//Since levels 0 and 2 are all odd and increasing and levels 1 and 3 are all even and decreasing, the tree is Even-Odd

evenOddTree([5,4,2,3,3,7]); //false
//           5      -level 0
//       4       2  -level 1
//     3   3   7    -level 2

//The node values on each level are:
//Level 0: [5]
//Level 1: [4,2]
//Level 2: [3,3,7]
//Node values in level 2 must be in strictly increasing order, so the tree is not Even-Odd

evenOddTree([5,9,1,3,5,7]); //false
//           5      -level 0
//       9       1  -level 1
//     3   5   7    -level 2
//Node values in the level 1 should be even integers
