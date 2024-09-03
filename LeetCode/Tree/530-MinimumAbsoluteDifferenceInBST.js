//530. Minimum Absolute Difference in BST
//given the root of a BST
//return the min absolute difference between the values of any two different nodes in the tree

//Approach:
//using inorder traversal
var minDifferenceBST = (root) => {
    let prev = Infinity;
    let minDiff = Infinity;

    //inorder traversal: left - root - right
    function inorder(root) {
        //base case
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
//Right: inorder([6])

//inorder([2, 1, 3])
//Left: inorder([1])
//Right: inorder([3])

//Left first - inorder([1])
//minDiff = Infinity -> min(Infi, abs(1 - Infi)) = Infi
//prev = Infinity -> 1

//back to inorder([2, 1, 3])
//Left: inorder([1])
//minDiff = Infinity -> min(Infi, abs(1 - Infi)) = Infi -> (Infi, abs(2 - 1)) = 1
//prev = Infinity -> 1 -> 2
//Right: inorder([3])

//inorder([3])
//minDiff = Infinity -> min(Infi, abs(1 - Infi)) = Infi -> (Infi, abs(2 - 1)) = 1 -> (1, abs(3 - 2)) = 1
//prev = Infinity -> 1 -> 2 -> 3

//back to inorder([4, 2, 6, 1, 3])
//Left: inorder([2, 1, 3])
//minDiff = Infinity -> min(Infi, abs(1 - Infi)) = Infi -> (Infi, abs(2 - 1)) = 1 -> (1, abs(3 - 2)) = 1 -> (1, abs(4 - 3)) = 1
//prev = Infinity -> 1 -> 2 -> 3 -> 4
//Right: inorder([6])

//inorder([6])
//minDiff = Infinity -> min(Infi, abs(1 - Infi)) = Infi -> (Infi, abs(2 - 1)) = 1 -> (1, abs(3 - 2)) = 1 -> (1, abs(4 - 3)) = 1 -> (1, abs(6 - 4)) = 1
//prev = Infinity -> 1 -> 2 -> 3 -> 4 -> 6


minDifferenceBST([1, 0, 48, null, null, 12, 49]); //1
//    1
//  0   48
//    12   49

//prev = Infinity
//minDiff = Infinity 

//starting with inorder([1, 0, 48, null, null, 12, 49])
//Left: inorder([0])
//Right: inorder([48, 12, 49])

//Left first - inorder([0])
//minDiff = Infinity -> min(Infi, abs(0 - Infi)) = Infi
//prev = Infinity -> 0

//back to inorder([1, 0, 48, null, null, 12, 49])
//Left: inorder([0])
//minDiff = Infinity -> min(Infi, abs(0 - Infi)) = Infi -> (Infi, abs(1 - 0)) = 1
//prev = Infinity -> 0 -> 1
//Right: inorder([48, 12, 49])

//inorder([12])
//minDiff = Infinity -> min(Infi, abs(0 - Infi)) = Infi -> (Infi, abs(1 - 0)) = 1 -> (1, abs(12 - 1)) = 1
//prev = Infinity -> 0 -> 1 -> 12

//inorder([48, 12, 49])
//Left: inorder([12])
//minDiff = Infinity -> min(Infi, abs(0 - Infi)) = Infi -> (Infi, abs(1 - 0)) = 1 -> (1, abs(12 - 1)) = 1 -> (1, abs(48 - 12)) = 1
//prev = Infinity -> 0 -> 1 -> 12 -> 48
//Right: inorder([49])

//inorder([49])
//minDiff = Infinity -> min(Infi, abs(0 - Infi)) = Infi -> (Infi, abs(1 - 0)) = 1 -> (1, abs(12 - 1)) = 1 -> (1, abs(48 - 12)) = 1 -> (1, abs(49 - 48)) = 1
//prev = Infinity -> 0 -> 1 -> 12 -> 48 -> 49
