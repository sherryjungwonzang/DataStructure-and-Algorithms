//148. Sort List
//given the head of a linked list
//return the list after sorting it in ascending order

//Approach:
//using merge sort
var sortList = (head) => {
    //base case
    if (!head || !head.next) return head;

    //dividing into two halves
    let [left, right] = split(head);
    let root = new ListNode(null);

    //splitting
    function split(head) {
        //slow and fast algorithm
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let left = head;
        let right = slow.next;
        slow.next = null; //disconnecting

        return [left, right];
    };

    //merging
    function merge(root, left, right) {
        let pointer = root;

        while (left !== null || right !== null) {
            if (left === null) {
                pointer.next = right;
                right = right.next;
            } else if (right === null) {
                pointer.next = left;
                left = left.next
            } else {
                if (left.val < right.val) {
                    pointer.next = left;
                    left = left.next;
                } else {
                    pointer.next = right;
                    right = right.next;
                }
            }
            pointer = pointer.next;
        }
        return root.next;
    };

    return merge(root, sortList(left), sortList(right));
}
//TC: O(n * logn)
//SC: O(logn)
sortList([4,2,1,3]); //[1,2,3,4]
//splitting
//[4, 2, 1, 3]
// S  F
//    S     F
//L: [4, 2]
//R: [1, 3]

//[4, 2]
// S  F  -> [4] and [2]
//[1, 3]
// S  F  -> [1] and [3]

//pointer: 0
//L: [4] R: [2]
//L > R -> pointer: 0 -> 2
//L: [4] R: [2] -> null
//R is null -> pointer: 0 -> 2 -> 4
//L: [4] -> null R: [2] -> null
//[2, 4]

//pointer: 0
//L: [1] R: [3]
//L < R -> pointer: 0 -> 1
//L: [1] -> null R: [3]
//L is null -> pointer: 0 -> 1 -> 3
//L: [1] -> null R: [3] -> null
//[1, 3]

//pointer: 0
//L: [2, 4] R: [1, 3]
//    ^         ^
//L  > R: pointer: 0 -> 1
//L: [2, 4] R: [1, 3]
//    ^            ^
//L < R: pointer: 0 -> 1 -> 2
//L: [2, 4] R: [1, 3]
//       ^         ^
//L > R: pointer: 0 -> 1 -> 2 -> 3
//L: [2, 4] R: [1, 3] -> null
//       ^         
//R is null: pointer: 0 -> 1 -> 2 -> 3 -> 4
//L: [2, 4] -> null  R: [1, 3] -> null
//[1, 2, 3, 4]


sortList([-1,5,3,4,0]); //[-1,0,3,4,5]

sortList([]); //[]

