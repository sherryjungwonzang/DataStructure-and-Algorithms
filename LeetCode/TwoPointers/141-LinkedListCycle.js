//141. Linked List Cycle
//given the 'head' of a linked list
//return the node where the cycle begins
//if there is no cycle, return null

//there is a cycle in a linked list if there is some node in the list that can be reached again by continously following the next pointer
//'pos' is used to denote the index of the node that tail's next pointer is connected to 0-indexed
//it is -1 if there is no cycle

//Approach:
//using two pointers
var linkedListCycle = (head, pos) => {
    //base case
    if (!head) return false;

    //two pointers
    let slow = head;
    let fast = head;

    while (fast) {
        if (!fast.next) return false;
        else {
            slow = slow.next;
            fast = fast.next.next;
        }

        //cycle
        if (slow === fast)  return true;
    }
    
    return false;
}
linkedListCycle([3,2,0,-4], 1); //true - there is a cyucle where the tail connects to the 1st node

linkedListCycle([1,2], 0); //true - there is a cycle where the tail connects to the 0th node

linkedListCycle([1], -1); //false
