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
    while (queue.length > 0) {
        let levelSize = queue.length;
        let first = 0n;

        for (let i = 0; i < levelSize; i++) {
            [node, pos] = queue.shift();

            if (i === 0) first = pos; //first will always be 1st node
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

maxWidthBinaryTree([1,3,2,5,null,null,9,6,null,7]); //7
//        1
//      3   2
//    5       9
//  6       7  -> max width [6,null,null,null,null,null,7]

maxWidthBinaryTree([1,3,2,5,null,null,9,6,null,7]); //2
//        1
//      3   2 -> max width [3, 2]
//    5 
