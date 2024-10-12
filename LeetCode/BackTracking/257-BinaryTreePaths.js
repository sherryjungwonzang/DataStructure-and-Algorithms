//257. Binary Tree Paths
//given the 'root' of a binary tree
//return all root-to-leaf paths in any order

//Approach:
//using DFS with backtracking
var binaryTreePaths = (root) => {
    //base case
    if (!root) return [];

    let res = [];

    //DFS
    function dfs(root, path) {
        path.push(root.val);

        //checking leaf node
        if (!root.left && !root.right) res.push(path.join("->")); 

        //recurse to child nodes
        if (root.left) dfs(root.left, path);
        if (root.right) dfs(root.right, path);

        //backtracking
        path.pop();
    }

    dfs(root, []); //[] for current path

    return res;
}
binaryTreePaths([1,2,3,null,5]); //["1->2->5","1->3"]
//   1
// 2  3
//  5

binaryTreePaths([1]); //["1"]
