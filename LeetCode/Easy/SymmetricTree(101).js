//101. Symmetric Tree
//given the 'root' of a binary tree
//check whether it is a mirror of itself - symmetric around its center
var symmetricTree = (root) => {
  //recurse function
  function recurse(l, r) {
    //base cases
    if (!l && !r) return true; //if left and right both are nullS
    if (!l || !r  || l.val !== r.val) return false;

    return recurse(l.left, r.right) && recurse(l.right, reportError.left); //mirror format - comparing each element at the same location
  }
  return recurse(root.left, root.right);
}
symmetricTree([1,2,2,3,4,4,3]); //true
//     1
//   2 | 2
// 3  4|4  3

symmetricTree([1,2,2,null,3,null,3]); //false
//    1
//  2   2
//    3   3
