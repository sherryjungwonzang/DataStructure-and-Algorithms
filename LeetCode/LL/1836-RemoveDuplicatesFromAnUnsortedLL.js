//1836. Remove Duplicates from an Unsorted Linked List
//given the 'head; of a linked list
//find all the values that appear more than once in the list 
//and return the linked list after the deletions
var removeDuplicatesUnsortedLL = (head) => {
    //1. Find duplicates
    let clone = head; //clone the LL
    let freqMap = {};

    while(clone !== null) {
        //filling the map
        if (!freqMap[clone.val]) {
            freqMap[clone.val] = 1;
        } else {
            freqMap[clone.val]++;
        }
        //update clone's position
        clone = clone.next;
    }


    //2. Delete duplicates - using prev(-1)
    let prev = new ListNode(-1, head); //passing -1 and pointing to the next noode

    clone = prev;

    while(clone !== null) {
        //check whether we have the next value and check if next node is a duplicate
        while(clone.next && freqMap[clone.next.val] > 1) { //duplicates
            //breaking the connection
            clone.next = clone.next.next;
        }
        clone = clone.next;
    }
    return prev.next;
}
//TC: O(n) - loop through link
//SC: O(n) - creating frequency map
removeDuplicatesUnsortedLL([1,2,3,2]); //[1,3] - 2 appears twice in the LL, so all 2's should be deleted. After deleting all 2's we are left with [1,3]
//freqMap = { 1: 1, 2: 2, 3: 1 }
//  -1 -> 1 -> 2 -> 3 -> 2
// prev
// clone

//clone=-1 -> check in freqMap of clone's next's val: 1 -> meaning no duplicates
//      clone

//clone=1 -> check in freqMap of clone's next's val: 2 -> meaning duplicates
//break the link between 1 and 2 -> move 1.next to 3

//                 clone
//clone=3 -> check in freqMap of clone's next's val: 2 -> meaning duplicates
//break the link between 3 and 2 -> move 1.next to null

//return prev.next: 1 -> 3

removeDuplicatesUnsortedLL([2,1,1,2]); //[] - 2 and 1 both appear twice. All the elements should be deleted
