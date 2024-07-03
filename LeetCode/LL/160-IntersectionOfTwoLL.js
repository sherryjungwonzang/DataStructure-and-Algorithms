//160. Intersection Of Two Linked Lists
//given the heads of two singly linked lists headA and headB
//return the node at which the two lists intersect
//if the two linked lists have no intersection at all - return null

//'intersectVal' - the value of the node where the intersection occurs - this is 0 if there is no intersected node
//'listA' - the first LL
//'listB' - the second LL
//'skipA' - the number of nodes to skip ahead in listA - starting from the head to get to the intersected node
//'skipB' - the number of nodes to skip ahead in listB - starting from the head to get to the intersected node

//the judge will then create the linked structure based on these inputs and pass the two heads - headA and headB
//if you correctly return the intersected node, then your solution will be accepted
var intersectionTwoLL = (intersectVal, listA, listB, skipA, skipB) => {
    //base case
    if (!headA || !headB) return null;

    let currA = headA;
    let currB = headB;

    while (currA !== currB) {
        //if currA has left elements
        if (currA.next) currA = currA.next; //moving the pointer
        else { //currA is empty
            if (!currB.next) { //both currA and currB are empty
                currA = null;
                currB = null;
                break;
            }
            currA = headB; //currB still has elements reset currA with headB
        }

        //if currB has left elements
        if (currB.next) currB = currB.next;
        else currB = headA; //if currB is empty
    }

    return currB;
}
//TC: O(n)
//SC: O(1)
intersectionTwoLL(ntersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3); //8
//      4 -> 1 
//              -> 8 -> 4 -> 5
// 5 -> 6 -> 1

intersectionTwoLL(intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1); //2
// 1 -> 9 -> 1
//              -> 2 -> 4
//        -> 3

intersectionTwoLL(intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2); //no intersection
// 2 -> 6 -> 4
//      1 -> 5
