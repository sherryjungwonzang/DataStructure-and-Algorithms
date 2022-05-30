//Binary Search Tree (BST)
//All parent node can have at latest two child nodes
//The left child node is always smaller than the parent node
//The right child node is always greater than the parent node

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  //Adding a new elements in Binary Search Tree
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      var current = this.root;
      while(true) {
        if (value === current.value) return undefined
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this
          } else {
            current = current.right
          }
        }
      }
      
     //Finding a specific elements
     find(value) {
      if (this.root === null) return false;
      var current = this.root;
      var found = false;
      
      while(current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (valuse > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) return undefined;
      return current;
     }
      
     contains(value) {
      if (this.root === null) return false;
      var current = this.root;
      var found = false;
     
      while(current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }
     return false;
     }      
    }
  }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
