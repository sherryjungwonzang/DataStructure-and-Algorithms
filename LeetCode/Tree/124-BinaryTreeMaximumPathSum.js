//124. Binary Tree Maximum Path Sum
//given the root of a binary tree
//return the maximum path sum of any non-empty path
//a path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them
//a node can only appear in the sequence at most once
//the path does not need to pass through the root

//Approach:
//using DFS with recursive call
//using Post Order traversal: left-right-root
//creating function call - dfs(root): return root + max(left, right)
//set 'max' and update step by step
var binaryTreeMaxPathSum = (root) => {
    let max = -Inifinity;

    //DFS
    function dfs(root) {
        //base case
        if (!root) return 0;

        //post order traversal
        let left = Math.max(0, dfs(root.left)); //to avoid negavie elements passing
        let right = Math.max(0, dfs(root.right)); //to avoid negavie elements passing
        let currMax = left + root.val + right;

        //update the max
        max = Math.max(currMax, max);

        return root.val + Math.max(left, right);
    }

    dfs(root);

    return max;
}
//TC: O(n) - num of nodes
//SC: O(h) - height of tree
binaryTreeMaxPathSum([1,2,3]); //6 - the optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6
//    1
//  /   \
// 2     3

//left = 2
//right = 3
//max: 2 -> 3 -> 6

binaryTreeMaxPathSum([-10, 9, 20, null, null, 15, 7]); //42 - the optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42
//     -10
//    /    \
//   9      20
//        /    \
//       15     7
//max: -Infi -> 9 -> 15 -> 42

binaryTreeMaxPathSum([10,9,20,null,null,15,7, 20, null, null, null, -2, null, null]); //74
//      10
//    /    \
//   9      20
//        /    \
//       15     7
//      /  \   /  \
//    20 
//   /
// -2
//max: -Infi -> 9 -> 25 -> 62 -> 74
