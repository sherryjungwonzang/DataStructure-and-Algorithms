//103. Binary Tree Zigzag Level Order Traversal
//given the 'root' of a binary tree
//return the zigzag level order traversal of it nodes' values
//ex: from left to right, then right to left for the next level and alternate between

//Approach:
//using BFS with flag - even or odd
var zigzagLevelOrder = (root) => {
  //base case
  if (!root) return [];

  //variables
  const queue = [root];
  const res = [];
  let depth = 0;

  //BFS
  while(queue.length) {
    const level = [];
    let levelSize = queue.length;

    while(levelSize) {
      const current = queue.shift();

      //check its child node
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      //check it is even or odd
      if (depth % 2 === 0) { //even
        level.push(current.val);
      } else { //odd
        level.unshift(current.val);
      }
      levelSize--;
    }
    //when exit the while loop
    res.push(level);

    //incrementing depth
    depth++;
  }
  return res;
}
//TC: O(n) -  n is the number of nodes in tree
//SC: O(n)
zigzagLevelOrder([3,9,20,null,null,15,7]); //[[3], [20,9], [15,7]]
//     3      ---> level: 0 (even - right)
//  9    20   ---> level: 1 (odd - left)
//      15  7 ---> level: 2 (even - right)

//depth = 0
//queue = [ 3 ]
//level = []
//res = []

///starting from root(3)
//shift off 3 from queue -> even
//level = [ 3 ] - push
//checking 3's child -> 9, 20 putting in queue
//queue = [ 9, 20 ]
//level 0 is over -> push into res
//res = [ [3] ]

//shift off 9 from queue -> odd
//level = [ 9 ] - unshift
//checking 9's child - nothing
//shift off 20 from queue -> odd
//level = [ 20, 9 ] - unshift
//checking 20's child -  15 and 7 putting in queue
//queue = [ 15, 7 ]
//level 1 is over -> push into res
//res = [ [3], [20, 9] ]

//shift off 15 from queue -> even
//level = [ 15 ] - push
//checking 15's child -> nothing
//shift off 7 from queue -> even
//level = [ 15, 7 ] - push
//checking 7's child -> nothing
//level 2 is over -> push into res
//res = [ [3], [20, 9], [15, 7] ]

zigzagLevelOrder([1]); //[[1]]

zigzagLevelOrder([]); //[]
