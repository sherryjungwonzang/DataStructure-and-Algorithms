//Symmetric Tree
//given the root of a binaryt ree
//check whether it is a mirror of itself

//Approach1: Recursion
//to compare the left node on the left side of the binary tree to the right node on the right side of the binrary tree
//if we run into a nide with a different num of children or a different value, we need to return a false value
var isSymmetric = (root, leftNode = root, rightNode = root) => {
    //the first two if statements handle our base case
    if (!leftNode && !rightNode) return true; //if both nodes are null, they are equal->true
    if (!leftNode || !rightNode) return false; //if only one node is null, they are not equal->false
    if (leftNode.val !== rightNode.val) return false; //if the values of the two nodes are not equal->false

    return isSymmetric(leftNode.left, rightNode.right) && isSymmetric(leftNode.right, rightNode.left);
    //recursively run the function on both sides of the binary tree
    //return the result of both functions
    //both functions need to return in order to be considered symmetric
}


//same approach with another solution
var isSymmetric = (left_tree, right_tree = left_tree) => {
    //both trees are the same
    if (!left_tree && !right_tree) return true;

    //one exists without another
    if (!left_tree || !right_tree) return false;

    //are left and right of same value?
    //if not return false
    if (left_tree.val != right_tree.val) return false;

    //do all the left trees and right trees
    let outer_tree = isSymmetric(left_tree.left, right_tree.right);
    let inner_tree = isSymmetric(left_tree.right, right_tree.left);

    //are both trees the same?
    return outer_tree && inner_tree;
}
