const LinkedList = require('./LinkedListX');
const PrintList = require('./printList');

//2.5 Sum Lists
//having two numbers represented by a linked list
//ech node contains a single digit
//the digits are stored in reverse order
//to add two numbers and returns the sum as a linked list
var sumList = (head1, head2) => {
    var node1 = head1;
    var node2 = head2;
    var node3 = null;
    var head3 = null;

    var ones;
    var tens = 0;
    var sum;

    while(node1 !== null && node2 !== null) {
        if (node1 === null) {
            sum = node2.value;
        } else if(node2 === null) {
            sum = node1.value;
        } else {
            sum = node1.value + node2.value;
        }

        sum += tens;
        ones = sum % 10;

        if (node3 === null) {
            head3 = new LinkedList(ones);
            node3 = head3;
        } else {
            node3.next = new LinkedList(ones);
            node3 = node3.next;
        }

        tens = Math.floor(sum / 10);

        if (node1 !== null) {
            node1 = node1.next;
        }

        if (node2 !== null) {
            node2 = node2.next;
        }

        if (tens > 0) {
            node3.next = new LinkedList(tens);
            node3 = node3.next;
        }

        return head3;
    };
}

//TEST
//input: (7->1->6) + (5->9->2): 617+295
//output: 2->1->9: 912

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

var newHead = sumList(a, d);
PrintList(newHead);
