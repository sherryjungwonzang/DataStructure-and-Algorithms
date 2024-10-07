//606. Construct String From Binary Tree
//given the root node of a binary tree, your task is to create a string representation of the tree following a specific set of formatting rules
//the representation should be based on a preorder traversal of the binary tree and must adhere to the following guidelines:
//Node Representation: Each node in the tree should be represented by its integer value
//parentheses for Children: If a node has at least one child (either left or right), 
//its children should be represented inside parentheses

//specifically:
//if a node has a left child, the value of the left child should be enclosed in parentheses immediately following the node's valu
//if a node has a right child, the value of the right child should also be enclosed in parentheses
//the parentheses for the right child should follow those of the left child
//omitting Empty Parentheses: Any empty parentheses pairs (i.e., ()) should be omitted from the final string representation of the tree, 
//with one specific exception: when a node has a right child but no left child
//in such cases, you must include an empty pair of parentheses to indicate the absence of the left child
//this ensures that the one-to-one mapping between the string representation and the original binary tree structure is maintained
//in summary, empty parentheses pairs should be omitted when a node has only a left child or no children
//however, when a node has a right child but no left child, an empty pair of parentheses must precede the representation of the right child to reflect the tree's structure accurately

//Approach:
//using preorder traversal
var treeToString = (root) => {
    let res = '';

    //preorder traversal
    function preorder(root) {
        //base case
        if (!root) return;

        //adding curr node to string
        res += root.val.toString();

        //parentheses to child nodes - left or right
        if (root.left !== null || root.right !== null) {
            res += '(';

            //recursive call on left subtree
            preorder(root.left);

            res += ')';
        }

        //having a right child
        if (root.right !== null) {
            res += '(';

            //recursive call on right subtree
            preorder(root.right);

            res += ')';
        }
    };

    preorder(root);

    return res;
}
//TC: O(n)
//SC: O(n)
treeToString([1,2,3,4]); //"1(2(4))(3)"
//      1
//    2   3
//  4

//res = ''
//preorder([1,2,3,4])
//both left and right child -> L: 1 + '(' + preorder([2, 4]) + ')'
//                             R: '(' + preorder([3]) + ')'

//starting with left side
//preorder([2, 4]) -> only left child: 2 + '(' + preorder([4]) + ')' = 2(4)

//preorder([4]) -> no child, so only adding root value = 4

//right side starting
//preorder([3]) -> no child, so only adding root value = 3

//Back to preorder([1,2,3,4])
//both left and right child -> L: 1 + '(' + preorder([2, 4]) + ')' = 1(2(4))
//                             R: '(' + preorder([3]) + ')' = (3)
//= 1(2(4)) + (3) = 1(2(4))(3)

treeToString([1,2,3,null,4]); //"1(2()(4))(3)"
//       1
//    2     3
//      4

//res = ''
//preorder([1,2,3,null,4])
//both left and right child -> L: 1 + '(' + preorder([2, null, 4]) + ')'
//                             R: '(' + preorder([3]) + ')'

//starting with left side
//no left child -> ()
//preorder([2, null, 4]) -> only right child: 2 + () + '(' + preorder([4]) + ')' = 2()(4)

//preorder([4]) -> no child, so only adding root value = 4

//right side starting
//preorder([3]) -> no child, so only adding root value = 3


//Back to preorder([1,2,3,null,4])
//both left and right child -> L: 1 + '(' + preorder([2, null, 4]) + ')' = 1(2()(4))
//                             R: '(' + preorder([3]) + ')' = (3)
//= 1(2()(4)) + (3) = 1(2()(4))(3)
