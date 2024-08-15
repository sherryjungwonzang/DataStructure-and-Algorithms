//2130. Maximum Twin Sum Of LL
//in a linked list of size n - where n is even
//the i-th node (o-indexed) of the linked list is known as the twin of the (n - 1 - i)_th node
//if 0 <= i <= (n / 2) - 1
//for example, if n = 4, then node 0 is the twin of node 3 and node 1 is the twin of node 2
//these are the on;y nodes with twins for n = 4
//the twin sum is defined as the sum of a node and its twin

//given the head of a linked list with even length
//return the max twin sum of the LL

//Appraoch:
//using two pointers
var maxTwimSumLL = (head) => {
    //two pointers
    let slow = head;
    let fast = head;

    //find the mid point for reverse
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    //reverse second half
    let prev = null;
    let nextNode = new ListNode();

    while (slow) {
        nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    //get the max pair
    let max = 0;

    while (prev) {
        max = Math.max(max, prev.val + head.val);
        head = head.next;
        prev = prev.next;
    }

    return max;
}
//TC: O(n) - n is the num of nodes
//SC: O(1) - num of pointers
maxTwimSumLL([5,4,2,1]); //6 - Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6
//[5, 4, 2, 1]
// S  S  S 
// F     F     F

//5 -> 4 -> 2  -> null -> 1 -> null
//          S     prev   next
//        prev           S

//5 -> 4 -> 2  -> null -> 1 -> null
//          S     prev   next
//        prev           S     next
//                    <-
//                      prev   slow

//5 -> 4 -> 1 -> 2 -> null
//H         P
//max = 0 -> max(0, 1+5) = 6
//head = 5 -> 4
//prev = 1 -> 2

//5 -> 4 -> 1 -> 2 -> null
//     H         P
//max = 0 -> max(0, 1+5) = 6 -> max(6, 4+2) = 6
//head = 5 -> 4 -> 1
//prev = 1 -> 2 -> null

maxTwimSumLL([4,2,2,3]); //7 
//- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
//- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.

maxTwimSumLL([1, 100000]); //100001 - There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001
