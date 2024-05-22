//1026. Maximum difference between node and ancestor
//given the root of binary tree
//find the maximum value v for which there exist different nodes a and b
//where v = |a.val - b.val| and a is an ancestor of b
//a node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b

//Approach:
//using DFS
var maxAncestorDiff = (root) => {
    //base case
    if (root === null) return 0;
    
    let res = 0;
    
    //DFS
    function recurse(node, min,max) {
        //base case
        if (node === null) return;

        //updating the min and max values with the curr node for next recursive calls
        min = Math.min(min, node.val);
        max = Math.max(max, node.val);
        diff = Math.max(Math.abs(min - node.val), Math.abs(max - node.val));
        res = Math.max(res, diff);

        //recursive calls 
        recurse(node.left, min, max);
        recurse(node.right, min, max);
    }

    recurse(root, root.val, root.val); //root will be min and max value

    return res;
}
//TC: O(n) - n is the num of nodes in the binary tree
//SC: O(h) - h is the height of the tree
maxAncestorDiff([8,3,10,1,6,null,14,null,null,4,7,13]); //7
//We have various ancestor-node differences, some of which are given below :
//|8 - 3| = 5
//|3 - 7| = 4
//|8 - 1| = 7
//|10 - 13| = 3
//Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7

maxAncestorDiff([1,null,2,null,0,3]); //3
//|0 - 3| = 3
