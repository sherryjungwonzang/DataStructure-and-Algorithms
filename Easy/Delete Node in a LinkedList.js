//Delete Node in a Linked List
//delete a node in a singly linked list
//not be given access to the head of the list
//only be given access to the node to be deleted directly

//Appraoch: LinkedList
var deleteNode = (node) => {
    //copy next node's val into current node
    //delete next node
    node.val = node.next.val;
    node.next = node.next.next;
};
/*
node.val is what we want to delete
ex: [4,5,1,9] and node=5
1. reassign the next node value 1 to this node 5->[4,1,1,9]
2. this node 1 will point to next next node 9, otherwise we would have 2 similar values of next node 1->[4,1,9]
*/
