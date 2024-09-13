//897. Increasing Order Search Tree
//given the root of a BST
//rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree
//and every node has no left child and only one right child

//Approach:
//using recursion
var increasingBST = (root) => {
    let newRoot = new TreeNode(undefined);
    let curr = newRoot;

    //inorder traversal: left - root - right
    function inorder(node) {
        //base case
        if (node === null) return;

        //left
        inorder(node.left);

        //linking only to right
        node.left = null;
        curr.right = node;
        curr = node;

        //right
        inorder(node.right);
    }

    inorder(root);

    return newRoot.right;
}
increasingBST([5,3,6,2,4,null,8,1,null,null,null,7,9]); //[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
//          5                   1
//        3    6                  2
//     2   4     8    ------->      3
//   1         7   9                  4
//                                      5
//                                        6
//                                          7
//                                            8
//                                              9 

//newRoot = undefined
//curr = undefined

//dfs([5,3,6,2,4,null,8,1,null,null,null,7,9])
//left: dfs([3,2,4,1])
//right: dfs([6,null,8,7,9])

//left side first
//dfs([3,2,4,1])
//left: dfs([2,1])
//right: dfs([4]])

//left first
//dfs([2,1])
//left: dfs([1])
//right: dfs([]])

//left first
//dfs([1]) -> 1's left = null
//            undefined's right = 1
//curr = undefined -> 1

//root again
//dfs([2, 1]) -> 2's left = null
//               1's right = 2
//curr = undefined -> 1 -> 2

//root again
//dfs([3,2,4,1]) -> 3's left = null
//                  2's right = 3
//curr = undefined -> 1 -> 2 -> 3

//and then right
//dfs([4]) -> 4's left = null
//            3's right = 4
//curr = undefined -> 1 -> 2 -> 3 -> 4

//root again
//dfs([5,3,6,2,4,null,8,1,null,null,null,7,9]) -> 5's left = null
//                                                4's right = 5
//curr = undefined -> 1 -> 2 -> 3 -> 4 -> 5

//right side
//dfs([6,null,8,7,9])
//left: dfs([])
//right: dfs([8,7,9])

//no left, so root first
//dfs([6,null,8,7,9]) -> 6's left = null
//                       5's right = 6
//curr = undefined -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

//and then right side
//dfs([8,7,9])
//left: dfs([7])
//right: dfs([9])

//left first
//dfs([7]) -> 7's left = null
//            6's right = 7
//curr = undefined -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

//root again
//dfs([8,7,9]) -> 8's left = null
//                7's right = 8
//curr = undefined -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

//and then right
//dfs([9]) -> 9's left = null
//            8's right = 9
//curr = undefined -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

//1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

increasingBST([5,1,7]); //[1,null,5,null,7]
