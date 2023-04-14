//234. Palindrome Linked List
//given the 'head; of a singly linked list
//return true if it is a palindrome or false otherwise

//Approach:
//using fast and slow pointers
//using helper function - to reverse linked list
var palindromeLL = (head) => {
  //setting two pointers - fast and slow
  let fast = head;
  let slow = head;

  //to find the mid value for reversing
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //re-setting fast and slow pointers
  //to compare and check the palindrome between reversed LL and orginal LL
  fast = head;
  slow = reverse(slow);

  //checking the palindrome
  while(slow) {
    if (fast.val !== slow.val) {
      return false;
    }
    //otherwise, moving slow and fast pointers
    slow = slow.next;
    fast = fast.next;
  }
  return true;
}

function reverse(root) {
  let prev = null;
  while(root) {
    let ref = root.next;
    root.next = prev;
    
    prev = root;
    root = ref;
  }
  return prev;
}
//TC: O(n) - traverse half link (n/2) and traverse half of the linked list again to check whether it is palindrome or not (n)
//SC: O(1)
palindromeLL([1,2,2,1]); //true
//1 -> 2 -> 2 -> 1
//f         f       f
//s    s    s
//          ^ - mid point

//reverse based on mid point
//1 -> 2 -> null

//setting slow pointer in reversed LL
//setting fast pointer in original LL
//1 -> 2 -> null      1 -> 2 -> 2 -> 1
//s                   f
//1 = 1
//     s                   f
//2 = 2
//            s                   f -> s is out of bound
//return false

palindromeLL([1,2]); //false
