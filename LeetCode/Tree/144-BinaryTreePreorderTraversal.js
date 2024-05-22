//144. Binary Tree Preorder Traversal
//given the root of a binary tree
//return the preorder traversal of its nodes' values

//Approach:
//using DFS
//Inorder traversal: root-left-right
var preorderTraversal = (root) => {
    let res = [];

    function inOrder(node) {
        //base case
        if (!node) return;

        res.push(node.val);
        inOrder(node.left);
        inOrder(node.right);
    }

    inOrder(root);

    return res;
}
preorderTraversal([1,null,2,3]); //[1,2,3]

preorderTraversal([]); //[]

preorderTraversal([1]); //[1]
