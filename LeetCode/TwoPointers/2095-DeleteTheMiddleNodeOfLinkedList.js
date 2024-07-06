//2095. Delete The Middle Node Of Linked List
//given the 'head' of a linked list
//delete the middle node and return the head of the modified linked list
//the middle node of a linked list of size n is the [n / 2]_th node from the start using o-based indexing
//where [x] denotes the largest integer less than or equal to x

//Approach:
//using slow and fast pointer - two pointers
var deleteMiddle = (head) => {
    //base case
    if (head === null) return null;

    prev = new ListNode(0);
    prev.next = head;

    //two pointers - slow & fast
    slow = prev;
    fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //slow is in the front element of middle element
    slow.next = slow.next.next;

    return prev.next;
}
deleteMiddle(head = [1,3,4,7,1,2,6]); //head = [1,3,4,1,2,6]
//0  -> 1 ->  3 ->  4 ->  7 ->  1 ->  2 ->  6
//prev head
// S    F
//      S           F
//            S                 F
//                  S                       F

//slow = 4 and disconnect the connection from 7 to 1
//0  -> 1 ->  3 ->  4 ->  1 ->  2 ->  6
//[1,3,4,1,2,6]

deleteMiddle(head = [1,2,3,4]); //head = [1,3,4]

deleteMiddle(head = [2, 1]); //head = [2]
