//Binary Tree Postorder Traversal
//given the root of a binary tree
//return the preorder traversal of its nodes' values

//Approach 1: Iterative
var postorderTraversal = (root) => {
    let result = [];
    let stack = [];
    let current = root; //storing roots to pop for right children

    while(current !== null || stack.length !== 0) { 
        //traverse left and get all nodes in the path
        if (current !== null) {
            stack.push(current);
            result.unshift(current.val);
            current = current.right;
        } else {
            let node = stack.pop();
            current = node.left;
        }
    }
    return result;
}



//Approach 2: Recursive
//visit left, right then add nodes
const postorderTraversal = (root) => {
    if (!root) return [];

    const output = [];

    const traverse = (root) => {
        if (root.left) traverse(root.left); //left
        if (root.right) traverse(root.right); //right
        output.push(root.val); //root
    };

    traverse(root);

    return output;
};
