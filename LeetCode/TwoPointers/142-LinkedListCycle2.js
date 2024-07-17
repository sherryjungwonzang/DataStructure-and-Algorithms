//142. Linked List Cycle2
//given the 'head' of a linked list
//return the node where the cycle begins
//if there is no cycle, return null

//there is a cycle in a linked list if there is some node in the list that can be reached again by continously following the next pointer
//'pos' is used to denote the index of the node that tail's next pointer is connected to 0-indexed
//it is -1 if there is no cycle

//Approach:
//using two pointers
var linkedListCycle2 = (head, post) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        //cycle
        if (slow === fast) break;
    }

    //no cycle
    if (!fast || !fast.next) return null;

    let curr = head;
    while (curr !== fast) {
        curr = curr.next;
        fast = fast.next;
    }

    return curr;
}
//TC: O(n) - the length of the LL
//SC: O(1)
linkedListCycle2([3,2,0,-4], 1); //tail connects to node indexx 1

linkedListCycle2([1,2], 0); //tail connects to node index 0

linkedListCycle2([1], -1); //no cycle
