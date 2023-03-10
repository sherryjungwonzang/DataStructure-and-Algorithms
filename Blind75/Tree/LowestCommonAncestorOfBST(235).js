//Lowest Common Ancestor of a BST (235)
//given a BST, find the lowest common ancestor node of two given nodes in the BST
//the lowest common ancestor is defined between two nodes p and q as the lowest node T
//that has both p and q as descendants - where we allow a node to be a descendant of itself
var lowestCommonAncestor = (root, p, q) => {
  //recurse down to the left-hand side
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    //recurse down to the right-hand side
    return lowestCommonAncestor(root.right, p, q);
  } else {
    //we find the lowest common ancestor
    return root;
  }
}
lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8); //6 - LCA of nodes 2 and 8 is 6
//p = 2, q = 8
//         6
//       /  \
//      2    8
//     / \  /  \
//    0  4  7  9
//      / \
//      3  5

//p=2 < root=6 && q=8 > root=6 -> return root

lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 4); //2 - LCA of nodes 2 and 4 is 2 - since a node can be descendant of itself according to the LCA definition
//p = 2, q = 4
//         6
//       /  \
//      2    8
//     / \  /  \
//    0  4  7  9
//      / \
//      3  5

//p=2 < root=6 && q=4 < root=6 -> recurse down left
//lowestCommonAncestor(root=2, 2, 4)
//p=2 = root=2 && q=4 > root=2 -> return root
