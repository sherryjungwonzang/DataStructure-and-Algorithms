//Binary Tree Maximum Path Sum (124)
//given the root of a binary tree
//return the maximum path sum of any non-empty path
//a path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them
//a node can only appear in the sequence at most once
//the path does not need to pass through the root
var binaryTreeMaxPathSum = (root) => {
  let max = -Infinity; 

  function dfs(root) {
    //base case
    if (!root) return 0;

    //Post Order Traversal
    //to avoid the minus elements
    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right));
    let currMax = left + root.val + right; //get the total of the subtree

    max = Math.max(currMax, max);

    return root.val + Math.max(left, right);
  }
  dfs(root);

  return max;
}
binaryTreeMaxPathSum([1,2,3]); //6 - the optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6
//    1
//  /   \
// 2     3

//left = 2
//right = 3
//currMax = 2 + 3 + 1 = 6 

binaryTreeMaxPathSum([-10, 9, 20, null, null, 15, 7]); //42 - the optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42
//     -10
//    /    \
//   9      20
//        /    \
//       15     7

//left-left = 9
//right-left=15
//right-right=7
//right root max = 
