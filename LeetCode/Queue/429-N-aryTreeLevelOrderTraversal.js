//429. N-ary Tree Level Order Traversal
//given an n-ary tree
//return the level order traversal of its nodes' values

//n-ary tree input serialization is represented in their level order traversal
//each group of children is separated by the null value

//Approach:
//using BFS with queue
var naryLevelOrderTraversal = (root) => {
    //base case
    if (!root) return [];

    let queue = [root];
    let res = [];

    //BFS
    while(queue.length) {
        let level = [];
        let levelSize = queue.length;

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

//queue = [ [1, null, 3, 2, 4, null, 5, 6] ]
//curr = [1, null, 3, 2, 4, null, 5, 6]
//queue = [ [3, 5, 6], [2], [4] ]
//level = [ 1 ]
//res = [ [1], ]

//queue = [ [3, 5, 6], [2], [4] ]
//curr = [1, null, 3, 2, 4, null, 5, 6], [3, 5, 6]
//queue = [ [2], [4] || [5], [6] ]
//level = [ 3 ]

//queue = [ [2], [4] || [5], [6] ]
//curr = [1, null, 3, 2, 4, null, 5, 6], [3, 5, 6], [2]
//level = [ 3 2 ]

//queue = [ [4] || [5], [6] ]
//curr = [1, null, 3, 2, 4, null, 5, 6], [3, 5, 6], [2], [4]
//level = [ 3 2 4 ]
//res = [ [1], [3, 2, 4] ]

//queue = [ [5], [6] ]
//curr = [1, null, 3, 2, 4, null, 5, 6], [3, 5, 6], [2], [4], [5]
//level = [ 5 ]

//queue = [ [6] ]
//curr = [1, null, 3, 2, 4, null, 5, 6], [3, 5, 6], [2], [4], [5], [6]
//level = [ 5 6 ]
//res = [ [1], [3, 2, 4], [5, 6] ]

naryLevelOrderTraversal([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]); //[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
//           1
//      2  3    4    5
//        6  7  8   9  10
//           11 12  13
//           14
