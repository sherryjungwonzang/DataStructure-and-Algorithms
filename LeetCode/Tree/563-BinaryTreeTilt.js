//563. Binary Tree Tilt
//given the root of a binary tree
//return the sum of every tree nodes' tilt
//the tilt of a tree node is the absolute difference between the sum of all left subtree node values
//and all right  subtree node values
//if a node does not have a left child, then the sum of the left subtree node values is treated as 0
//the rule is similar if the node does not have a right child

//Approach:
//using DFS
var binaryTreeTilt = (root) => {
    let total = 0;

    //DFS
    function dfs(node) {
        //base case
        if (node === null) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);
        let sum = left + right;

        total += Math.abs(left - right);

        return sum + node.val;
    }

    dfs(root);

    return total;
}
binaryTreeTilt([1, 2, 3]); //1
//Tilt of node 2 : |0-0| = 0 (no children)
//Tilt of node 3 : |0-0| = 0 (no children)
//Tilt of node 1 : |2-3| = 1 (left subtree is just left child, so sum is 2; right subtree is just right child, so sum is 3)
//Sum of every tilt : 0 + 0 + 1 = 1

//total = 0
//starting with dfs([1, 2, 3])
//Left: dfs([2]) = 2
//Right: dfs([3]) = 3

//dfs([2])
//left = 0, right = 0 -> sum = 0
//total = 0 -> |0 - 0| = 0
//return 0 + 2 = 2

//dfs([3])
//left = 0, right = 0 -> sum = 0
//total = 0 -> |0 - 0| = 0
//return 0 + 3 = 3

//dfs([1, 2, 3,])
//left = 2, right = 3 -> sum =  2 + 3 = 5
//total = 0 -> 0 + |2 - 3| = 1

binaryTreeTilt([4,2,9,3,5,null,7]); //15
//Tilt of node 3 : |0-0| = 0 (no children)
//Tilt of node 5 : |0-0| = 0 (no children)
//Tilt of node 7 : |0-0| = 0 (no children)
//Tilt of node 2 : |3-5| = 2 (left subtree is just left child, so sum is 3; right subtree is just right child, so sum is 5)
//Tilt of node 9 : |0-7| = 7 (no left child, so sum is 0; right subtree is just right child, so sum is 7)
//Tilt of node 4 : |(3+5+2)-(9+7)| = |10-16| = 6 (left subtree values are 3, 5, and 2, which sums to 10; right subtree values are 9 and 7, which sums to 16)
//Sum of every tilt : 0 + 0 + 0 + 2 + 7 + 6 = 15

//total = 0 -> 2 -> 9 -> 15
//starting with dfs([4,2,9,3,5,null,7])
//Left: dfs([2,3,5]) = 10
//Right: dfs([9,null,7]) = 16

//Left side
//dfs([2,3,5])
//left: dfs([3]) = 3
//right:dfs(5) = 5

//dfs([3])
//left = 0, right = 0 -> sum = 0
//total = 0 -> |0 - 0| = 0
//return 0 + 3 = 3

//dfs([5])
//left = 0, right = 0 -> sum = 0
//total = 0 -> 0 -> |0 - 0| = 0
//return 0 + 5 = 5

//dfs([2,3,5])
//left = 3, right = 5 -> sum = 5 + 3 = 8
//total = 0 -> 0 -> 0 -> 0 + |3 - 5| = 2
//return 8 + 2 = 10

//Right side
//dfs([9,null,7])
//left: 0
//right: dfs(7) = 7

//dfs([7])
//left = 0, right = 0 -> sum = 0
//total = 0 -> 0 -> 0 -> 2 -> 2 + 0 = 2
//return 0 + 7 = 7

//dfs([9,null,7])
//left = 0, right = 7 -> sum = 0 + 7 = 7
//total = 0 -> 0 -> 0 -> 2 -> 2 -> 2 + |0 - 7| = 9
//return 7 + 9 = 16

//dfs([4,2,9,3,5,null,7])
//left = 10, right = 16 -> sum = 10 + 16 = 26
//total = 0 -> 0 -> 0 -> 2 -> 2 -> 9 -> 9 + |10 - 16| = 15

binaryTreeTilt([21,7,14,1,1,2,2,3,3]); //9
