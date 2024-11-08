//147. Insertion Sort List
//given the head of a singly linked list
//sort the list using insertion sort, and return the sorted list's head

//the steps of the insertion sort algorithm:
//insertion sort iterates, consuming one input element each repetition and growing a sorted output list
//at each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there
//it repeats until no input elements remain

//Approach:
//using sorting
var insertionSortList = (head) => {
    let arr = [];
    let curr = head;

    while (curr != undefined) {
        arr.push(curr.val);

        //moving
        curr = curr.next;
    }

    //sorting
    arr.sort((a, b) => {
        return a - b;
    })

    curr = head;

    while (curr != undefined) {
        curr.val = arr.shift();

        curr = curr.next;
    }

    return head;
}
insertionSortList([4,2,1,3]); //[1,2,3,4]
//curr = 4 -> 2 -> 1 -> 3
//       ^
//arr = [ 4, 2, 1, 3 ]

//sorting arr: [1, 2, 3, 4]

//curr = [4, 2, 1, 3] || arr = [1, 2, 3, 4]
//                              ^
//head = [1, ]

//curr = [2, 1, 3] || arr = [1, 2, 3, 4]
//                              ^
//head = [1, 2, ]

//curr = [1, 3] || arr = [1, 2, 3, 4]
//                              ^
//head = [1, 2, 3, ]

//curr = [3] || arr = [1, 2, 3, 4]
//                              ^
//head = [1, 2, 3, 4]

//curr = [] || arr = [1, 2, 3, 4]
//                               ^

//head = [1, 2, 3, 4]

insertionSortList([-1,5,3,4,0]); //[-1,0,3,4,5]
//curr = -1 -> 5 -> 3 -> 4 -> 0
//       ^
//arr = [-1, 5, 3, 4, 0]

//sorting arr: [-1, 0, 3, 4, 5]

//curr = [-1, 5, 3, 4, 0] || arr = [-1, 0, 3, 4, 5]
//                                  ^
//head = [-1,  ]

//curr = [5, 3, 4, 0] || arr = [-1, 0, 3, 4, 5]
//                                  ^
//head = [-1, 0,   ]

//curr = [3, 4, 0] || arr = [-1, 0, 3, 4, 5]
//                                  ^
//head = [-1, 0, 3,  ]

//curr = [4, 0] || arr = [-1, 0, 3, 4, 5]
//                                  ^
//head = [-1, 0, 3, 4, ]

//curr = [0] || arr = [-1, 0, 3, 4, 5]
//                                  ^
//head = [-1, 0, 3, 4, 5]

//curr = [] || arr = [-1, 0, 3, 4, 5]
//                                   ^

//head = [-1, 0, 3, 4, 5]
