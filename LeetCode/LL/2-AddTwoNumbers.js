//2. Add two numbers
//given two non-empty linked lists representing two non-negative integers
//the digits are stored in reverse order and each of their nodes contains a single digit
//add the two numbers and return the sum as a linked list

//assume the two numbers do not contain any leading zero, except the number 0 itself
var addTwoNums = (l1, l2) => {
    let list = new ListNode(0);
    let head = list;

    let sum = 0;
    let carry = 0;

    while(l1 !== null || l2 !== null || sum !== 0) {
        //l1
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        //l2
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        //sum 10+
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        //updating list
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return list.next;
}
addTwoNums(l1 = [2,4,3], l2 = [5,6,4]); //[7,0,8] - 342 + 465 = 807

addTwoNums([0], [0]); //[0]
