//Kth Smallest Element in a BST (230)
//given the root of biinary search tree and an integer 'k'
//return the k_th smallest value(1-indexed) of all the values of the nodes in the tree

//Approach:
//convert to inorder traversal arry
//loop through converted array and find the 'k - 1' index
var kthSmallest = (root, k) => {
  let arr = []; //to store inorder traversal of BST
  
  //inorder
  inOrder(root, arr);

  //finding the K-th index
  return findKth(arr, k);
}

//Inorder Traversal: left-root-right
function inOrder(root, arr) {
  if (!root) return;

  //carry on the traversal to the other node
  //left - root - right 
  inOrder(root.left, arr);
  arr.push(root.val);
  inOrder(root.right, arr);
}

//Finding Kth 
function findKth(arr, k) {
  //loop through the entire array
  for (let i = 0; i < arr.length; i++) {
    //k-1 = first indexed value
    if (i === k - 1) return arr[i];
  }
}
kthSmallest([3,1,4,null,2], 1); //1
//   3
//  / \
// 1   4
//  \
//   2

//inorder = [1,2,3,4] | k-1 = 1 -> k=2
//           i
//i=1 !== 2
//             i
//i=2 === 2


kthSmallest([5,3,6,2,4,null,null,1], 3); //3
//       5
//      / \
//     3   6
//   /  \
//  2    4
// /
//1

//inorder = [1,2,3,4,5,6] | k-1 = 3 -> k=4
//           i
//i=1 !== 4
//             i
//i=2 !== 4
//               i
//i=3 !== 4
//                 i
//i=4 === 4
