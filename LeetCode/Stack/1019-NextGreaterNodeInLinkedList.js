//1019. Next Greater Node In Linked List
//given the head of a linked list with n nodes
//for each node in the list, find the value of the next greater node
//that is, for each node, find the value of the first node that is next to it
//and has a strictly larger value then it
//return an integer array answer where answer[i] is the value of the next greater node of the ith node
//if the ith node does not have a next greater node, set 0

//Approach:
//using stack
var nextGreaterNode = (head) => {
    let arr = []; //to collect all head
    let curr = head;

    //to make separate arr
    while (curr) {
        arr.push(curr.val);

        curr = curr.next;
    }

    let res = new Array(arr.length).fill(0);
    let stack = []; //to store position

    //to check next greater node
    for (let i = 0; i < arr.length; i++) {
        //next greater node
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            let index = stack.pop();

            res[index] = arr[i];
        }

        stack.push(i); //pushing index
    }

    return res;
}
nextGreaterNode([2,1,5]); //[5,5,0]
//               ^
//arr = [2, 1, 5]
//res = [0, 0, 0]
//stack = []

//i = 0
//stack = [ ] -> length is 0
//starting with just pushing index to stack
//stack = [ ] -> [ 0, ]

//i = 1
//stack = [ 0, ] 
//stack length > 0 && arr[1] = 1 < arr[stack[1 - 1 = 0] = 0] = 2 : not greater node
//stack = [ 0,  ] -> [ 0, 1, ]

//i = 2
//stack = [ 0, 1, ] 
//stack length > 0 && arr[2] = 5 > arr[stack[2 - 1 = 1] = 1] = 1 : greater node
//index = 1 -> popping from stack 
//res = [0, 5, 0]
//stack = [ 0, 1 ] -> [ 0, ]

//stack length > 0 && arr[2] = 5 > arr[stack[1 - 1 = 0] = 0] = 2 : greater node
//index = 0 -> popping from stack 
//res = [5, 5, 0]
//stack = [ 0, ] -> [  ]

nextGreaterNode([2,7,4,3,5]); //[7,0,5,5,0]
//               ^
//arr = [2, 7, 4, 3, 5]
//res = [0, 0, 0, 0, 0]
//stack = []

//i = 0
//stack = [ ] -> length is 0
//starting with just pushing index to stack
//stack = [ ] -> [ 0, ]

//i = 1
//stack = [ 0, ] 
//stack length > 0 && arr[1] = 7 > arr[stack[1 - 1 = 0] = 0] = 2 : greater node
//index = 0 -> popping from stack 
//res = [7, 0, 0, 0, 0]
//stack = [ 0,  ] -> [  ] -> [ 1, ]

//i = 2
//stack = [ 1, ] -> length is 1
//stack length > 0 && arr[2] = 4 < arr[stack[1 - 1 = 0] = 1] = 7 : not greater node
//stack = [ 1, ] -> [ 1, 2 ]

//i = 3
//stack = [ 1, 2 ] -> length is 2
//stack length > 0 && arr[3] = 3 < arr[stack[2 - 1 = 1] = 2] = 4 : not greater node
//stack = [ 1, 2, ] -> [ 1, 2, 3 ]

//i = 4
//stack = [ 1, 2, 3 ] -> length is 3
//stack length > 0 && arr[4] = 5 > arr[stack[3 - 1 = 2] = 3] = 3 : greater node
//index = 3 -> popping from stack 
//res = [7, 0, 0, 5, 0]
//stack = [ 1, 2, 3 ] -> [ 1, 2,  ]

//stack length > 0 && arr[4] = 5 > arr[stack[2 - 1 = 1] = 2] = 4 : greater node
//index = 2 -> popping from stack 
//res = [7, 0, 5, 5, 0]
//stack = [ 1, 2, ] -> [ 1,  ] -> [ 1, 4 ]
