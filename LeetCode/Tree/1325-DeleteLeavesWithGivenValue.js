//1325. Delete Leaves With Given Value
//given a binary tree 'root' and an integer 'target'
//delete all the leaf nodes with value target

//once delete a leaf node with value 'target'
//if its parent node becomes a leaf node and has the value 'target'
//it should also be deleted
var deleteLeaves = (root, target) => {
    //base case
    if (!root) return null;

    //child nodes
    root.left = deleteLeaves(root.left, target);
    root.right = deleteLeaves(root.right, target);

    //leaf node
    if (!root.left && !root.right && root.val === target) return null;

    return root;
}
//TC: O(n) - the num of nodes in the tree
//SC: O(n) - height of the tree
deleteLeaves(root = [1,2,3,2,null,2,4], target = 2); //[1, null, 3, null, 4]
//      1                    1                  1
//   2     3        ->    2     3         ->        3
// 2     2   4                      4                   4

deleteLeaves(root = [1,3,3,3,2], target = 3); //[1,3,null,null,2]
//      1                    1  
//   3     3        ->    3      
// 3    2                  2 

deleteLeaves(root = [1,2,null,2,null,2], target = 2); //[1]
//          1                 1             1          1
//      2        ->        2      ->    2       -> 
//   2                 2 
// 2
