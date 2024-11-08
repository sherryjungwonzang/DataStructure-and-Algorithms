//687. Longest Univalue Path
//given the root of a binary tree
//return the length of the longest path, where each node in the path has the same value
//this path may or may not pass through the root
//the length of the path between two nodes is represented by the number of edges between them

//Approach:
//using DFS
var longestUnivaluePath = (root) => {
    let level = 0;

    //DFS
    function dfs(parent, curr) {
        //base case
        if (curr === null) return 0;

        let left = dfs(curr.val, curr.left);
        let right = dfs(curr.val, curr.right);

        //updating level
        level = Math.max(level, left + right);

        return curr.val === parent ? Math.max(left, right) + 1 : 0;
    }

    //starting with
    if (root !== null) dfs(root.val, root)

    return level;
}
longestUnivaluePath([5,4,5,1,1,null,5]); //2
//          5
//      4       5
//   1    1        5

//starting with dfs(5, [5,4,5,1,1,null,5])  -> L: dfs(5, [4, 1, 1]) = 0
//                                          -> R: dfs(5, [5, null, 5]) = 2

//5's left first                                                                    5's right then
//dfs(5, [4, 1, 1]) -> L: dfs(4, [1]) = 0                                           dfs(5, [5, null, 5]) -> L: dfs(5, null) = 0
//                     R: dfs(4, [1]) = 0   -> level = max(0, 0 + 0) = 0                                    R: dfs(5, [5]]) = 1     -> level = max(0, 0 + 1) = 1
//                                             4 != 5 -> 0                                                                             5 = 5 -> max(0, 1) + 1 = 2
//                                                                                  dfs(5, null) -> curr = 0 -> 0

//dfs(4, [1]) -> L: dfs(1, null) = 0                                                dfs(5, [5]]) -> L: dfs(5, null) = 0
//               R: dfs(1, null) = 0    -> level = max(0, 0 + 0) = 0                                R: dfs(5, null) = 0     -> level = max(0, 0 + 0)
//                                         1 != 4 -> 0                                                                         5 = 5 -> max(0, 0) + 1 = 1
//                                                                                  dfs(5, null) -> L: null
//dfs(1, null) = 0 -> L: null                                                                       R: null
//                    R: null                                                       level = max(0, 0 + 0) = 0
//level = max(0, 0 + 0) = 0                                                         null != 5 -> 0
//null != 1 -> 0

//dfs(5, [5,4,5,1,1,null,5])  -> L: dfs(5, [4, 1, 1]) = 0
//                            -> R: dfs(5, [5, null, 5]) = 2
//level = max(0, 2) = 2

longestUnivaluePath([1,4,5,4,4,null,5]); //2
//          1
//      4       5
//   4    4        5
