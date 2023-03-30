//113. Path Sum2
//given the 'root' of a binary tree and an integer 'targetSum'
//return all root-to-leaf paths where the sum of the node values in the path equals 'targetSum'
//each path should be returned as a list of the node values, not node references

//a root-to-leaf path is a path starting from the root and ending at any leaf node
//a leaf is a node with no children
var pathSum2 = (root, targetSum) => {
  let res = [];

  //DFS
  function dfs(root, currSum, currArr) {
    if (root === null) return [];

    //adding current values of root to currSum
    currSum += root.val;
    //adding the value of root to currArr
    currArr.push(root.val);

    //checking if it is a leaf node
    if (!root.left && !root.right && currSum === targetSum) {
      res.push([...currArr]);
    }

    //recursive calls on left and right
    dfs(root.left, currSum, currArr);
    dfs(root.right, currSum, currArr);
    //backtracking - pop off the current value
    currArr.pop();
  }
  dfs(root, 0, []);

  return res;
}
pathSum2([5,4,8,11,null,13,4,7,2,null,null,5,1], 22); //[[5,4,11,2],[5,8,4,5]] - There are two paths whose sum equals targetSum: 5 + 4 + 11 + 2 = 22, 5 + 8 + 4 + 5 = 22
//explanation in my book

pathSum2([1,2,3], 5); //[]

pathSum2([1,2], 0); //[]
