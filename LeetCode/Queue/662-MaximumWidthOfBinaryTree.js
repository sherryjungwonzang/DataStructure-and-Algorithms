//662. Maximum Width Of Binary Tree
//givnen the root of a binary tree
//return the max width of the given tree
//the max width of a tree is the max width among all levels
//the width of one level is defined as the length between the end-nodes (the elftmost and rightmost non-null nodes)
//where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation

//Approach:
//using BFS with queue
var maxWidthBinaryTree = (root) => {
    //base case
    if (!root) return 0;

    let maxWidth = 0;
    let queue = [ [root, 0n] ]; //0n: bigint number

    //BFS
    while (queue.length) {
        let first = 0n;
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            [node, pos] = queue.shift(); //curr

            //base case
            if (i === 0) first = pos; //first will always be 1st node

            //child node
            if (node.left) queue.push([node.left, pos * 2n]);
            if (node.right) queue.push([node.right, (pos * 2n) + 1n]);
        }

        let currWidth = pos - first + 1n; //the last number of nodes(width)
        maxWidth = maxWidth > currWidth ? maxWidth : currWidth;
    }

    return maxWidth;
}
maxWidthBinaryTree([1,3,2,5,3,null,9]); //4
//      1
//    3   2
//  5  3    9  -> max width [5,3,null,9]

//first = 0n
//queue = [ [[1,3,2,5,3,null,9], 0n] ]
//curr = [[1,3,2,5,3,null,9], 0n]
//queue = [ [[3,5,3], 0n], [[2,null,9], 1n] ]
//currWidth = 0n - 0n + 1n = 1n
//maxWidth: 0 -> 1n

//queue = [ [[3,5,3], 0n], [[2,null,9], 1n] ]
//curr = [[1,3,2,5,3,null,9], 0n], [[3,5,3], 0n]
//queue = [ [[2,null,9], 1n], [[5], 0n]. [[3], 1n] ]

//queue = [ [[2,null,9], 1n], [[5], 0n], [[3], 1n] ]
//curr = [[1,3,2,5,3,null,9], 0n], [[3,5,3], 0n], [[2,null,9], 1n]
//queue = [ [[5], 0n], [[3], 1n], [[9], 3n] ]
//currWidth = 1n - 0n + 1n = 2n
//maxWidth: 0 -> 1n -> 2n

//queue = [ [[5], 0n], [[3], 1n], [[9], 3n] ]
//curr = [[1,3,2,5,3,null,9], 0n], [[3,5,3], 0n], [[2,null,9], 1n], [[5], 0n]

//queue = [ [[3], 1n], [[9], 3n] ]
//curr = [[1,3,2,5,3,null,9], 0n], [[3,5,3], 0n], [[2,null,9], 1n], [[5], 0n], [[3], 1n]

//queue = [ [[9], 3n] ]
//curr = [[1,3,2,5,3,null,9], 0n], [[3,5,3], 0n], [[2,null,9], 1n], [[5], 0n], [[3], 1n], [[9], 3n]
//currWidth = 3n - 0n + 1n = 4n
//maxWidth: 0 -> 1n -> 2n -> 4n

maxWidthBinaryTree([1,3,2,5,null,null,9,6,null,7]); //7
//        1
//      3   2
//    5       9
//  6       7  -> max width [6,null,null,null,null,null,7]

//first = 0n
//queue = [ [1,3,2,5,null,null,9,6,null,7], 0n] ]
//curr = [[1,3,2,5,null,null,9,6,null,7], 0n]]
//queue = [ [[3,5,null,6,null], 0n], [[2,null,9,7], 1n] ]
//currWidth = 0n - 0n + 1n = 1n
//maxWidth: 0 -> 1n

//queue = [ [[3,5,null,6,null], 0n], [[2,null,9,7], 1n] ]
//curr = [[1,3,2,5,null,null,9,6,null,7], 0n]], [[3,5,null,6,null], 0n]
//queue = [ [[2,null,9,7], 1n], [[5,6], 0n] ]

//queue = [ [[2,null,9,7], 1n], [[5,6], 0n] ]
//curr = [[1,3,2,5,null,null,9,6,null,7], 0n]], [[3,5,null,6,null], 0n], [[2,null,9,7], 1n]
//queue = [ [[5,6], 0n], [[9,7], 3n] ]
//currWidth = 1n - 0n + 1n = 2n
//maxWidth: 0 -> 1n -> 2n

//queue = [ [[5,6], 0n], [[9,7], 3n] ]
//curr = [[1,3,2,5,null,null,9,6,null,7], 0n]], [[3,5,null,6,null], 0n], [[2,null,9,7], 1n], [[5,6], 0n]
//queue = [ [[9,7], 3n], [[6], 0n] ]

//queue = [ [[9,7], 3n], [[6], 0n] ]
//curr = [[1,3,2,5,null,null,9,6,null,7], 0n]], [[3,5,null,6,null], 0n], [[2,null,9,7], 1n], [[5,6], 0n], [[9,7], 3n]
//queue = [ [[6], 0n], [[7], 6n] ]
//currWidth = 3n - 0n + 1n = 4n
//maxWidth: 0 -> 1n -> 2n -> 4n

//queue = [ [[6], 0n], [[7], 6n] ]
//curr = [[1,3,2,5,null,null,9,6,null,7], 0n]], [[3,5,null,6,null], 0n], [[2,null,9,7], 1n], [[5,6], 0n], [[9,7], 3n], [[6], 0n]

//queue = [ [[7], 6n] ]
//curr = [[1,3,2,5,null,null,9,6,null,7], 0n]], [[3,5,null,6,null], 0n], [[2,null,9,7], 1n], [[5,6], 0n], [[9,7], 3n], [[6], 0n], [[7], 6n]
//currWidth = 6n - 0n + 1n = 7n
//maxWidth: 0 -> 1n -> 2n -> 4n -> 7n

maxWidthBinaryTree([1,3,2,5,null,null,9,6,null,7]); //2
//        1
//      3   2 -> max width [3, 2]
//    5 
