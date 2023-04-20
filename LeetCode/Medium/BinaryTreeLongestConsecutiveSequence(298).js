//298. Binary Tree Longest Consecutive Sequence
//given the 'root' of a binary tree
//return the length of the longest consecutive sequence path

//a consecutive sequence path is a path where the values increase by one along the path

//note that the path can start at any node in the tree and cannot go from a node to its parent in the path

//Approach:
//using DFS with recursive call
var longestConsecutive = (root) => {
  //variables
  let max = -Infinity;
  let prev = -Infinity;
  let count = 0;

  //DFS
  function dfs(root, count, prev) {
    //base case
    if (root === null) return;

    //setting the start of the sequence
    if (root.val - 1 === prev) {
      count++;
    } else {
      count = 1;
    }

    //updating max
    max = Math.max(max, count);

    //recursive call
    dfs(root.left, count, root.val);
    dfs(root.right, count, root.val);
  }
  dfs(root, count, prev);

  return max === -Infinity ? 0 : max;
}
//TC: O(n) - using each node once
//SC: O(n) - stack data structure
longestConsecutive([1,null,3,2,4,null,null,null,5]); //3 - longest consecutive sequence path is 3-4-5, so return 3
//  1
//    3 <-
// 2    4 <-
//        5 <-

//max = -Infinity
//prev = -Infinity
//count = 0

//DFS starting from 1
//1 - max=-Infi | count=0 | prev=-Infi
//1-1 != prev -> count = 1
//max=Max(-Infi, 1) = 1

//going to root.right -> 3
//3 - max=1 | count=1 | prev=1
//3-1 != prev -> count=1

//going to root.left -> 2
//2 - max=1 | count=1 | prev=3
//2-1 != prev -> count=1

//going to root.right -> 4
//4 - max=1 | count=1 | prev=3
//4-1 = prev -> count++
//count=2
//max=Max(2, 1) = 2

//going to root.right -> 5
//5 - max=2 | count=2 | prev=4
//5-1 = prev -> count++
//count=3
//max=Max(3, 2) = 3

//return max = 3

longestConsecutive([2,null,3,2,null,1]); //2 - longest consecutive sequence path is 2-3, return 2
//    2 <-
//      3 <-
//   2
//1

//max = -Infinity
//prev = -Infinity
//count = 0

//DFS starting from 2
//2 - max=-Infi | count=0 | prev=-Infi
//2-1 != prev -> count = 1
//max=Max(-Infi, 1) = 1

//going to root.right -> 3
//3 - max=1 | count=1 | prev=2
//3-1 = prev -> count++
//count=2
//max=Max(1,2) = 2

//going to root.left -> 2
//2 - max=2 | count=2 | prev=3
//2-1 != prev -> count=1
//max=Max(2,1)=2

//going to root.left -> 1
//1 - max=2 | count=1 | prev=2
//1-1 != prev -> count=1
//max=Max(2,1)=2

//return max = 2
