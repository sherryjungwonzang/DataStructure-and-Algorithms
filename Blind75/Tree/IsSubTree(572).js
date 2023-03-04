//Subtree of another tree (572)
//given the roots of two binary trees 'root' and 'subRoot'
//return true if there is a subtree of root with the same structure and node values of subRoot
//false otherwise

//Subtree of a binary tree is a tree that consists of a node in tree and all of this node's descendants
//the tree could also be considered as a subtree of itself

//Approach:
//using isSame function
//recursive call to each subtree and each child nodes
var isSubTree = (root, subRoot) => {
  //using isSameTree function - to check and compare its node
  function isSame(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.val !== root2.val) return false;

    //recurse down to the left child and right child
    return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
  }

  //to go through each node within the main tree
  //recursively check whether this subtree is the same or not
  function dfs (node) {
    if (!node) return false; //node === null

    //need to call the isSame function
    if (isSame(node, subRoot)) { 
      //when we find the match
      return true;
    }
    return dfs(node.left) || dfs(node.right); //if one of them returns true - then it is true
  }
  return dfs(root);
}
isSubTree([3,4,5,1,2], [4,1,2]); //true
//   root         subRoot
//     3             4
//   4   5         1   2
// 1  2
//compare with root -> 3 vs 4 -> False
//need to move down to the left and right child

//starting dfs on each node - except root node since we already have checked and no match
//left child - find a match between child root and subRoot -> 4 vs 4 | 1 vs 1 | 2 vs 2 -> return true
//right child - not find a match between child root and subRoot -> 4 vs 5 | 1 vs null | 2 vs null -> return false
//True || False -> True

isSubTree([3,4,5,1,2,null,null,null,null,0], [4,1,2]); //false
//   root         subRoot
//     3             4
//   4   5         1   2
// 1  2
//   0
//compare with root -> 3 vs 4 -> False
//need to move down to the left and right child

//starting dfs on each node - except root node since we already have checked and no match
//left child - find a match between child root and subRoot -> 4 vs 4 | 1 vs 1 | 2 vs 2 | null vs 0 -> return false
//right child - not find a match between child root and subRoot -> 4 vs 5 | 1 vs null | 2 vs null -> return false
//False || False -> False
