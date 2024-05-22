//314. Binary Tree Vertical Order Traversal
//given the 'root' of a binary tree
//return the vertical order traversal of its nodes' values
//ex: from top to bottom, column by column

//Approach:
//using BFS with queue
var verticalOrder = (root) => {
    if (!root) return [];

    let queue = [[root, 0]]; //0 for the current level
    let map = {}; //to store level information

    //BFS
    while(queue.length) {
        const [node, level] = queue.shift();

        if (!map[level]) {
            //creating
            map[level] = [node.val];
        } else {
            map[level].push(node.val);
        }

        //child node
        if (node.left) queue.push([node.left, level - 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }
    //order the map by keys and return each values
    return Object.keys(map).sort((a, b) => a - b).map((k) => map[k]);
}
//TC: O(n) - visit each node once
//SC: O(n)
verticalOrder([3,9,8,4,0,1,7]); //[[4], [9], [3,0,1], [8], [7]]
//           3
//       9      8
//    4    0  1    7
//in this tree, 3,0,1 is level 0 | 9 is level -1 | 4 is level -2 | 8 is level 1 | 7 is level 2

//queue = [ [3, 0] ]
//map = {}

//shift off the [3, 0] & checking its child
//queue = [ [9, -1], [8, 1] ]
//map = { 0: [3] }

//shift off [9, -1] & checking its child
//queue = [ [8, 1], [4, -2], [0, 0] ]
//map = { 0: [3], -1: [9], }

//shift off [8, 1] & checking its child
//queue = [ [4, -2], [0, 0], [1,0], [7,2] ]
//map = { 0: [3], -1: [9], 1: [8] }

//shift off [4, -2] & checking its child
//queue = [ [0, 0], [1,0], [7,2] ]
//map = { 0: [3], -1: [9], 1: [8], -2: [4] }

//shift off [0, 0] & checking its child
//queue = [ [1,0], [7,2] ]
//map = { 0: [3, 0], -1: [9], 1: [8], -2: [4] }

//shift off [1, 0] & checking its child
//queue = [ [7,2] ]
//map = { 0: [3, 0, 1], -1: [9], 1: [8], -2: [4] }

//shift off [7, 2] & checking its child
//queue = []
//map = { 0: [3, 0, 1], -1: [9], 1: [8], -2: [4], 2: [7] }

//sort by keys
//level: -2 | -1 | 0 | 1 | 2 order -> [[4], [9], [3,0,1], [8], [7]]

verticalOrder([3,9,20,null,null,15,7]); //[[9] , [3,15], [20], [7]]
//      3
//  9     20
//      15   7
//in this tree, 3 and 15 is level 0 | 9 is level -1 | 20 is level 1 | 7 is level 2
