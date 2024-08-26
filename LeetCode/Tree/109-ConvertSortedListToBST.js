//109. Convert Sorted List To BST
//given the head of a single linked list where the elements are sorted in ascending order
//convert it to a height-balanced BST

//Approach:
//using recurse & creating list to array
var sortedListToBST = (nums) => {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }

    function recurse(start, end) {
        //base case
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2); //root value

        //build BST
        let root = new TreeNode(arr[mid]);
        root.left = recurse(start, mid - 1);
        root.right = recurse(mid + 1, end);

        return root;
    }

    let start = 0;
    let end = arr.length - 1;

    return recurse(0, arr.length - 1);
}
sortedListToBST([-10, -3, 0, 5, 9]); //[0,-3,9,-10,null,5]

sortedListToBST([]); //[]
