//Converting sorted array to binary search tree
//given an integer array: nums
//convert to a height-balanced binary search tree
//height balanced binary search tree: the depth of the two subtrees of every node never differes by more than one
function TreeNode(val, left, right) {
    this,val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this,right = (right === undefined ? null : right)
}

var sortedArrayToBST = (nums) => {
    if (!nums.length) return null;

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    //subtrees are BSTs as well
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));

    return root;
}
