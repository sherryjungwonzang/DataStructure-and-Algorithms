//Miminum Depth of Binary Tree
//given a binary tree
//min depth: the num of nodes along the shortest path from the root node dwon to the nearest left node
var minDepth = (root) => {
    if (!root) return 0;

    let queue = [root];
    let depth = 0;

    while(queue.length) {
        let currentLevelLength = queue.length;
        depth++;

        for (let i = 0; i < currentLevelLength; i++) {
            let current = queue.shift();

            if (!current.left && !current.right) return depth;

            if (current.left) queue.push(current.left);

            if (current.right) queue.push(current.right);
        }
    }
    return depth;
}
