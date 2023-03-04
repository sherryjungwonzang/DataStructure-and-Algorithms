//Binary Tree Level Order Traversal (102)
//given the root of a binary tree
//return the level order traversal of its nodes' value
//ex: from left to right, level by level
var binaryTreeLevelOrderTraversal = (root) => {
  if (root === null) return [];

  let res = [];
  let queue = [root];

  while(queue.length) {
    let level = [];
    let levelSize = queue.length;
    while(levelSize) {
      let current = queue.shift();

      //need to check their chile - left and right
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      //after the current has been seen -> add into level
      level.push(current.val);
      levelSize--;
    }
    res.push(level);
  }
  return res;
}
binaryTreeLevelOrderTraversal([3, 9, 20, null, null, 15, 7]); //[[3], [9,20], [15,7]]
//    3
//  9   20 
//    15   7
//Queue = [ 3 ] - initializing with the root node
//level = [ ] 
//curr = 
//res = [ ]

//Queue = [ 9 20 ] - adding node's left and right child (if it has)
//level = [ 3 ] 
//curr = 3
//res = [ [3] ]
//the first level is done -> add into res

//Queue = [ 20 ] - adding node's left and right child (if it has)
//level = [ 9 ] 
//curr = 9
//res = [ [3] ]

//Queue = [ 15 7 ] - adding node's left and right child (if it has)
//level = [ 9 20 ] 
//curr = 9 20
//res = [ [3], [9, 20] ]
//the second level is done -> add into res

//Queue = [ 7 ] - adding node's left and right child (if it has)
//level = [ 15 ] 
//curr = 15 
//res = [ [3], [9, 20] ]

//Queue = [ ] - adding node's left and right child (if it has)
//level = [ 15 7 ] 
//curr = 15 7
//res = [ [3], [9, 20], [15, 7] ]
//the third level is done -> add into res
//when the queue is empty at all -> return res


binaryTreeLevelOrderTraversal([1]); //[[1]]

binaryTreeLevelOrderTraversal([]); //[]
