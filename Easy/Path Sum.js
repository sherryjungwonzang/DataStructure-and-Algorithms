//Path Sum
//given the root of binary tree and integer targetSum
//retrun true-> if the tree has a root-to-leaf path
//adding up all the values along the path equals targetSum


//approach 1: Stack with iteration
var hasPathSum = (root, targetSum) => {
    if (!root) return false;

    var stack = [[root, targetSum]];

    while(stack.length) {
        var node = stack.pop();

        if (!node[0].left && !node[0].right && node[1] === node[0].val) return true;
        if (node[0].left) stack.push([node[0].left, node[1] - node[0].val]);
        if (node[0].right) stack.push([node[0].right, node[1] - node[0].val]);
    }
    return false
}
