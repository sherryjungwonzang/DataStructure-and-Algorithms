//1022. Sum of root to leaf binary numbers
//given the 'root' of a binary tree - where each node has a value of 0 or 1
//each root-to-leaf path represents a binary number starting with the most significant bit
//for example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13

//for all leaves in the tree, consider the numbers represented by the path from the root to that leaf
//return the sum of these numbers
//the test cases are generated so that the answer fits in 32-bits integer

//Approach:
//using DFS with recursive call and parseInt
//parseInt(): parses a string argument and returns an integer of specified radix -> ('string', 2) for this question
var sumRootToLeaf = (root) => {
    let res = 0;

    //DFS
    function dfs(root, path) {
        //base case
        if (!root) return;

        if (!root.left && !root.right) {
            res += parseInt(path + root.val, 2);
            return;
        }

        //recursive call
        dfs(root.left, path + root.val);
        dfs(root.right, path + root.val);
    }

    dfs(root, "");

    return res;
}
//TC: O(n)
//SC: O(h)
sumRootToLeaf([1,0,1,0,1,0,1]); //2
//(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

//       1
//    0     1
//  0  1   0  1

sumRootToLeaf([0]); //0
