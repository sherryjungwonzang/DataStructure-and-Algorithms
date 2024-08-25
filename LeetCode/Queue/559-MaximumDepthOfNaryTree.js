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

    let depth = 0;
    let queue = [root];
 
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

//depth = 0

//queue = [  [1,null,3,2,4,null,5,6] ]
//curr =  [1,null,3,2,4,null,5,6]
//queue = [ [3, 5, 6], [2], [4] ]
//depth = 0 -> 1

//queue = [ [3, 5, 6], [2], [4] ]
//curr =  [1,null,3,2,4,null,5,6], [3,5,6]
//queue = [ [2], [4], [5], [6] ]

//queue = [ [2], [4], [5], [6] ]
//curr =  [1,null,3,2,4,null,5,6], [3,5,6], [2]

//queue = [ [4], [5], [6] ]
//curr =  [1,null,3,2,4,null,5,6], [3,5,6], [2], [4]
//depth = 0 -> 1 -> 2

//queue = [ [5], [6] ]
//curr =  [1,null,3,2,4,null,5,6], [3,5,6], [2], [4], [5]

//queue = [ [6] ]
//curr =  [1,null,3,2,4,null,5,6], [3,5,6], [2], [4], [5], [6]
//depth = 0 -> 1 -> 2 -> 3

maxDepthNaryTree(root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]); //5
//           1
//   2    3       4     5 
//      6   7   8     9  10
//          11  12   13
//          14

//depth = 0

//queue = [  [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
//queue = [ [2], [3,6,7,11,14], [4,8,12], [5,9,10,13] ]
//depth = 0 -> 1

//queue = [ [2], [3,6,7,11,14], [4,8,12], [5,9,10,13] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2]

//queue = [ [3,6,7,11,14], [4,8,12], [5,9,10,13] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14]
//queue = [ [4,8,12], [5,9,10,13], [6,7,11,14] ]

//queue = [ [4,8,12], [5,9,10,13], [6], [7,11,14] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12]
//queue = [ [5,9,10,13], [6,7,11,14], [8,12] ]

//queue = [ [5,9,10,13], [6], [7,11,14] , [8,12] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13]
//queue = [ [6,7,11,14], [8,12], [9,10,13] ]
//depth = 0 -> 1 -> 2

//queue = [ [6], [7,11,14], [8,12], [9,13], [10] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13], [6]

//queue = [ [7,11,14], [8,12], [9,13], [10] ]
///curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13], [6], [7,11,14]
//queue = [ [8,12], [9,10,13], [11, 14] ]

//queue = [ [8,12], [9,13], [10], [11, 14] ]
///curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13], [6], [7,11,14], [8, 12]
//queue = [ [9,10,13], [11, 14], [12] ]

//queue = [ [9,13], [10], [11, 14], [12] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13], [6], [7,11,14], [8, 12], [9, 13]
//queue = [ [10], [11, 14], [12], [13] ]

//queue = [ [10], [11, 14], [12], [13] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13], [6], [7,11,14], [8, 12], [9, 13], [10]
//depth = 0 -> 1 -> 2 -> 3

//queue = [ [11, 14], [12], [13] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13], [6], [7,11,14], [8, 12], [9, 13], [10], [11, 14]
//queue = [ [12], [13], [14] ]

//queue = [ [12], [13], [14] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13], [6], [7,11,14], [8, 12], [9, 13], [10], [11, 14], [12]

//queue = [ [13], [14] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13], [6], [7,11,14], [8, 12], [9, 13], [10], [11, 14], [12], [13]
//depth = 0 -> 1 -> 2 -> 3 -> 4

//queue = [ [14] ]
//curr = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14], [2], [3,6,7,11,14], [4,8,12], [5,9,10,13], [6], [7,11,14], [8, 12], [9, 13], [10], [11, 14], [12], [13], [14]
//depth = 0 -> 1 -> 2 -> 3 -> 4 -> 5
