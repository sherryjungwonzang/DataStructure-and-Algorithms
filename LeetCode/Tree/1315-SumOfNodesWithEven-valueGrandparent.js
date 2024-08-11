//1315. Sum Of Nodes With Even-value Grandparent
//given the root of a binary tree
//return the sum of values of nodes with an even-valued grandparent
//if there are no nodes with an even-valued grandparent, return 0
//a grandparent of a node is the parent of its parent if it exists

//Approach:
//using DFS
var sumEvenValuedGrandparent = (root) => {
    let res = 0;

    //DFS
    function dfs(root, parent, grandP) {
        //base case
        if (!root) return;

        //even-valued grand parent
        if (grandP % 2 === 0) res += root.val;

        //child node
        dfs(root.left, root.val, parent); //left
        dfs(root.right, root.val, parent); //right
    };

    dfs(root, 1, 1);

    return res;
}
sumEvenValuedGrandparent([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]); //18 - 2 + 7 + 1 + 3 + 5
//6 and 8 is the even-value grandparent

//            6
//      7           8
//  2      7      1   3
//9     1    4          5 

//res = 0
//starting from dfs([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5], 1, 1)
//P: 1 | G: 1
//G is odd
//res = 0

//starting from the root's left side
//---------------------6's Left side---------------------
//dfs([7,2,7,9,null,1,4], 6, 1)
//P: 6 | G: 1
//G is odd
//res = 0

//---------------------7's Left side---------------------
//dfs([2,9], 7, 6)
//P: 7 | G: 6
//G is even
//res = 0 -> 2

//dfs([9], 2, 7)
//P: 2 | G: 7
//G is odd
//res = 0 -> 2

//---------------------7's Right side---------------------
//dfs([7,1,4], 7, 6)
//P: 7 | G: 6
//G is even
//res = 0 -> 2 -> 9

//---------------------7's Left side---------------------
//dfs([1], 7, 7)
//P: 7 | G: 7
//G is odd
//res = 0 -> 2 -> 9

//---------------------7's Right side---------------------
//dfs([4], 7, 7)
//P: 7 | G: 7
//G is odd
//res = 0 -> 2 -> 9


//root's right side
//---------------------6's Left side---------------------
//dfs([8,1,3,null,null,null,5], 6, 1)
//P: 6 | G: 1
//G is odd
//res = 0 -> 2 -> 9

//---------------------8's Left side---------------------
//dfs([1], 8, 6)
//P: 8 | G: 6
//G is even
//res = 0 -> 2 -> 9 -> 10

//---------------------8's Right side---------------------
//dfs([3,null,5], 8, 6)
//P: 8 | G: 6
//G is even
//res = 0 -> 2 -> 9 -> 10 -> 13

//---------------------3's Right side---------------------
//dfs([5], 3, 8)
//P: 3 | G: 8
//G is even
//res = 0 -> 2 -> 9 -> 10 -> 13 -> 18
//18

sumEvenValuedGrandparent([1]); //0

