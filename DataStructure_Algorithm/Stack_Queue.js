//combining Stack and Queue
//1. Stack using Queues
const { buffer } = require("stream/consumers");

//A queue can be made with two stacks
function TwoStackQueue() {
    this.inbox = new Stack();
    this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = (val) => {
    this.inbox.push(val);
}

TwoStackQueue.prototype.dequeue = () => {
    if (this.outbox.isEmpty) {
        while(!this.inbox.isEmpty) {
            this.outbox.push(this.inbox.pop());
        }
    }
    return this.inbox.pop();
}

var queue = new TwoStackQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); //1
queue.dequeue(); //2
queue.dequeue(); //3



//2. Queue using stacks
//A stack returns the last element
//enqueue all the elements inside the main queue except for the last element
function QueueStack() {
    this.inbox = new Queue() //first stack
}

QueueStack.prototype.push = (val) => {
    this.inbox.enqueue(val);
}

QueueStack.prototype.pop = () => {
    var size = this.inbox.array.length - 1;
    var counter = 0;
    var bufferQueue = new Queue();

    while(++counter <= size) {
        bufferQueue.enqueue(this.inbox.dequeue());
    }
    
    var popped = this.inbox.dequeue();
    this.inbox = bufferQueue;
    return popped
}

var stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop()); //5
console.log(stack.pop()); //4
console.log(stack.pop()); //3
console.log(stack.pop()); //2
console.log(stack.pop()); //1





