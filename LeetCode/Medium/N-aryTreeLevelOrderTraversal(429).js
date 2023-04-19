//429. N-ary Tree Level Order Traversal
//given an n-ary tree
//return the level order traversal of its nodes' values

//n-ary tree input serialization is represented in their level order traversal
//each group of children is separated by the null value

//Approach:
//BFS with queue
var naryLevelOrderTraversal = (root) => {
  if (!root) return [];

  //settings
  let queue = [root]; //by initiating with root
  let res = [];

  //BFS
  while(queue.length) {
    let level = []; //to store the each level's values
    let levelSize = queue.length; //whenever levelSize becomes 0 -> we push level value to res

    while(levelSize) {
      let current = queue.shift();

      for (let i = 0; i < current.children.length; i++) {
        //if there is a child, push into queue
        if (current.children[i]) queue.push(current.children[i]);
      }
      level.push(current.val);
      levelSize--;
    }
    //once we finish each entire level, need to push into res
    res.push(level);
  }
  return res;
}
//TC: O(n)
//SC: O(n)
naryLevelOrderTraversal([1,null,3,2,4,null,5,6]); //[[1], [3,2,4], [5,6]]
//      1
//  3    2  4
//5  6

naryLevelOrderTraversal([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]); //[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
//           1
//      2  3    4    5
//        6  7  8   9  10
//           11 12  13
//           14
