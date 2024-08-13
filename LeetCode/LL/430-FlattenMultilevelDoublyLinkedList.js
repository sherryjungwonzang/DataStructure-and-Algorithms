//430. Flatten Multilevel Doubly Linked List
//given a double linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer
//this child pointer may or may not point to a separate double linked list, also containinig these special nodes
//these child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below:

//given the head of the first level of the list
//flatten the list so that all the nodes appear in a single-level, doubly linked list
//let curr be a node with a child list
//the nodes in the child list should appear after curr and before curr.next in the flattened list
//return the head of the flattened list - the nodes in the list must have all of their child poiters set to null

//Approach:
//using stack
var flattenMultilevelDoublyLL = (head) => {
    //base case
    if (!head) return null;

    let stack = []; //to store the rest of LL that has child
    let curr = head;

    while (curr) {
        if (curr.child) {
            if (curr.next) stack.push(curr.next);

            //new connection to child
            curr.next = curr.child;
            curr.next.prev = curr; //double LL
            curr.child = null; //disconnection
        } else if (!curr.next && stack.length !== 0) { //the tail of LL
            curr.next = stack.pop(); //extracking from the end
            curr.next.prev = curr; //doubly LL
        }

        curr = curr.next;
    } 
    
    return head;
}
flattenMultilevelDoublyLL([1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]); //[1,2,3,7,8,11,12,9,10,4,5,6] - 3, 8 has child
//stack = [ ]
//[1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12]
//       ^

//curr = 1 & curr = 2 pass to next
//curr = 3 has child
//stack = [ [4, 5, 6, null, null, null] ]
//1 <-> 2 <-> 3 <-> 7 <-> 8 <-> 9 <-> 10 <-> null <-> null <-> 11 <-> 12
//                  ^

//curr = 7 pass to next
//1 <-> 2 <-> 3 <-> 7 <-> 8 <-> 9 <-> 10 <-> null <-> null <-> 11 <-> 12
//                        ^
//curr 8 has child
//stack = [ [4, 5, 6, null, null, null], [9, 10, null, null] ]
//1 <-> 2 <-> 3 <-> 7 <-> 8 <-> 11 <-> 12

//1 <-> 2 <-> 3 <-> 7 <-> 8 <-> 11 <-> 12
//                                     ^
//curr 12 is the tail of LL
//connecting next to 12 to stack pop()
//stack = [ [4, 5, 6, null, null, null]]
//1 <-> 2 <-> 3 <-> 7 <-> 8 <-> 11 <-> 12 <-> 9 <-> 10

//1 <-> 2 <-> 3 <-> 7 <-> 8 <-> 11 <-> 12 <-> 9 <-> 10
//                                                  ^
//curr 10 is the tail of LL
//connecting next to 10 to stack pop()
//stack = []
//1 <-> 2 <-> 3 <-> 7 <-> 8 <-> 11 <-> 12 <-> 9 <-> 10 <-> 4 <-> 5 <-> 6

//[1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]

flattenMultilevelDoublyLL([1,2,null,3]); //[1,3,2]] - 1 has child
