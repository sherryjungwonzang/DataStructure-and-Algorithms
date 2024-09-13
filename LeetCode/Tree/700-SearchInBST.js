//700. Search In BST
//given the root of a BST and an integer val
//find the node in the BST that the node's value equals val
//and return the subtree rooted with that node
//if such a node does not exist, return null

//Approach:
//using recursion
var searchBST = (root) => {
    //base case
    if (!root) return null;

    //BST
    if (root.val === val) return root;
    else if (root.val < val) return searchBST(root.right, val); //only right side traversal
    else return searchBST(root.left, val); //root.val > val - only left side traversal
}
searchBST([4,2,7,1,3], 2); //[2,1,3]
//       4
//    2     7
//  1   3

//2 < root -> only traverse left side
//left side: dfs([2,1,3])

//dfs([2,1,3])
//root = 2
//[2,1,3]

searchBST([4,2,7,1,3], 5); //[]
//       4
//    2     7
//  1   3

//5 > root -> only traverse right side
//right side: dfs([7])

//dfs([7])
//root != 5 & no child
//[]
