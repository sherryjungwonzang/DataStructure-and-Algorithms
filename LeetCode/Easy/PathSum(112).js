//112. Path Sum
//given the 'root' of binary tree and an integer 'targetSum'
//return true if the tree has a root-to-leaf path such that adding up all the values along the path equals 'targetSum'

//a leaf is a node with no children

//Approach:
//DFS with recursion relation
var pathSum = (root, targetSum) => {
  //recursive function
  function recurse(root, currSum) {
    if (root === null) return false;

    currSum += root.val;

    //to check if it is a leaf node
    if (!root.left && !root.right) { //if the left and right is null
      return currSum === targetSum;
    }

    //pass backup the tree whether the left side or the right side is true
    return recurse(root.left, currSum) || recurse(root.right, currSum);
  }
  return recurse(root, 0);
}
pathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22); //true - the root-to-leaf path with the target sum is shown
//explanation in my book

pathSum([1,2,3], 5); //false - there two root-to-leaf paths in the tree: (1 -> 2): the sum is 3, (1 -> 3): the sum is 4 || there is no root-to-leaf path with sum=5
//    1 <-
//  2   3
//currsum = 0

//left side first
//currsum = 1 + 2 = 3 in leaf node !== targetSum
//False

//right side
//currSum = 1 + 3 = 4 in leah node !== targetSum
//False

//False || False = False
