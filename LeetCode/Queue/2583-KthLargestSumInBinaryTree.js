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
        let levelSize = queue.length;
        let sum = 0;

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

kthLargestSum(root = [1,2,null,3], k = 1); // 3
//          1   -> sum: 1
//        2     -> sum: 2
//      3       -> sum: 3
