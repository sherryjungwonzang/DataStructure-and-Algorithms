//617. Merge Two Binary Trees
//given two binary trees root1 and root2
//the merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node
//otherwise, the NOT null node will be used as the node of the new tree
//return the merged tree

//Approach:
//using recursion
var mergeTwoBinaryTrees = (root1, root2) => {
    //if one is missing return the other
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    //adding
    root1.val += root2.val;

    //child
    root1.left = mergeTwoBinaryTrees(root1.left, root2.left);
    root1.right = mergeTwoBinaryTrees(root1.right, root2.right);

    return root1;
}
mergeTwoBinaryTrees([1,3,2,5], [2,1,3,null,4,null,7]); //[3,4,5,5,4,null,7]
//      1               2                       3
//    3   2     &     1   3         ->        4   5  
//  5                   4   7               5  4   7

//starting with merge([1,3,2,5], [2,1,3,null,4,null,7]) = 3
//1 + 2 = 3 as root
//left: merge([3, 5], [1, null, 4])
//right: merge([2], [3, null, 7])

//merge([2, 5], [1, null, 4]) = 4
//3 + 1 = 4 as root
//left: merge([5], []) = 5
//right: merge([], []) = null

//merge([5], [])
//nothing on root2's right 5 + 0 = 5 as root

//merge([2], [3, null, 7]) = 5
//2 + 3 = 5 as root
//left: merge([], []) = null
//right: merge([], [7]) = 7

//merge([], [7])
//nothing on root2's left 7 + 0 = 7 as root

//[3,4,5,5,4,null,7]

mergeTwoBinaryTrees([1], [1, 2]); //[2,2]
//  1      &     1
//             2

//starting with merge([1], [1, 2]) = 2
//1 + 1 = 2 as root
//left: merge([], []) = null
//right: merge([2], []) = 2

//merge([2], [])
//nothing on root2's right 2 + 0 = 2 as root

//[2, 2]
