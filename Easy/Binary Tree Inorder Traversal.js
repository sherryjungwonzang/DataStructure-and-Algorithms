//Binary Tree Inorder Traversal
//given the root of a binary tree
//return the inorder traversal of its node's values

//Approach1: Recursive
//define helper function to implement recursion
var inorderTraversal = (root) => {
    return traverseHelper(root, []);
}

function traverseHelper(root, list) {
    if (!root) return list;

    if (root.left) list = traverseHelper(root.left, list);
    list.push(root.val);

    if (root.right) list = traverseHelper(root.right, list);
    return list;
}


//Approach2: Iterating method using Stack
var inorderTraversal = (root) => {
    const output = [];
    const stack = [];

    while(true) {
        if (root) {
            stack.push(root);
            root = root.left;
            continue;
        }

        if (!stack.length) return output;

        root = stack.pop();
        output.push(root.val);
        root = root.right;
    }
};

