//817. Linked List Components
//given the head of a linked list containing unique integer values 
//and an integer array 'nums' that is a subset of the LL values
//return the num of connected components in nums where two values are connected if they appear consecutively in the LL

//Approach:
//using stack
var LLComponents = (head, nums) => {
    let set = new Set(nums);
    let pointer = head;
    let stack = [];
    let res = 0;

    while (pointer) {
        //overlapped number
        if (set.has(pointer.val)) stack.push(pointer.val);
        else { 
            //continuation stopped
            if (stack.length) {
                res++;
                stack = []; //resetting for another continuation
            }
        }

        pointer = pointer.next;
    }

    return (stack.length) ? res + 1 : res;
}
LLComponents(head = [0,1,2,3], nums = [0,1,3]); //2 - 0 and 1 are connected, so [0, 1] and [3] are the two connected components
//head = [0, 1, 2, 3] || set = [0, 1, 3]
//        ^                     +
//0 is in set
//stack = [ 0, ]
//res = 0

//head = [0, 1, 2, 3] || set = [0, 1, 3]
//           ^                     +
//1 is in set
//stack = [ 0, 1, ]
//res = 0

//head = [0, 1, 2, 3] || set = [0, 1, 3]
//              ^                    
//2 is not in set -> continuation stopped
//stack = [ 0, 1, ] -> [ ]
//res = 0 -> 1

//head = [0, 1, 2, 3] || set = [0, 1, 3]
//                 ^                  +                    
//3 is in set
//stack = [ 0, 1, ] -> [ 3, ]
//res = 0 -> 1

//stack still has element: res = 0 -> 1 -> 2

LLComponents(head = [0,1,2,3,4], nums = [0,3,1,4]); //2 -  0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components
//head = [0, 1, 2, 3, 4] || set = [0, 3, 1, 4]
//        ^                        +
//0 is in set
//stack = [ 0, ]
//res = 0

//head = [0, 1, 2, 3, 4] || set = [0, 3, 1, 4]
//           ^                           +
//1 is in set
//stack = [ 0, 1, ]
//res = 0

//head = [0, 1, 2, 3, 4] || set = [0, 3, 1, 4]
//              ^                          
//2 is not in set -> continuation stopped
//stack = [ 0, 1, ] -> [ ]
//res = 0 -> 1

//head = [0, 1, 2, 3, 4] || set = [0, 3, 1, 4]
//                 ^                  +
//3 is in set
//stack = [ 0, 1, ] -> [ 3,  ]
//res = 0 -> 1

//head = [0, 1, 2, 3, 4] || set = [0, 3, 1, 4]
//                    ^                     +
//4 is in set
//stack = [ 0, 1, ] -> [ 3, 4 ]
//res = 0 -> 1

//stack still has element: res = 0 -> 1 -> 2
