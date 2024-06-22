//1361. Validate Binary Tree Nodes
//you have 'n' binary tree nodes numbered from 0 to n-1 - where node i has two children leftChild[i] and rightChild[i]
//return true if and only if all the given nodes form exactly one valid binary tree

//if node i has no left child then leftChild[i] will equal -1 - similarly for the right child

//Approach:
//using BFS with queue
var validateBinaryTreeNodes = (n, leftChild, rightChild) => {
    let root = findRoot(n, leftChild, rightChild);
    if (root === -1) return false; //base case

    //to find the root using set
    function findRoot(n, left, right) {
        let children = new Set();

        //collecting all children values for checking missing value regarding as root 
        for (let i = 0; i < n; i++) {
            children.add(left[i]);
            children.add(right[i]);
        }

        for (let i = 0; i < n; i++) {
            if (!children.has(i)) return i; //root
        }

        return -1;
    };

    let seen = new Set();
    let queue = [root];
    seen.add(root);

    //BFS
    while (queue.length) {
        let curr = queue.shift();
        let children = [leftChild[curr], rightChild[curr]];

        for (child of children) {
            if (child !== -1) {
                if (seen.has(child)) return false;

                queue.push(child);
                seen.add(child);
            }
        }
    }
    
    return seen.size === n;
}
//TC: O(n)
//SC: O(n)
validateBinaryTreeNodes(n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]); //true
//   0
//  / \
// 1   2
//    /
//   3

validateBinaryTreeNodes(n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]); //false
//   0
//  / \
// 1   2
//  \ /
//   3

validateBinaryTreeNodes(n = 2, leftChild = [1,0], rightChild = [-1,-1]); //false
//   0
//  /
// 1
