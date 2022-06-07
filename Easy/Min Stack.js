//Min Stack

//MinStack(): initialize the stack object
//.push(): pushes the val onto the stack
//.pop(): remove the element on the top of the stack
//.top(): get the top element of the stack
//.getMin(): retrieves the min element in the stack

var MinStack = function() {
    this.arr = []; //array
};

//push
MinStack.prototype.push = function(val) {
    return this.arr.push(val);
};

//pop
MinStack.prototype.pop = function() {
    return this.arr.pop();
};

//top
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1];
};

//getMin
MinStack.prototype.getMin = function() {
    let min = 2147483700;

    for (let i of this.arr) {
        if (i < min) {
            min = i;
        }
    }
    return min;
};
