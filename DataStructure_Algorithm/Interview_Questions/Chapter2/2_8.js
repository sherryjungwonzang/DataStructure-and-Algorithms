const LinkedList = require('./LinkedListX');
const PrintList = require('./printList');

//2.8 Loop Detection
//given a linked list which might contain a loop
//to return the node at the beginning of the loop if one exists

var loopDetection = (head) => {
    //the null checking code will handle lists with no loops
    if(!head || !head.next) return null;

    var hare = head;
    var tortoise = head;

    do {
        hare = hare.next;
        tortoise = tortoise.next;

        if(!hare || !hare.next) return null;
        hare = hare.next;
    } while(hare !== tortoise)

    tortoise = head;

    while(hare !== tortoise) {
        hare = hare.next;
        tortoise = tortoise.next;
    }
    return hare;
};


//TEST
//A->B->C->D->E->C
var a = new LinkedList();
var b = new LinkedList();
var c = new LinkedList();
var d = new LinkedList();
var e = new LinkedList();
var f = new LinkedList();


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

console.log(loopDetection(a) === c); //true

var A = new LinkedList();
var B = new LinkedList();
var C = new LinkedList();
var D = new LinkedList();
var E = new LinkedList();
var F = new LinkedList();


A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(loopDetection(A) === null); //false
