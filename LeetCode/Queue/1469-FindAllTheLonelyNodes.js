//1469. Find all the lonely nodes
//in a binary tree, a lonely node that is the only child of its parent node
//the root of the tree is not lonely because it does not have a parent node

//given the 'root' of a binary tree
//return an array containing the values of all lonely nodes in the tree
//return the list in any order

//Approach:
//using BFS with queue
var findLonelyNodes_BFS = (root) => {
    //base case
    if (!root) return [];

    let queue = [root];
    let res = [];
    
    //BFS
    while(queue.length) {
        let curr = queue.shift();

        //checking left side
        if (curr.left && !curr.right) {
            queue.push(curr.left);
            res.push(curr.left.val);
        }

        //checking right side
        if (!curr.left && curr.right) {
            queue.push(curr.right);
            res.push(curr.right.val);
        }

        //checking both
        if (curr.left && curr.right) {
            queue.push(curr.left);
            queue.push(curr.right);
        }
    }
    return res;
}
findLonelyNodes_BFS([1,2,3,null,4]); //[4] - node 4 at the bottom is the only lonely node
//node 1 is the root and is not lonely
//node 2 and 3 have the same parent and are not lonely
//    1
// 2    3
//  4

//queue = [ [1, 2, 3, null, 4] ]
//curr = [1, 2, 3, null, 4]
//queue = [ [2, null, 4], [3] ]

//queue = [ [2, null, 4], [3] ]
//curr = [1, 2, 3, null, 4], [2, null, 4]
//only having right child
//queue = [ [3] || [4] ]
//res = [ 4 ]

//queue = [ [4] ]
//curr = [1, 2, 3, null, 4], [2, null, 4], [3]

//queue = [ ]
//curr = [1, 2, 3, null, 4], [2, null, 4], [3], [4]

//res = [ 4 ]
