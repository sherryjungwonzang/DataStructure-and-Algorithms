//654. Maximum Binary Tree
//given an integer array nums with no duplicates
//amaximum binary tree can be built recursively from nums using the following algorithm:
//rreate a root node whose value is the maximum value in nums
//recursively build the left subtree on the subarray prefix to the left of the maximum value
//recursively build the right subtree on the subarray suffix to the right of the maximum value
//return the maximum binary tree built from nums

//Approach:
//using recursion
var maxBinaryTree = (nums) => {
    //base case
    if (nums.length === 0) return null;

    let root = Math.max(...nums); //max value to root
    let index = nums.indexOf(root); //check the max value index
    let tree = new TreeNode(root); //making new tree with max value

    //recursive call on left and right
    tree.left = constructMaximumBinaryTree(nums.slice(0, index));
    tree.right = constructMaximumBinaryTree(nums.slice(index + 1));

    return tree;
}
maxBinaryTree([3,2,1,6,0,5]); //[6,3,5,null,2,0,null,null,1]
//       3                       6
//   2       1      ->      3         5
// 6   0   5                  2      0
//                              1

//[3, 2, 1, 6, 0, 5]
//          ^       -> root = 6 || index = 3

//tree = set 6 as root
//Left                                                                  Right
//tree.left = [3, 2, 1]                                                 tree.right = [0, 5]

//[3, 2, 1]                                                             [0, 5]
// ^         -> root = 3 || index = 0                                       ^       -> root = 5 || index = 1
//Left                            Right                                 Left                            Right
//tree.left = []                  tree.right = [2, 1]                   tree.left = [0]                 tree.right = [5] 

//[2, 1] 
// ^         -> root = 2 || index = 0  
//Left                            Right 
//tree.left = []                  tree.right = [1]

//[6,3,5,null,2,0,null,null,1]

maxBinaryTree([3,2,1]); //[3,null,2,null,1]
