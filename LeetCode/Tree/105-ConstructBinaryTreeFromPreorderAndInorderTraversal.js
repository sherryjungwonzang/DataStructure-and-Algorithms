//105. Construct Binary Tree from Preorder and Inorder Traversal
//given two integers arrays 'preorder' and 'inorder'
//where pedorder is the preorder traversal of a binary tree 
//and inorder is the inorder traversal of the same tree
//construct and return the binary tree

//Approach:
//using Recursion
var buildTreePreInOrder = (preorder, inorder) => {
    
    //recurse function
    function recurse(pStart, pEnd, inStart, inEnd) {
        //base case
        if (pStart > pEnd || inStart > inEnd) return null; //non-valid tree

        let rootVal = preorder[pStart];
        let inIndex = inorder.indexOf(rootVal); //the index of root
        let nLeft = inIndex - inStart; //the num of values of left node

        let preLeftStart = pStart + 1;
        let preLeftEnd = pStart + nLeft;
        let preRightStart = pStart + 1 + nLeft;
        let preRightEnd = pEnd;

        let inLeftStart = inStart;
        let inLeftEnd = inIndex - 1;
        let inRightStart = inIndex + 1;
        let inRightEnd = inEnd;


        //building a Tree
        let root = new TreeNode(rootVal);
        root.left = recurse(preLeftStart, preLeftEnd, inLeftStart, inLeftEnd);
        root.right = recurse(preRightStart, preRightEnd, inRightStart, inRightEnd);

        return root;
    }

    return recurse(0, preorder.length - 1, 0, inorder.length - 1);
}

buildTreePreInOrder([3,9,20,15,7], [9,3,15,20,7]); //[3,9,20,null,null,15,7]
//preorder: root - left - right
//inorder: left - root - right

//preorder: [3,     9,      20,      15,      7]
//           ^
//         pStart                            pEnd
//                  L       ----------R---------
//             pStart+nLeft
//                    pStart+1+nLeft


//inorder: [9,      3,      15,      20,      7]
//                  ^
//               inIndex
//       inStart                             inEnd
//          L                ----------R---------
//      inIndex-1        inIndex+ 1


buildTreePreInOrder([-1], [-1]); //[-1]
 
buildTreePreInOrder([3,9,11,6,7,20,15,4], [6,11,9,7,3,15,20,4]); //[3,9,20,11,7,15,4,6]


