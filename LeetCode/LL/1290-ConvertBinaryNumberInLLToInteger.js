//1290. Convert Binary Number in a linked list to integer
//given 'head' which is a reference node to a singly-linked list
//the value of each node in the linked list is either 0 or 1
//the linked list holds the binary representation of a number

//return the decimal value of the num in the linked list
//the most significant bit is at the head of the linked list
var linkedListToInteger = (head) => {
    //base case
    if (!head) return 0;

    let total = 0;

    while (head !== null) {
        total = total * 2 + head.val;
        head = head.next;
    }
    return total;
}
linkedListToInteger([1,0,1]); //5 - (101) in base 2 = (5) in base 20
//                   h
//total = 0
//total = 0 * 2 + 1 = 1

//total = 1
//                     h
//total = 1 * 2 + 0 = 2

//total = 2
//                       h
//total = 2 * 2 + 1 = 5

linkedListToInteger([0]); //0
