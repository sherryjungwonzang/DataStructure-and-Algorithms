//143. Reorder List
//given the head of a singly linked list
//: L0 -> L1 -> ... -> Ln-1 -> Ln
//reorder the list to be on the following form
//: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ...
//not modify the values in the list's nodes
//only nodes themselves may be changed

//Approach:
//using fast and slow pointers - to find mid
//break the array based on the mid point
//the last array reverse it
//merge two broken arrays by linking the node manually 
var reorderList = (head) => {
    //find the mid - fast and slow pointer
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //break the connection
    let curr = slow.next;
    slow.next = null;

    //reverse the second list
    while (curr) { 
        let temp = curr.next; //temp = nextNode(in original reverse code)
        curr.next = prev; //head = curr(in original reverse code)

        prev = curr; //head = curr(in original reverse code)
        curr = temp; //temp = nextNode(in original reverse code)
    }

    //combine list
    let h1 = head;
    let h2 = prev;

    while (h2) {
        let temp = h1.next;
        h1.next = h2; //connect h1 with h2
        h1 = h2;
        h2 = temp;
    }
}
//TC: O(n)
//SC: O(1)
reorderList([1, 2, 3 ,4 ,5]); //[1,5,2,4,3]
//to find the mid point
//           f
//           s
//                 f
//              s
//                       f
//                 s -> mid point

//break the linked list
//1 -> 2 -> 3 -> null and 4 -> 5 -> null
//         slow           curr

//reverse
//null -> 4 -> 5 -> null  -------> null <- 4 <- 5
//prev   curr  temp                            prev

// 1 -> 2 -> 3 -> null  || 5 -> 4 -> null
// h1  temp                h2
//      h2                 h1  temp
//      h1  temp                h2
//           h2                 h1    temp

//1 -> 5 -> 2 -> 4 -> 3 -> null

reorderList([1, 2, 3, 4]); //[1,4,2,3]
//to find the mid point
//           f
//           s
//                 f
//              s -> mid point

//1 -> 2 -> null and 3 -> 4 -> null
//   slow           curr

//null -> 3 -> 4 -> null    --------->  null <- 3 <- 4
//prev  curr  temp                                  prev

//1 -> 2 -> null || 4 -> 3 -> null
// h1  temp         h2
//      h2          h1  temp
//      h1  temp         h2
//           h2          h1   temp

//1 -> 4 -> 2 -> 3 -> null
