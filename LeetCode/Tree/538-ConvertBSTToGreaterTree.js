//538. Convert BST To Greater Tree
//given the root of a BST
//convert it to a Greater Tree such that every key of the original BST is changed to the original key
//plus the sum of all keys greater than the original key in BST:

//as a reminder, a binary search tree is a tree that satisfies these constraints:
//the left subtree of a node contains only nodes with keys less than the node's key
//the right subtree of a node contains only nodes with keys greater than the node's key
//both the left and right subtrees must also be binary search trees
var BSTToGreaterTree = (root) => {
    let sum = 0;
    
    //traversing from right first
    function traverse(root) {
        //base case
        if (!root) return;

        //starting with right
        traverse(root.right);

        //calculating all root's sum
        root.val += sum;

        //updating
        sum = root.val;

        traverse(root.left);
    };

    traverse(root);

    return root;
}
BSTToGreaterTree(root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]); //[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
//            4
//       1         6
//     0   2      5   7
//           3          8

//traverse([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8])

//root's right: traverse([6, 5, 7, null, null, null, 8])
//starting with the last right of 6's right
//traverse([8]) -> root.val = 8 + 0 = 8
//                 sum = 0 -> 8
//                 left: null

//traverse([7, null, 8]) -> root.val = 7 + 8 = 15
//                          sum = 0 -> 8 -> 15
//                          left: null    

//traverse([6, 5, 7, null, null, null, 8]) -> root.val = 6 + 15 = 21
//                                            sum = 0 -> 8 -> 15 -> 21
//                                            left: traverse([5])

//traverse([5]) -> root.val = 5 + 21 = 26
//                 sum = 0 -> 8 -> 15 -> 21 -> 26
//                 left: null

//traverse([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]) -> root.val = 4 + 26 = 30
//                                                               sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30
//                                                               left: traverse([1, 0, 2, null, null, null, 3])

//root's left: traverse([1, 0, 2, null, null, null, 3])
//starting with the last right of 1's right
//traverse([3]) -> root.val = 3 + 30 = 33
//                 sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30 -> 33
//                 left: null

//traverse([2, null. 3]) -> root.val = 2 + 33 = 35
//                          sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30 -> 33 -> 35
//                          left: null

//traverse([1, 0, 2, null, null, null, 3]) -> root.val = 1 + 35 = 36
//                                            sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30 -> 33 -> 35 -> 36
//                                            left: traverse([0])

//traverse([0]) -> root.val = 0 + 36 = 36
//                 sum = 0 -> 8 -> 15 -> 21 -> 26 -> 30 -> 33 -> 35 -> 36 -> 36
//                 left: null

//[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

BSTToGreaterTree(root = [0,null,1]); //[1,null,1]
//    0
//      1
