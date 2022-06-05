//Maximum Depth of Binary Tree
//given the root of a binary tree
//return its max depth
//max depth: the num of nodes along with the longest path from the root node down to the farthest leaf node

//Approach 1: DFS-Recursion
var maxDepth = (root) => {
    if (!root) return 0;

    let depth = 1;
    let leftDepth = 0;
    let rightDepth = 0;

    if (root.left) leftDepth = maxDepth(root.left); //calculate left subtree's depth
    if (root.right) rightDepth = maxDepth(root.right); //calculate right subtree's depth

    return depth + Math.max(leftDepth, rightDepth); //calculate max depth
    //current depth + maximum value between left subtree's depth and right subtree's depth
};


//Approach 2: BFS-level order traversal
var maxDepth = (root) => {
    if (!root) return 0;
    let depth = 0;
    let queue = [root];

    while(queue.length > 0) {
        const children = [];

        //get node from queue and push node's left subtree and right subtree to queue
        for (const node of queue) {
            if (!node) continue;
            children.push(node.left);
            children.push(node.right);
        }

        //if node have subtree, increase depth by one
        if (children.length > 0) {
            depth++;
        }
        queue = children; //set the traversal position to children array
    }
    return depth;
}
