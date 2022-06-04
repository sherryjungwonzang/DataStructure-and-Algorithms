//Remove duplicates from sorted list
//given the head of sorted linked list
//delete all duplicates and return the linkedlist sorted
var deleteDuplicates = (head) => {
    if (!head) return null; //there is no node is head
    if (!head.next) return head; //there is only one node, so there is no need to check if there is duplicate elements

    let currentNode = head;
    let nextNode = head;

    while(currentNode !== null && currentNode.next !== null) {
        nextNode = currentNode.next;

        if (currentNode.val === nextNode.val) {
            //remove nextNode if it duplicates with currentNode
            currentNode.next = nextNode.next;
            nextNode.next = null;
        } else {
            currentNode = currentNode.next;
            //move the current node pointer to the next node only when elements are not duplicated
        }
    }
    return head;
}
