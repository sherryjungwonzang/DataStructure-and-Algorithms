//83. Remove Duplicates From Sorted List
//given the head of a sorted linked list
//delete all duplicates such that each element appears only once
//return the linked list sorted as well
var removeDuplicatesSortedLL = (head) => {
    //base case
    if (head === null || head.next === null) return head;

    let curr = head;
    
    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}
removeDuplicatesSortedLL([1,1,2]); //[1,2]

removeDuplicatesSortedLL([1,1,2,3,3]); //[1,2,3]
