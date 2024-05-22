//101. Symmetric Tree
//given the 'root' of a binary tree
//check whether it is a mirror of itself - symmetric around its center

//Approach:
//using recursive and divide & conquer
var symmetricTree = (root) => {
    //recurse function
    function recurse(l, r) {
        //base cases
        if (!l && !r) return true;
        if (!l || !r || l.val !== r.val) return false;

        //recursive call
        return recurse(l.left, r.right) && recurse(l.right, r.left);
    }
    return recurse(root.left, root.right);
}
//TC: O(n) - traversing all nodes within tree exactly
//SC: O(n) - populating recursive call stack with n nodes
symmetricTree([1,2,2,3,4,4,3]); //true
//     1
//   2 | 2
// 3  4|4  3

symmetricTree([1,2,2,null,3,null,3]); //false
//    1
//  2   2
//    3   3
