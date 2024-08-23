//103. Binary Tree Zigzag Level Order Traversal
//given the 'root' of a binary tree
//return the zigzag level order traversal of it nodes' values
//ex: from left to right, then right to left for the next level and alternate between

//Approach:
//using BFS with queue and using flag - even or odd
var zigzagLevelOrder = (root) => {
    //base case
    if (!root) return [];

    let queue = [root];
    let res = [];
    let depth = 0;

    //BFS
    while(queue.length) {
        let level = [];
        let levelSize = queue.length;

        while(levelSize) {
            let curr = queue.shift();

            //child nodes
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);

            //even or odd
            if (depth % 2 === 0) level.push(curr.val); //even
            else level.unshift(curr.val); //odd //unshift(): adding into the first position in level array
            
            levelSize--;
        }

        res.push(level);

        depth++;
    }

    return res;
}
//TC: O(n) -  n is the number of nodes in tree
//SC: O(n)
zigzagLevelOrder([3,9,20,null,null,15,7]); //[[3], [20,9], [15,7]]
//     3      ---> level: 0 (even - right)
//  9    20   ---> level: 1 (odd - left)
//      15  7 ---> level: 2 (even - right)

//depth = 0
//level = []
//res = []
//queue = [ [3, 9, 20, null, null, 15, 7] ]
//curr = [3, 9, 20, null, null, 15, 7]
//queue = [ [9], [20, 15, 7] ]
//depth = 0: even -> level = [3, ]
//depth = 0 -> 1
//res = [ [3], ]

//queue = [ [9], [20, 15, 7] ]
//curr = [3, 9, 20, null, null, 15, 7], [9]
//9 has no child
//depth = 1: odd -> level = [9]

//queue = [ [20, 15, 7] ]
//curr = [3, 9, 20, null, null, 15, 7], [9], [20, 15, 7]
//queue = [ [15], [7] ]
//depth = 1: odd -> level = [20, 9]: 20 is going in front of 9
//depth = 0 -> 1 -> 2
//res = [ [3], [20, 9], ]

//queue = [ [15], [7] ]
//curr = [3, 9, 20, null, null, 15, 7], [9], [20, 15, 7], [15]
//15 has no child
//depth = 2: even -> level = [15]

//queue = [ [7] ]
//curr = [3, 9, 20, null, null, 15, 7], [9], [20, 15, 7], [15], [7]
//7 has no child
//depth = 2: even -> level = [15, 7]
//res = [ [3], [20, 9], [15, 7] ]

zigzagLevelOrder([1]); //[[1]]

zigzagLevelOrder([]); //[]
