//Merge Two Sorted Lists(21)
//given the head of two sorted linked lists 'list1' and 'list2'
//merge two lists in a one sorted list
//list should be made by splicing together the nodes of the first two lists
//return the head of the merged linked list
var mergeTwoSortedList = (list1, list2) => {
  let dummy = new ListNode(0);
  let head = dummy;

  while(list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }
  //when the pointer is going to be null
  //append to dummy the rest of the list that is not equal to null
  if (list1 !== null) {
    dummy.next = list1;
  } else {
    dummy.next = list2;
  }
  return head.next; //we are using head as reference
}
mergeTwoSortedList([1,2,4], [1,3,4]); //[1,1,2,3,4,4]
mergeTwoSortedList([], []); //[]
mergeTwoSortedList([], [0]); //[0]
