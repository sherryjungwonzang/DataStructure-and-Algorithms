//1448. Count Good Nodes in Binary
//given a binary tree 'root'
//a node X in the tree is named 'good' 
//if the path from root to X there are no nodes with a value greater than X
//return the number of good nodes in the binary tree

//Approach:
//using DFS with recursive calls
var goodNodes = (root) => {
    let count = 0;
    let currMax = root.val;

    //DFS
    function dfs(root, max) {
        //base case
        if (root === null) return;

        if (root.val >= max) {
            max = Math.max(max, root.val);
            count++;
        }

        //recursive calls
        dfs(root.left, max);
        dfs(root.right, max);
    }

    dfs(root, currMax);

    return count;
}
//TC: O(n) - on DFS, visit each node exactly once
//SC: O(n)
goodNodes([3,1,4,3,null,1,5]); //4 - nodes in 3,3,4,5 are good
//root node 3 is always a good node | node 4 -> (3,4) is the max value in the path starting from the root
//node 5 -> (3,4,5) is the max value in the path
//node 3 -> (3,1,3) is the max value in the path
//       3
//    1     4
//  3     1   5

goodNodes([3,3,null,4,2]); //3 - node 2 -> (3,3,2) is not good, because 3 is higher than it
//       3
//    3   
//  4   2  
