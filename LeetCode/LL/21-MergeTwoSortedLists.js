//21. Merge Two Sorted Lists
//given the head of two sorted linked lists 'list1' and 'list2'
//merge two lists in a one sorted list
//list should be made by splicing together the nodes of the first two lists
//return the head of the merged linked list
var mergeTwoLL = (list1, list2) => {
    //setting a dummy as reference
    let dummy = new ListNode(0);
    let head = dummy;

    while(list1 && list2) {
        if (list1.val <= list2.val) {
            dummy.next = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        //update dummy
        dummy = dummy.next;
    }

    //adding the rest
    if (list1 !== null) {
        dummy.next = list1;
    } else {
        dummy.next = list2;
    }
    return head.next; 
}
//TC: O(n + m) - n is the length of L1 and m is the length of L2
//SC:O(1)
mergeTwoLL([1,2,4], [1,3,4]); //[1,1,2,3,4,4]
//dummy -> ListNode(0)
//L1: [1, 2, 4]
//           ^
//L2: [1, 3, 4]
//           ^
//1 vs 1 -> L1
//dummy -> 1
//2 vs 1 -> L2
//dummy -> 1 -> 1
//2 vs 3 -> L1
//dummy -> 1 -> 1 -> 2
//4 vs 3 -> L2
//dummy -> 1 -> 1 -> 2 -> 3
//4 vs 4 -> L1
//dummy -> 1 -> 1 -> 2 -> 3 -> 4
//add the rest of the elements
//dummy -> 1 -> 1 -> 2 -> 3 -> 4 -> 4
//dummy (head) -> 1 -> 1 -> 2 -> 3 -> 4 -> 4
//return head.next: [1,1,2,3,4,4]

mergeTwoLL([], []); //[]

mergeTwoLL([], [0]); //[0]
