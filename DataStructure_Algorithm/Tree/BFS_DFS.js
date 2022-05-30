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
    
    //Adding a new elements in Binary Search Tree
    insert(value) {
      var newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode
        return this;
      }
        var current = this.root;
        while(true) {
          if (value === current.value) return undefined;
          if (value < current.value) {
            if (current.left === null) {
              current.left = newNode;
              return this;
            }
              current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
            }
              current = current.right;
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

    //BFS: Breadth First Search
    BFS() {
        var node = this.root;
        var data = [];
        var queue = [];
        queue.push(node);

        while(queue.length) {
            node = queue.shift()
            data.push(node.value)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }

    //DFS: Depth First Search
    //Three methods: pre-order, in-order, post-order
    DFSPreOrder() {
        var data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse (node.left);
            if (node.right) traverse (node.right);
        }
        traverse(this.root)
        return data
    }

    DFSPostOrder() {
        var data = [];

        function traverse(node) {
            if (node.left) traverse (node.left);
            if (node.right) traverse (node.right);
            data.push(node.value);
        }
        traverse(this.root)
        return data
    }
  
    DFSInOrder() {
        var data = [];

        function traverse(node) {
            if (node.left) traverse (node.left);
            data.push(node.value);
            if (node.right) traverse (node.right);
        }
        traverse(this.root)
        return data
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

tree.BFS() //[10, 5, 13, 2, 7, 11, 16]
tree.DFSPreOrder() //[10, 5, 2, 7, 13, 11, 16]
tree.DFSPostOrder() //[2, 7, 5, 11, 16, 13, 10]
tree.DFSInOrder() //[2, 5, 7, 10, 11, 13, 16]
