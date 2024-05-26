//1080. Insufficient nodes in root to leaf paths
//given the root of a binary tree and an integer 'limit'
//delete all insufficient nodes in the tree simultaneously
//and return the root of the resulting binary tree

//a node is insufficient if every root to leaf path intersecting this node has a sum strictly less than limit
//a leaf is a node with no children

//Approach:
//using recursion
var insufficientNodes = (root, limit) => {
    let min = Number.MIN_SAFE_INTEGER;
    let sum = recurse(root, 0);

    if (sum < limit) return null;
    return root;

    //recursion function
    function recurse(root, prevSum) {
        //base case 
        if (!root) return min;
        if (root.left === root.right) return root.val + prevSum;

        let leftSum = recurse(root.left, prevSum + root.val);
        let rightSum = recurse(root.right, prevSum + root.val);

        if (leftSum < limit) root.left = null;
        if (rightSum < limit) root.right = null;
        if (root.left === root.right) return min;

        return root.left === null ? rightSum : leftSum;
    }
}
insufficientNodes(root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1); //[1,2,3,4,null,null,7,8,9,null,14]

insufficientNodes(root = [5,4,8,11,null,17,4,7,1,null,null,5,3], limit = 22); //[5,4,8,11,null,17,4,7,null,null,null,5]

insufficientNodes(root = [1,2,-3,-5,null,4,null], limit = -1); //[1,null,-3,4]
