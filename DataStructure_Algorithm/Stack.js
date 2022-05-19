//Stack
//Last In First Out (LIFO) structure

//making a stack by array
//with push and pop
//push: add element in the last
//pop: remove the element from the array

const stack = [];
stack.push("first");
stack.push("second");
stack.push("third");

stack //["first", "second", "third"]

stack.pop() //this will remove "third"



//Using linked list
class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //push method
  push(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  //pop method
  pop() {
    if (!this.first) return null;

    var temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
} 

const stack = new Stack()
stack.push(23)
stack.push(4)
stack.push(18)

console.log(stack)







