//108. Convert Sorted Array To BST
//given an integer array nums where the elements are sorted in ascending order
//convert it to a height-balanced BST

//Approach:
//using recurse
var sortedArrayToBST = (nums) => {

    function recurse(start, end) {
        //base case
        if (start > end) return null;

        let mid = Math.floor((start + end) / 2); //root value

        //build BST
        let root = new TreeNode(nums[mid]);
        root.left = recurse(start, mid - 1);
        root.right = recurse(mid + 1, end);

        return root;
    }

    return recurse(0, nums.length - 1);
}
sortedArrayToBST([-10, -3, 0, 5, 9]); //[0,-10,5,null,-3,null,9] or [0,-3,9,-10,null,5]
//starting from recurse(0, 4)
//mid = (0 + 4) / 2 = 2 -> nums[2] = 0: root
//L: recurse(0, 1): 
//R: recurse(3, 4):

//0's Left:
//recurse(0, 1)
//mid = (0 + 1) / 2 = 0 -> nums[0] = -10: root
//L: recurse(0, -1) = null
//R: recurse(1, 1) = -3

//-10's Right:
//recurse(1, 1)
//mid = (1 + 1) / 2 = 1 -> nums[1] = -3: root
//L: recurse(1, 0) = null
//R: recurse(2, 1) = null
//[-3, null, null]

//0's Right:
//recurse(3, 4)
//mid = (3 + 4) / 2 = 3 -> nums[3] = 5: root
//L: recurse(3, 2) = null
//R: recurse(4, 4) = 9

//5's Right:
//recurse(4, 4)
//mid = (4 + 4) / 2 = 4 -> nums[4] = 9: root
//L: recurse(4, 3) = null
//R: recurse(5, 4) = null

//root: 0
//L: recurse(0, 1): [-10, null, -3]
//R: recurse(3, 4): [5, null, 9]
//-> [0, -10, 5, null, -3, null, 9]

sortedArrayToBST([1, 3]); //[3, 1] - [1,null,3] and [3,1] are both height-balanced BST
