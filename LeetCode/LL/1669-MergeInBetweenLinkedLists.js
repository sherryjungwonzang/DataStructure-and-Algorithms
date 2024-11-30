//1669. Merge In Between Linked Lists
//given two linked lists: list1 and list2 of sizes n and m respectively
//remove list1's nodes from the ath node to the bth node, and put list2 in their place
//the blue edges and nodes in the following figure indicate the result:
//list1: 0, ... a - 1 -> a -> ... -> b -> b + 1 -> ... -> n - 1
//list2:          0 -> .................. m - 1
//build the result list and return its head
var mergeBetweenLL = (list1, list2) => {
    //moving pointer before remove position
    let startRemove = list1;
    for (let i = 0; i < a - 1; i++) startRemove = startRemove.next;

    //finding the remove end range
    let endRemove = startRemove.next;
    for (let i = 0; i < b - a + 1; i++) endRemove = endRemove.next;

    //merging
    startRemove.next = list2;

    while (list2.next) list2 = list2.next;

    list2.next = endRemove;

    return list1;
}
mergeBetweenLL(list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]); //[10,1,13,1000000,1000001,1000002,5]
//list1 = [10, 1, 13, 6, 9, 5] || list2 = [1000000, 1000001, 1000002]
//         SR---->SR
//startRemove move until 3 - 1 = 2
//                   ER---->ER
//endRemove move 4 - 3 + 1 = 2 more

//list1 = [10, 1, 13, 6, 9, 5] || list2 = [1000000, 1000001, 1000002]
//                SR        ER
//connecting SR.next with list 2 -> [10, 1, 13, 1000000, 1000001, 1000002] & connecting list2.next with ER -> [10, 1, 13, 1000000, 1000001, 1000002, 5]
//                                                  ^       ^          ^

//[10, 1, 13, 1000000, 1000001, 1000002, 5]

mergeBetweenLL(list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]); //[0,1,1000000,1000001,1000002,1000003,1000004,6]
//list1 = [0, 1, 2, 3, 4, 5, 6] || list2 = [1000000, 1000001, 1000002, 1000003, 1000004]
//         SR>SR
//startRemove move until 2 - 1 = 1
//               ER--------->ER
//endRemove move 5 - 2 + 1 = 3 more

//list1 = [0, 1, 2, 3, 4, 5, 6] || list2 = [1000000, 1000001, 1000002, 1000003, 1000004]
//            SR             ER
//connecting SR.next with list 2 -> [0, 1, 1000000, 1000001, 1000002, 1000003, 1000004] & connecting list2.next with ER -> [0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6]
//                                             ^        ^       ^        ^         ^

//[0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6]
