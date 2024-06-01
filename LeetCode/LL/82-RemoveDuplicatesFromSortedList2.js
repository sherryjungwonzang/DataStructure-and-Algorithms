//82. Remove Duplicates From Sorted List2
//given the 'head' of a sorted linked list
//delete all nodes that have duplicate numbers - leaving only distinct numbers from the original list
//return the linked list sorted as well
var removeDuplicatesSortedLL2 = (head) => {
    //base case
    if (head === null || head.next === null) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;

    while (curr.next !== null && curr.next.next !== null) {
        //there is duplicates in a row
        if (curr.next.val === curr.next.next.val) {
            //setting duplicate value
            let duplicate = curr.next.val;

            while (curr.next !== null && curr.next.val === duplicate) {
                curr.next = curr.next.next;
            }
        } else { //moving to the next position
            curr = curr.next;
        }
    }
    return dummy.next;
}
removeDuplicatesSortedLL2([1,2,3,3,4,4,5]); //[1,2,5]
// dummy -> 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5
// curr    head
//curr.next=1 !== curr.next.next=2

//         curr head
//curr.next=2 !== curr.next.next=3

//             curr head
//curr.next=3 == curr.next.next=3
//duplicate = 3
//curr.next=3 == duplicate =3 -> move curr.next to curr.next.next 

// dummy -> 1 -> 2 -> 4 -> 4 -> 5
//             curr head
//curr.next=4 == curr.next.next=4
//duplicate = 4
//curr.next=4 == duplicate =4 -> move curr.next to curr.next.next 

// dummy -> 1 -> 2 -> 5
//1 -> 2 -> 5

removeDuplicatesSortedLL2([1,1,1,2,3]); //[2,3]
// dummy -> 1 -> 1 -> 1 -> 2 -> 3
// curr   head
//curr.next=1 == curr.next.next=1
//duplicate = 1
//curr.next=1 == duplicate =1 -> move curr.next to curr.next.next 

// dummy -> 1 -> 1 -> 2 -> 3
// curr   head
//curr.next=1 == curr.next.next=1
//duplicate = 1
//curr.next=1 == duplicate =1 -> move curr.next to curr.next.next 

// dummy -> 2 -> 3
//2 -> 3
