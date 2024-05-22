//234. Palindrome Linked List
//given the 'head; of a singly linked list
//return true if it is a palindrome or false otherwise

//Approach:
//using fast and slow pointers
//using helper function - to reverse linked list
var palindromeLL = (head) => {
    //fast and slow pointer
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //re-setting the fast and slow pointer
    fast = head;
    slow = reverse(slow); //to the reversed list based on mid point

    //checking palindrome
    while(slow) {
        if (fast.val !== slow.val) return false;

        slow = slow.next;
        fast = fast.next;
    }
    return true;
}

//reverse LL
function reverse(head) {
    let prev = null;

    while(head) {
        let temp = head.next;
        head.next = prev;

        prev = head;
        head = temp;
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
