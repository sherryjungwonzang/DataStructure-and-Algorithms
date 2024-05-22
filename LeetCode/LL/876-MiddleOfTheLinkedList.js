//876. Middle of the Linked List
//given the 'head' of a singly linked list
//return the middle node of the linked list
//if there are two middle nodes, return the second middle node

//Approach:
//using slow and fast pointers
//when fast reaches the end or out of boundary -> slow is the mid value
var middleOfLL = (head) => {
    //fast and slow pointer
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
//TC: O(n)
//SC: O(1)
middleOfLL([1,2,3,4,5]); //[3,4,5] - the middle node of the list is node 3

middleOfLL([1,2,3,4,5,6]); //[4,5,6] - since the list has two middle nodes with values 3 and 4, return the second one
