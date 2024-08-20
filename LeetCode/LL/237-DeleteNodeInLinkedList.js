//237. Delete Node In Linked List
//there is a single linked list head and we want to delete a node 'node' in it
//given the node to be deleted node - will not be given access to the first node of head
//all the values of the linked list are unique, and it is guaranteed that the given node 'node' is not the last node in the linked list

//delete the given node - not removing from memory
//the value of the given node shoudl not exist in the linked list
//the number of nodes in the linked list should decrease by one
//all the values before 'node' should be in the same order
//all the values after node should be in the same order
var deleteNodeLL = (head, node) => {
    node.val = node.next.val;
    node.next = node.next.next; //disconnecting
}
//TC: O(1)
//SC: O(1)
deleteNodeLL([4,5,1,9], 5); //[4,1,9]
//  4 -> 5 -> 1 -> 9
//       ^
//  4 ------> 1 -> 9

//node = [5, 1, 9] -> [1, 1, 9] => [1 -> null, 1, 9]
//[4, 1, 9]

deleteNodeLL([4,5,1,9], 1); //[4,5,9]
//  4 -> 5 -> 1 -> 9
//            ^
//  4 -> 5 ------> 9

//node = [1, 9] -> [9, 9] => [1 -> null, 9]
//[4, 5, 9]
