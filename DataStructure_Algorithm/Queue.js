//Queue
//First In First Out (FIFO) structure


function Queue(array) {
    this.array = [];
    if (array) this.array = array;
}

Queue.prototype.getBuffer = () => {
    return this.array.slice();
}

Queue.prototype.isEmpty = () => {
    return this.array.length == 0;
}

//instance of queue class
var queue1 = new Queue();

console.log(queue1); //output: {array: []}


//Peek
//the first item without popping it from the queue
//returns the first element in the array because of FIFO
Queue.prototype.peek = () => {
    return this.array[0];
}


//Insertion
//enqueue
//push() method can be used to implement enqueue
Queue.prototype.enqueue = (value) => {
    this.array.push(value);
}
//Time complexity: O(1)


//Deletion
//dequeue
//shift() method can be used to remove and return the first element in the queue
Queue.prototype.pop = () => {
    return this.array.shift();
}

var queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
console.log(queue1); //{array: [1,2,3]}

queue1.dequeue();
console.log(queue1); //{array: [2,3]}

queue1.dequeue();
console.log(queue1); //{array: [3]}
//Time complexity: O(n)


//Access
//unlike an array, items in a queue cannot be accessed via index
//to access the n-th last-added node, need to call dequeue n number of times
//buffer is needed to prevent modification to the original queue
function queueAccessNthTopNode(queue, n) {
    var bufferArray = queue.getBuffer();

    if (n <= 0) throw 'error';

    var bufferQueue = new Stack(bufferArray);

    while(--n !== 0) {
        bufferQueue.dequeue();
    }
    return bufferQueue.dequeue();
}
//Time complexity: O(n)


//Search
//to search a queue to check whether an element exists within a queue
//creating a buffer queue first to avoid modification to the original queue
function queueSearch(queue, element) {
    var bufferArray = queue.getBuffer();
    var bufferQueue = new Queue(bufferArray); //copy into buffer

    while(!bufferQueue.isEmpty()) {
        if (bufferQueue.dequeue() == element) return true;
    } 
    return false;
}
//Time complexity: O(n)
