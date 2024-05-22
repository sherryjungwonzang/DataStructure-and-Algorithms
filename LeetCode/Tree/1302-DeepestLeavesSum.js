//1302. Deepest Leaves Sum
//given the 'root' of a binary tree
//return the sum of values of its deepest leaves

//Approach:
//using DFS
var deepestLeavesSum = (root) => {
    let sum = 0;
    let deepestL = 0;

    //DFS
    function dfs(root, level) {
        //base case
        if (!root) return;

        if (level === deepestL) {
            sum += root.val;
        } else if (level > deepestL) {
            deepestL = level;
            sum = root.val;
        }

        //recursive calls
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }

    dfs(root, 0);

    return sum;
}
deepestLeavesSum([1,2,3,4,5,null,6,7,null,null,null,null,8]); //15
//        1         -> level 0
//      2   3       -> level 1
//    4  5    6     -> level 2
//  7           8   -> level 3 
//sum = 0
//deepestLevel = 0

//starting from root - '1'
//checking '1' 's level = deepestLevel
//updating sum = 1
//deepestLevel = 0

//moving to '2''s level > deepestLevel
//updating sum = 2
//resetting deepestLevel = 1
//...
//go back to '2' 's right side
//checking '5' 's level < deepestLevel -> nothing | go back
//sum = 7
//deepestLevel = 3

//moving to right side
//...
//checking '8' 's level = deepestLevel
//updating sum = 15

deepestLeavesSum([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]); //19
//           6          -> level 0
//        7     8       -> level 1
//      2  7   1  3     -> level 2
//    9   1 4       5   -> level 3
