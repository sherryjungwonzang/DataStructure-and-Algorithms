//104. Maximum Depth of Binary Tree
//given the root of a binary tree
//return its maximum depth - the num of nodes along the longest path from the root node down to the farthest leaf node

//Approach:
//Recursive - recurrence relation - root + recursive(max(left, right))
var maxDepth = (root) => {
    //base case
    if (root === null) return 0;

    //recursive call
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
maxDepth([3,9,20,null,null,15,7]); //3
//          3
//        9  20
//         15  17

maxDepth([1,null,2]); //2
//      1
//        2
