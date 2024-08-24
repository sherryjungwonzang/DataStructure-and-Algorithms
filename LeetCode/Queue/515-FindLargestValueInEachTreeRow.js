=//515. Find largest value in each tree row
//given the root of a binary tree
//return an array of the largest value in each row of the tree - 0-indexed

//Approach:
//using BFS with queue
var findLargestValueInTreeRow = (root) => {
    //base case
    if (!root) return [];

    let res = [];
    let queue = [root];

    //BFS
    while(queue.length) {
        let max = -Infinity;
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            max = Math.max(max, curr.val); //updating max value from each row

            //recursive call
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        res.push(max);
    }

    return res;
}
findLargestValueInTreeRow([1,3,2,5,3,null,9]); //[1,3,9]
//      1
//    3   2
//  5  3    9

//queue = [ [1,3,2,5,3,null,9] ]
//curr = [1,3,2,5,3,null,9]
//max = -Infinity -> max(-Infinity, 1) = 1
//queue = [ [3,5,3], [2,null,9] ]
//res = [1, ]

//queue = [ [3,5,3], [2,null,9] ]
//curr = [1,3,2,5,3,null,9], [3,5,3]
//max = -Infinity -> max(-Infinity, 1) = 1 -> (1, 3) = 3
//queue = [ [2,null,9], [5], [3] ]

//queue = [ [2,null,9], [5], [3] ]
//curr = [1,3,2,5,3,null,9], [3,5,3], [2,null,9]
//max = -Infinity -> max(-Infinity, 1) = 1 -> (1, 3) = 3 -> (3, 2) = 3
//res = [1, 3, ]
//queue = [ [5], [3], [9] ]

//queue = [ [5], [3], [9] ]
//curr = [1,3,2,5,3,null,9], [3,5,3], [2,null,9], [5]
//max = -Infinity -> max(-Infinity, 1) = 1 -> (1, 3) = 3 -> (3, 2) = 3 -> (3, 5) = 5

//queue = [ [3], [9] ]
//curr = [1,3,2,5,3,null,9], [3,5,3], [2,null,9], [5], [3]
//max = -Infinity -> max(-Infinity, 1) = 1 -> (1, 3) = 3 -> (3, 2) = 3 -> (3, 5) = 5 -> (5, 3) = 5

//queue = [ [9] ]
//curr = [1,3,2,5,3,null,9], [3,5,3], [2,null,9], [5], [3], [9]
//max = -Infinity -> max(-Infinity, 1) = 1 -> (1, 3) = 3 -> (3, 2) = 3 -> (3, 5) = 5 -> (5, 3) = 5 -> (5, 9) = 9
//res = [1, 3, 9]

findLargestValueInTreeRow([1,2,3]); //[1,3]
//      1
//    2   3
