//23. Merge K Sorted Lists
//given an array of k, linked lists lists
//each linked list is sorted in ascending order
//merge all the linked list into one sorted linked list and return it

//Approach:
//1. Brute force approach - where we create an array from this list + rudimental sorting algorithm + populate a new sorted list
//2. Merge Sort - making two lists and merging two of these lists

//making two lists
var mergeKLists = (lists) => {
    if (lists.length === 0) return null;

    while(lists.length > 1) {
        //subtracting from each list to re-create the list
        let list1 = lists.shift(); //only the first one
        let list2 = lists.shift(); //only the second one

        //merge two lists
        let merged = mergeLists(list1, list2);

        //push into lists
        lists.push(merged);
    }
    return lists[0];
}

//merging
function mergeLists(l1, l2) {
    let dummy = new ListNode(0);
    let head = dummy;

    while(l1 && l2) {
        if (l1.val <= l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }

    if (l1 === null) {
        dummy.next = l2;
    } else {
        dummy.next = l1;
    }
    return head.next;
}
//TC: O(nlogk)
//             L1        L2
mergeKLists([[1,4,5], [1,3,4], [2,6]]); //[1,1,2,3,4,4,5,6]
//            -        -
//1 vs 1 -> list1
//dummy -> 1  
//              -      -
//4 vs 1 -> list2
//dummy -> 1  -> 1
//              -         -
//4 vs 3 -> list2
//dummy -> 1  -> 1 -> 3
//              -           -
//4 vs 4 -> list1
//dummy -> 1  -> 1 -> 3 -> 4
//                -         -
//5 vs 4 -> list2
//dummy -> 1  -> 1 -> 3 -> 4 -> 4
//                -           - -> list2 === null
//dummy -> 1  -> 1 -> 3 -> 4 -> 4 -> 5

mergeKLists([]); //[]

mergeKLists([[]]); //[]

//           L1  L2
mergeKLists([[],[1]]); //[1]
//            -  -
//0 vs 1 -> list1
//dummy -> 0 -> 
//list1 === null
//dummy -> 0 -> 1
