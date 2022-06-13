//Lowest Common Ancestor of a Binary Search Tree
//given a BST
//find the lowest common ancestor of two given nodes in the BST

//Approach: Iterative
var lowestCommonAncestor = (root, p, q) => {
    while(root) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        } else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            break;
        }
    }
    return root;
}


//Approach: Recursive
var lowestCommonAncestor = (root, p, q) => {
    //condition1: if both p and q node value are greater than the root node value
    //meaning both nodes lie on its right side
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    //condition2: if both p and q node value are less than the root node value
    //meaning both nodes lie on its left side
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    //condition3: it p and q node lie on either side of the root node
    //meaning root node itself is the lowest common ancestor, so return root node
    return root;
}
//Time Complexity: O(n)
//Space Complexity: O(n)/call stack
