//1721. Swapping nodes in a linked list
//given the head of a linked list, and an integer k
//return the head of the linked list after swapping the values of the k_th node from the beginning and the k_th node from the end
//the list is 1-indexed

//Approach:
//setting dummy
//using fast and slow pointer for finding the swapping elements
var swapNodes = (head) => {
    let dummy = new ListNode(0, head);

    //slow and fast pointers
    let slow = dummy;
    let fast = dummy;
    //for swapping
    let firstNode = null;
    let secondNode = null;

    //find the firstNode position
    while (k > 0) {
        fast = fast.next;
        k -= 1;
    }
    firstNode = fast;

    //find the secondNode position
    while(fast) {
        slow = slow.next;
        fast = fast.next;
    }
    secondNode = slow;

    //swapping
    let temp = secondNode.val;
    secondNode.val = firstNode.val;
    firstNode.val = temp;

    return dummy.next;
}
//TC: O(n)
//SC: O(1)
swapNodes([1,2,3,4,5], 2); //[1,4,3,2,5]
//dummy -> 1 -> 2 -> 3 -> 4 -> 5
//  s
//  f
// k=2
//  s
//         f    f
// k=2    k=1  k=0
//          firstNode

//  s     s     s    s     s
//              f    f     f    f    f
// k=2    k=1  k=0
//          firstNode
//                    secondNode

//swap firstNode and secondNode
//dummy -> 1 -> 4 -> 3 -> 2 -> 5

swapNodes([7,9,6,6,7,8,3,0,9,5], 5); //[7,9,6,6,8,7,3,0,9,5]
