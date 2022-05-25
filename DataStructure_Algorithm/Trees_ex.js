//1. find the lowest common ancestor of two nodes in a given binary tree
//if the max of the two values is smaller than the current root, go left
//if the minimum of the two values is bigger than the current root, go right
function findLowestCommonAncestor(root, value1, value2) {
    function findLowestCommonAncestorHelper(root, value1, value2) {
        if (!root) return;
        if(Math.max(value1, value2) < root.value) return findLowestCommonAncestor(root.left, value1, value2);
        return root.value
    }
    return findLowestCommonAncestorHelper(root, value1, value2);
}

var node1 = {value: 1, left: {value: 0}, right: {value:2 }};
var node2 = {value: 1, left: {value: 0, left: {value: -1}, right: {value: 0.5}}, right: {value: 2}};

console.log(findLowestCommonAncestor(node1, 0, 2)); //1
console.log(findLowestCommonAncestor(node2, 0, 2)); //1
console.log(findLowestCommonAncestor(node1, 0.5, -1)); //0

//Time Complexity: O(log2(n))



//2. print nodes Nth distance from the root
//traverse BST in level order way
//check the height for each BST node to see whether it should be printed
function printKthLevels(root, k) {
    var arrayKth = [];
    var queue = [];

    if (!root) return;

    //breath first search for tree
    queue.push([root, 0]);

    while(queue.length) {
        var tuple = queue.shift();
        var temp = tuple[0];
        var height = tuple[1];

        if (height == k) arrayKth.push(temp.value);
        if (temp.left) queue.push([temp.left, height + 1]);
        if (temp.right) queue.push([temp.right, height + 1]);
    }
    console.log(arrayKth);
}

var node1 = {value: 1, left: {value: 0}, right: {value:2 }};
var node2 = {value: 1, left: {value: 0, left: {value: -1}, right: {value: 0.5}}, right: {value: 2}};
var node3 = {value: 1, left: {value: 0}, right: {value: 2, left: {value: 1.5}, right: {value: 3, left: {value: 3.25}}}};

printKthLevels(node1, 1); //[0,2]


//3. check whether a binary tree is subtree of another tree
//traverse the binary tree in level order way
//check whether the one that it is currently on is the same as the subtree
function isSameTree(root1, root2) {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false;

    return root1.value == root2.value && isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
}

function checkIfSubTree(root, subtree) {
    //breath first search
    var queue = [];
    var counter = 0;

    //sanity check for root
    if (!root) return;

    queue.push(root);

    while(queue.length) {
        var temp = queue.shift();

        if (temp.data == subtree.data == isSameTree(temp, subtree)) return true;
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
    }
    return false;
}

var node1 = {value: 5, left: {value: 3, left: {value: 1}, right: {value: 2}, right: {value: 7}}};
var node2 = {value: 3, left: {value: 1}, right: {value: 2}};
var node3 = {value: 3, left: {value: 1}};

console.log(checkIfSubTree(node1, node2)); //false
console.log(checkIfSubTree(node1, node3)); //false
console.log(checkIfSubTree(node2, node3)); //false


//4. check whether a tree is a mirror of another tree
//possible cases:
//their root node's key must be the same
//their left subtree of root of a and the right subtree root of b are mirrors
//the right subtree of a and the left subtree of b are mirrors
function isMirrorTrees(tree1, tree2) {
    //both empty
    if (!tree1 && !tree2) {
        return true;
    }

    //one of them is empty, since only one is empty, this is not mirrored
    if (!tree1 || !tree2) return false;

    //both non-empty
    //compare them recursively
    //pass left of one and right of the order
    var checkLeftwithRight = isMirrorTrees(tree1.left, tree2.right);
    var checkRightwithLeft = isMirrorTrees(tree2.right, tree1.left);

    return tree1.value == tree2.value && checkLeftwithRight && checkRightwithLeft;
}

var node1 = {value: 3, left: {value: 1}, right: {value: 2}};
var node2 = {value: 3, left: {value: 2}, right: {value: 1}};
var node3 = {value: 3, left: {value: 1}, right: {value: 2, left: {value: 2.5}}};

console.log(isMirrorTrees(node1, node2)); //true
console.log(isMirrorTrees(node2, node3)) //false
