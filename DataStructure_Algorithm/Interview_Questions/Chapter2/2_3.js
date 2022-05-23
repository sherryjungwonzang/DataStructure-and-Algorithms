const LinkedList = require('./LinkedListX');
const PrintList = require('./printList');

//2.3 Delete middle node
//to delete a node in the middle of a singly linked list
//given only access to that node
let deleteMidNode = (node) => {
    if (node !== null && node.next !== null) {
        node.value = node.value;
        node.next = node.next.next;
    }
};

//TEST
let list = new LinkedList();
for (let item of ['a','b','c','d','e','f']) {
    list.append(item);
}

//PrintList(list.head);
deleteMidNode(list.head.next);
PrintList(list.head); 
//['a','b','d','e','f']
