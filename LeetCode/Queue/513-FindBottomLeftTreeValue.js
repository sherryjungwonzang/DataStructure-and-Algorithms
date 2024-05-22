//513. Find bottom left treee value
//given the root of a binary tree
//return the leftmost value in the last row of the tree

//Approach:
//using BFS with queue and level-order traversal
//putting in the queue from right to left
var bottomLeftTreeValue = (root) => {
    let queue = [root];
    let leftMost;

    //BFS
    while (queue.length > 0) {
        let curr = queue.shift();
        leftMost = curr.val;  //update with the value of dequeued node

        if (curr.right) queue.push(curr.right);
        if (curr.left) queue.push(curr.left);
    }

    return leftMost;
}
//TC: O(n) - n is the num of nodes in binary tree
//SC: O(m) - max num of nodes at any level in the binary tree
bottomLeftTreeValue([1,2,3,4,5]); //4
//        1
//      2    3
//    4    5   

//queue = [1,
//curr = [
//leftMost = 0

//queue = [3, 2
//curr = [1,
//leftMost = 1

//queue = [2
//curr = [1, 3
//leftMost = 1 -> 3

//queue = [5, 4
//curr = [1, 3, 2
//leftMost = 1 -> 3 -> 2

//queue = [4
//curr = [1, 3, 2, 5
//leftMost = 1 -> 3 -> 2 -> 5

//queue = [
//curr = [1, 3, 2, 5, 4]
//leftMost = 1 -> 3 -> 2 -> 5 -> 4

bottomLeftTreeValue([2,1,3]); //1
//   2
// 1   3

bottomLeftTreeValue([1,2,3,4,null,5,6,null,null,7]); //7
//        1
//      2    3
//    4    5   6
//       7
