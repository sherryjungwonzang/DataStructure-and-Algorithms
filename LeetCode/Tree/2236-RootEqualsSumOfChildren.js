//2236. Root Equals Sum Of Children
//given the root of a binary tree that consist of exactly 3 nodes: root, its left, its right
//return true if the value of the root is equal to the sum of the values of its two children, or false otherwise
var rootEqualsChild = (root) => {
    return root.val === root.left.val + root.right.val;
}
rootEqualsChild([10,4,6]); //true
//10 = 6 + 4 -> true

rootEqualsChild([5,3,1]); //false
//5 != 3 + 1 -> false
