//Validate Binary Search Tree (98)
//given the root of a binary tree
//determine if it is a valid binary search tree

//BST defines as:
//the left subtree of a node contains only nodes with keys lesst than the node's key
//the right subtree of a node contains only nodes with keys greater than the node's key
//both the left and right must also be binary search tree
var isValidBST = (root) => {
  function recurse(root, min, max) {
    //base case
    if (root === null) return true;
    if ((root.val >= max || root.val <= min)) {
      return false;
    }

    //recurrence relation
    return recurse(root.left, min, root.val) && recurse (root.right, root.val, max);
  }
  return recurse(root, -Infinity, Infinity);
}
//TC: O(n) - go through each individual node
//SC: O (n) - entire tree
isValidBST([2,1,3]); //true
//   2
// 1   3

isValidBST([5,1,4,null,null,3,6]); //false - the root node's value is 5 but its right child's value is 4
//   5
// 1   4
//   3   6
