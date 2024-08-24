//1361. Validate Binary Tree Nodes
//you have 'n' binary tree nodes numbered from 0 to n-1 - where node i has two children leftChild[i] and rightChild[i]
//return true if and only if all the given nodes form exactly one valid binary tree

//if node i has no left child then leftChild[i] will equal -1 - similarly for the right child

//Approach:
//using BFS with queue
var validateBinaryTreeNodes = (n, leftChild, rightChild) => {
    let root = findRoot(n, leftChild, rightChild);
    
    //base case
    if (root === -1) return false;
    
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

    let visited = new Set();
    let queue = [root];
    visited.add(root);

    //BFS
    while (queue.length) {
        let curr = queue.shift();
        let children = [leftChild[curr], rightChild[curr]];

        for (child of children) {
            //meaning there is a child
            if (child !== -1) {
                if (visited.has(child)) return false;

                queue.push(child);
                visited.add(child);
            }
        }
    }
    
    return visited.size === n;
}
//TC: O(n)
//SC: O(n)
validateBinaryTreeNodes(n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]); //true
//   0
//  / \
// 1   2
//    /
//   3

//starting from finding the root
//function(4, [1,-1,3,-1], [2,-1,-1,-1])
//children = { } -> {1, 2} -> {1, 2, -1} -> {1, 2, -1, 3} -> {1, 2, -1, 3}
//i = 0 -> children does not have -> root is '0'

//visited = { } -> { 0, }
//queue = [ 0 ]
//curr = 0
//children = [left[0] = 1, right[0] = 2] = [1, 2]
//queue = [ 1, ]
//visited = { } -> { 0, } -> { 0, 1, }
//queue = [ 1, 2 ]
//visited = { } -> { 0, } -> { 0, 1, 2 }

//queue = [ 1, 2 ]
//curr = 0 1
//children = [left[1] = -1, right[1] = -1] = [-1, -1]

//queue = [ 2 ]
//curr = 0 1 2
//children = [left[2] = 3, right[2] = -1] = [3, -1]
//queue = [ 3 ]
//visited = { } -> { 0, } -> { 0, 1, 2 } -> { 0, 1, 2, 3 }

//queue = [ 3 ]
//curr = 0 1 2 3
//children = [left[3] = -1, right[3] = -1] = [-1, -1]
//visited = { } -> { 0, } -> { 0, 1, 2 } -> { 0, 1, 2, 3 }
//True

validateBinaryTreeNodes(n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]); //false
//   0
//  / \
// 1   2
//  \ /
//   3

//starting from finding the root
//function(4, [1,-1,3,-1], [2,3,-1,-1])
//children = { } -> {1, 2} -> {1, 2, -1} -> {1, 2, -1, 3} -> {1, 2, -1, 3}
//i = 0 -> children does not have -> root is '0'

//visited = { } -> { 0, }
//queue = [ 0 ]
//curr = 0
//children = [left[0] = 1, right[0] = 2] = [1, 2]
//queue = [ 1, ]
//visited = { } -> { 0, } -> { 0, 1, }
//queue = [ 1, 2 ]
//visited = { } -> { 0, } -> { 0, 1, 2 }

//queue = [ 1, 2 ]
//curr = 0 1
//children = [left[1] = -1, right[1] = 3] = [-1, 3]
//queue = [ 2, 3 ]
//visited = { } -> { 0, } -> { 0, 1, 2 } -> { 0, 1, 2, 3 }

//queue = [ 2, 3 ]
//curr = 0 1 2
//children = [left[2] = 3, right[2] = -1] = [3, -1]
//queue = [ 3, 3 ]
//visited = { 0, 1, 2, 3 } -> already has '3'
//False

validateBinaryTreeNodes(n = 2, leftChild = [1,0], rightChild = [-1,-1]); //false
//   0
//  /
// 1
