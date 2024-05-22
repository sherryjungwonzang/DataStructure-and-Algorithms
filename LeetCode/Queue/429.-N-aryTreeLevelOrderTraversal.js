//429. N-ary Tree Level Order Traversal
//given an n-ary tree
//return the level order traversal of its nodes' values

//n-ary tree input serialization is represented in their level order traversal
//each group of children is separated by the null value

//Approach:
//BFS with queue
var naryLevelOrderTraversal = (root) => {
    if (!root) return [];

    let queue = [root];
    let res = [];

    //BFS
    while(queue.length) {
        let level = [];
        let levelSize = queue.length; //when levelSize is 0 - push level into res

        while(levelSize) {
            let curr = queue.shift();

            for (let i = 0; i < curr.children.length; i++) {
                //if there are children
                if (curr.children[i]) queue.push(curr.children[i]);
            }
            level.push(curr.val);
            levelSize--;
        }
        res.push(level);
    }
    return res;
}
//TC: O(n)
//SC: O(n)
naryLevelOrderTraversal([1,null,3,2,4,null,5,6]); //[[1], [3,2,4], [5,6]]
//      1
//  3    2  4
//5  6

naryLevelOrderTraversal([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]); //[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
//           1
//      2  3    4    5
//        6  7  8   9  10
//           11 12  13
//           14
