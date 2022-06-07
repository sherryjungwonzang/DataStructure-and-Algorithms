//Add Two Numbers
//given two non-empty linked lists representing two non-negative integers
//digits are stored in reverse order
//each nodes contains a single digit
//add the two numbers and return the sum as a linked list

function ListNode(val, next) {
    this.val = (val === undefined ? 0: val)
    this.next = (next === undefined ? null : next)
}


var addTwoNumbers = (l1, l2) => {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }
    return List.next;
}



//another solution
var addTwoNumbers = (l1, l2) => {
    let carry = 0;
    const result = new ListNode();
    let pointer = null;

    while(l1 || l2) {
        pointer = (pointer == null) ? result : pointer.next;
        const sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry;

        if (sum >= 10) {
            pointer.val = ((sum % 10));
            carry = 1;
        } else {
            pointer.val = (sum);
            carry = 0;
        }

        l1 = (l1 && l1.next) || null;
        l2 = (l2 && l2.next) || null;

        if (l1 || l2) {
            pointer.next = new ListNode();
        } else if (carry) {
            pointer.next = new ListNode(carry);
        } else {
            pointer.next = null;
        }
    }
    return result;
}
