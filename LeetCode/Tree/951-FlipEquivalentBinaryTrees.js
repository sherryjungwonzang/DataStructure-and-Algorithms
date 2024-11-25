//951. Flip Equivalent Binary Trees
//for a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees
//a binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations
//given the roots of two binary trees root1 and root2
//return true if the two trees are flip equivalent or false otherwise

//Approach:
//using recursion
var flipEquivalentBinaryTrees = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;

    //recursive calls
    let original = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    let flipped = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

    return original || flipped;
}
flipEquivalentBinaryTrees(root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]); //true
//          1                    1
//      2       3            3       2
//    4   5    6              6    4   5
//       7 8                          8 7

flipEquivalentBinaryTrees(root1 = [], root2 = []); //true

flipEquivalentBinaryTrees(root1 = [], root2 = [1]); //false
