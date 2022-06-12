//Invert Binary Tree
//given the root of a binary tree
//invert the tree
//return its root



//Approach: Recursive
function invertTree(root) {
    if (root === null) return root;

    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};


//Recursive another solution
function invertTree(node) {
    if (node !== null) {
        const tmp = node.left;
        node.left = invertTree(node.right);
        node.right = invertTree(tmp);
    }
    return node;
}


//Approach: DFS
function invertTree(root) {
    const stack = [root];

    while(stack.length) {
        const n = stack.pop();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }
    return root;
}


//Approach: BFS
function invertTree(root) {
    const queue = [root];

    while(queue.length) {
        const n = queue.shift();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            queue.push(n.left, n.right);
        }
    }
    return root;
}


//Approach: Iterative
function invertTree(head) {
    const stack = [head];

    while(stack.length) {
        const node = stack.pop();
        if (node !== null) {
            stack.push(node.left);
            stack.push(node.right);

            const tmp = node.left;
            node.left = node.right;
            node.right = tmp;
        }
    }
    return head;
}
