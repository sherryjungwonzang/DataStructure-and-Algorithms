//Binary Tree Preorder Traversal
//given the root of a binary tree
//return the preorder traversal of its nodes' values
var preorderTraversal = (root) => {
    return traversal(root, []);
}

function traversal(root, order) {
    if (!root) return [];

    order.push(root.val); //push current root node's value to order array

    //if root's left subtree is existed
    //traverse root's left subtree and
    //set order array to left subtree's order
    if (root.left) order = traversal(root.left, order);

    //if root's right subtree is existed,
    //traverse root's right subtree and
    //set order array to right subtree's order
    if (root.right) order = traversal(root.right, order);

    return order;
}
