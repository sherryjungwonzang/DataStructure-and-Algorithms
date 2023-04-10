//257. Binary Tree Paths
//given the 'root' of a binary tree
//return all root-to-leaf paths in any order

//Approach:
//using DFS with Recursive in each left and right child
var binaryTreePaths = (root) => {
  //edge case
  if (!root) return [];

  let res = [];

  //DFS function
  function dfs(root, path) {
    path.push(root.val);

    //cheecking whether it is leaf node or not
    if (!root.left && !root.right) {
      //need to update path into "1->2->5" format
      //join(): convert it from an array to string and join with "->"
      res.push(path.join("->")); 
    }

    //to check if root.right & left is available
    //and recurse down
    if (root.left) dfs(root.left, path);
    if (root.right) dfs(root.right, path);

    //backtracking
    path.pop();
  }
  dfs(root, []); //[] - for current path

  return res;
}
binaryTreePaths([1,2,3,null,5]); //["1->2->5","1->3"]
//   1
// 2  3
//  5

binaryTreePaths([1]); //["1"]
