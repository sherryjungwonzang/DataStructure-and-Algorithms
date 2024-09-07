//501. Find Mode In BST
//given the root of a BST with duplicates
//return all the modes - the most frequently occurred element in it
//if the tree has more than one node, return them in any order

//Approach:
//using Inorder traversal: Left Root Right
var findModeBST = (root) => {
    //base case
    if (!root) return [];

    let prev = null;
    let count = 1;
    let maxCount = 0;
    let modes = [];

    //DFS
    function dfs(root) {
        //base case
        if (!root) return;

        //inorder traversal
        dfs(root.left);

        //checking duplicates
        if (prev) {
            if (root.val === prev.val) count++; //duplicates
            else count = 1; //reset as 1
        }

        if (count > maxCount) { //updating
            maxCount = count; 

            modes = [root.val]
        } else if (count === maxCount) modes.push(root.val); //duplicates

        //updating 
        prev = root;

        dfs(root.right);
    }

    dfs(root);

    return modes;
}
//TC: O(n) - visit each node during inorder traversal
//SC: O(k) - the num of modes
findModeBST([1, null, 2, 2]); 
//   1
//      2
//   2

//prev = null
//count = 1
//maxCount = 0
//modes = [ ]

//starting with dfs([1, null, 2, 2])
//L: -
//prev = null -> nothing to being compared
//count > maxCount
//prev = null -> [1, null, 2, 2]
//count = 1
//maxCount = 0 -> 1
//modes = [1,  ]
//R: dfs([2, 2])

//dfs([2, 2])
//L: dfs([2])
//R: -

//Left first: dfs([2])
//prev != node -> count reset
//count = maxCount => adding node into modes
//prev = null -> [1, null, 2, 2] -> [2]
//count = 1 -> 1
//maxCount = 0 -> 1
//modes = [1, 2]

//back to dfs([2, 2])
//prev = node -> duplicates
//count > maxCount => resetting modes
//prev = null -> [1, null, 2, 2] -> [2]
//count = 1 -> 1 -> 2
//maxCount = 0 -> 1 -> 2
//modes = [1, 2] -> [2, 2]

findModeBST([0]); //[0]
