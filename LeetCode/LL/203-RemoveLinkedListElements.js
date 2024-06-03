//203. Remove Linked list elements
//given the head of a linked list and an integer val
//remove all the nodes of the linked list that has node.val = val
//return the new head

//Approach:
//using dummy
var removeLLElements = (head, val) => {
    let dummy = new ListNode(0);
    let curr = dummy;
    curr.next = head;

    while (curr.next !== null) {
        //checking whether it is matching with val 
        if (curr.next.val === val) curr.next = curr.next.next;
        else curr = curr.next;
    }

    return dummy.next;
}
removeLLElements([1,2,6,3,4,5,6], 6); //[1,2,3,4,5]
//dummy -> 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6
// curr   head
//curr.next = 1 != val = 6

//     curr   head
//curr.next = 2 != val = 6

//          curr   head
//curr.next = 6 == val = 6
//curr.next -> curr.next.next
//dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

//                curr   head
//curr.next = 4 != val = 6

//                     curr   head
//curr.next = 5 != val = 6


//                           curr   head
//curr.next = 6 == val = 6
//curr.next -> curr.next.next
//dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null

//1 -> 2 -> 3 -> 4 -> 5

removeLLElements([], 1); //[]

removeLLElements([7,7,7,7], 7); //[]
