//530. Minimum Absolute Difference in BST
//given the root of a BST
//return the min absolute difference between the values of any two different nodes in the tree

//Approach:
//using inorder traversal
var minDifferenceBST = (root) => {
    let prev = Infinity;
    let minDiff = Infinity;

    //inorder traversal
    function inorder(root) {
        //left - root - right
        if (root.left) inorder(root.left);

        minDiff = Math.min(minDiff, Math.abs(root.val - prev));

        prev = root.val;

        if (root.right) inorder(root.right);
    }

    inorder(root);

    return minDiff;
}
//TC: O(n)
//SC: O(n)
minDifferenceBST([4, 2, 6, 1, 3]); //1
//    4
//  2   6
//1  3

//prev = Infinity
//minDiff = Infinity 

//starting with inorder([4, 2, 6, 1, 3])
//Left: inorder([2, 1, 3])
//minDiff = Infinity ->  min(Infinity, abs(4 - Infinity)) = Infinity
//prev = Infinity -> 4
//Right: inorder([6])

//inorder([2, 1, 3])
//Left: inorder([1])
//minDiff = Infinity -> Infinity -> min(Infinity, abs(2 - 4)) = 2
//prev = Infinity -> 4 -> 2
//Right: inorder([3])

//inorder([3])
//minDiff = Infinity -> Infinity -> 2 -> min(2, abs(3 - 2)) = 1
//prev = Infinity -> 4 -> 3

//inorder([6])
//minDiff = Infinity -> Infinity -> 2 -> 1 -> min(1, abs(6 - 3)) = 1
//prev = Infinity -> 4 -> 3 -> 1

minDifferenceBST([1, 0, 48, null, null, 12, 49]); //1
//    1
//  0   48
//    12   49

//prev = Infinity
//minDiff = Infinity 

//starting with inorder([1, 0, 48, null, null, 12, 49])
//Left: inorder([0])
//minDiff = Infinity ->  min(Infinity, abs(1 - Infinity)) = Infinity
//prev = Infinity -> 0
//Right: inorder([48, 12, 49])

//inorder([0])
//minDiff = Infinity -> Infinity ->  min(Infinity, abs(0 - 1)) = 1
//prev = Infinity -> 1 -> 0

//inorder([48, 12, 49])
//Left: inorder([12])
//minDiff = Infinity -> Infinity -> 1 -> min(1, abs(48 - 0)) = 1
//prev = Infinity -> 1 -> 0 -> 48
//Right: inorder([49])

//inorder([12])
//minDiff = Infinity -> Infinity -> 1 -> 1 -> min(1, abs(12 - 48)) = 1
//prev = Infinity -> 1 -> 0 -> 48 -> 12

//inorder([49])
//minDiff = Infinity -> Infinity -> 1 -> 1 -> 1 -> min(1, abs(49 - 12)) = 1
//prev = Infinity -> 1 -> 0 -> 48 -> 12 -> 49





