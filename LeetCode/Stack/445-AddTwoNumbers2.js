
//445. Add two numbers2
//given two non-empty LL representing two non-negative integers
//the most significant digits comes first and each of their nodes contains a single digits
//add the two numbers and return the sum as LL
//you may assum the two numbers do not contain any leading zero - except the number 0 itself

//Approach:
//using stack
var addTwoNum2 = (l1, l2) => {
    let stack1 = [];
    let stack2 = [];
    let carry = 0;
    let dummy = null;

    //adding all elements to stack1 & 2
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    //Calculating
    while (stack1.length || stack2.length || carry) {
        //popping from the back for calculation
        let val1 = stack1.pop() || 0;
        let val2 = stack2.pop() || 0;
        let total = val1 + val2 + carry;

        carry = Math.floor(total / 10);

        //setting new LL with sum
        let newNode = new ListNode(total % 10);
        newNode.next = dummy;
        dummy = newNode;
    }

    return dummy;
}
addTwoNum2([7,2,4,3], [5,6,4]); //[7,8,0,7]
// 7 -> 2 -> 4 -> 3
//      5 -> 6 -> 4
//7 -> 8 -> 0 -> 7

addTwoNum2([2,4,3], [5,6,4]); //[8,0,7]

addTwoNum2([0], [0]); //[0]
