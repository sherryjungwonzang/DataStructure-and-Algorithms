//24. Swap Nodes in Pairs
//given a linked list, swap every two adjacent nodes 
//return its head

//must solve the problem without modifying the values in the list's nodes
//only nodes themselves may be changed

//Approach:
//using dummy as reference and setting p1 and p2 for connection
var swapNodes = (head) => {
  //setting dummy
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;

  while(head && head.next) {
    //setting p1 and p2 as a reference for connextion
    let p1 = head;
    let p2 = head.next;

    prev.next = p2;
    p1.next = p2.next;
    p2.next = p1;

    //reassigning
    prev = p1;
    head = p1.next;
  }
  return dummy.next;
}
//TC: O(n) - values of the nodes within LL
//SC: O(1) - mutating the LL itself
swapNodes([1,2,3,4]); //[2,1,4,3]
//1 -> 2 -> 3 -> 4
//       |
//       v
//2 -> 1 -> 4 -> 3

// dummy
//  -1  ->  1  ->   2   ->  3  ->  4
// prev     h    h.next
//         p1      p2

//prev.next = p2 : -1 -> 2
//p1.next = p2.next : 1 -> 3
//p2.next = p1 : 2 -> 1
//-1 -> 2 -> 1 -> 3 -> 4

//updating from 3 and repeating
// dummy
//  -1   ->   2   ->   1   ->   3   ->  4   -> null
//                    prev      h     h.next
//                              p1      p2
              
//prev.next = p2 : 1 -> 4
//p1.next = p2.next : 3 -> null
//p2.next = p1 : 4 -> 3
//-1 -> 2 -> 1 -> 4 -> 3 -> null

//updating
//-1 -> 2 -> 1 -> 4 -> 3 -> null
//                    prev  head -> out of loop

swapNodes([]); //[]

swapNodes([1]); //[1]
