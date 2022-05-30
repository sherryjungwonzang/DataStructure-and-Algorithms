var LinkedList = require('./LinkedListX.js');
var Queue = require('./Queue.js');
var BST = require('./BST.js');


//4.3 List of Depths
//given a binary tree
//to create a linked list of all the nodes at each depth
//ex: if you have a tree with depth D, you will have D linked list

var listOfDepths = (bst) => {
    var listOfLists = [];
    var list = null;
    var newNode;
    var q = new Queue();
    var nextq = new Queue();
    var currNode = bst;

    q.add(currNode);

    while(!q.isEmpty()) {
        currNode = q.remove();
        newNode = new LinkedList(currNode.value);
        newNode.next = list;
        list = newNode;

        if (currNode.left !== null) nextq.add(currNode.left);

        if (currNode.right !== null) nextq.add(currNode.right);

        if (q.isEmpty()) {
            listOfLists.push(list);
            list = null;
            q = nextq;
            nextq = new Queue();
        }
    }
    return listOfLists;
};

//TEST
//1,2,3,4,5,6,7
var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepths(tree));
