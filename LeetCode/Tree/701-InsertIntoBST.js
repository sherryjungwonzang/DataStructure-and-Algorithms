//701. Insert Into BST
//given the root node of a binary search tree (BST) and a value to insert into the tree
//return the root node of the BST after the insertion
//it is guaranteed that the new value does not exist in the original BST
//notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion
//you can return any of them

//Approach:
//using recursion
var insertIntoBST = (root, val) => {
    //special case
    if (root === null) return new TreeNode(val);

    //BST
    if (val < root.val) root.left = insertIntoBST(root.left, val);
    else root.right = insertIntoBST(root.right, val);

    return root;
}
insertIntoBST(root = [4,2,7,1,3], val = 5); //[4,2,7,1,3,5]
//      4           4                   5
//    2   7 ->    2    7    or      2      7
//  1  3        1  3  5           1   3
//                                      4

//val = 5 > root.val -> going to right
//recurse([7], 5)

//recurse([7], 5)
//val = 5 < root.val = 7 -> set on left side
//[4,2,7,1,3,5]

insertIntoBST(root = [40,20,60,10,30,50,70], val = 25); //[40,20,60,10,30,50,70,null,null,25]

insertIntoBST(root = [4,2,7,1,3,null,null,null,null,null,null], val = 5); //[4,2,7,1,3,5]
