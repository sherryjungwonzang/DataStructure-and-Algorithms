//543. Diameter of Binary Tree
//given the root of a binary tree
//return the length of the diameter of the tree

//the diameter of a binary tree is the length of the longest path between any two nodes in a tree
//this path may or may not pass through the root
//the length of a path between two nodes is represented by the number of edges between them

//Approach:
//usingg DFS with Post order traversal
var diameterOfBinaryTree = (root) => {
    let maxD = 0;

    //DFS
    function dfs(node) {
        //base case
        if (!node) return 0;

        //post order traversal
        let left = dfs(node.left);
        let right = dfs(node.right);
        let currD = left + right;

        //update maxDepth
        maxD = Math.max(currD, maxD);

        return Math.max(left + 1, right + 1);
    }

    dfs(root);

    return maxD;
}
//TC: O(n)
//SC: O(n) - recursive call stack within DFS
diameterOfBinaryTree([1,2,3,4,5]); //3 - 3 is the length of the path [4,2,1,3] or [5,2,1,3]
//      1
//    2   3
//  4  5

diameterOfBinaryTree([1,2]); //1
