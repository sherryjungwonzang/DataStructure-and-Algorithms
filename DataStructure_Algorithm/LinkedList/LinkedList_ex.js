//Reverse a singly linked list
//iterate through each node
//set the next property on the current node to the previous node
//To fully reverse a linked list, the entire N elements of the linked list must be traversed
function reverseSingleLinkedList(sll) {
    var node = sll.head;
    var prev = null;

    while(node) {
        var temp = node.next;
        node.next = prev;
        prev = node;

        if(!temp) break;
        node = temp;
    }
    return node;
}
//Time Complexity: O(n)
//Space Complexity: O(1)


//Deleting duplicates in unsorted linked list
//iterate and store visited nodes inside an array
//delete the current element if the current element has already been seen previously
function deleteDuplicateInUnsortedSll(slll) {
    var track = [];
    var temp = slll.head;
    var prev = null;

    while(temp) {
        if(track.indexOf(temp.data) >= 0) {
            prev.next = temp.next;
            slll.size--;
        } else {
            track.push(temp.data);
            prev = temp;
        }
        temp = temp.next;
    }
    console.log(temp);
}
//Time Complexity: O(n^2)
//Space Complexity: O(n)
//to improve the efficiency of this


//instead of using indexOf() method
//track array grows to size of N
function deleteDuplicateInUnsortedSllBest(slll) {
    var track = [];
    var temp = slll.head;
    var prev = null;

    while(temp) {
        if(track[temp.data]) {
            prev.next = temp.next;
            slll.size--;
        } else {
            track[temp.data] = true;
            prev = temp;
        }
        temp = temp.next;
    }
    console.log(temp);
}
//Time Complexity: O(n)
//Space Complexity: O(n)

//Using JavaScript Object as a hash table to store and check for seen elements can cut it down to O(n)
//but O(n) in space as extra memory is required for the hash table

