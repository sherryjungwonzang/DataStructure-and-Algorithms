//LinkedList

//1. Singly Linked List
//data and next.data
//data: the value for the linked list
//next: a pointer to another instance
function SinglyLinkedList() {
    this.head = null; //default as null before inserting any element into the linked list
    this.size = 0;
}

function SinglyLinkedListNode(data) {
    this.data = data; 
    this.next = null;
}


SinglyLinkedList.prototype.isEmpty = () => {
    return this.size == 0;
}


//Insertion
//if the head of the linked list is empty, the head is set to the new node
//the old heap is saved in temp
//the new head becomes the newly added node
//the new head's next points to the temp(the old head)
SinglyLinkedList.prototype.insert = (value) => {
    if (this.head === null) { //if first node
        this.head = new SinglyLinkedListNode(value);
    } else {
        var temp = this.head;
        this.head = new SinglyLinkedListNode(value);
        this.head.next = temp;
    }
    this.size++;
}
var slll = new SinglyLinkedList();
slll.insert(1); //linkedlist is now 1 -> null
slll.insert(12); //linkedlist is now 12 -> 1 -> null
slll.insert(20); //linkedlist is now 20 -> 12 -> 1 -> null
//Time Complexity: O(1)
//no loops or traversal is required


//Deletion by value
//if the node is at the end of the linked list, then the second-to-last element can dereference the node by setting its next to null
SinglyLinkedList.prototype.remove = (value) => {
    var currentHead = this.head;
    if (currentHead.data == value) {
        //just shift the head over
        //head is now this new value
        this.head = currentHead.next;
        this.size--;
    } else {
        var prev = currentHead;
        while(currentHead.next) {
            if (currentHead.data == value) {
                //remove by skipping
                prev.next = currentHead.next;
                prev = currentHead;
                currentHead = currentHead;
                break; //break out of the loop
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }
        //if it wasn't found in the middle or head, must be tail
        if (currentHead.data == value) {
            prev.next = null;
        }
        this.size--;
    }
}
var slll = new SinglyLinkedList();
slll.insert(1); //linkedlist is now 1 -> null
slll.insert(12); //linkedlist is now 12 -> 1 -> null
slll.insert(20); //linkedlist is now 20 -> 12 -> 1 -> null
slll.insert(12); //linkedlist is now 20 -> 1 -> null
slll.insert(20); //linkedlist is now 1 -> null
//Time Complexity: O(n)
//no loops or traversal is required


//Search
//to find out whether a value exists in a singly linked list, simple iteration through all its next pointers is needed
SinglyLinkedList.prototype.find = (value) => {
    var currentHead = this.head;

    while(currentHead.next) {
        if (currentHead.data == value) {
            return true;
        }
        currentHead = currentHead.next;
    }
    return false;
}
//Time Complexity: O(n)




//2. Doubly Linked List
//bidirectional singly linked list
//each node in the doubly linked list has both next pointer and prev pointer
function DoublyLinkedListNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

//it has a head pointer and tail pointer
//the head refers to the beginning of the doubly linked list
//the tail referes to the end of the doubly linked list
function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

DoublyLinkedList.prototype.isEmpty = () => {
    return this.size == 0;
}


//Insertion at the Head
//it has to update the prev pointer
//if the head is empty, the head and the tail are set to the new node
//when there is only one element, that element is both the head and the tail
//temp variable stores the new node
//the new node's next points to the current head
//the current head's prev points to the new node
//the head pointer is updated to the new node
DoublyLinkedList.prototype.insertAtHead = (value) => {
    if (this.head === null) { //if first node
        this.head = new DoublyLinkedListNode(value);
        this.tail = this.head;
    } else {
        var temp = DoublyLinkedListNode(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
    this.size++;
}
var dlll = new DoublyLinkedList();
dlll.insertAtHead(10); //dlll's structure: tail=10, head=10
dlll.insertAtHead(12); //dlll's structure: tail=10, head=12
dlll.insertAtHead(20); //dlll's structure: tail=10, head=20
//Time Complexity: O(1)


//Insertion at the Tail
//a new node can be added to the tail of a doubly linked list
DoublyLinkedList.prototype.insertAtTail = (value) => {
    if (this.tail === null) { //if first node
        this.tail = new DoublyLinkedListNode(value);
        this.head = this.tail;
    } else {
        var temp = DoublyLinkedListNode(value);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }
    this.size++;
}
var dlll = new DoublyLinkedList();
dlll.insertAtHead(10); //dlll's structure: tail=10, head=10
dlll.insertAtHead(12); //dlll's structure: tail=10, head=12
dlll.insertAtHead(20); //dlll's structure: tail=10, head=20
dlll.insertAtTail(30); //dlll's structure: tail=30, head=20
//Time Complexity: O(1)



//Deletion at the Head
//if there is only one item in the case that the head and the tail are the same, both head and tail are set to null
//the head is set to the head's next pointer
//the new head's prev is set to null to remove the reference of the old head
//can be used like a dequeue function from the queue data structure
DoublyLinkedList.prototype.deleteAtHead = () => {
    var toReturn = null;

    if(this.head !== null) {
        toReturn = this.head.data;

        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }
    this.size--;
    return toReturn;
}
//Time Complexity: O(1)


//Deletion at the Tail
//a queue can dequeue the first-added item
//but the doubly linked list can dequeue either the item at the tail or the item at the head
DoublyLinkedList.prototype.deleteAtTail = () => {
    var toReturn = null;

    if(this.tail !== null) {
        toReturn = this.tail.data;

        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    this.size--;
    return toReturn;
}
var dlll = new DoublyLinkedList();
dlll.insertAtHead(10); //dlll's structure: tail=10, head=10
dlll.insertAtHead(12); //dlll's structure: tail=10, head=12
dlll.insertAtHead(20); //dlll's structure: tail=10, head=20
dlll.insertAtTail(30); //dlll's structure: tail=30, head=20
dlll.deleteAtTail(); //dlll's structure: tail=10, head=20
//Time Complexity: O(1)


//Search
//start at the head and use the next pointer
//or start at the tail and use the prev pointer
//starts at the head and looks for the item
DoublyLinkedList.prototype.findStartingHead = (value) => {
    var currentHead = this.head;

    while(currentHead.next) {
        if(currentHead.data == value) {
            return true;
        }
        currentHead = currentHead.next;
    }
    return false;
}
var dlll = new DoublyLinkedList();
dlll.insertAtHead(10); //dlll's structure: tail=10, head=10
dlll.insertAtHead(12); //dlll's structure: tail=10, head=12
dlll.insertAtHead(20); //dlll's structure: tail=10, head=20
dlll.insertAtTail(30); //dlll's structure: tail=30, head=20
dlll.findStartingHead(10); //true
dlll.findStartingHead(100); //false
//Time Complexity: O(n)


//another search code
//starting with the tail using prev pointers
DoublyLinkedList.prototype.findStartingTail = (value) => {
    var currentTail = this.tail;

    while(currentTail.prev) {
        if (currentTail.data == value) {
            return true;
        }
        currentTail = currentTail.prev;
    }
    return false;
}
var dlll = new DoublyLinkedList();
dlll.insertAtHead(10); //dlll's structure: tail=10, head=10
dlll.insertAtHead(12); //dlll's structure: tail=10, head=12
dlll.insertAtHead(20); //dlll's structure: tail=10, head=20
dlll.insertAtTail(30); //dlll's structure: tail=30, head=20
dlll.findStartingHead(10); //true
dlll.findStartingHead(100); //false
//Time Complexity: O(n)
