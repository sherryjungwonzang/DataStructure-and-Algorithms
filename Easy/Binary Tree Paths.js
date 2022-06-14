//Binary Tree Paths
//given the root of a binary tree
//return all root-to-leaf paths in any order

//Approach: recursion
var binaryTreePaths = (root) => {
    var result = [];

    var travel = (node, path) => {
        if (!node.left && !node.right) result.push(path.join('->')); //reach leaf node
        if (node.left) travel(node.left, [...path, node.left.val]); //left child exists, keep going
        if (node.right) travel(node.right, [...path, node.right.val]); //right child exists, keep going
    }
    travel(root, [root.val]);
    return result;
}


//Approach: Stack
var binaryTreePaths = (root) => {
    var result = [];
    var stack = [[root, [root.val]]];

    while(stack.length) {
        var element = stack.pop();
        var node = element[0];

        if (!node.left && !node.right) result.push(element[1].join('->'));
        if (node.left) stack.push([node.left, [...element[1], node.left.val]]);
        if (node.right) stack.push([node.right, [...element[1], node.right.val]]);
    }
    return result;
};


//Approach: DFS
var binaryTreePaths = (root) => {
    const output = [];

    function callDFS(node, path) {
        if (!node) return;

        if (!node.left && !node.right) {
            output.push([...path, node.val]);
            return;
        }

        callDFS(node.left, [...path, node.val]);
        callDFS(node.right, [...path, node.val]);
    }
    callDFS(root, []);
    return output.map(row => row.join('->'));
}
