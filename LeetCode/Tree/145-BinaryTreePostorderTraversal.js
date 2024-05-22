//145. Binary Tree Postorder Traversal
//given the root of a binary tree
//return the preorder traversal of its nodes' values

//Approach:
//using DFS
//Inorder traversal: left-right-root
var postorderTraversal = (root) => {
    let res = [];

    function inOrder(node) {
        //base case
        if (!node) return;

        inOrder(node.left);
        inOrder(node.right);
        res.push(node.val);
    }

    inOrder(root);

    return res;
}
postorderTraversal([1,null,2,3]); //[3,2,1]

postorderTraversal([]); //[]

postorderTraversal([1]); //[1]
