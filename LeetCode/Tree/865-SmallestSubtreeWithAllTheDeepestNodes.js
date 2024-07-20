//865. Smallest Subtree With All The Deepest Nodes
//given the root of a binary tree, the depth of each node is the shortest distance to the root
//return the smallest subtree such that is contains all the deepest nodes in the original tree
//a node is called the deepest if it has the largest depth possible among any node in the entire tree
//the subtree of a node is a tree consisting of that node, plus the set of all descendants of that node

//Approach:
//using DFS
var smallestSubtree = (root) => {
    let height = 0;
    let maxNode = null;

    //DFS
    function dfs(node, currDepth) {
        //base case
        if (node === null) return currDepth - 1;

        height = Math.max(height, currDepth); 
        let leftDepth = dfs(node.left, currDepth + 1);
        let rightDepth = dfs(node.right, currDepth + 1);

        if (leftDepth === height && rightDepth === height) maxNode = node; //finding the deepest node

        return Math.max(leftDepth, rightDepth);
    }

    dfs(root, 0);

    return maxNode;
}
smallestSubtree([3,5,1,6,2,0,8,null,null,7,4]); //[2,7,4]
//       3
//    5     1
//  6  2   0  8
//   7  4

smallestSubtree([1]); //[1]

smallestSubtree([0,3,1,null,2]); //[2]
//The deepest node in the tree is 2, the valid subtrees are the subtrees of nodes 2, 1 and 0 
//but the subtree of node 2 is the smallest
//       0
//    3     1
//      2  
