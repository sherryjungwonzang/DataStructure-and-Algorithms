//559. Maximum Depth Of Nary Tree
//given a n-ary tree, find its maximum depth
//the maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node
//Nary-tree input serialization is represented in their level order traversal
//each group of children is separated by th null value

//Approach:
//using BFS with queue
var maxDepthNaryTree = (root) => {
    //base case
    if (!root) return 0;

    let queue = [root];
    let depth = 0;
 
    //BFS
    while (queue.length) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            //adding children to the queue
            for (let child of curr.children) {
                queue.push(child); 
            }
        }
        depth++;
    }
    return depth;
}
maxDepthNaryTree(root = [1,null,3,2,4,null,5,6]); //3
//      1
//   3  2  4 
// 5  6 

maxDepthNaryTree(root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]); //5
//           1
//   2    3       4     5 
//      6   7   8     9  10
//          11  12   13
//          14
