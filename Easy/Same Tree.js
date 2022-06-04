//Same Tree
//given the roots of two binary trees p and q
//to check if they are same or not
//same: if they are structurally identical and the nodes have the same value

//Approach1: Recursive
var isSameTree = (p, q) => {
    if (!p && !q) return true;

    if (p?.val !== q?.val) return false;

    if (isSameTree(p?.left, q?.left) === false) return false;
    if (isSameTree(p?.right, q?.right) === false) return false;
    return true;
}
