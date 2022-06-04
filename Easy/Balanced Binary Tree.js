//Balanced Binary Tree
//given a binary tree, determine if is is weight-balanced
//the left and right subtree of every node differ in height by no more than 1

//Bottom-up algorithm
//check if the child subtrees are balanced before comparing their heights
//to determine if the current subtree is balanced and to calculate the current subtree's height

var isBalanced = (root) => {
    return dfs(root)[1];
}

function dfs(node) {
    if (node === null) return [-1, true];

    let [leftHeight, leftRes] = dfs(node.left);
    let [rightHeight, rightRes] = dfs(node.right);
    
    //check if it is balanced
    let balanced = true;
    if (Math.abs(leftHeight - rightHeight) > 1) balanced = false;

    return [
        Math.max(leftHeight, rightHeight) + 1,
        balanced && leftRes && rightRes
    ];
}
