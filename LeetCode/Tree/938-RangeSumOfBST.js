//938. Range Sum of BST
//given the 'root' node of a binary search tree and two integers 'low and 'high'
//return the sum of values of all nodes with a value is the inclusive range [low, high]

//Approach:
//using recursion
var rangeSumBST = (root, low, high) => {
    //base case
    if (!root) return 0;
    
    //BST rule - checking inbound and outbound
    if (root.val > high) { //there should be no greater value than root val
        return rangeSumBST(root.left, low, high); 
    } else if (root.val < low) { //there should be no less value than root val
        return rangeSumBST(root.right, low, high); 
    } else { //add all recursive calls from left and right value from root
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    }
}
//TC: O(n) - visiting each node once
//SC: O(n) - using a recursive call stack
rangeSumBST([10,5,15,3,7,null,18], 7, 15); //32 - Nodes 7, 10, and 15 are in the range [7, 15] | 7 + 10 + 15 = 32
//     10
//   5   15
// 3  7    18

rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10); //23 - Nodes 6, 7 and 10 are in the range [6, 10] | 6 + 7 + 10 = 23
//        10
//     5     15
//  3   7  13  18
//1   6
