//Remove N-th Node from End of List
//given the head of a linked list
//remove the n-th node from the end of the list
//return its head

var removeNthFromEnd = (head, n) => {
    let p1 = head;
    let p2 = head;

    while(n > 0) {
        p2 = p2.next;
        n--;
    }

    //if p2 has reached the end, then, head node is to be deleted
    if (p2 === null) {
        head = head.next;
        return head;
    }

    while(p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = p1.next.next;
    return head;
};

//approach: Two pointers
//slow and fast pointer
var removeNthFromEnd = (head, n) => {
    let fast = head;
    let slow = head;

    for (let i = 1; i <= n; i++) {
        fast = fast.next;
    }

    if (fast === null) {
        head = head.next;
        return head;
    }

    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return head;
};

