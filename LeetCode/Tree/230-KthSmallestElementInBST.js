//230. Kth Smallest Element in a BST
//given the root of biinary search tree and an integer 'k'
//return the k_th smallest value(1-indexed) of all the values of the nodes in the tree

//Approach:
//1) convert to inorder traversal array: left-root-right -> creating inorder function
//2) loop the inorder traversal order and find the k-1the index
var kthSmallest = (root, k) => {
    let arr = []; //to store inorder traversal of BST

    //inorder
    inOrder(root, arr);

    //finding the k-th index
    return findKth(arr, k);
}

//In-order traversal
function inOrder(root, arr) {
    if (!root) return;

    //recursive call
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
}

//finding k-th index
function findKth (arr, k) {
    //loop through the entire array
    for (let i = 0; i < arr.length; i++) {
        if (i === k - 1) return arr[i];
    }
}
kthSmallest([3,1,4,null,2], 1); //1
//   3
//  / \
// 1   4
//  \
//   2

//inorder = [1,2,3,4] | k-1 = 0 -> find index 0
//           i
//i=0 = k=0 -> arr[0] = 1

kthSmallest([5,3,6,2,4,null,null,1], 3); //3
//       5
//      / \
//     3   6
//   /  \
//  2    4
// /
//1

//inorder = [1,2,3,4,5,6] | k-1 = 2 -> find index 2
//           i
//i=0 !== k=2
//             i
//i=1 !== k=2
//               i
//i=2 = k=2 -> arr[2] = 3
