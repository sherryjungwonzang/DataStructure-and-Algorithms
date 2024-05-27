//637. Average of levels in binary tree
//given the root of a binary tree
//return the average value of the nodes on each level in the form of an array

//Approach:
//using Queue with BFS
var avgLevelsBinaryTree = (root) => {
    let avg = [];
    let queue = [root];

    //BFS
    while (queue.length) {
        let sum = 0;
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            sum += curr.val;

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        avg.push(sum / levelSize);
    }
    return avg;
}
avgLevelsBinaryTree([3,9,20,null,null,15,7]); //[3.00000,14.50000,11.00000]

avgLevelsBinaryTree([3,9,20,15,7]); //[3.00000,14.50000,11.00000]
