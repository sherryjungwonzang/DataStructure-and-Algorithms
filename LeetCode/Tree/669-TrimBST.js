//669. Trim a BST
//given the root of a binary search tree and the lowest and highest boundaries as low and high
//trim the tree so that all its elements lies in [low, high]
//trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant) 
//it can be proven that there is a unique answer
//return the root of the trimmed binary search tree
//note that the root may change depending on the given bounds

//Approach:
//using recursion
var trimBST = (root, low, high) => {
    //base case
    if (root === null) return null;

    //BST - checking the range
    if (root.val > high) return trimBST(root.left, low, high);
    if (root.val < low) return trimBST(root.right, low, high);

    //connect left and right after trimming
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);

    return root;
}
trimBST(root = [1,0,2], low = 1, high = 2); //[1, null, 2]
//   1            1
// 0   2   ->        2

//starting with trimBST([1,0,2], 1, 2)              -> L: null, R: [2]
//root.val = 1 === low
//L: trimBST([0], 1, 2): skip
//R: trimBST([2], 1, 2)

//trimBST([0], 1, 2) -> root.val = 0 < low -> skip and go only right

//trimBST([2], 1, 2) -> root.val = 2 === high       -> L: null, R: null
//L: trimBST(null, 1, 2)
//R: trimBST(null, 1, 2)

//root.val = 1  &  L: null, R: [2]
//[1, null, 2]

trimBST(root = [3,0,4,null,2,null,null,1], low = 1, high = 3); //[3,2,null,1]
//      3               3
//   0     4          2
//     2      ->    1
//   1

//starting with trimBST([3,0,4,null,2,null,null,1], 1, 3)   -> L: [2, 1], R: null 
//root.val = 3 === high
//L: trimBST([0, null, 2, 3], 1, 3)
//R: trimBST([4], 1, 3): skip

//trimBST([4], 1, 3) -> root.val = 4 > high -> skip and go only left

//trimBST([0, null, 2, 3], 1, 3)                    -> L: [2, 1], R: null
//root.val = 0 < low -> skip and go only right
//trimBST([2, 1], 1, 3)

//trimBST([2, 1], 1, 3)                             -> L: [1], R: null
//root.val = 2 -> between low and high value        
//L: trimBST([1], 1, 3)
//R: trimBST(null, 1, 3)

//trimBST([1], 1, 3) -> root.val = 1 === low        -> L: null, R: null
//L: trimBST(null, 1, 3)
//R: trimBST(null, 1, 3)

//root.val = 3  &  L: [2, 1], R: null
//[3, 2, null, 1]
