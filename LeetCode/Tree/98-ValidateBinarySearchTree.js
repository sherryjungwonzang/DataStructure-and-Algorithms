//98. Validate Binary Search Tree
//given the root of a binary tree
//determine if it is a valid binary search tree

//BST defines as:
//the left subtree of a node contains only nodes with keys less than the node's key
//the right subtree of a node contains only nodes with keys greater than the node's key
//both the left and right must also be binary search tree

//Approach:
//1) inOrder traversal: left-root-right & inSorted() function: to see whether these are in order
//2) divide & conquer approach -> use this approach in this problem
//creating recurse() function with root, min, max
var isValidBST = (root) => {
    //recurse function
    function recurse(root, min, max) {
        //base case
        if (root === null) return true;
        if ((root.val >= max || root.val <= min)) return false;

        //recursive relation
        //left - root.left has to be smaller than root - so max is root
        //right - root.right has to be bigger than root - so min value is root
        return recurse(root.left, min, root.val) && recurse(root.right, root.val, max);
    }
    return recurse(root, -Infinity, Infinity);
}
//TC: O(n) - go through each individual node
//SC: O(n) - entire tree
isValidBST([2,1,3]); //true
//   2
// 1   3
//recurse(2,1,3) -> root = 2, min = 1, max = 3
//max: 2 < 3 -> True
//min: 2 > 1 -> True
//True

isValidBST([5,1,4,null,null,3,6]); //false - the root node's value is 5 but its right child's value is 4
//   5
// 1   4
//   3   6

//starting from 5
//left: recurse(1, -Infi, 5)
//right: recurse(4, 5, Infi)

//left
//min: 1 > -Infi -> True
//max: 1 < 5 -> True
//right
//min: 4 < 5 -> False
//max: 4 < Infi -> True

//right's left: recurse(3, -Infi, 4)
//right's right: recurse(6, 4, Infi)

//left
//min: 3 > -Infi -> True
//max: 3 < 4 -> True
//right
//min: 6 > 4 -> True
//max: 6 < Infi -> True
