//105. Construct Binary Tree from Preorder and Inorder Traversal
//given two integers arrays 'preorder' and 'inorder'
//where pedorder is the preorder traversal of a binary tree 
//and inorder is the inorder traversal of the same tree
//construct and return the binary tree

//Approach:
//using pre-order and in-oder traversal features - the position of root
//create recurse function with preorder's start and end and inorder's start and end
//using recursive in root.left and root.right - setting the location based on preorder & inorder

//left recurse
//Preorder array - first and second
//pStart + 1: start point of left nodes in preorder array
//pStart + nLeft: end point of left nodes in preorder array
//Inorder array - third and fourth
//inStart: start point of right nodes in inorder array
//inIndex - 1: end point of right nodes in inorder array

//right recurse
//Preorder array - first and second
//pStart + 1 + nLeft: start point of right nodes in preorder array
//pEnd: end point of right nodes in preorder array
//Inorder array - third and fourth
//inIndex + 1: start point of right nodes in inorder array
//inEnd: end point of right nodes in inorder array
var buildTree = (preorder, inorder) => {
    //recurse function
    function recurse(pStart, pEnd, inStart, inEnd) {
        //base case
        if (pStart > pEnd || inStart > inEnd) return null; //non-valid tree

        let rootVal = preorder[pStart];
        let inIndex = inorder.indexOf(rootVal); //the index of root
        let nLeft = inIndex - inStart; //the num of values of left node

        //building a Tree
        let root = new TreeNode(rootVal);
        root.left = recurse(pStart + 1, pStart + nLeft, inStart, inIndex - 1);
        root.right = recurse(pStart + 1 + nLeft, pEnd, inIndex + 1, inEnd);

        return root;
    }
    return recurse(0, preorder.length - 1, 0, inorder.length - 1);
}

buildTree([3,9,20,15,7], [9,3,15,20,7]); //[3,9,20,null,null,15,7]
//preorder: [3, 9, 20, 15, 7]
//inorder: [9, 3, 15, 20, 7]

//recurse
//rootVal = preorder[pStart] = [0]
//inIndex = indexOf(rootVal) = [1]
//nLeft = inIndex - inStart = 1 - 0 = 1 in inorder

//create binary tree
//root = TreeNode(rootVal) = 3
//root.left = recurse(pStart+1 = 1, pStart+nLeft = 1, inStart = 0, inIndex-1 = 0)
//root.right = recurse(pStart+1+nLeft = 2, pEnd = 4, inIndex+1 = 2, inEnd = 4)

buildTree([-1], [-1]); //[-1]
 
buildTree([3,9,11,6,7,20,15,4], [6,11,9,7,3,15,20,4]); //[3,9,20,11,7,15,4,6]
//preorder: [3,9,11,6,7,20,15,4]
//inorder: [6,11,9,7,3,15,20,4]

//recurse
//rootVal = preorder[pStart] = [0]
//inIndex = indexOf(rootVal) = [4]
//nLeft = inIndex - inStart = 4 - 0 = 4 in inorder

//create binary tree
//root = [4] - in inorder array
//root.left = recurse(pStart+1 = 1, pStart+nLeft = 4, inStart = 0, inIndex-1 = 3)
//root.right = recurse(pStart+1+nLeft = 5, pEnd = 7, inIndex+1 = 4, inEnd = 7)

