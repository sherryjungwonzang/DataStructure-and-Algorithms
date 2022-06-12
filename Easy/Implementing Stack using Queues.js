//Implementing Stack with Queue
var MyStack = () => {
    this.in = [];
    this.out = [];
}

MyStack.prototype.push = (x) => {
    const length = this.out.length;

    for (let i = 0; i <  length; i++) {
        const next = this.out.pop();
        this.in.unshift(next);
    }

    this.out.unshift(x); //adds one or more elements to the beginning of an array and returns the new length of the array

    for (let i = 0; i < length; i++) {
        const next = this.in.pop();
        this.out.unshift(next);
    }
};

MyStack.prototype.pop = () => {
    return this.out.pop();
}

MyStack.prototype.top = () => {
    return this.out[this.out.length - 1];
}

MyStack.prototype.empty = () => {
    return this.out.length === 0;
}
