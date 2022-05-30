//Perlocation
//swap until min-heap structure is formed with the minimum element on the top
//bubbling up: swap the new element with its parent is greater than the new element
//bubbling down: swap the top element with one of its children if that child is smaller
function MinHeap() {
    this.items = [];
}
MinHeap.prototype = Object.create(Heap.prototype); //inherit helpers from heap by copying prototype

MinHeap.prototype.bubbleDown = () => {
    var index = 0;
    while(this.leftChild(index) && this.leftChild(index) < this.items[index]) {
        var smallerIndex = this.leftChildIndex(index);
        if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
            //if right is smaller, right swaps
            smallerIndex = this.rightChildIndex(index);
        }
        this.swap(smallerIndex, index);
        index = smallerIndex;
    }
}

MinHeap.prototype.bubbleUp = () => {
    var index = this.items.length - 1;
    while(this.parent(index) && this.parent(index) > this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}

//Min-Heap Complete Implementation
function MinHeap() {
    this.items = [];
}

MinHeap.prototype = Object.create(Heap.prototype); //inherit 

MinHeap.prototype.add = (item) => {
    this.items[this.items.length] = item;
    this.bubbleUp();
}

MinHeap.prototype.poll = () => {
    var item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
}

MinHeap.prototype.bubbleDown = () => {
    var index = 0;
    while(this.leftChild(index) && this.leftChild(index) < this.items[index]) {
        var smallerIndex = this.leftChildIndex(index);
        if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
            //if right is smaller, right swaps
            smallerIndex = this.rightChildIndex(index);
        }
        this.swap(smallerIndex, index);
        index = smallerIndex;
    }
}
MinHeap.prototype.bubbleUp = () => {
    var index = this.items.length - 1;
    while(this.parent(index) && this.parent(index) > this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}
var mh1 = new MinHeap();
mh1.add(1);
mh1.add(10);
mh1.add(5);
mh1.add(100);
mh1.add(8);

console.log(mh1.poll()); //1
console.log(mh1.poll()); //5
console.log(mh1.poll()); //8
console.log(mh1.poll()); //10
console.log(mh1.poll()); //100



//Max-Heap Complete Implementation
function MaxHeap() {
    this.items = [];
}

MaxHeap.prototype = Object.create(Heap.prototype); //inherit 

MaxHeap.prototype.add = (item) => {
    this.items[this.items.length] = item;
    this.bubbleUp();
}

MaxHeap.prototype.poll = () => {
    var item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
}

MaxHeap.prototype.bubbleDown = () => {
    var index = 0;
    while(this.leftChild(index) && this.leftChild(index) < this.items[index]) {
        var smallerIndex = this.leftChildIndex(index);
        if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
            //if right is smaller, right swaps
            smallerIndex = this.rightChildIndex(index);
        }
        this.swap(smallerIndex, index);
        index = smallerIndex;
    }
}
MaxHeap.prototype.bubbleUp = () => {
    var index = this.items.length - 1;
    while(this.parent(index) && this.parent(index) > this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}
var mh2 = new MaxHeap();
mh2.add(1);
mh2.add(10);
mh2.add(5);
mh2.add(100);
mh2.add(8);

console.log(mh2.poll()); //100
console.log(mh2.poll()); //10
console.log(mh2.poll()); //8
console.log(mh2.poll()); //5
console.log(mh2.poll()); //1


