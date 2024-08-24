//637. Average of levels in binary tree
//given the root of a binary tree
//return the average value of the nodes on each level in the form of an array

//Approach:
//using BFS with queue
var avgLevelsBinaryTree = (root) => {
    let avg = [];
    let queue = [root];

    //BFS
    while (queue.length) {
        let sum = 0;
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            sum += curr.val; //sum of each level

            //child nodes
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        avg.push(sum / levelSize);
    }
    
    return avg;
}
avgLevelsBinaryTree([3,9,20,null,null,15,7]); //[3.00000,14.50000,11.00000]
//    3
//  9    20
//     15  7

//queue = [ [3,9,20,null,null,15,7] ]
//curr = [3,9,20,null,null,15,7]
//sum = 0 -> 3
//queue = [ [9], [20, 15, 7] ]
//avg = [(3 / 1) = 3.00000, ]

//queue = [ [9], [20, 15, 7] ]
//curr = [3,9,20,null,null,15,7], [9]
//sum = 0 -> 9

//queue = [ [20, 15, 7] ]
//curr = [3,9,20,null,null,15,7], [9], [20, 15, 7] 
//sum = 0 -> 9 -> 29
//queue = [ [15], [7] ]
//avg = [(3 / 1) = 3.00000, (29 / 2) = 14.50000, ]

//queue = [ [15], [7] ]
//curr = [3,9,20,null,null,15,7], [9], [20, 15, 7], [15] 
//sum = 0 -> 15

//queue = [ [7] ]
//curr = [3,9,20,null,null,15,7], [9], [20, 15, 7], [15] , [7]
//sum = 0 -> 15 -> 22
//avg = [(3 / 1) = 3.00000, (29 / 2) = 14.50000, (22 / 2) = 11.00000]

avgLevelsBinaryTree([3,9,20,15,7]); //[3.00000,14.50000,11.00000]
