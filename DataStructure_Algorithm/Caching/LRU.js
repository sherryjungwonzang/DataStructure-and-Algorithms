
//Caching
//storing data into temporary memory so that it can be easily retrieved for later use
//to maximize hits: an item is in the cache when requested
//to minimize misses: an item is not in the cache when requested

//for design
//Temporal locality: a memory location that has been recently accessed is likely to be accessed again
//Spatial locality: a memory location near one that has recently been accessed is likely to be accessed again

//2. Least Recently Used (LRU) Caching
//remove the oldest item list and replace the oldest accessed item to the new one
//keeping track of which node was used when
//using a doubly linked list and hash table

//doubly linked list is needed to keep track of the head (the oldest data)
//each time new data is inserted, the head moves up until the size is exceeded
//then the oldest data is evicted
function DLLNode(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
}

//initializing by passing the capacity parameter
//'capacity' defines how many nodes are allowed to be in the cache
function LRUCache(capacity) {
    this.keys = {};
    this.capacity = capacity;
    this.head = new DLLNode("", null);
    this.tail = new DLLNode("", null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

//removing a node and adding a node to the tail
LRUCache.prototype.removeNode = (node) => {
    var prev = node.prev;
    var next = node.next;
    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.addNode = (node) => {
    var realTail = this.tail.prev;
    realTail.next = node;

    this.tail.prev = node;
    node.prev = realTail;
    node.next = this.tail;
}

//get and set function
//get: the LRU caching schema brings that node to the head of the doubly linked list since it was the most recently used node
//set: the keys property on the LRU cache is used to store the node to keep retrieval in O(1) in time in get function
LRUCache.prototype.get = (key) => {
    var node = this.keys[key];
    if (node == undefined) {
        return null;
    } else {
        this.removeNode(node);
        this.addNode(node);
        return node.data;
    }
}

LRUCache.prototype.set = (key, value) => {
    var node = this.keys[key];
    if (node) {
        this.removeNode(node);
    }

    var newNode = new DLLNode(key, value);

    this.addNode(newNode);
    this.keys[key] = newNode;

    //evict a node
    if (Object.keys(this.keys).length > this.capacity) {
        var realHead = this.head.next;
        this.removeNode(realHead);
        delete this.keys[realHead.key];
    }
}

var myLRU = new LRUCache(5);
console.log(myLRU.set(1, 1)); //1
console.log(myLRU.set(2, 2)); //1 <-> 2
console.log(myLRU.set(3, 3)); //1 <-> 2 <-> 3
console.log(myLRU.set(4, 4)); //1 <-> 2 <-> 3 <-> 4
console.log(myLRU.set(5, 5)); //1 <-> 2 <-> 3 <-> 4 <-> 5

console.log(myLRU.get(1)); //2 <-> 3 <-> 4 <-> 5 <-> 1
console.log(myLRU.get(2)); //3 <-> 4 <-> 5 <-> 1 <-> 2

console.log(myLRU.set(6, 6)); //4 <-> 5 <-> 1 <-> 2 <-> 6
console.log(myLRU.set(7, 7)); //5 <-> 1 <-> 2 <-> 6 <-> 7
console.log(myLRU.set(8, 8)); //1 <-> 2 <-> 6 <-> 7 <-> 8

