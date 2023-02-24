//Invert Binary Tree (226)
//given a root of a binary tree
//invert the tree and return its root

//Approach:
//recursive call to each root.left and root.right
var invertBinaryTree = (root) => {
  if (root) { //base case
    //invert left and right child of its root
    //and recursive call on its left and right
    [root.left, root.right] = [invertBinaryTree(root.right), invertBinaryTree(root.left)];
  }
return root;
}
invertBinaryTree([4,2,7,1,3,6,9]); //[4,7,2,9,6,3,1]
//[2, 7] = [invertBinaryTree(7), invertBinaryTree(2)]

invertBinaryTree([2,1,3]); //[2,3,1]

invertBinaryTree([]); //[]
