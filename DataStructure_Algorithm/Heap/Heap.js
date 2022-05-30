//Heap
//using an array to store all the values using the index structure
//index structure:
//N: index of the node
//Parent: (N-1)/2
//Left Child: (N*2)+1
//Right Child: (N*2)+2
function Heap() {
    this.items = []; //array
}
Heap.prototype.parentIndex = (index) => {
    return Math.floor((index - 1) / 2);
}
Heap.prototype.leftChildIndex = (index) => {
    return index * 2 + 1;
}
Heap.prototype.rightChildIndex = (index) => {
    return index * 2 + 2;
}
Heap.prototype.parent = (index) => {
    return this.items[this.parentIndex(index)];
}
Heap.prototype.leftChild = (index) => {
    return this.items[this.leftChildIndex(index)];
}
Heap.prototype.rightChild = (index) => {
    return this.items[this.rightChildIndex(index)];
}
Heap.prototype.peek = (item) => {
    return this.items[0];
} //returns the max value for a max-heap and min value for min-heap
Heap.prototype.size = () => {
    return this.items.length;
}

