//Reverse Linked List(206)
//given the head of singly linked list - reverse the list
//return the reversed list

//Approach:
//set prev beofre head
//set the first element as head and next value as next
//set next as reference and flip the pointer
//move prev/head/next to the next node
var reverseLinkedList = (head) => {
  let prev = null;

  while(head) {
    let nextNode = head.next; //reference node
    head.next = prev; //change the pointer 

    //need to update prev, head and next
    prev = head;
    head = nextNode;
  }
  return prev;
}

reverseLinkedList([1,2,3,4,5]); //[5,4,3,2,1]
//       1  ->  2   ->  3  ->   4  ->   5
//prev  head  nextNode
//       1  <-  2   ->  3  ->   4  ->   5
//       prev  head  nextNode
//       1  <-  2   <-  3  ->   4  ->   5
//             prev   head  nextNode
//       1  <-  2   <-  3  <-   4  ->   5
//                     prev  head  nextNode
//       1  <-  2   <-  3  <-   4  <-   5
//                             prev    head  nextNode


reverseLinkedList([1,2]); //[2,1]
//       1   ->   2
//prev  head  nextNode
//       1   <-   2
//      prev    head  nextNode

reverseLinkedList([]); //[]



