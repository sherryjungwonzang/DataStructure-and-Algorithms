//1469. Find all the lonely nodes
//in a binary tree, a lonely node that is the only child of its parent node
//the root of the tree is not lonely because it does not have a parent node

//given the 'root' of a binary tree
//return an array containing the values of all lonely nodes in the tree
//return the list in any order

//Approach:
//using DFS with stack data structure
//utilizing Post Order Traversal for recursive call
var findLonelyNodes = (root) => {
    let res = [];

    //DFS
    function dfs(root) {
        //base cases
        if (!root) return;
        if (!root.left && root.right) res.push(root.right.val);
        if (root.left && !root.right) res.push(root.left.val);

        //recursive call
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);

    return res;
}
//TC: O(n)
//SC: O(n)
findLonelyNodes([7,1,4,6,null,null,null,null,null,2]); //[6,2] | [2,6] is also acceptable answer
//         7
//      1    4
//   6     5   3
//               2
