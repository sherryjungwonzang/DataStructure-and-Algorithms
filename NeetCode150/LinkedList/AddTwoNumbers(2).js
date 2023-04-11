//Add Two Numbers (2)
//given two non-empty linked lists - representing two non-negative integers
//the digits are stored in reverse order
//and each of their nodes contains a single digit
//add the two numbers and return the sum as a linked list

//may assume the two numbers do not contain any leading zero
//except the number 0 itself
var addTwoNums = (l1, l2) => {
  //creating a new list
  let List = new ListNode(0);
  let head = List;

  let sum = 0;
  let carry = 0;

  while(l1 !== null || l2 !== null || sum !== 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    //check if sum is generating carry
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    //adding a new node onto linked list
    head.next = new ListNode(sum); //passing the valus of sum
    head = head.next;
    sum = carry;
    carry = 0;
  }
  return List.next;
}
addTwoNums([2,4,3], [5,6,4]); //[7,0,8] - 342 + 465 = 807
//List 0 -> 
//   head
//sum = 0
//carry = 0

//L1: 2 -> 4 -> 3
//L2: 5 -> 6 -> 4
//    ^
//sum = 0 + 2 + 5 = 7 | 7 < 10
//carry = 0
//List 0 -> 7 ->
//        head

//         ^
//sum = 0 + 4 + 6 = 10 | 10 = 10 | 10 - 10 = 0
//carry = 0 -> 1   -----> update to next sum
//List 0 -> 7 -> 0
//             head

//               ^
//sum = 1 + 3 + 4 = 8 | 8 < 10
//carry = 0
//List 0 -> 7 -> 0 -> 8
//                  head

//return 7 -> 0 -> 8

addTwoNums([0], [0]); //[0]

addTwoNums([9,9,9,9,9,9,9], [9,9,9,9]); //[8,9,9,9,0,0,0,1]
//List 0 -> 
//   head
//sum = 0
//carry = 0

//l1: 9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9
//l2: 9 -> 9 -> 9 -> 9
//    ^
//sum = 0 + 9 + 9 = 18 | 18 > 10 | 18 - 10 = 8
//carry = 1
//List 0 -> 8 ->
//        head

//         ^
//sum = 1 + 9 + 9 = 19 | 19 > 10 | 19 - 10 = 9
//carry = 1
//List 0 -> 8 -> 9
//              head

//               ^
//sum = 1 + 9 + 9 = 19 | 19 > 10 | 19 - 10 = 9
//carry = 1
//List 0 -> 8 -> 9 -> 9
//                   head

//                     ^
//sum = 1 + 9 + 9 = 19 | 19 > 10 | 19 - 10 = 9
//carry = 1
//List 0 -> 8 -> 9 -> 9 -> 9
//                       head

//                           ^
//sum = 1 + 9 = 10 | 10 = 10 | 10 - 10 = 0
//carry = 1
//List 0 -> 8 -> 9 -> 9 -> 9 -> 0
//                            head

//                                ^
//sum = 1 + 9 = 10 | 10 = 10 | 10 - 10 = 0
//carry = 1
//List 0 -> 8 -> 9 -> 9 -> 9 -> 0 -> 0
//                                 head

//                                    ^
//sum = 1 + 9 = 10 | 10 = 10 | 10 - 10 = 0
//carry = 1
//List 0 -> 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0
//                                      head

//pointer is out of range
//sum = 1
//carry = 0
//List 0 -> 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1
//                                           head

//return  8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1
