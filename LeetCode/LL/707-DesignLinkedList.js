//707. Design Linked List
//design your implementation of the linked list
//you can choose to use a single or doubly linked list
//a node in a singly linked list should have two attributesL val and next
//val is the value of the curr node and next is a pointer/reference to the next node
//if you wwant to use the doubly linked list, you will need one more attribute prev to indicate the prev node in the linked list
//assume all nodes in the linked list are 0-indexed

//implement the MyLinkedList class:
//MyLinkedList() Initializes the MyLinkedList object.
//int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
//void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
//void addAtTail(int val) Append a node of value val as the last element of the linked list.
//void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
//void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
var Node = function(val) {
    this.val = val;
    this.next = null;
};

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (this.size === 0 || index > this.size - 1 || index < 0) return -1;
    let cur = this.head;
    
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.size++;
    return this;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.size++;
    return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const newNode = new Node(val);
    if (index > this.size) return;
    if (index <= 0) {
      return this.addAtHead(val);
    }
    if (index === this.size) {
      return this.addAtTail(val);
    }
  
    let cur = this.head;  
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    newNode.next = cur.next ? cur.next : null;
    cur.next = newNode;
    this.size++;
    return this;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size || index < 0) return;  
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return this;
    }
  
    let cur = this.head;  
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    
    cur.next = cur.next.next ? cur.next.next : null;
    if(!cur.next) {
      this.tail = cur;
    }
    this.size--;
    return this;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */






