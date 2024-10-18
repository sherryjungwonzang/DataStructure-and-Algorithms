//1019. Next Greater Node In Linked List
//given the head of a linked list with n nodes
//for each node in the list, find the value of the next greater node
//that is, for each node, find the value of the first node that is next to it
//and has a strictly larger value then it
//return an integer array answer where answer[i] is the value of the next greater node of the ith node
//if the ith node does not have a next greater node, set 0
var nextGreaterNode = (head) => {
    let arr = []; //to collect all head
    let curr = head;

    //to make separate arr
    while (curr) {
        arr.push(curr.val);

        curr = curr.next;
    }

    let res = new Array(arr.length).fill(0);

    //to check next greater node
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            //next greater node
            if (arr[j] > num) {
                res[i] = arr[j];

                break;
            }
        }
    }

    return res;
}
nextGreaterNode([2,1,5]); //[5,5,0]
//               ^
//arr = [2, 1, 5]
//       i
//          j
//1 < 2 -> not greater node
//res = [0, 0, 0]

//arr = [2, 1, 5]
//       i
//             j
//5 > 2 -> greater node
//res = [5, 0, 0]

//arr = [2, 1, 5]
//          i
//             j
//5 > 1 -> greater node
//res = [5, 5, 0]

//arr = [2, 1, 5]
//             i
//                j
//res = [5, 5, 0]

nextGreaterNode([2,7,4,3,5]); //[7,0,5,5,0]
//               ^
//arr = [2, 7, 4, 3, 5]
//       i
//          j
//7 > 2 -> greater node
//res = [7, 0, 0, 0, 0]

//arr = [2, 7, 4, 3, 5]
//          i
//             j
//4 < 7 -> not greater node
//res = [7, 0, 0, 0, 0]

//arr = [2, 7, 4, 3, 5]
//          i
//                j
//3 < 7 -> not greater node
//res = [7, 0, 0, 0, 0]

//arr = [2, 7, 4, 3, 5]
//          i
//                   j
//5 < 7 -> not greater node
//res = [7, 0, 0, 0, 0]

//arr = [2, 7, 4, 3, 5]
//             i
//                j
//3 < 4 -> not greater node
//res = [7, 0, 0, 0, 0]

//arr = [2, 7, 4, 3, 5]
//             i
//                   j
//5 > 4 -> greater node
//res = [7, 0, 5, 0, 0]

//arr = [2, 7, 4, 3, 5]
//                i
//                   j
//5 > 3 -> greater node
//res = [7, 0, 5, 5, 0]

//arr = [2, 7, 4, 3, 5]
//                   i
//                      j
//5 > 3 -> greater node
//res = [7, 0, 5, 5, 0]
