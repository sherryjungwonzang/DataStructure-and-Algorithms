//1382. Balance a Binary Search Tree
//given the root of a binary search tree
//return a balanced binary search tree with the same node values
//if there is more than one answer, return any of them

//Binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1

//Approach:
//utilizing InOrder Traversal to create a BST
//using two helper functions: inOrder() and buildTree() functions
var balanceBST = (root) => {
    let arr = []; //to store the inorder traversal of unbalanced BST

    inOrder(root, arr);

    return buildTree(arr);
}

//1) Inorder traversal
function inOrder(root, arr) {
    //base case
    if (!root) return;

    //recursive calls
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
}

//2) building a tree
function buildTree(arr) {
    //base case
    if (arr.length === 0) return null;

    //find root
    let mid = Math.floor(arr.length / 2);

    //finding the values
    let root = new TreeNode(arr[mid]);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid + 1);

    //build a tree
    root.left = buildTree(left);
    root.right = buildTree(right);

    return root;
}
balanceBST([1,null,2,null,3,null,4,null,null]); //[2,1,3,null,null,null,4] - this is not the only correct answer | [3,1,4,null,2] is also correct
// 1 
//   2
//     3
//       4

//inOrder() -> [1,2,3,4]
//buildTree
//[1, 2, 3, 4]
//   mid
//head = 2                     2
//left = 1   ----------->    1   3  
//right = 3, 4                     4

balanceBST([2,1,3]); //[2,1,3]
//  2
//1   3

//inOrder() -> [1,2,3]
//buildTree
//[1, 2, 3]
//   mid
//head = 2                        2
//left = 1     ------------>    1   3
//right = 3
