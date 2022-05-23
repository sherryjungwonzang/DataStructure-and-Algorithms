const LinkedList = require('./LinkedListX');

//2.2 Return Kth to Last
//to find the kth to last element of a singly linked list

var findKthToLast = (k, list) => {
    //do iterativel
    //define two pointers: fast and slow pointer
    let fast = list.head;
    let slow = list.head;

    //move fast pointer k steps in the linkedlist while slow remains at head
    for(let i = 0; i < k; i++) {
        if (fast === null) return null; //k is larger than length of linkedlist
        fast = fast.next;
    }

    //move both pointers at the same time, slow pointer will exit at Kth node from the end
    while(fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}

//TEST
let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);

console.log(l); //head: Node { value: 1, next: Node { value: 2, next: [Node] } },
                //tail: Node { value: 5, next: null }
console.log(findKthToLast(3, l));
console.log(findKthToLast(10, l));
console.log(findKthToLast(-1, l));
console.log(findKthToLast(0, l));
console.log(findKthToLast(1, l));
