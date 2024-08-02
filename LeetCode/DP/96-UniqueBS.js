//96. Unique Binary Search Trees
//given an integer n
//return the num of structurallt unique BST's which has exactly n nodes of unique values from 1 to n

//Approach:
//using DP
var uniqueBST = (n) => {
  let dp = new Array(n + 1).fill(0);

  dp[0] = 1; //one unique BST with no node
  dp[1] = 1; //one unique BST with one node

  //DP
  //left subtree: from 1 to i - 1
  //right subtree: from i + 1 to n
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
}
//TC: O(n^2)
//SC: O(n)
uniqueBST(2); //2
//  1         2   
//    2     1      

//DP = [ 1, 1, 0 ]
//root: 1
//L: 0 node -> dp[0] = 1
//R: 1 node -> dp[1] = 1
//1 * 1 = 1

//root: 2
//L: 1 node -> dp[1] = 1
//R: 0 node -> dp[0] = 1
//1 * 1 = 1

//1 with root 1 + 1 with root2 = 2
//DP = [ 1, 1, 2 ]

uniqueBST(3); //5
//  1        1          2             3       3
//     3       2      1   3         2       1
//  2            3                1           2

//DP = [ 1, 1, 2, 0 ]
//root: 1
//L: 0 node -> dp[0] = 1
//R: 2 node -> dp[2] = 2
//1 * 2 = 2

//root: 2
//L: 1 node -> dp[1] = 1
//R: 1 node -> dp[1] = 1
//1 * 1 = 1

//root: 3
//L: 2 node -> dp[2] = 2
//R: 0 node -> dp[0] = 1
//2 * 1 = 2

//2 with root 1 + 1 with root2 + 2 with root3 = 5
//DP = [ 1, 1, 2, 5 ]


