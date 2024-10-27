//2487. Remove Nodes From Linked List
//given the head of a linked list
//remove every node which has a node with a greater value anywhere to the right side of it
//return the head of the modigied linked list

//Approach:
//using stack
var removeNodesLL = (head) => {
    let curr = head;
    let stack = [];
    let next = null;

    //checking the greater value to the right side
    while (curr !== null) { 
        //not greater value - pop()
        while (stack.length > 0 && stack[stack.length - 1].val < curr.val) stack.pop();

        //otherwise
        stack.push(curr);

        curr = curr.next;
    }

    //connecting only with greater value from stack by reversion
    while (stack.length) {
        curr = stack.pop();

        //connecting
        curr.next = next;

        //updating
        next = curr;
    }

    return  curr;
}
//TC: O(n)
//SC: O(n)
removeNodesLL([5,2,13,3,8]); //[13,8]
//stack = [ ]

//curr = [5, 2, 13, 3, 8]
//        ^
//stack is empty -> push into stack
//stack = [ [5, 2, 13, 3, 8],  ]

//curr = [5, 2, 13, 3, 8]
//           ^
//stack length > 0 & 5 > 2 -> not greater value
//stack = [ [5, 2, 13, 3, 8], [2, 13, 3, 8],  ]

//curr = [5, 2, 13, 3, 8]
//              ^
//stack length > 0 & 2 < 13 -> greater value
//popping from stack -> [2, 13, 3, 8]
//stack = [ [5, 2, 13, 3, 8], [2, 13, 3, 8],  ] -> [ [5, 2, 13, 3, 8] ] 
//stack length > 0 & 5 < 13 -> greater value
//popping from stack -> [5, 2, 13, 3, 8]
//stack = [ [5, 2, 13, 3, 8] ] -> [ ]
//adding the greater value
//stack = [ [13, 3, 8], ]

//curr = [5, 2, 13, 3, 8]
//                  ^
//stack length > 0 & 13 > 3 -> not greater value
//stack = [ [13, 3, 8], [3, 8], ]

//curr = [5, 2, 13, 3, 8]
//                     ^
//stack length > 0 & 3 > 8 -> greater value
//popping from stack -> [3, 8]
//stack = [ [13, 3, 8], [3, 8], ] -> [ [13, 3, 8],  ]
//stack length > 0 & 8 < 13 -> not greater value anymore
//adding the greater value
//stack = [ [13, 3, 8], [8] ]

//connecting greater value
//stack = [ [13, 3, 8], [8] ]
//                       ^
//curr = [8]
//curr.next = null: [8] -> null
//next = null -> [8]

//stack = [ [13, 3, 8], [8] ]
//               ^
//curr = [13, 3, 8]
//curr.next = [8]: [13, 3, 8] -> [8] -> null
//next = null -> [13, 8]

//curr = [13, 8]

removeNodesLL([1,1,1,1]); //[1,1,1,1]
