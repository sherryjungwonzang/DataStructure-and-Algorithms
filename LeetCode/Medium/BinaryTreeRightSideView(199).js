//199. Binary Tree Right Side View
//given the 'root' of a binary tree
//imagine yourself standing on the right side of it
//return the values of the nodes you can see ordered from top to bottom
var rightSideView = (root) => {
  //base case
  if (root === null) return [];

  let res = [];
  let queue = [root];

  while(queue.length) {
    let level = [];
    let levelSize = queue.length;

    while(levelSize) {
      //removing the first value to current
      let current = queue.shift();

      //checking childe nodes
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      //adding a current value into level
      level.push(current.val);
      levelSize--;
    }
    //only extract the right side element
    res.push(level[level.length - 1]);
  }
  return res;
}
rightSideView([1,2,3,null,5,null,4]); //[1,3,4]
//   1 <-
// 2  3 <-
//  5   4 <-

//queue = [1 ]
//curr = []
//level = 

//queue = [2, 3 ]
//curr = [1]
//level = [1]
//res = [[1], ]

//queue = [5 4]
//curr = [1 | 2 3 | ]
//level = [1] | [2,3]->[1]position value: 3 
//res = [1, 3, ]

//queue = []
//curr = [1 | 2 3 | 5 4]
//level = [1] | [2,3]->[1]position value: 3 | [5,4] ->[1]position value: 4 
//res = [1, 3, 4]

rightSideView([1,null,3]); //[1,3]
//   1 <-
//     3 <-

rightSideView([]); //[]
