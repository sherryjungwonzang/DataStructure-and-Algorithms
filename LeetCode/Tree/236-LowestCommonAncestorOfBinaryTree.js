//236. Lowest Common Ancestor of a Binary Tree
//given a binary tree
//find the lowest common ancestor (LCA) of tw given nodes in the tree

//LCA: the lowest common ancestor is defined between two nodes 'p' and 'q' as the lowest node 
//in 'T' that has both p and q as descendants - where we allow a node to be a descendant of itself

//Approach:
//using DFS with recurse and Post-order traversal
var LCA_BinaryTree = (root, p, q) => {
    //recurse function
    function dfs(node) {
        //base cases
        if (node === null) return null;
        if (node === p || node === q) return node;

        //recursive call
        const left = dfs(node.left);
        const right = dfs(node.right);

        //check valid node
        if (left && right) return node;

        return left || right;
    }

    return dfs(root);
}
//TC: O(n) - traverse through the entire tree using stack data structure
//SC: O(n) - storing each value with stack
LCA_BinaryTree([3,5,1,6,2,0,8,null,null,7,4], 5, 1); //3 - the LCA of nodes 5 and 1 is 3
//        3
//    5      1
//  6  2    0  8
//    7  4

LCA_BinaryTree([3,5,1,6,2,0,8,null,null,7,4], 5, 4); //5 - the LCA of nodes 5 and 4 is 5, since a node can be descendant of itself according to the LCA definition

