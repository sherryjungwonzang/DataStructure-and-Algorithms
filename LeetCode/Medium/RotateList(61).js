//61. Rotate List
//given the 'head' of a linked list
//rotate the list to the right by 'k' places
var rotateList = (head, k) => {
  //base case
  if (head === null) return head;

  let len = 1;
  //head and tail is starting at the same point
  let tail = head;

  while(tail.next !== null) {
    tail = tail.next;
    len++;
  }

  //creating the cycle
  tail.next = head;

  //to avoid duplicates
  let count = len - (k % len);

  while(count > 0) {
    head = head.next;
    tail = tail.next;
    count--;
  }

  //in target point | head is at the correct starting point
  //need to break the cycle connection
  tail.next = null;

  return head;
}
//TC: O(n) -  n is the length of LL
//SC: O(1)
rotateList([1,2,3,4,5], 2); //[4,5,1,2,3] - rotate 1: 5 -> 1 -> 2 -> 3 -> 4, rotate 2: 4 -> 5 -> 1 -> 2 -> 3 
//len = 1
//[1, 2, 3, 4, 5]
// h
// t -> len=1
//    t -> len=2
//       t -> len=3
//          t -> len=4
//              t -> len=5
//len = 5

//creating cycle
//[1, 2, 3, 4, 5]
// h
//             t
//count = len - (k % len) = 5 - (2 % 5) = 3

//[1, 2, 3, 4, 5]
//    h
// t            
//count = 2

//[1, 2, 3, 4, 5]
//       h
//    t            
//count = 1

//[1, 2, 3, 4, 5]
//          h
//       t            
//count = 0

//return [4,5,1,2,3]

rotateList([0,1,2], 4); //[2,0,1] - rotate 1: 2 -> 0 -> 1, rotate 2: 1 -> 2 -> 0, rotate 3: 0 -> 1 -> 2, rotate 4: 2 -> 0 -> 1
//len = 1
//[0, 1, 2]
// h
// t -> len=1
//    t -> len=2
//       t -> len=3
//len = 3

//creating cycle
//[0, 1, 2]
// h
//       t
//count = len - (k % len) = 3 - (4 % 3) = 2

//[0, 1, 2]
//    h
// t      
//count = 1

//[0, 1, 2]
//       h
//    t      
//count = 0

//return [2,0,1]
