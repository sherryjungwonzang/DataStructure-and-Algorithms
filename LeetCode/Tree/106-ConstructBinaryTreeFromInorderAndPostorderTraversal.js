//106. Construct Binary Tree From Inorder And Postorder Traversal
//given two integer arrays 'inorder' and 'postorder'
//where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree
//construct and return the binary tree

//Approach:
//using Recursion
var buildTreeInPostOrder = (inorder, postorder) => {
    //base case
    if (inorder.length === 0 || postorder.length === 0) return null;

    let rootVal = postorder[postorder.length - 1];
    let inIndex = inorder.indexOf(rootVal); //root index in inorder array

    //inorder left and right 
    let leftInorder = inorder.slice(0, inIndex);
    let rightInorder = inorder.slice(inIndex + 1);

    //postorder left and right 
    let leftPostorder = postorder.slice(0, leftInorder.length);
    let rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);

    //building a tree
    let root = new TreeNode(rootVal);
    root.left = buildTreeInPostOrder(leftInorder, leftPostorder);
    root.right = buildTreeInPostOrder(rightInorder, rightPostorder);

    return root;
}
buildTreeInPostOrder([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]); //[3, 9, 20, null, null, 15, 7]
//inorder: left - root - right
//postorder: left - right - root

//Inorder: [9, 3, 15, 20, 7]
//          L  ^  ----R----
//          inIndex
//Left: slice(0, inIndex)
//Right: slice(inIndex + 1)

//Postorder: [9, 15, 7, 20, 3]
//            L  ----R----  ^
//                        rootVal
//Left: slice(0, leftInorder.length)
//Right: slice(leftInorder.length, postOrder.length - 1)

buildTreeInPostOrder([-1], [-1]); //[-1]
