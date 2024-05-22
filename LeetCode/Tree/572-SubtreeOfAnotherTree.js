//572. Subtree of another tree
//given the roots of two binary trees 'root' and 'subRoot'
//return true if there is a subtree of root with the same structure and node values of subRoot
//false otherwise

//Subtree of a binary tree is a tree that consists of a node in tree and all of this node's descendants
//the tree could also be considered as a subtree of itself

//Approach:
//using two functions - isSame() & dfs()
//using two recursive calls - to each subtree and each child nodes
//1) to check whether this is the same subtree or not -> compare by root first
//2) to check its left and right child
var isSubTree = (root, subRoot) => {
    //isSameTree - check and compare its node
    function isSame(root1, root2) {
        if (!root1 || !root2 || root1.val !== root2.val) return false;
        if (!root1 && !root2) return true;
        
        return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
    }

    //DFS
    function dfs(node) {
        if (!node) return false;

        //call isSame function
        if (isSame(node, subRoot))  return true; //when find the match

        //recursive calls
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(root);
}
//TC: O(m * n) - m is the num of nodes within subtree, n is the num of nodes within tree
//SC: O(m + n)
//every node within this tree to check whether it matches the subtree or not
isSubTree([3,4,5,1,2], [4,1,2]); //true
//   root         subRoot
//     3             4
//   4   5         1   2
// 1  2
//compare with root -> 3 vs 4 -> False
//need to move down to the left and right child

//starting dfs on each node - except root node since we already have checked and no match
//left child - find a match between child root and subRoot -> 4 vs 4 | 1 vs 1 | 2 vs 2 -> return true
//right child - not find a match between child root and subRoot -> 4 vs 5 | 1 vs null | 2 vs null -> return false
//True || False -> True

isSubTree([3,4,5,1,2,null,null,null,null,0], [4,1,2]); //false
//   root         subRoot
//     3             4
//   4   5         1   2
// 1  2
//   0
//compare with root -> 3 vs 4 -> False
//need to move down to the left and right child

//starting dfs on each node - except root node since we already have checked and no match
//left child - find a match between child root and subRoot -> 4 vs 4 | 1 vs 1 | 2 vs 2 | null vs 0 -> return false
//right child - not find a match between child root and subRoot -> 4 vs 5 | 1 vs null | 2 vs null -> return false
//False || False -> False
