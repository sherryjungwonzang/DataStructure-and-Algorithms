//2181. Merge Nodes In Between Zeros
//given the head of a linked list, which contains a series of integers separated by 0's
//the beginning and end of the linked list will have Node.val == 0
//for every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes
//the modified list should not contain any 0's
//return the head of the modified linked list

//Approach:
//using dummy
var mergeNodesBetweenZeros = (head) => {
    let dummy = new ListNode();
    let curr = dummy; 
    let sum = 0;

    //updating head
    head = head.next;
    
    while (head !== null) {
        //separating by 0
        if (head.val === 0) {
            //resetting as next range
            curr.next = new ListNode(sum);

            //updating
            curr = curr.next;

            //resetting
            sum = 0;
        }
        
        //adding value to sum
        sum += head.val;

        //moving
        head = head.next;
    }

    return dummy.next;
}
//TC: O(n)
//SC: O(1)
mergeNodesBetweenZeros([0,3,1,0,4,5,2,0]); //[4,11]
//[0,3,1,0,4,5,2,0]
//dummy -> 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
//curr          H
//sum = 0 -> 3

//dummy -> 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
//curr               H
//sum = 0 -> 3 -> 4

//dummy -> 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
//curr                    H
//head = 0 -> separating -> connecting dummy with current sum
//dummy -> 4
//sum = 0 -> 3 -> 4 -> 0

//dummy -> 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
//curr                         H
//dummy -> 4
//sum = 0 -> 3 -> 4 -> 0 -> 4

//dummy -> 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
//curr                              H
//dummy -> 4
//sum = 0 -> 3 -> 4 -> 0 -> 4 -> 9

//dummy -> 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
//curr                                   H
//dummy -> 4
//sum = 0 -> 3 -> 4 -> 0 -> 4 -> 9 -> 11

//dummy -> 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
//curr                                        H
//head = 0 -> separating -> connecting dummy with current sum
//dummy -> 4 -> 11
//sum = 0 -> 3 -> 4 -> 0 -> 4 -> 9 -> 11 -> 0

//dummy -> 4 -> 11
//[4, 11]

mergeNodesBetweenZeros([0,1,0,3,0,2,2,0]); //[1,3,4]
