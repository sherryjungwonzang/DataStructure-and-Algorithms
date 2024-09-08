//589. N-ary Tree Preorder Traversal
//given the root of an n-ary tree
//return the preorder traversal of its nodes' values
//N-aray tree input serialization is represented in their level order traversal
//each group of children is separated by the null value

//Approach:
//using recursion
var naryPreorderTraversal = (root) => {
    //base case
    if (!root) return res;

    //Root - Left - Right
    res.push(root.val);

    for (child of root.children) {
        preorder(child, res);
    }

    return res;
}
naryPreorderTraversal([1,null,3,2,4,null,5,6]); //[1,3,5,6,2,4]
//       1
//   3    2  4 
// 5   6

//preorder([1,null,3,2,4,null,5,6])
//res = [ 1, ]

//first child
//preorder([3, 5, 6], [1])
//res = [1, 3, ]
//Left: preorder([5], [1, 3])
//res = [1, 3, 5, ]
//Right: preorder([6], [1, 3, 5])
//res = [1, 3, 5, 6, ]

//second child
//preorder([2], [1, 3, 5, 6])
//res = [1, 3, 5, 6, 2]

//third child
//preorder([4], [1, 3, 5, 6, 2])
//res = [1, 3, 5, 6, 2, 4]

naryPreorderTraversal([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]); //[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
//          1
// 2    3    4     5
//    6  7   8   9   10
//       11  12  13
//       14

//preorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14])
//res = [ 1, ]

//first child
//preorder([2], [1])
//res = [ 1, 2 ]

//second child
//preorder([3,6,7,11,14], [1, 2])
//res = [ 1, 2, 3, ]

//Left: preorder([6], [ 1, 2, 3, ])
//res = [ 1, 2, 3, 6, ]
//Right: preorder([7], [1, 2, 3, 6, ])
//res = [ 1, 2, 3, 6, 7, ]
//Right: preorder([11], [1, 2, 3, 6, 7, ])
//res = [ 1, 2, 3, 6, 7, 11,]
//Right: preorder([14], [1, 2, 3, 6, 7, 11, ])
//res = [ 1, 2, 3, 6, 7, 11, 14 ]

//third child
//preorder([4, 8, 12], [ 1, 2, 3, 6, 7, 11, 14 ])

//res = [ 1, 2, 3, 6, 7, 11, 14 ]
//preorder([4], [ 1, 2, 3, 6, 7, 11, 14 ])
//res = [ 1, 2, 3, 6, 7, 11, 14, 4 ]
//preorder([8], [ 1, 2, 3, 6, 7, 11, 14, 4 ])
//res = [ 1, 2, 3, 6, 7, 11, 14, 4, 8 ]
//preorder([12], [ 1, 2, 3, 6, 7, 11, 14, 8 ])
//res = [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12 ]

//fourth child
//preorder([5, 9, 13, 10], [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12 ])
//res = [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12, ]

//preorder([5], [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12])
//res = [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5 ]
//Left: preorder([9], [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5 ])
//res = [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9 ]
//Left: preorder([13], [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9 ])
//res = [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13 ]
//Right: preorder([10], [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13 ])
//res = [ 1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10 ]

