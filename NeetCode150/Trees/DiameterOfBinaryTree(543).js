//Diameter of Binary Tree (543)
//given the 'root' of a binary tree
//return the length of the diamater of the tree

//the diamater of a binary tree is the length of the longest path between any two nodes in a tree
//this path may or may not pass through the root

//the length of a path between two nodes is represented by the number of edges between them
var binaryTreeDiameter = (root) => {
  let maxD = 0;

  //DFS
  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);
    let currD = left + right;

    //update or check against the max diameter
    maxD = Math.max(currD, maxD);

    return Math.max(left + 1, right + 1);
  }
  dfs(root);

  return maxD;
}
binaryTreeDiameter([1,2,3,4,5]); //3 - 3 is the length of the path [4,2,1,3] or [5,2,1,3]
//    1
//  2   3
//4  5

binaryTreeDiameter([1,2]); //1
