//783. Minimum Distance Between BST Nodes
//given the root of a BST
//return the min difference between the values of any two different nodes in the tree

//Approach:
//using inorder traversal
var minDifferenceBST = (root) => {
    let prev = null;
    let minDiff = Infinity;

    //inorder traversal:eft - root - right
    function inorder(root) {
        //base case
        if (!root) return;

        //left
        inorder(root.left);

        if (!!prev) minDiff = Math.min(minDiff, root.val - prev); //prev is not null

        //updating prev
        prev = root.val;

        //right
        inorder(root.right);
    }

    inorder(root);

    return minDiff;
}
//TC: O(n) - the total number of nodes
//SC: O(h) - the height of the BST
minDifferenceBST([4, 2, 6, 1, 3]); //1
//    4
//  2   6
//1  3

//prev = null
//minDiff = Infi

//starting with inorder([4, 2, 6, 1, 3])
//Left: inorder([2, 1, 3])
//Right: inorder([6])

//inorder([2, 1, 3])
//Left: inorder([1])
//Right: inorder([3])

//Left first - inorder([1])
//prev is null
//minDiff = Infi
//prev = null -> 1

//inorder([2, 1, 3])
//Left: inorder([1]) -> already done
//prev is not null -> minDiff = (Infi, 2 - 1) = 1
//prev = null -> 1 -> 2
//Right: inorder([3])

//inorder([3])
//prev is not null -> minDiff = (1, 3 - 2) = 1
//minDiff = Infi -> 1 -> 1
//prev = null -> 1 -> 3

//back to inorder([4, 2, 6, 1, 3])
//Left: inorder([2, 1, 3])
//prev is not null -> minDiff = (1, 4 - 3) = 1
//minDiff = Infi -> 1 -> 1 -> 1
//prev = null -> 1 -> 3 -> 4
//Right: inorder([6])

//inorder([6])
//prev is not null -> minDiff = (1, 6 - 4) = 1
//minDiff = Infi -> 1 -> 1 -> 1 -> 1 
//prev = null -> 1 -> 3 -> 4 -> 6

minDifferenceBST([1, 0, 48, null, null, 12, 49]); //1
//    1
//  0   48
//    12   49

//prev = null
//minDiff = Infinity 

//starting with inorder([1, 0, 48, null, null, 12, 49])
//Left: inorder([0])
//Right: inorder([48, 12, 49])

//Left first - inorder([0])
//prev is null
//minDiff = Infinity 
//prev = Infinity -> 0

//back to inorder([1, 0, 48, null, null, 12, 49])
//Left: inorder([0])
//prev is not null  -> minDiff = (Infi, 1 - 0) = 1
//minDiff = Infi -> 1
//prev = Infinity -> 0 -> 1
//Right: inorder([48, 12, 49])

//inorder([12])
//prev is not null  -> minDiff = (1, 12 - 1) = 1
//minDiff = Infi -> 1 -> 1
//prev = Infinity -> 0 -> 1 -> 12

//inorder([48, 12, 49])
//Left: inorder([12])
//prev is not null  -> minDiff = (1, 48 - 12) = 1
//minDiff = Infi -> 1 -> 1 -> 1
//prev = Infinity -> 0 -> 1 -> 12 -> 48
//Right: inorder([49])

//inorder([49])
//prev is not null  -> minDiff = (1, 49 - 48) = 1
//minDiff = Infi -> 1 -> 1 -> 1 -> 1
//prev = Infinity -> 0 -> 1 -> 12 -> 48 -> 49
