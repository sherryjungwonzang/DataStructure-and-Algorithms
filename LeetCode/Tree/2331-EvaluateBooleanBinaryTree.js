//2331. Evaluate Boolean Binary Tree
//given the root of a full binary tree with the following properties:
//leaf nodes have either the value 0 or 1 , where 0 represents False and 1 represents True

//the evaluation of a node is as follows:
//if the node is a leaf node, the evaluation is the value of the node - true or false
//otherwise, evaluate the node's two children and apply the boolean operation of its value with the child's evaluations
//return the boolean result of evaluating the root node
//a full binary tree is a binary tree where each node has either 0 or 2 children
//a leaf node is a node that has zero children

//Approach:
//using DFS with recursion
var booleanBinaryTree = (root) => {

    function recurse(node) {
        if (node.val === 0 || node.val === 1) return node.val === 1; //T || F = T
        else if (node.val === 2) return recurse(node.left) || recurse(node.right); //OR
        else if (node.val === 3) return recurse(node.left) && recurse(node.right); //AND
        return false;
    }
    
    return recurse(root);
}
booleanBinaryTree(root = [2,1,3,null,null,0,1]); //true
//    2
// 1     3
//     0   1  

//       OR                OR           T
//    T     AND     ->   T    F   -> 
//        F     T

//starting with recurse([2,1,3,null,null,0,1])
//node = 2
//recurse([1]) || recurse([3,0,1])

//recurse([1]) = 1 = T

//recurse([3,0,1])
//node = 3
//recurse([0]) && recurse([1]) 

//recurse([0]) = 0 = F
//recurse([1]) = 1 = T
//-> T && F = F

//recurse([1]) || recurse([3,0,1]) = T  || F = T
//T

booleanBinaryTree([0]); //false - The root node is a leaf node and it evaluates to false, so we return false
