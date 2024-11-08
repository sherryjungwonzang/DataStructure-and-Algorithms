//1171. Remove Zero Sum Consecutive Nodes From Linked List
//given the head of a linked list, 
//we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences
//after doing so, return the head of the final linked list

//Approach:
//using dummy
var removeZeroConsecutive = (head) => {
    let sum = 0;
    let map = new Map();
    let dummy = new ListNode(0);

    //setting dummy and head
    dummy.next = head;

    //base setting
    map.set(0, dummy);

    //traversing
    while (head) {
        sum += head.val;

        //consecutive zero sum
        if (map.has(sum)) {
            let newArr = map.get(sum); //to remove from newArr
            let temp = newArr; //until same with head
            let subSum = sum; 

            //consecutive
            while (temp !== head) {
                temp = temp.next;

                subSum += temp.val;

                if (temp !== head) map.delete(subSum);
            }
            
            //disconnecting
            newArr.next = head.next;

        } else {
            map.set(sum, head);
        }

        //moving
        head = head.next;
    }

    return dummy.next;
}
removeZeroConsecutive(head = [1,2,-3,3,1]); //[3, 1]
//[1, 2, -3, 3, 1] -> dummy -> 1 -> 2 -> -3 -> 3 -> 1

//0 ->    1 -> 2 -> -3 -> 3 -> 1
//dummy  head
//map = {
//  0: [0 -> 1 -> 2 -> -3 -> 3 -> 1]
//}
//sum = 0 -> 1: not in map
//map = {
//  0: [0 -> 1 -> 2 -> -3 -> 3 -> 1]
//  1: [1 -> 2 -> -3 -> 3 -> 1]
//}

//0 ->    1 -> 2 -> -3 -> 3 -> 1
//dummy      head
//sum = 0 -> 1 -> 3: not in map
//map = {
//  0: [0 -> 1 -> 2 -> -3 -> 3 -> 1]
//  1: [1 -> 2 -> -3 -> 3 -> 1]
//  3: [2 -> -3 -> 3 -> 1]
//}

//0 ->    1 -> 2 -> -3 -> 3 -> 1
//dummy            head
//sum = 0 -> 1 -> 3 -> 0: in map ----------> newArr = [0 -> 1 -> 2 -> -3 -> 3 -> 1]   -------------------------------------------------------------------------------------------------------------------> [0 -> 3 -> 1]: disconnecting [1 -> 2]
//                                           temp = [0 -> 1 -> 2 -> -3 -> 3 -> 1] -> [1 -> 2 -> -3 -> 3 -> 1] != head      ->  temp = [1 -> 2 -> -3 -> 3 -> 1] -> [2 -> -3 -> 3 -> 1] != head           ->  temp = [2 -> -3 -> 3 -> 1] -> [-3 -> 3 -> 1] = head || stop
//                                           subSum = 0 -> 1                                                                   subSum = 0 -> 1 -> 3                                                         subSum = 0 -> 1 -> 3 -> 0            
//                                           deleting 1 in map = {                                                             deleting 3 in map = {
//                                                              0: [0 -> 1 -> 2 -> -3 -> 3 -> 1]                                                   0: [0 -> 1 -> 2 -> -3 -> 3 -> 1]
//                                                              3: [2 -> -3 -> 3 -> 1]                                         }
//}

//0 ->    1 -> 2 -> -3 -> 3 -> 1
//dummy                 head
//sum = 0 -> 1 -> 3 -> 0 -> 3: not in map
//map = {
//  0: [0 -> 1 -> 2 -> -3 -> 3 -> 1] -> [0 -> 3 -> 1] 
//  3: [3 -> 1]
//}

//0 ->    1 -> 2 -> -3 -> 3 -> 1
//dummy                       head
//sum = 0 -> 1 -> 3 -> 0 -> 3 -> 4: not in map
//map = {
//  0: [0 -> 1 -> 2 -> -3 -> 3 -> 1] -> [0 -> 3 -> 1] 
//  3: [3 -> 1]
//  4: [1]
//}

//[0    -> 3 -> 1] 
//dummy                 -> dummy.next: [3, 1]

removeZeroConsecutive(head = [1,2,3,-3,4]); //[1,2,4]
//[1, 2, 3, -3, 4] -> dummy -> 1 -> 2 -> 3 -> -3 -> 4

//0     -> 1 -> 2 -> 3 -> -3 -> 4
//dummy  head
//map = {
//  0: [0 -> 1 -> 2 -> 3 -> -3 -> 4]
//}
//sum = 0 -> 1: not in map
//map = {
//  0: [0 -> 1 -> 2 -> 3 -> -3 -> 4]
//  1: [1 -> 2 -> 3 -> -3 -> 4]
//}

//0     -> 1 -> 2 -> 3 -> -3 -> 4
//dummy       head
//sum = 0 -> 1 -> 3: not in map
//map = {
//  0: [0 -> 1 -> 2 -> 3 -> -3 -> 4]
//  1: [1 -> 2 -> 3 -> -3 -> 4]
//  3: [2 -> 3 -> -3 -> 4]
//}

//0     -> 1 -> 2 -> 3 -> -3 -> 4
//dummy             head
//sum = 0 -> 1 -> 3 -> 6: not in map
//map = {
//  0: [0 -> 1 -> 2 -> 3 -> -3 -> 4]
//  1: [1 -> 2 -> 3 -> -3 -> 4]
//  3: [2 -> 3 -> -3 -> 4]
//  6: [3 -> -3 -> 4]
//}

//0     -> 1 -> 2 -> 3 -> -3 -> 4
//dummy                  head
//sum = 0 -> 1 -> 3 -> 6 -> 3: in map ----------> newArr = [2 -> 3 -> -3 -> 4]    -------------------------------------------------------->  [4]: disconnecting [3 -> -3]
//map = {                                         temp = [2 -> 3 -> -3 -> 4] -> [3 -> -3 -> 4] != head     ->      temp = [3 -> -3 -> 4] ->  [-3 -> 4] = head
//  0: [0 -> 1 -> 2 -> 3 -> -3 -> 4]              subSum = 3 -> 6                                                  subSum = 3 -> 6 -> 3
//  1: [1 -> 2 -> 3 -> -3 -> 4]                   deleting 6 in map = {  
//  3: [2 -> 3 -> -3 -> 4]    <-                                    0: [0 -> 1 -> 2 -> 3 -> -3 -> 4]
//  6: [3 -> -3 -> 4]                                               1: [1 -> 2 -> 3 -> -3 -> 4] 
//}                                                                 3: [2 -> 3 -> -3 -> 4]  
//                                                }

//0     -> 1 -> 2 -> 3 -> -3 -> 4
//dummy                       head
//sum = 0 -> 1 -> 3 -> 6 -> 3 -> 7: not in map
//map = {
//  0: [0 -> 1 -> 2 -> 3 -> -3 -> 4] -> [0 -> 1 -> 2 -> 4]
//  1: [1 -> 2 -> 3 -> -3 -> 4] -> [1 -> 2 -> 4]
//  3: [2 -> 3 -> -3 -> 4] -> [2, 4]
//}

//[0    -> 1 -> 2 -> 4] 
//dummy                 -> dummy.next: [1, 2, 4]

removeZeroConsecutive(head = [1,2,3,-3,-2]); //[1]
