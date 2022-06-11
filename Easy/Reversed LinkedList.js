//Reversed LinkedList
//given the head of a singly linked list
//reverse the list
//return the reversed list

//Approach: Iterative
//ES6 Code
var reverseList = (head) => {
    let [prev, current] = [null, head];

    while(current) {
        [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
}

//another solution
var reverseList = (head) => {
    let prev = null;
    let curr = head;
    let next = null;

    while(curr !== null) {
        //save next
        next = curr.next;

        //reverse
        curr.next = prev;

        //advance prev and curr
        prev = curr;
        curr = next;
    }
    return prev;
}


//Approach: Recursive
var reverseList = (head) => {
    //base case
    if (head === null || head.next === null) {
        return head;
    }

    //go all the way to the end
    let reversedListHead = reverseList(head.next);

    //add reverse myself
    head.next.next = head;
    head.next = null;

    //go up
    return reversedListHead;
}
