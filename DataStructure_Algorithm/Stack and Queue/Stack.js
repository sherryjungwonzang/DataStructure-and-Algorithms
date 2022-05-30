//Stack
//Last In First Out (LIFO) structure

//making a stack by array
//with push and pop
//push: add element in the last
//pop: remove the element from the array

function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

Stack.prototype.getBuffer = () => {
    return this.array.slice();
}

Stack.prototype.isEmpty = () => {
    return this.array.length == 0;
}

//instance of stack class
var stack1 = new Stack();

console.log(stack1); //output: {array: []}


//Peek
//to compare the last-added element
//to evaluate whether the last-added element should be removed from the data structure
Stack.prototype.peek = () => {
    return this.array[this.array.length - 1];
}
stack1.push(10);
console.log(stack1.peek()); //10
stack1.push(5);
console.log(stack1.peek()); //5
//Time complexity: O(1)


//Insertion
//with JavaScript arrays
Stack.prototype.push = (value) => {
    this.array.push(value);
}
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1); //{array: [1,2,3]}
//Time complexity: O(1)


//Deletion
//pop() method
Stack.prototype.pop = () => {
    return this.array.pop();
}
stack1.pop(1);
stack1.pop(2);
stack1.pop(3);
console.log(stack1); //{array: []}
//Time complexity: O(1)


//Access
//how to access an element based on order
function stackAccessNthTopNode(stack, n) {
    var bufferArray = stack.getBuffer();

    if (n <= 0) throw 'error';

    var bufferStack = new Stack(bufferArray);

    while(--n !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();
}

var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
stackAccessNthTopNode(stack2, 2) //2
//Time complexity: O(n)


//Search
//for specific element
//first create a buffer stack so that pop() can be called on that buffer stack
//original stack is not mutated
//nothing is removed from it
function stackSearch(stack, element) {
    var bufferArray = stack.getBuffer();
    var bufferStack = new Stack(bufferArray); //copy into buffer

    while(!bufferStack.isEmpty()) {
        if (bufferStack.pop() == element) return true;
    } 
    return false;
}
//Time complexity: O(n)



