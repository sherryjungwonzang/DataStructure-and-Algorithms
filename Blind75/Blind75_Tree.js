//Blind75 - Tree
//1. Maximum Depth of Binary Tree(104)
//given the root of a binary tree
//return its maximum depth - the num of nodes along the longest path from the root node down to the farthest leaf node

//Approach:
//Recursive
//recurrence relation - root + recursive(max(left, right))
var maxDepth = (root) => {
  if (root === null) return 0; //base case

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

//BFS with iterative approach
function maxDepth(root) {
  if (!root) return 0;

  let depth = 0;
  let queue = [root];

  //BFS
  while(queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let current = queue.shift();

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    depth++;
  } //when queue is empty, we will finish the while loop
  return depth;
}
maxDepth([3,9,20,null,null,15,7]); //3
//    3
//  9   20
//    15   7
//queue = [ 3 9 20 ] | [ 9 20 ] | [ 20 15 7 ] | [ 15 7 ]   | [ 7 ]         | [ ]
//current = [  ]     | [ 3 ]    | [ 3 9 ]     | [3 9 20 ]  | [3 9 20 15 ]  | [3 9 20 15 7 ] 
//depth = 0          |  1       |   1         |  2         | 2             | 3


maxDepth([1,null,2]); //2
//   1
//      2
//queue = [ 1 ]  | [ 2 ]  | [ ] 
//current = [  ] | [ 1 ]  | [ 1 2 ]   
//depth = 0      |  1     |   2      



//2. Same Tree (100)
//given the roots of two binary trees p and q
//ro check if they are the same or not
//two binary trees - considered the same if they arr structually identical, and the nodes have the same value

//Approach:
//Recursive solution
//base case: pop this out of the recursive call stack
//recurrence relation: what is going to get us closer and closer to the base case after each kind of recursive call
var isSameTree = (p, q) => {
  //base cases
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  if (p.val === q.val) {
    //recurrence relation - both on the left subtree and right subtree
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
 }
isSameTree([1,2,3], [1,2,3]); //true
//p.val = q.val 
//isSameTree(2, 2) && isSameTree(3,3)
//no more subtree - true

isSameTree([1,2], [1,null,2]); //false
//p.val = q.val
//isSameTree(2, null) && isSameTree(null, 2)
//p === 2 and q === null -> return false
// &&
//p === null and q === 2 -> return false
//false

isSameTree([1,2,1], [1,1,2]); //false
//p.val = q.val
//isSameTree(2, 1) && isSameTree(1, 2)
//p=2 !== q=1 -> return false
// &&
//p=1 !== q=2 -> return false
//false

