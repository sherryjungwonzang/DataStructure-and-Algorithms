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


//another solution of DFS
const maxDepth = (root) => {
    if (!root) return 0;

    //maximum left depth
    const leftMaxDepth = maxDepth(root.left);

    //maximum right depth
    const rightMaxDepth = maxDepth(root.right);

    //add the root node itself
    return Math.max(leftMaxDepth, rightMaxDepth) + 1;
}


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


//another solution of BFS
const maxDepth = (root) => {
    if (!root) return 0;

    const queue = [root];
    let max = 1;

    while(queue.length) {
        const len = queue.length;

        //traverse level by level
        for (let i = 0; i < len; i++) {
            const node = queue.shift(); //shift(): removes the first element from an array and returns that removed element

            //traverse next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        //after each level traversal, increment max depth by 1
        max++;
    }
    return max;
}



//Approach 3: Recursion
const maxDepth = (root) => {
    if (!root) return 0;

    //beginning with first node
    let max = 1;

    const traverse = (root, depth = 1) => {
        max = Math.max(max, depth); //update max

        //traverse left/right and increment depth by 1
        if (root.left) traverse(root.left, depth+1);
        if (root.right) traverse(root.right, depth+1);
    };

    traverse(root);
    return max;
}
