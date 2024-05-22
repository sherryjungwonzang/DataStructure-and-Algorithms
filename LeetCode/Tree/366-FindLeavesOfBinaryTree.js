//366. Find Leaves of Binary Tree
//given the 'root' of a binary tree
//collect a tree's nodes as if you were doing this:
//collect all the leaf nodes
//remove all the leaf nodes
//repeat until the tree is empty

//Approach:
//using DFS and Post Order Traversal
var findLeaves = (root) => {
    let res = [];

    //DFS
    function dfs(root) {
        //base cases
        if (!root) return 0;

        //post order traversal
        let left = dfs(root.left);
        let right = dfs(root.right);
        
        let depth = Math.max(left, right); //defining max depth

        //fill out the object
        if (!res[depth]) {
            res[depth] = [root.val];
        } else {
            res[depth].push(root.val);
        }
        return depth + 1;
    }

    dfs(root);

    return Object.values(res); //only extract values from object
}
//TC: O(n)
//SC: O(n)
findLeaves([1,2,3,4,5]); 
//[[4,3,5], [2], [1]] | [[3,5,4,], [2], [1]] and [[3,4,5], [2], [1]] - also can be the answers
//    1       -> depth: 2
//  2   3     -> depth: 1
//4  5        -> depth: 0
//res = [ ]

//in '4') max(0, 0) -> depth = 0
//res = [ 0: [4 ] ]
//return 1 to '2'

//in '5') max(0, 0) -> depth = 0
//adding to res = [ 0: [4,5 ] ]
//return 1 to '2'

//in '2') max(1, 1) -> depth = 1
//res = [ 0: [4,5 ], 1: [2] ]
//return 2 to '1'

//in '3') max(0, 0) -> depth = 0
//adding to res = [ 0: [4,5,3], 1: [2] ]
//return 1 to '1'

//in '1') max(2, 1) -> depth = 2
//res = [ 0: [4,5,3], 1: [2], 2: [1] ]

findLeaves([1]); //[1]
