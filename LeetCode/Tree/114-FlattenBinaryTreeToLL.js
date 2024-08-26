//114. Flatten Binary Tree to Linked List
//given the root of a binary tree, flatten the tree into a "linked list"
//the linked list should use the same TreeNode class where the right child pointer points to the next node in the list 
//and the left child pointer is always null
//the linked list should be in the same order as a pre-order traversal of the binary tree
var flattenBinaryTree = (root) => {
    let prev = null; //updating with curr node

    function recurse(node) {
        if (node !== null) {
            //DFS traversal to next level from right to left
            recurse(node.right);
            recurse(node.left);

            //flatten binary tree to right skewed LL
            node.right = prev;
            node.left = null;
            prev = node;
        }

        return;
    }

    recurse(root);
}
flattenBinaryTree([1,2,5,3,4,null,6]); //[1,null,2,null,3,null,4,null,5,null,6]
//      1                   1
//   2    5         ->        2
// 3  4     6                   3
//                                4
//                                  5
//                                    6

//prev = null
//starting from recurse([1,2,5,3,4,null,6])                 -> node.right = [2,null,3,null,4,null,5,null,6]
//R: recurse([5,null,6]): [5,null,6]                           node.left = null
//L: recurse([2,3,4]): [2,null,3,null,4,null,5,null,6]         prev = [1,null,2,null,3,null,4,null,5,null,6]

//1's Right
//recurse([5,null,6])       -> node.right = [6]
//R: recurse([6]): [6]         node.left = null
//L: null                      prev = [6] -> [5,null,6]

//recurse([6])
//R: null
//L: null
//-> node.right = null
//node.left = null
//prev = null -> [6]

//1's Left
//recurse([2,3,4])                              -> node.right = [3,null,4,null,5,null,6]
//R: recurse([4]): [4,null,5,null,6]               node.left = null
//L: recurse([3]): [3,null,4,null,5,null,6]        prev = [3,null,4,null,5,null,6] -> [2,null,3,null,4,null,5,null,6]

//recurse([4])
//R: null
//L: null
//-> node.right = [5,null,6]
//node.left = null
//prev = [5,null,6] -> [4,null,5,null,6]

//recurse([3])
//R: null
//L: null
//-> node.right = [4,null,5,null,6]
//node.left = null
//prev = [4,null,5,null,6] -> [3,null,4,null,5,null,6]

//[1,null,2,null,3,null,4,null,5,null,6]

flattenBinaryTree([]); []

flattenBinaryTree([0]); [0]
