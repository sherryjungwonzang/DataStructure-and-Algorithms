//199. Binary Tree Right side view
//given the root of a binary tree
//imagine yourself standing on the right side of it
//return the values of the nodes you can see ordered from top to bottom

//Approach:
//using BFS with queue
var rightSideView = (root) => {
    //base case
    if (root ===  null) return [];

    let res = [];
    let queue = [root];

    //BFS
    while(queue.length) {
        let level = [];
        let levelSize = queue.length;

        while(levelSize) {
            let curr = queue.shift();

            //child node
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);

            level.push(curr.val);

            levelSize--;
        }

        res.push(level[level.length - 1]); //only extract the last value in the array
    }

    return res;
}
//TC: O(n) - visit each node once
//SC: O(n) - the value within the queue
rightSideView([1,2,3,null,5,null,4]); //[1,3,4]
//       1
//    2     3
//      5     4 

//queue = [ [1, 2, 3, null, 5, null, 4] ]
//curr = [1, 2, 3, null, 5, null, 4]
//queue = [ [2, null, 5], [3, null, 4] ]
//level = 1
//res = [1 ]

//queue = [ [3, null, 4] ]
//curr = [1, 2, 3, null, 5, null, 4], [2, null, 5]
//queue = [ [3, null, 4] || [5] ]
//level = 2, 

//queue = [ [3, null, 4] || [5] ]
//curr = [1, 2, 3, null, 5, null, 4], [2, null, 5], [3, null, 4] 
//queue = [ [5], [4] ]
//level = 2, 3 -> extract level[2-1] value
//res = [1, 3]

//queue = [ [5], [4] ]
//curr = [1, 2, 3, null, 5, null, 4], [2, null, 5], [3, null, 4], [5]
//level = 5

//queue = [ [4] ]
//curr = [1, 2, 3, null, 5, null, 4], [2, null, 5], [3, null, 4], [5], [4]
//level = 5, 4 -> extract level[2-1] value
//res = [1, 3, 4]

rightSideView([1,null,3]); //[1,3]
//  1
//    3

rightSideView([]); //[]
