//There are two lists: list1 and list2
//Merge those in one sorted list by splicing together the nodes of the first two lists

//Recursive approach
//if list1[0] + merge(list1[1:], list2) -> list1[0] < list2[0]
//if list2[0] + merge(list1, list2[1:] -> otherwise)

var mergeTwoLists = (list1, list2) => {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};
