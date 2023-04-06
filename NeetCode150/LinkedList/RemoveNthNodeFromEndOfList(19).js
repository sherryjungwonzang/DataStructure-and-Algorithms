//Remove N-th node from end of list (19)
//given the 'head' of a linked list
//remove the n-th node from the end of the list 
//and return its head

//Approach:
//using dummy
//using two pointers: left and right on the first and second value - to find the previous node of delete node
//reassigning left pointer to the previous node of delete 
//and set left.next to next.next node
var removeNthNodefromEnd = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;

  let left = dummy;
  let right = head;

  //to move right pointer across the linked list
  //until it's n-node apart from the left pointer
  while(right && n > 0) {
    right = right.next;
    n -= 1; //until n = 0
  }

  //move both left and right pointer
  //until the right pointer reaches to the null
  while(right) {
    left = left.next;
    right = right.next;
  }

  //not the left pointer is in the previous value
  //now it is time to delete the designated node
  left.next = left.next.next;

  return dummy.next;
}
//TC: O(n) - n is the length of the linkedlist
//SC: O(1)
removeNthNodefromEnd([1,2,3,4,5], 2); //[1,2,3,5]
//setting dummny in front of it
//dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null  | n = 2
// l                 r   | n = 0 right now -> need to delete 3
//starting to move both left and right
//                   l                r
//reassign left pointer.next to left.next.next -> 3(left pointer).next is 3.next.next = null
//so fafter deleting, return dummy.next = [1,2,3,5]

removeNthNodefromEnd([1], 1); //[]
//setting dummny in front of it
//dummy -> 1 -> null | n = 1 right now -> need to delete 1
// l       r
//starting to move both left and right
// l              r
//reassign left pointer.next to left.next.next -> dummy(left pointer).next is dummy.next.next = null
//return dummy.next = []

removeNthNodefromEnd([1,2], 1); //[1]
//setting dummny in front of it
//dummy -> 1 -> 2  -> null  | n = 1 right now -> need to delete2
// l            r
//starting to move both left and right
//          l            r
//reassign left pointer.next to left.next.next -> 1(left pointer).next is 1.next.next = null
//return dummy.next = [1]
