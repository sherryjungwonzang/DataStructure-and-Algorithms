//95. Unique BST2
//given an integer n
//return all the structually unique BST's, which has exactly n nodes of unique values from 1 to n
//return the answer in any order

//Approach:
//using DP
var uniqueBST2 = (n) => {
  //base case
  if (n === 0) return [];

  //DP
  let dp = Array.from({ length: n + 1 }, () => []);
  dp[0].push(null); //empty tree

  //iterating all possible trees with number of nodes
  for (node = 1; node <= n; node++) {
    //iterating and use the root to build trees
    for (root = 1; root <= node; root++) {
      //left and right tree
      for (let left of dp[root - 1]) { //left: root - 1
        for (let right of dp[node - root]) { //right: node - root
          let curr = new TreeNode(root);
          curr.left = left;
          curr.right = clone(right, root);
          dp[node].push(curr);
        }
      }
    }
  };

  //since the right subtree's values will be affected by the choice of the root
  //clone the right subtree with an offset equal to the root value
  function clone(n, offset) {
    //base case
    if (n === null) return null;

    let curr = new TreeNode(n.val + offset);
    curr.left = clone(n.left, offset);
    curr.right = clone(n.right, offset);

    return curr;
  };

  return dp[n];
}
uniqueBST2(3); //[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
//  1        1          2             3       3
//     3       2      1   3         2       1
//  2            3                1           2

//(1, 3)
//res = []


uniqueBST2(1); //[[1]]








//96. Unique BST
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


