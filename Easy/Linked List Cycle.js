//LinkedList Cycle
//given head of linkedlist
//determine if the linked list has a cycle in it
//cycle in linked list: if there is some node in the list can be reached again by continuously following the next pointer
//pos: denote the index of the node that tail's next pointer is connected to


//Approach 1: Two pointers-slow and fast pointer
const hasCycle = (head) => {
    if (head === null) return false;

    let slow = head; //move by 1
    let fast = head.next; //move by 2
 
    while(slow !== fast) {
        if (fast === null || fast.next === null) return false; //this means there is no cycle
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}


//another solution
const hasCycle = (head) => {
    if (head === null) return false;

    let slow = head; //move by 1
    let fast = head.next; //move by 2
 
    //if fast || fast.next is null, it means there is no cycle
    while(fast && fast.next) {
        if (fast === slow) return true;  //if slow and fast is the same node, there is a cycle

        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
}


