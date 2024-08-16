//450. Delete Node In BST
//given a root node reference of a BST and a key
//delete the node with the given key in the BST
//return the root node reference (possibly updated) of the BST

//basically, the deletion can be divided into two stages:
//1. search for a node to remove
//2. if the node is found, delete the node

//Approach:
//using BST characteristics
var deleteNodeBST = (root, key) => {
    //base case
    if (!root) return null;

    //BST left node
    if (root.val > key) root.left = deleteNodeBST(root.left, key);

    //BST right node
    if (root.val < key) root.right = deleteNodeBST(root.right, key);

    //to delete
    if (root.val === key) {
        //leaf node
        if (!root.left && !root.right) return null;

        //appending
        if (!root.left) return root.right;
        else if (!root.right) return root.left;
        else { //having left and right child
            let minNode = findSmallest(root.right); //min node in right side should go to left side
            minNode.left = root.left;

            return root.right;
        }
    };

    //to find the smallest node
    function findSmallest(node) {
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    return root;
}
deleteNodeBST(root = [5,3,6,2,4,null,7], key = 3); //[5,4,6,2,null,null,7]
//      5                   5
//    3   6        ->     4   6
//  2   4   7           2        7

//root = 5 > key = 3
//-> root.left = deleteNodeBST([3,2,4], 3)

//deleteNodeBST([3,2,4], 3)
//root = 3 = key -> 3 have left and right child
//minNode = findSmallest(4)
//-> setting minNode.left to root.left value = 2
//appending '2' to minNode 4's left with deleting key '3'

//[5,4,6,2,null,null,7]

deleteNodeBST(root = [5,2,6,null,4,null,7], key = 0); //[5,2,6,null,4,null,7] - not contain a node with key
//      5  
//    2   6  
//      4   7   

//root = 5 > key = 0
//-> root.left = deleteNodeBST([2, null.4], 0)

//deleteNodeBST([2, null.4], 0)
//root = 2 > key = 0
//-> root.left = deleteNodeBST([N/A], 0)

//[5,2,6,null,4,null,7] 
