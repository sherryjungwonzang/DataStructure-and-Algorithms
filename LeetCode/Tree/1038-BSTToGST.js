//1038. BST To GST
//given the root of a Binary Search Tree (BST)
//convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST
//as a reminder, a binary search tree is a tree that satisfies these constraints:
//the left subtree of a node contains only nodes with keys less than the node's key
//the right subtree of a node contains only nodes with keys greater than the node's key
//both the left and right subtrees must also be binary search trees

//Approach:
//using reverse of inorder traversal
var bstToGST = (root) => {
    let sum = 0;

    //reverse inorder traversal
    function reverseInorder(root) {
        //base case
        if (!root) return;

        //right-root-left
        reverseInorder(root.right);
        sum += root.val; //updating the sum
        root.val = sum; //updating the curr node's val
        reverseInorder(root.left);
    };

    reverseInorder(root);

    return root;
}
bstToGST(root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]); //[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
//                4
//         1            6
//      0    2        5    7
//             3             8

//starting from reverseInorder([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8])
//R: reverseInorder([6, 5, 7, null, null, null, 8]) = 26
//sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30
//root.val updating as 30

//L: reverseInorder([1, 0, 2, null, null, null, 3])

//4's right first
//reverseInorder([6, 5, 7, null, null, null, 8]) -> R: reverseInorder([7, null, 8]) = 15
//                                                  L: reverseInorder([5])                      ->  R and L: null
//-> sum = 0 -> 8 -> 15 -> 21                                                                       sum = 0 -> 8 -> 15 -> 21 -> 26          
//root.val updating as 21                                                                           root.val updating as 26

//reverseInorder([7, null, 8]) -> R: reverseInorder([8]) = 8
//                                L: null
//-> sum = 0 -> 8 -> 15
//root.val updating as 15

//reverseInorder([8]) -> R and L: null
//sum = 0 -> 8
//root.val updating as 8

//4's left then
//reverseInorder([1, 0, 2, null, null, null, 3]) -> R: reverseInorder([2, null, 3]) = 35
//                                                  L: reverseInorder([0])                  -> R and L: null  
//sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30 -> 33 -> 35 -> 36                                       sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30 -> 33 -> 35 -> 36 -> 36
//root.val updating as 36

//reverseInorder([2, null, 3) -> R: reverseInorder([3]) = 33
//                               L: null   
//-> sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30 -> 33 -> 35
//root.val updating as 35

//reverseInorder([3]) -> R and L: null
//sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30 -> 33
//root.val updating as 33

//36

bstToGST(root = [0,null,1]); //[1,null,1]
