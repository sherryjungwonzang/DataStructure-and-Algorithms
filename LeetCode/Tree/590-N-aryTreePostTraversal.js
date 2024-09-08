//590. N-ary Tree Post Traversal
//given the root of an n-ary tree
//return the postorder traversal of its nodes' values
//N-aray tree input serialization is represented in their level order traversal
//each group of children is separated by the null value

//Approach:
//using recursion
var naryPostorderTraversal = (root) => {
    //base case
    if (!root) return res;

    //Left - Right - Root
    for (child of root.children) {
        postorder(child, res);
    }

    res.push(root.val);

    return res;
}
naryPostorderTraversal([1,null,3,2,4,null,5,6]); //[5,6,3,2,4,1]
//       1
//   3    2  4 
// 5   6

//res = [ ]
//postorder([1,null,3,2,4,null,5,6])

//first child
//Left first: postorder([5], []])
//res = [5, ]
//Right: postorder([6], [5, ])
//res = [5, 6, ]
//back to root: postorder([3, 5, 6], [5, 6])
//res = [5, 6, 3]

//second child
//postorder([2], [5, 6, 3])
//res = [5, 6, 3, 2, ]

//third child
//postorder([4], [5, 6, 3, 2])
//res = [5, 6, 3, 2, 4]

//back to root: postorder([1,null,3,2,4,null,5,6], [5, 6, 3, 2, 4])
//res = [5, 6, 3, 2, 4, 1]

naryPostorderTraversal([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]); //[2,6,14,11,7,3,12,8,4,13,9,10,5,1]
//          1
// 2    3    4     5
//    6  7   8   9   10
//       11  12  13
//       14

//res = [ ]
//postorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14])

//first child
//postorder([2], []])
//res = [2, ]

//second child
//Left first: postorder([6], [2, ]])
//res = [2, 6,  ]
//Right: postorder([14], [2, 6, ])
//res = [2, 6, 14  ]
//Right: postorder([11], [2, 6, 14 ])
//res = [2, 6, 14, 11  ]
//Right: postorder([7], [2, 6, 14, 11])
//res = [2, 6, 14, 11, 7  ]

//back to root: postorder([3, 6, 7, 11, 14], [2, 6, 14, 11, 7])
//res = [2, 6, 14, 11, 7, 3  ]

//third child
//Left first: postorder([12], [2, 6, 14, 11, 7, 3])
//res = [2, 6, 14, 11, 7, 3, 12  ]
//Left first: postorder([8], [2, 6, 14, 11, 7, 3, 12])
//res = [2, 6, 14, 11, 7, 3, 12, 8  ]

//back to root:  postorder([4, 8, 12], [2, 6, 14, 11, 7, 3, 12, 8])
//res = [2, 6, 14, 11, 7, 3, 12, 8, 4,  ]

//fourth child
//Left first: postorder([13], [2, 6, 14, 11, 7, 3, 12, 8, 4])
//res = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13 ]
//Left first: postorder([9], [2, 6, 14, 11, 7, 3, 12, 8, 4, 13])
//res = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9 ]
//Right: postorder([10], [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9])
//res = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10 ]

//back to root:  postorder([5, 9, 13, 10], [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10])
//res = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5 ]

//back to root:  postorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5])
//res = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]
