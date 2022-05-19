//LinkedList

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  addLast(value) {
    const node = new Node(value);

    if (this.root) {
      let currentNode = this.root;

      while(currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      this.root = node;
    }
    this.size++;
  }


  removeLast() {
    let currentNode = this.root;
    let target;

    if (currentNode && currentNode.next && currentNode.next.next) {
      while(currentNode && currentNode.next && currentNode.next.next) {
      currentNode = currentNode.next;
      }
      target = currentNode.next;
      currentNode.next = null;
    } else {
      this.root = null;
      target = currentNode;
    }
    this.size--;
    return target.value;
  }

  addFirst(value) {
    const node = new Node(value);
    node.next = this.root;
    this.root = node;
  }

  removeFirst() {
    const target = this.root;
    
    if (target) {
      this.root = target.next;
      return target.value;
    }
  }

  contains(value) {
    let currentNode = this.root;
    let i = 0;

    while(currentNode) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  add(value, index = 0) {
    if (index === 0) return this.addFirst(value);
  }

  remove(index = 0) {
    if (index === 0) return this.removeFirst();
  }
}
