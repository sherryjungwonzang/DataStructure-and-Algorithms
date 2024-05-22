//86. Partition List
//given the head of a linked list and a value x
//partition it such that all nodes less than x come before nodes greater than or equal to x
//should preserver the original relative order of the nodes in each of the two partitions

//Approach:
//using 2 dummies to collect LL less than x and greater than x
var partitionList = (head, x) => {
    let dummy1 = new ListNode(0);
    let dummy2 = new ListNode(0);

    let front = dummy1; //building LL less than x
    let back = dummy2; //building LL greater than or equal to x

    //traversing
    while (head !== null) {
        if (head.val < x) {
            front.next = head;
            front = front.next;
        } else {
            back.next = head;
            back = back.next;
        }
        head = head.next;
    }

    //connecting with front and back
    back.next = null;
    front.next = dummy2.next;

    return dummy1.next;
}
//TC: O(n)
//SC: O(1)
partitionList([1,4,3,2,5,2], 3); //[1,2,2,4,3,5]
//front -> dummy1
//back -> dummy2

//[1, 4, 3, 2, 5, 2]
// h
//head < x -> moving front pointer
//front: dummy1 -> 1
//back: dummy2

//    h
//head > x -> moving back pointer
//front: dummy1 -> 1
//back: dummy2 -> 4

//       h
//head = x -> moving back pointer
//front: dummy1 -> 1
//back: dummy2 -> 4 -> 3

//          h
//head < x -> moving front pointer
//front: dummy1 -> 1 -> 2
//back: dummy2 -> 4 -> 3

//             h
//head > x -> moving back pointer
//front: dummy1 -> 1 -> 2
//back: dummy2 -> 4 -> 3 -> 5

//                h
//head < x -> moving front pointer
//front: dummy1 -> 1 -> 2 -> 2
//back: dummy2 -> 4 -> 3 -> 5

//front: dummy1 -> 1 -> 2 -> 2 -> dummy2
//back: dummy2 -> 4 -> 3 -> 5 -> null
//dummy1 -> 1 -> 2 -> 2 -> 4 -> 3 -> 5 -> null

partitionList([2,1], 2); //[1,2]
