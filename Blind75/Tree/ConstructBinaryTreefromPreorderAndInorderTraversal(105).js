//Construct Binary Tree from Preorder and Inorder Traversal (105)
//given two integers arrays 'preorder' and 'inorder'
//where pedorder is the preorder traversal of a binary tree 
//and inorder is the inorder traversal of the same tree
//construct and return the binary tree
var buildTree = (preorder, inorder) => {

  function recurse(pStart, pEnd, inStart, inEnd) {
    //base case
    //meaning that we reached out either the left subtree or the right subtree
    if (pStart > pEnd || inStart > inEnd) return null;

    let rootVal = preorder[pStart];
    let inIndex = inorder.indexOf(rootVal); //position of that within the inorder array

    //can find the left node and right node based on the root
    let nLeft = inIndex - inStart;


    //construct Binary Tree from data collected
    let root = new TreeNode(rootVal);

    //in preorder array, left node is in the pStart+1 position
    //for the end of the pre-order, we can use the num to the left of the root value within inorder - to work out where the end of pre-order is going to be with relation to the left subtree
    //within the left subtree for inorder, the starting position is still inStart
    //inEnd - 1: we are subtracting the root from this 
    root.left = recurse(pStart + 1, pStart + nLeft, inStart, inEnd - 1); 
    
    //in preorder array, right subtree 20 is in pStart+1+nLeft position
    //going up to the end of preorder - pEnd
    //in inorder array, the index of '3' + nLeft
    //going up to the end of that array
    root.right = recurse(pStart + 1 + nLeft, pEnd, inIndex + 1, inEnd);

    return root;
  }
  return recurse(0, preorder.length - 1, 0, inorder.length - 1);
}
buildTree([3,9,20,15,7], [9,3,15,20,7]); //[3,9,20,null,null,15,7]
//preorder: [3, 9, 20, 15, 7]
//inorder: [9, 3, 15, 20, 7]

//recurse
//rootVal = preorder[pStart] = 3
//inIndex = indexOf(rootVal) = 1
//nLeft = inIndex - inStart = 1 - 1 = 0 in inorder

//create binary tree
//root = TreeNode(rootVal) = 3
//root.left = recurse(pStart+1 = index(0) = 9, pStart+nLeft = 20, inStart = )

buildTree([-1], [-1]); //[-1]
