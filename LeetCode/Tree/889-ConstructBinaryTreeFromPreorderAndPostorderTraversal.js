//889. Construct Binary Tree From Preorder And Postorder Traversal
//given two integer arrays, preorder and postorder
//where preorder is the preorder traversal of a bincay tree of distinct values
//and postorder is the postorder traversal of the same tree
//reconstruct and return the binary tree

//Approach:
//using Recursion
var buildTreePrePostOrder = (preorder, postorder) => {

    function buildTree (preStart, preEnd, postStart, postEnd) {
        let root = new TreeNode(preorder[preStart]);

        //base case
        if (preStart > preEnd) return null;
        if (preStart === preEnd) return root;

        let leftVal = preorder[preStart + 1];
        let leftPostIndex = postorder.indexOf(leftVal);
        let nLeft = leftPostIndex - postStart; //the num of values of left node

        //preorder's left and right
        let preLeftStart = preStart + 1;
        let preLeftEnd = preLeftStart + nLeft;
        let preRightStart = preLeftEnd + 1;
        let preRightEnd = preEnd;

        //postorder's left and right
        let postLeftStart = postStart;
        let postLeftEnd = leftPostIndex;
        let postRightStart = leftPostIndex + 1;
        let postRightEnd = postEnd - 1;

        //recursive call on child
        root.left = buildTree(preLeftStart, preLeftEnd, postLeftStart, postLeftEnd);
        root.right = buildTree(preRightStart, preRightEnd, postRightStart, postRightEnd);

        return root;
    };

    return buildTree(0, preorder.length - 1, 0, postorder.length - 1)
}
buildTreePrePostOrder([1,2,4,5,3,6,7], [4,5,2,6,7,3,1]); //[1,2,3,4,5,6,7]
//preorder: root - left - right
//postorder: left - right - root

//preOrder: [1,     2,      4,      5,      3,      6,      7]
//           ^
//       preStart  leftVal                                preEnd
//               preStart+1             preLeftEnd + 1
//                  ---------L---------     --------R---------
//                  preStart+1+nLeft - preLeftEnd

//PostOrder: [4,    5,      2,      6,      7,       3,      1]
//                                                           ^
//         postStart        leftPostIndex+ 1      postEnd-1  postEnd
//                     leftPostIndex
//            ------L---------      --------R-----------
//           ------nLeft----<-

buildTreePrePostOrder([1]); [1]
