//206. Reverse Linked List
//given the head of singly linked list - reverse the list
//return the reversed list

//Approach:
//set prev before head
//set the first element as head and next value as next
//set next as reference and flip the pointer
//move prev/head/next to the next node
var reverseLL = (head) => {
    let prev = null;

    while(head) {
        let nextNode = head.next; //reference node
        head.next = prev; //pointer change

        //update
        prev = head;
        head = nextNode;
    }
    return prev;
}
//TC: O(n)
//SC: O(1)
reverseLL([1,2,3,4,5]); //[5,4,3,2,1]
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

reverseLL([1,2]); //[2,1]
//       1   ->   2
//prev  head  nextNode
//       1   <-   2
//      prev    head  nextNode

reverseLL([]); //[]
