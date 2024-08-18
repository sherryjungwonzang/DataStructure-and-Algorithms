//965. Univalued Binary Tree
//a binary tree is uni-valued if every node in the tree has the same value
//given the root of a binary tree, return true if the given tree is uni-valued or false otherwise

//Approach:
//using BFS with queue
var univaluedBinaryTree = (root) => {
    let val = root.val;
    let queue = [root];

    //BFS
    while (queue.length) {
        let curr = queue.shift();

        if (curr.val !== val) return false;
        if (curr.left) queue.push(curr.left); //left childe
        if (curr.right) queue.push(curr.right); //right child
    }

    return true;
}
univaluedBinaryTree([1,1,1,1,1,null,1]); //true
//     1
//  1     1
//1   1     1 

//val = 1
//queue = [ [1,1,1,1,1,null,1], ]
//curr = [1,1,1,1,1,null,1], 
//adding left and right child
//queue = [ [1,1,1], [1,null,1] ]

//curr = [1,1,1,1,1,null,1], [1,1,1]
//adding left and right child
//queue = [ [1,null,1] || [1], [1] ]

//curr = [1,1,1,1,1,null,1], [1,1,1], [1,null,1]
//adding right child
//queue = [ [1], [1], [1] ]

//curr = [1,1,1,1,1,null,1], [1,1,1], [1,null,1], [1]
//no child
//queue = [ [1], [1] ]

//curr = [1,1,1,1,1,null,1], [1,1,1], [1,null,1], [1], [1]
//no child
//queue = [ [1] ]

//curr = [1,1,1,1,1,null,1], [1,1,1], [1,null,1], [1], [1], [1]
//no child
//queue = [ ]

//True

univaluedBinaryTree([2,2,2,5,2]); //false
//     2
//  2     2
//5   2 
//val = 2
//queue = [ [2,2,2,5,2],  ]
//curr = [2,2,2,5,2]
//adding left and right child
//queue = [ [2,5,2], [2] ]

//curr = [2,2,2,5,2], [2,5,2],
//adding left and right child
//queue = [ [2], [5], [2] ]

//curr = [2,2,2,5,2], [2,5,2], [2]
//no child
//queue = [ [5], [2] ]

//curr = [2,2,2,5,2], [2,5,2], [2], [5]
// 5 !== 2

//False
