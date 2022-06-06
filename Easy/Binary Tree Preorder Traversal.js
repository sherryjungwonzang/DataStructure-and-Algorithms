//Binary Tree Preorder Traversal
//given the root of a binary tree
//return the preorder traversal of its nodes' values
//Approach 1: Iterative
var preorderTraversal = (root) => {
    let result = [];
    let stack = [];
    let current = root; //storing roots to pop for right children

    //as long as we have elements to iterate
    while(current || stack.length) { 
        //handle root => left
        while(current) {
            result.push(current.val);
            stack.push(current);
            current = current.left;
        }
        
        //handle right
        current = stack.pop();
        current = current.right;
    }
    return output;
}



//Approach 2: Recursive
//visit root, left and then right
const preorderTraversal = (root) => {
    if (!root) return [];

    const output = [];

    const traverse = (root) => {
        output.push(root.val); //root
        if (root.left) traverse(root.left); //left
        if (root.right) traverse(root.right); //right
    };

    traverse(root);

    return output;
};
