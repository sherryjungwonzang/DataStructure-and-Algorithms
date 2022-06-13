//Implementing Queue with Stacks
//push: pushes element x to the back of the queue
//pop: removes the element from the front of the queue and returns it
//peek: returns the element at the front of the queue
//empty: returns true if the queue is empty

var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

//Push
//push element x to the back of queue
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

//Pop
//removes the element from in front of queue and returns that element
MyQueue.prototype.pop = function() {
    while(this.s1.length !== 0) {
        this.s2.push(this.s1.pop());
    }

    var pop = this.s2.pop();

    while(this.s2.length !== 0) {
        this.s1.push(this.s2.pop());
    }
    return pop;
};


//Peek
//get the front element
MyQueue.prototype.peek = function() {
    while(this.s1.length !== 0) {
        this.s2.push(this.s1.pop());
    }

    var pop = this.s2.pop();

    this.s2.push(pop);
    while(this.s2.length !== 0) {
        this.s1.push(this.s2.pop());
    }
    return pop;
}


//Empty
//returns whether the queue is empty or not
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 ? true : false;
}
