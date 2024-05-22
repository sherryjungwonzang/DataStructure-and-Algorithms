//1123. LCA of Deepest leaves
//given the root of a binary tree
//return the LCA of its deepest leaves

//the node of a binary tree is a leaf if and only if it has no children
//the depth of the root of the tree is 0
//if the depth of a node is d, the depth of each of its children is d + 1
//the LCA of a set of nodes is the node A with the largest depth such that every node in S is in the subtree with root A

//Approach:
//using DFS with recursive call on left and right children
var LCA_DeepestLeaves = (root) => {
    //base case
    if (!root.left && !root.right) return root;
    let res = [root, 0];

    function dfs(node, depth) {
        //base case
        if (!node) return depth;

        let left = dfs(node.left, depth + 1);
        let right = dfs(node.right, depth + 1);

        //meaning node has 2 children on level - update res
        if (left === right && res[1] <= left) res = [node, left];
        
        return Math.max(left, right); //parent max
    }

    dfs(root, 0);

    return res[0]; //extracting only root array value
}
//TC: O(n)
LCA_DeepestLeaves([1]); //1 - the root is the deepest node in the tree and its the LCA of itself

LCA_DeepestLeaves([3,5,1,6,2,0,8,null,null,7,4]); //[2,7,4]
//Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3

LCA_DeepestLeaves([0,1,3,null,2]); //[2]
//the deepest leaf node in the tree is 2, the LCA of one node is itself
