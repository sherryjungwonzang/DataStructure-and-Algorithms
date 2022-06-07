//Intersection of Two LinkedList
//given the head of two-singly linked list: headA and headB
//return the node at which the two lists intersection

//Approach 1: Two pointers
var getIntersectionNode = (headA, headB) => {
    let A = headA;
    let B = headB;

    if (!A || !B) return null;

    while(A !== B) {
        A = !A ? headB : A.next;
        B = !B ? headA : B.next;
    }

    return A;
}


//another solution
var getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null;

    let A = headA;
    let B = headB;

    while(A !== B) {
        if (!A) {
            A = headB;
        } else {
            A = A.next;
        }

        if (!B) {
            B = headA;
        } else {
            B = B.next;
        }

        /*
        same but different expression
        A = A ? A.next: B
        B = B ? B.next : A
        */
    }
    return A; //or B-> it doesnt matter
}
