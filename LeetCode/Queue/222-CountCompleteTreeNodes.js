//222. Count Complete Tree Nodes
//given the root of a complete binary tree
//return the number of the nodes in the tree
//every level, except possibly the last, is completely filled in a complete binary tree
//and all nodes in the last level are as far left as possible
//it can have between 1 and 2_h nodes inclusive at the last level h

//Approach:
//using BFS with queue
var completeTreeNodes = (root) => {
    //base case
    if (!root) return 0;

    let res = [];
    let queue = [ root ];

    //BFS
    while (queue.length) {
        let curr = queue.shift();

        res.push(curr.val);

        //child nodes
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }

    return res.length;
}
completeTreeNodes([1, 2, 3, 4, 5, 6]); //6
//      1
//   2     3
// 4  5   6

//res = []

//queue = [ [1, 2, 3, 4, 5, 6] ]
//curr = [1, 2, 3, 4, 5, 6]
//res = [ 1, ]
//queue = [ [2, 4, 5], [3, 6] ]

//queue = [ [2, 4, 5], [3, 6] ]
//curr = [1, 2, 3, 4, 5, 6], [2, 4, 5]
//res = [ 1, 2, ]
//queue = [ [3, 6], || [4], [5] ]

//queue = [ [3, 6], || [4], [5] ]
//curr = [1, 2, 3, 4, 5, 6], [2, 4, 5], [3, 6]
//res = [ 1, 2, 3, ]
//queue = [ [4], [5] || [6] ]

//queue = [ [4], [5] || [6] ]
//curr = [1, 2, 3, 4, 5, 6], [2, 4, 5], [3, 6], [4]
//res = [ 1, 2, 3, 4, ]
//queue = [ [5] || [6] ]

//queue = [ [5] || [6] ]
//curr = [1, 2, 3, 4, 5, 6], [2, 4, 5], [3, 6], [4], [5]
//res = [ 1, 2, 3, 4, 5, ]
//queue = [ [6] ]

//queue = [ [6] ]
//curr = [1, 2, 3, 4, 5, 6], [2, 4, 5], [3, 6], [4], [5], [6]
//res = [ 1, 2, 3, 4, 5, 6 ]
//queue = [ ]

//res.length = 6

completeTreeNodes([]); //0

completeTreeNodes([1]); //1
