//814. Binary Tree Pruning
//given the root of a binary tree
//return the same tree where every subtree (of the given tree) not containing a 1 has been removed
//a subtree of a node node is node plus every node that is a descendant of node

//Approach:
//using recursion
var binaryTreePruning = (root) => {
    //recursive call on child nodes
    root.right = root.right && pruneTree(root.right);
    root.left = root.left && pruneTree(root.left);

    //no 1 - to prune
    if (root.val === 0 && !root.right && !root.left) return null;
    else return root;
}
binaryTreePruning([1,1,0,1,1,0,1,0]); //[1,1,0,1,1,null,1]
//        1                     1
//    1       0     ->       1     0
//  1   1   0   1          1   1     1
//0

//[1,1,0,1,1,0,1,0] -> Left: [1,1,1,0] & recursion([1,1,1,0]):     1
//                                                               1   1
//                     Right: [0,0,1] & recursion([0,0,1]):        0
//                                                             null  1

//starting with Left
//[1,1,1,0] ->  Left: [1,0] & recursion([1,0]) = 1          -------> [1,1,1,0]'s left: 1               1
//              Right: [1] & recursion([1]) = 1                                  right: 1            1   1

//[1,0] ->  Left: [0] & recursion([0]) = prune(null)        -------> [1, 0]'s left: prune              1                    || [1] ->  Left: null                           -------> [1, 0]'s left: null             1 
//          Right: [] & recursion([]) = null                                  right: null         null    null                         Right: null                                            right: null       null  null
//root = 1 && left and right is null -> 1                                                                                      root = 1 && left and right is null -> root
//                                                                                                                             1                                         
//[0] ->  Left: null                                   [1] ->  Left: null   
//        Right: null                                          Right: null
//root = 0 && left and right is null -> prune          root = 1 && left and right is null -> root
//null                                                 1


//move to Right
//[0,0,1] ->  Left: [0] & recursion([0]) = prune(null)          -------> [0,0,1]'s left: prune              0
//            Right: [1] & recursion([1]) = 1                                      right: 1            null    1

//[0] ->  Left: null                                   [1] ->  Left: null   
//        Right: null                                          Right: null
//root = 0 && left and right is null -> prune          root = 1 && left and right is null -> root
//null                                                 1

//[1,1,0,1,1,null,1]

binaryTreePruning([1,null,0,0,1]); //[1,null,0,null,1]
//    1         1
//      0   ->    0
//    0   1         1


binaryTreePruning([1,0,1,0,0,0,1]); //[1,null,1,null,1]
//        1               1
//    0       1     ->      1
//  0   0   0   1             1
