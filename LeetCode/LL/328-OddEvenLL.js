//328. Odd even linked list
//given the 'head' of a siongly linked list
//group all the nodes with odd indices together followed by the nodes with even indices
//and return the reordered list

//the first node is considered odd and the second node is eveb
//note the the relative order inside both the even and odd groups should remain as it was in the input
var oddEvenLL = (head) => {
    if (head !== null) {
        let odd = head;
        let even = head.next;
        let evenHead = even;

        while (even && even.next !== null) {
            //odd connection
            odd.next = even.next;
            odd = odd.next;

            //even connection
            even.next = odd.next;
            even = even.next;
        }

        //connecting odd and even
        odd.next = evenHead;
    }
    return head;
}
oddEvenLL([1,2,3,4,5]); //[1,3,5,2,4]

oddEvenLL([2,1,3,5,6,4,7]); //[2,3,6,7,1,5,4]
