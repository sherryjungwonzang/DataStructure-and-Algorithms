//99. Recover BST
//given the root of a BST, where the values of exactly two nodes of the tree were swapped by mistake
//recover the tree without changing its structure

//Approach:
//using DFS & In-Order Traversal
var recoverBST = (root) => {
    let prev = null;
    let small = null;
    let big = null;

    //DFS - In Order Traversal(left - root - right)
    function dfs(root) {
        //base case
        if (!root) return;

        //traversing left side
        dfs(root.left);

        //checking the mistaken node
        if (prev !== null && prev.val > root.val) {
            small = root; //potential smaller node to be swapped

            if (!big) big = prev;
        }

        prev = root;

        //traversing right side
        dfs(root.right);
    }

    dfs(root);

    //swapping
    [big.val, small.val] = [small.val, big.val];
}
//TC: O(n) - the num of nodes in the trew
//SC: O(h) - height of the tree
recoverBST([1,3,null,null,2]); //[3,1,null,null,2]
//   1          3
// 3     ->   1
//   2          2

//prev = null
//big = null
//small = null

//starting from dfs([1,3,null,null,2])
//-> dfs([3,null,2])

//dfs([3,null,2])
//Left: dfs(-) = null
//prev = null -> [3, null, 2]
//Right: dfs([2])

//dfs([2])
//Left: dfs(-): null
//prev != null & prev.val: 3 > root.val: 2
//first time to find a mistaken node
//small = null -> [2]
//big = null -> [3, null,2]
//prev = null -> [3, null, 2] -> [2]

//back to dfs([1,3,null,null,2])
//Left: dfs([3, null, 2])
//prev != null & prev.val: 2 > root.val: 1
//second time to find a mistaken node -> only update the small node to curr node
//small = null -> [2] -> [1, 3, null, null, 2]
//big = [3, null,2]
//prev = null -> [3, null, 2] -> [2] -> [1, 3, null, null, 2]
//Right: dfs(-) = null

//swapping
//big.val: 3 <-> small.val: 1
//[3,1,null,null,2]

recoverBST([3,1,4,null,null,2]); //[2,1,4,null,null,3]
//     3            2
//  1    4    ->  1    4
//      2            3

//prev = null
//big = null
//small = null

//starting from dfs([3,1,4,null,null,2])
//-> dfs([1])

//dfs([1])
//Left: dfs(-) = null
//prev = null -> [3,1,4,null,null,2]
//Right: dfs(-) = null

//back to dfs([3,1,4,null,null,2]) and Right side
//dfs([4, 2, null])
//Left: dfs([2])

//dfs([2])
//Left: dfs(-) = null
//prev != null & prev.val: 3 > root.val: 2
//first time to find a mistaken node
//small = null -> [2]
//big = null -> [3,1,4,null,null,2]
//prev = null -> [3,1,4,null,null,2] -> [2]
//Right: dfs(-) = null

//back to dfs([4, 2])
//prev != null & prev.val: 3 < root.val: 4
//prev = [2] -> [4, 2]

//swapping
//big.val: 3 <-> small.val: 2
//[2,1,4,null,null,3]


