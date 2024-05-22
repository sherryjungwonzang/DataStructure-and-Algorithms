//226. Invert Binary Tree
//given a root of a binary tree
//invert the tree and return its root

//Approach:
//recursive call to each root.left and root.right
var invertBinaryTree = (root) => {
    if (root) {
        //recursive call
        [root.left, root.right] = [invertBinaryTree(root.right), invertBinaryTree(root.left)];
    }
    return root;
}
invertBinaryTree([4,2,7,1,3,6,9]); //[4,7,2,9,6,3,1]
//    4                4
//  2   7     ->     7   2
// 1 3 6 9         9 6  3 1
//[2, 7] = [invertBinaryTree(7), invertBinaryTree(2)]
//[1, 3] = [invertBinaryTree(3), invertBinaryTree(1)]
//[6, 9] = [invertBinaryTree(9), invertBinaryTree(6)]

invertBinaryTree([2,1,3]); //[2,3,1]
//    2                2
//  1   3     ->     3   1
//[1, 3] = [invertBinaryTree(3), invertBinaryTree(1)]

invertBinaryTree([]); //[]
