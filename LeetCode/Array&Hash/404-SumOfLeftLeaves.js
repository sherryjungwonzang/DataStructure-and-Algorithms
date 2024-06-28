//404. Sum of Left Leaves
//given the 'root' of a binary tree
//return the sum of all left leaves

//Approach:
//using recursive call on left and right
var sumLeftLeaves = (root) => {
    //base case
    if (!root) return 0;
    let res = 0;

    //recursion
    if (root.left) {
        //if leaf nodes
        if (!root.left.left && !root.left.right) res += root.left.val;
        //not leaf node - recursive call for left child
        else res += sumLeftLeaves(root.left);
    }

    //recursive call on right child to find right child's left leaf node
    res += sumLeftLeaves(root.right);

    return res;
}
//TC: O(n) - the num of nodes in binary tree
//SC: O(h) - the height of the binary tree
sumLeftLeaves([3,9,20,null,null,15,7]); //24 - two left leaves: 9 & 15
//      3
//   9   20
//     15   7

//res = 0 -> 9 -> 24

sumLeftLeaves([1]); //0
