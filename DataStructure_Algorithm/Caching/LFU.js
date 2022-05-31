//Caching
//storing data into temporary memory so that it can be easily retrieved for later use
//to maximize hits: an item is in the cache when requested
//to minimize misses: an item is not in the cache when requested

//for design
//Temporal locality: a memory location that has been recently accessed is likely to be accessed again
//Spatial locality: a memory location near one that has recently been accessed is likely to be accessed again


//1. Least Frequently Used (LFU) Caching
//by operating system to manage memory
//tracks the number of times a block is referenced in memory
//assigning a counter to every block loaded into the cache and incrementing a counter every time a reference is made to that block

//using doubly linked list
function LFUNode(key, value) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.data = value;
    this.freqCount = 1;
}

//having two hash tables: keys and freq.freq
//frequency: 1 to n, where n is the top frequenct for element access
//keys store each doubly linked list node for O(1) retrieval
function LFUDoublyLinkedList() {
    this.head = new LFUNode('buffer head', null);
    this.tail = new LFUNode('buffer tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
}

function LFUCache(capacity) {
    this.keys = {}; //stores LFUNode
    this.freq = {}; //stores LFUDoublyLinkedList
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;
}

//LFUDoubleLinkedList class requires for insertion and removal
//only the insertion at the head and the removal at the tail is needed
LFUDoublyLinkedList.prototype.insertAtHead = (node) => {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
}

LFUDoublyLinkedList.prototype.insertAtTail = () => {
    var oldTail = this.tail.prev;
    var prev = this.tail.prev;
    prev.prev.next = this.tail;
    this.tail.prev = prev.prev;
    this.size--;
    return oldTail;
}

LFUDoublyLinkedList.prototype.removeNode = (node) => {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
}


//if the element already exists and needs to be replaced
//the node is brought to the head of its corresponding frequency doubly linked list
LFUCache.prototype.set = (key, value) => {
    var node = this.keys[key];

    if (node == undefined) {
        node = new LFUNode(key, value);
        this.keys[key] = node;

        if (this.size != this.capacity) {
            //insert without deleting
            if (this.freq[1] === undefined) {
                this.freq[1] = new LFUDoublyLinkedList();
            }
            this.freq[1].insertAtHead(node);
            this.size++;
        } else {
            //delete and insert
            var oldTail = this.freq[this.minFreq].removeAtTail();
            delete this.keys[oldTail.key];

            if (this.freq[1] === undefined) {
                this.freq[1] = new LFUDoublyLinkedList();
            }

            this.freq[1].insertAtHead(node);
        }
        this.minFreq = 1;
    } else {
        var oldFreqCount = node.freqCount;
        node.data = value;
        node.freqCount++;

        this.freq[oldFreqCount].removeNode(node);

        if (this.freq[node.freqCount] === undefined) {
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);

        if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).size == 0) {
            this.minFreq++;
        }
    }
}


//if the element does not exist in the cache, it is forced to return a null element
LFUCache.prototype.get = (key) => {
    var node = this.keys[key];

    if (node === undefined) {
        return null;
    } else {
        var oldFreqCount = node.freqCount;
        node.freqCount++;

        this.freq[oldFreqCount].removeNode(node);

        if (this.freq[node.freqCount] === undefined) {
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);

        if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).length == 0) {
            this.minFreq++;
        }
        return node.data;
    }
}

var myLFU = new LFUCache(5);
console.log(myLFU.set(1, 1)); //{ 1: 1 }
console.log(myLFU.set(2, 2)); //{ 1: 2 <-> 1 }
console.log(myLFU.set(3, 3)); //{ 1: 3 <-> 2 <-> 1 }
console.log(myLFU.set(4, 4)); //{ 1: 4 <-> 3 <-> 2 <-> 1 }
console.log(myLFU.set(5, 5)); //{ 1: 5 <-> 4 <-> 3 <-> 2 <-> 1 }

console.log(myLFU.get(1)); //{ 1: 5 <-> 4 <-> 3 <-> 2, 2: 1 }
console.log(myLFU.get(1)); //{ 1: 5 <-> 4 <-> 3 <-> 2, 3: 1 }
console.log(myLFU.get(1)); //{ 1: 5 <-> 4 <-> 3 <-> 2, 4: 1 }
console.log(myLFU.get(6, 6)); //{ 1: 6 <-> 5 <-> 4 <-> 3, 4: 1 }
console.log(myLFU.get(6)); //{ 1: 5 <-> 4 <-> 3, 4: 1, 2: 6}
