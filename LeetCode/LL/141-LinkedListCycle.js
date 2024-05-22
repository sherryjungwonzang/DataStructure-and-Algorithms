//141. Linked List Cycle
//given head - the head of a linked list, determin if the linked list has a cycle in it
//cycle - if there is some node in the list that can be reached again by continuously following the next pointer
//pos - is used to denote the index of the node tail's next pointer is connected to
//pos is not passes as a parameter
//returns true or false

//Approach:
//tortoise and hare algorithm - using fast and slow pointers
//true - if fast and slow meets in the point
//false - if fast and slow does not meet
var linkedListCycle = (head, pos) => {
    //edge case
    if (!head) return false;

    //fast and slow pointers
    let fast = head;
    let slow = head;

    while(fast) {
        if (!fast.next) {
            return false;
        } else {
            fast = fast.next.next; //2 jumps
            slow = slow.next; //1 jump
        }
        if (fast === slow) return true;
    }
    return false;
}
//TC: O(n + k) = O(n)
//SC: O(1)
linkedListCycle([3, 2, 0, -4], 1); //true - there is a cycle in the linked list where the tail connects to the 1st node: 0-indexed
//               f
//               s
//--------------------
//                      f
//                  s
//--------------------
//                  f
//                      s
//--------------------
//                         f
//                         s
//fast and slow meets - true

linkedListCycle([1, 2], 0); //true - there is a cycle where the tail connects to the 0-th node
//               f
//               s
//--------------------
//               f
//                  s
//--------------------
//               f
//               s
//fast and slow meets - true

linkedListCycle([1], -1); //false - there is no cycle in the linked list
