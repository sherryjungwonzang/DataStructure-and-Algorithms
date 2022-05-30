//Trees
//general tree structure
function TreeNode(value) {
    this.value = value;
    this.children = [];
}

//Binary Trees
function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this._root = null;
}


//Tree Traversal
//1. pre-order Traversal
BinaryTree.prototype.traversePreOrder = () => {
    traversePreOrderHelper(this._root);

    function traversePreOrderHelper(node) {
        if (!node) return;
        console.log(node.value);
        traversePreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
    }
}

//iteratively
BinaryTree.prototype.traversePreOrderIterative = () => {
    //create an empty stack and push root to it
    var nodeStack = [];
    nodeStack.push(this._root);

    //pop all items one by one
    //do following for every popped item
    /*
    1. print it
    2. push its right child
    3. push its left child
    */
   //right child is pushed first so that left is processed first
   while(nodeStack.length) {
       //pop the top item from stack and print it
       var node = nodeStack.pop();
       console.log(node.value);

       //push right and left child of the popped node
       if (node.right) nodeStack.push(node.right);
       if (node.left) nodeStack.push(node.left);
   }
}


//2. in-order Traversal
BinaryTree.prototype.traverseInOrder = () => {
    traverseInOrderHelper(this._root);

    function traverseInOrderHelper(node) {
        if (!node) return;
        traverseInOrderHelper(node.left);
        console.log(node.value);
        traverseInOrderHelper(node.right);
    }
}

BinaryTree.prototype.traverseInOrderIterative = () => {
    var current = this._root;
    var s = [];
    var done = false;

    while(!done) {
        //reach the left most node of the current node
        if (current !== null) {
            //place pointer to a tree node on the stack
            //before traversing the node's left subtree
            s.push(current);
            current = current.left;
        } else {
            if (s.length) {
                current = s.pop();
                console.log(current.value);
                current = current.right;
            } else {
                done = true;
            }
        }
    }
}


//3. Post-order Traversal
BinaryTree.prototype.traversePostOrder = () => {
    traversePostOrderHelper(this._root);

    function traversePostOrderHelper(node) {
        if (node.left) traversePostOrderHelper(node.left);
        if (node.right) traversePostOrderHelper(node.right);
        console.log(node.value);
    }
}

BinaryTree.prototype.traversePostOrderInterative = () => {
    //create two stacks
    var s1 = [];
    var s2 = [];

    //push root to first stack
    s1.push(this._root);

    //run while first stack is not empty
    while(s1.length) {
        //pop an item from s1 and append it to s2
        var node = s1.pop();
        s2.push(node);

        //push left and right children of removed item to s1
        if (node.left) s1.push(node.left);
        if (node.right) s1.push(node.right);
    }

    //print all elements of second stack
    while(s2.length) {
        var node = s2.pop;
        console.log(node.value);
    }
}

//4. Level-order Traversal
BinaryTree.prototype.traverseLevelOrder = () => {
    //breath first search
    var root = this._root;
    var queue = [];

    if (!root) return;
    queue.push(root);

    while(queue.length) {
        var temp = queue.shift();
        console.log(temp.value);

        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
    }
}

//Time Complexity: O(n)
