//94. Binary tree inorder traversal
//given the 'root' of a binary tree
//return the inorder traversal of its nodes' values

//Approach:
//using DFS
//Inorder traversal: left-root-right
var inorderTraversal = (root) => {
    let res = [];

    function inOrder(node) {
        //base case
        if (!node) return;

        inOrder(node.left);
        res.push(node.val);
        inOrder(node.right);
    }

    inOrder(root);

    return res;
}
inorderTraversal([1,null,2,3]); //[1,3,2]

inorderTraversal([]); //[]

inorderTraversal([1]); //[1]
