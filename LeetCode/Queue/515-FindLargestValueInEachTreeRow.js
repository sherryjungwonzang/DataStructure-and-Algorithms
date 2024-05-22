//515. Find largest value in each tree row
//given the root of a binary tree
//return an array of the largest value in each row of the tree - 0-indexed

//Approach:
//using queue and BFS
var findLargestValueInTreeRow = (root) => {
    //base case
    if (!root) return [];

    let res = [];
    let queue = [root];

    //BFS
    while(queue.length) {
        let level = queue.length;
        let max = -Infinity;

        for (let i = 0; i < level; i++) {
            let curr = queue.shift();
            max = Math.max(max, curr.val); //collecting max value from each row

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

findLargestValueInTreeRow([1,2,3]); //[1,3]
//      1
//    2   3
