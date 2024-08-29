//1008. Construct BST From Preorder Traversal
//given an array of integers preorder, which represents the preorder traversal of a BST
//construct the tree and return its root

//it is guaranteed that there is always possible to find a BST with given requirements for the given test cases
//BST is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val
//and any descendant of Node.right has a value strictly greater than Node.val
//a preorder traversal of a binary tree displays the value of the node first,
//then traverses Node.left, then traverse Node.right
var buildBSTPreOrder = (preorder) => {
    let i = 0;

    function bst(lower, upper) {
        //base case
        if (i === preorder.length) return null;

        //traversing
        if (preorder[index] >= lower && preorder[index] < upper) {
            let root = new TreeNode(preorder[i++]);
            root.left = bst(lower, root.val);
            root.right = bst(root.val, upper);

            return root;
        }

        return null;
    }
}
buildBSTPreOrder([1,3]); //[1, null, 3]
//    1            1
//  3      ->  null   3

//i = 0 || bst(-Infi, Infi)
//root = preorder[0] = 1 & i = 0 -> 1
//left: (-Infi, 1)
//right: (1, Infi)
//return root -> bst(-Infi, Infi) = 1

//starting from left: (-Infi, 1)
//i = 1 || bst(-Infi, 1)
//pre[1] = 3 >= Infi && 3 < 1 -> T && F = F
//return null -> bst(-Infi, 1) = null

//right: (1, Infi)
//i = 1 || bst(1, Infi)
//3 >= 1 && 3 < Infi -> T && T = T
//root = preorder[1] = 3
//left: (1, 3)
//right: (3, Infi)
//return root -> bst(1, Infi) = 3

//starting from left: (1, 3)
//i = 2 || bst(1, 3)
//i = preorder length
//return null -> bst(1, 3) = null

//right: (3, Infi)
//i = 2 || bst(3, Infi)
//i = preorder length
//return null -> bst(3, Infi) = null

//bst(-Infi, Infi) = 1
//L: (-Infi, 1) = null
//R: (1, Infi) = 3      ---------- L: bst(1, 3) = null
//                                 R: bst(3, Infi) = null


buildBSTPreOrder([8,5,1,7,10,12]); //[8,5,10,1,7,null,12]
//        8                           8
//    5        1        ->         5      10
//  7  10    12                  1   7       12

//i = 0 || bst(-Infi, Infi)
//root = preorder[0] = 8 & i = 0 -> 1
//return root -> bst(-Infi, Infi) = 8
//left: (-Infi, 8)                                                                                                                                              right: (8, Infi)

//starting from left: (-Infi, 8)                                                                                                                                //after looping left start right: (8, Infi)
//i = 1 || bst(-Infi, 8)                                                                                                                                        //i = 4 || bst(8, Infi)
//5 >= -Infi && 5 < 8 -> T && T = T                                                                                                                             10 >= 8 && 10 < Infi -> T && T = T
//return total -> bst(-Infi, 8) = [5, 1, 7]                                                                                                                     return total -> bst(8, Infi) = [10]
//left: (-Infi, 5)                                                                right: (5, 8)                                                                 left: (8, 10)                                               right: (10, Infi)

//i = 2 || (-Infi, 5)                                                             i = 3 || (5, 8)                                                               i = 5 || (8, 10)                                            i = 5 || (10, Infi)
//1 >= -Infi && 1 < 5 -> T && T = T                                               7 >= 5 && 7 < 8 -> T && T = T                                                 12 >= 8 && 12 < 10 -> T && F = F                            12 >= 10 && 12 < Infi -> T && T = T 
//return root -> bst(-Infi, 5) = [1]                                              return root -> bst(5, 8) = [7]                                                return null -> bst(8, 10) = null                            return root -> bst(10, Infi) = [12]    
//left: (-Infi, 1)                        right: (1, 5)                           left: (5, 7)                        right: (7, 8)                                                                                         left: (10, 12)                        right: (12, Infi)            

//i = 3 || (-Infi, 1)                     i = 3 || (1, 5)                         i = 4 || (5, 7)                     i = 5 || (7, 8)                                                                                       i = 6 || (10, 12)                     i = 6 || (10, 12)
//7 >= -Infi && 7 < 3 -> T && F = F       7 >= 1 && 7 < 5 -> T && F = F           10 >= 5 && 10 < 7 -> T && F = F     10 >= 7 && 10 < 8 -> T && F = F                                                                       6 = preorder length                   6 = preorder length  
//return null -> bst(-Infi, 1) = null     return null -> bst(1, 5) = null         return null -> bst(5, 7) = null     return null -> bst(7, 8) = null                                                                       return null -> bst(10, 12) = null     return null -> bst(12, Infi) = null
