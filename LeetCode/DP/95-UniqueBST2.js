//95. Unique BST2
//given an integer n
//return all the structually unique BST's, which has exactly n nodes of unique values from 1 to n
//return the answer in any order

//Approach:
//using DP
var uniqueBST2 = (n) => {
    //base case
    if (n === 0) return [];

    let dp = Array.from({ length: n + 1 }, () => []);

    dp[0].push(null); //empty tree

    //DP
    //iterating all possible trees with number of nodes
    for (node = 1; node <= n; node++) {
        //iterating and use the root to build trees
        for (root = 1; root <= node; root++) {
            //left and right tree
            for (left of dp[root - 1]) { //left: root - 1
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
//dp = [ [null], [], [], [] ]
//node = 1, root = 1, left = dp[0], right = dp[0]
//curr = [1]
//curr.left = null
//curr.right = null
//dp = [ [ [null] ], [ [1] ], [], [] ]

//node = 2, root = 1, left = dp[0], right = dp[1]
//curr = [1]
//curr.left = null
//curr.right = [2]
//dp = [ [ [null] ], [ [1] ], [ [1, null, 2] ], [] ]

//node = 2, root = 2, left = dp[1], right = dp[0]
//curr = [2]
//curr.left = [1]
//curr.right = null
//dp = [ [ [null] ], [ [1] ], [ [1, null, 2], [2, 1] ], [] ]

//node = 3, root = 1, left = dp[0], right = dp[2]
//curr = [1]
//curr.left = null
//curr.right = [2, null, 3]
//dp = [ [ [null] ], [ [1] ], [ [1, null, 2], [2, 1] ], [ [1, null, 2, null, 3] ] ]

//node = 3, root = 1, left = dp[0], right = dp[2]
//curr = [1]
//curr.left = null
//curr.right = [3, 2]
//dp = [ [ [null] ], [ [1] ], [ [1, null, 2], [2, 1] ], [ [1, null, 2, null, 3], [1, null, 3, 2] ] ]

//node = 3, root = 2, left = dp[1], right = dp[1]
//curr = [2]
//curr.left = [1]
//curr.right = [3]
//dp = [ [ [null] ], [ [1] ], [ [1, null, 2], [2, 1] ], [ [1, null, 2, null, 3], [1, null, 3, 2], [2, 1, 3] ] ]

//node = 3, root = 3, left = dp[2], right = dp[0]
//curr = [3]
//curr.left = [1, null, 2]
//curr.right = null
//dp = [ [ [null] ], [ [1] ], [ [1, null, 2], [2, 1] ], [ [1, null, 2, null, 3], [1, null, 3, 2], [2, 1, 3], [3, 1, null, null, 2] ] ]

//node = 3, root = 3, left = dp[2], right = dp[0]
//curr = [3]
//curr.left = [2, 1]
//curr.right = null
//dp = [ [ [null] ], [ [1] ], [ [1, null, 2], [2, 1] ], [ [1, null, 2, null, 3], [1, null, 3, 2], [2, 1, 3], [3, 1, null, null, 2], [3, 2, null, 1] ] ]

uniqueBST2(1); //[[1]]
