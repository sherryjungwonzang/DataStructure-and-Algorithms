//671. Second Minimum Node In Binary Tree
//given a non-empty special binary tree consisting of nodes with the non-negative value
//where each node in this tree has exactly two or zero sub-node
//if the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes
//more formally, the property root.val = min(root.left.val, root.right.val) always holds

//given such a binary tree
//you need to output the second minimum value in the set made of all the nodes' value in the whole tree
//if no such second minimum values, exists, output -1 instead

//Approach:
//using DFS with recursion
var secondMinNode = (root) => {
    //base case
    if (!root) return -1;

    let firstMin = root.val;
    let secondMin = Infinity;

    //DFS
    function dfs(node) {
        //base case
        if (!node) return;

        //secondMin condition
        if (firstMin < node.val && node.val < secondMin) secondMin = node.val; 

        //child node
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return secondMin === Infinity ? -1 : secondMin;
}
secondMinNode([2,2,5,null,null,5,7]);
//      2
//    2   5
//      5   7

//starting with dfs([2,2,5,null,null,5,7])
//firstMin = 2
//secondMin = Infi
//node.val = 2 = firstMin & 2 < secondMin -> False
//left: dfs([2])
//right: dfs([5,5,7])

//dfs([2])
//firstMin = 2
//secondMin = Infi
//node.val = 2 = firstMin & 2 < secondMin -> False

//dfs([5,5,7])
//node.val = 5 > firstMin & 5 < secondMin -> True
//firstMin = 2
//secondMin = Infi -> 5
//left: dfs([5])
//right: dfs([7])

//dfs([5])
//node.val = 5 = firstMin & 5 < secondMin -> False
//firstMin = 2
//secondMin = Infi -> 5

//dfs([7])
//node.val = 7 > firstMin & 7 > secondMin -> False
//firstMin = 2
//secondMin = Infi -> 5

secondMinNode([2,2,2]); //-1 - the smallest value is 2 but no other second smallest value
