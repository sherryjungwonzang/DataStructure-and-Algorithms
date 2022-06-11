//Remove LinkedList Elements
//given the head of a linkedlist and an integer val
//remove all the nodes of the linked list that has Node.val == val
//return the new head

//single linkedlist
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeElements = (head, val) => {
    if (!head) return head;

    //if head is the value, we re deleting
    //if there is any repetition, we will break out of the loop
    while(head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }

    //skipping any nodes whose value match the parameters and set it to the node after
    //if the node is found, set curr.next to the node after it then try again
    //otherwise iterate forward
    let curr = head;
    while(curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}


//another solution
var removeElements = (head, val) => {
    let dummy = new ListNode();
    let cur = dummy;

    while(head !== null) {
        if (head.val !== val) {
            cur.next = head;
            cur = cur.next;
        }
        head = head.next;
    }

    cur.next = null;
    return dummy.next;
}
//Time Complexity: O(n)
//Space Complexity: O(1)

