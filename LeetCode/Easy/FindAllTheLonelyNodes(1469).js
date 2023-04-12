//1469. Find all the lonely nodes
//in a binary tree, a lonely node that is the only child of its parent node
//the root of the tree is not lonely because it does not have a parent node

//given the 'root' of a binary tree
//return an array containing the values of all lonely nodes in the tree
//return the list in any order

//Approach1:
//using BFS
var findLonelyNodes_BFS = (root) => {
  //base case
  if (!root) return [];

  //creating queue
  let queue = [root];
  let ans = [];

  while(queue.length) {
    let current = queue.shift();

    //check whether the current's children is available or not
    if (current.lenft && !current.right) {
      queue.push(current.left);
      ans.push(current.left.val);
    }

    //check other side
    if (!current.left && current.right) {
      queue.push(current.right);
      ans.push(current.right.val);
    }

    //when both available
    if (current.left && current.right) {
      queue.push(current.left);
      queue.push(current.right);
    }
  }
  return ans;
}
findLonelyNodes_BFS([1,2,3,null,4]); //[4] - node 4 at the bottom is the only lonely node
//node 1 is the root and is not lonely
//node 2 and 3 have the same parent and are not lonely

//    1
// 2    3
//  4

//Approach:
//using DFS with stack data structure
//utilizing Post Order Traversal for recursive call
var findLonelyNodes_DFS = (root) => {
  let res = [];

  //DFS
  function dfs(root) {
    //base cases
    if (!root) return;

    if (!root.left && root.right) res.push(root.right.val);
    if (root.left && !root.right) res.push(root.left.val);

    //recursive call from bottom - utilizing postOrder traversal
    //left-right-root
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);

  return res;
}
findLonelyNodes_DFS([7,1,4,6,null,null,null,null,null,2]); //[6,2] | [2,6] is also acceptable answer
//         7
//      1    4
//   6     5   3
//               2


