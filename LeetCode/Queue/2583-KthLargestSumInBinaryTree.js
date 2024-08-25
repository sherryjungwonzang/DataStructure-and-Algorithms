//2583. Kth Largest Sum In Binary Tree
//given the 'root' of a binary tree and a positive integer 'k'
//the level sum in the tree is the sum of the values of the nodes that are on the same level
//return the k_th largest level sum in the tree
//if there are fewer than k levels in the tree - return -1

//Approach:
//using BFS with queue
var kthLargestSum = (root, k) => {
    //base case
    if (!root) return 0;

    let arr = [];
    let queue = [root];

    //BFS
    while (queue.length) {
        let sum = 0;
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            sum += curr.val; //calculating the sum of each level

            //child node
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        arr.push(sum);
    }

    return arr.sort((a, b) => b - a)[k - 1] || -1;
}
kthLargestSum(root = [5,8,9,2,1,3,7,4,6], k = 2); // 13
//            5             -> sum: 5
//        8        9        -> sum: 17
//      2   1    3   7      -> sum: 13
//    4   6                 -> sum: 10

//queue = [ [5,8,9,2,1,3,7,4,6] ]
//curr = [5,8,9,2,1,3,7,4,6]
//sum = 0 -> 5
//queue = [ [8,2,1,4,6], [9,3,7] ]
//arr = [5, ]

//queue = [ [8,2,1,4,6], [9,3,7] ]
//curr = [5,8,9,2,1,3,7,4,6], [8,2,1,4,6]
//sum = 0 -> 8
//queue = [ [9,3,7], [2,4,6], [1] ]

//queue = [ [9,3,7], [2,4,6], [1] ]
//curr = [5,8,9,2,1,3,7,4,6], [8,2,1,4,6], [9,3,7]
//sum = 0 -> 8 -> 17
//queue = [ [2,4,6], [1], [3], [7] ]
//arr = [5, 17, ]

//queue = [ [2,4,6], [1], [3], [7] ]
//curr = [5,8,9,2,1,3,7,4,6], [8,2,1,4,6], [9,3,7], [2,4,6]
//sum = 0 -> 2
//queue = [ [1], [3], [7], [4], [6] ]

//queue = [ [1], [3], [7], [4], [6] ]
//curr = [5,8,9,2,1,3,7,4,6], [8,2,1,4,6], [9,3,7], [2,4,6], [1]
//sum = 0 -> 2 -> 3

//queue = [ [3], [7], [4], [6] ]
//curr = [5,8,9,2,1,3,7,4,6], [8,2,1,4,6], [9,3,7], [2,4,6], [1], [3]
//sum = 0 -> 2 -> 3 -> 6

//queue = [ [7], [4], [6] ]
//curr = [5,8,9,2,1,3,7,4,6], [8,2,1,4,6], [9,3,7], [2,4,6], [1], [3], [7]
//sum = 0 -> 2 -> 3 -> 6 -> 13
//arr = [5, 17, 13, ]

//queue = [ [4], [6] ]
//curr = [5,8,9,2,1,3,7,4,6], [8,2,1,4,6], [9,3,7], [2,4,6], [1], [3], [7], [4]
//sum = 0 -> 4

//queue = [ [6] ]
//curr = [5,8,9,2,1,3,7,4,6], [8,2,1,4,6], [9,3,7], [2,4,6], [1], [3], [7], [4], [6]
//sum = 0 -> 4 -> 10
//arr = [5, 17, 13, 10]

//arr sorting : [17, 13, 10, 5] -> k - 1th element
//13

kthLargestSum(root = [1,2,null,3], k = 1); // 3
//          1   -> sum: 1
//        2     -> sum: 2
//      3       -> sum: 3
