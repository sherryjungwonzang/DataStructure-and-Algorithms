//92. Reverse Linked List II
//given the head of a singly linked list and two integers let and right - where left <= right
//reverse the nodes of the list from position left to position right
//and return the reversed list

//Approach:
//move 'prev' to the front element of 'left' element
//loop from 'left' to 'right' sublist and reverse
//need to make 'curr' element at the 'right' position and 'nextNode' element at the 'curr'(prev.next) position

//'prev' and 'curr' is the fixed element
//'nextNode' should be go to the right element
//next to 'prev' should be 'nextNode'
//next to 'curr' is always 'nextNode.next' for reverse

//Done when 'nextNode' is in (right-left) position 
var reverseLL2 = (head, left, right) => {
    //base case
    if (!head || left === right) return head;

    //dummy setting
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    //move to start position
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    //reverse on sub-list
    let curr = prev.next;
    for (let i = 0; i < right - left; i++) {
        let nextNode = curr.next; 
        curr.next = nextNode.next;
        nextNode.next = prev.next; //heading to curr
        prev.next = nextNode; //need to make next to prev is nextNode
    }

    return dummy.next;
}
//TC: O(n)
//SC: O(1)
reverseLL2([1,2,3,4,5], 2, 4); //[1,4,3,2,5]
//dummy - 1 - 2 - 3 - 4 - 5
//prev        l       r

//      prev curr nN
//dummy - 1 - 3 - 2 - 4 - 5
//      prev    curr nN

//dummy - 1 - 4 - 3 - 2 - 5

reverseLL2([1,2,3,4,5,6,7,8,9], 3, 7); //[1,2,7,6,5,4,3,8,9]
//dummy - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9
//prev            l               r

//          prev curr nN
//dummy - 1 - 2 - 4 - 3 - 5 - 6 - 7 - 8 - 9
//          prev    curr nN

//dummy - 1 - 2 - 5 - 4 - 3 - 6 - 7 - 8 - 9
//          prev        curr nN

//dummy - 1 - 2 - 6 - 5 - 4 - 3 - 7 - 8 - 9
//          prev            curr nN

//dummy - 1 - 2 - 7 - 6 - 5 - 4 - 3 - 8 - 9

reverseLL2([5], 1, 1); //[5]
