//Palindrome LinkedList
//given the head of a singly linkedlist

//Approach: reversing linked-list with two pointers
var isPalindrome = (head) => {
    //lists with 0 or 1 node will automatically be palindrome
    if (!head) return true;

    //to find the middle point using two point runners
    //adding two indices: slow and fase
    //slow: point to the mid node of the palindrome
    //fast: a helper that will be assigned some conditions to help make sure that slow point to the mid node
    let slow = head;
    let fast = head;
    let wholeList = head;


    //both slow and fast point to first node at the beginning
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //flip the second half
    let secondHalf = reverseList(slow.next);

    //compare with secondhalf with wholelist
    while(secondHalf) {
        if (secondHalf.val !== wholeList.val) return false;

        secondHalf = secondHalf.next;
        wholeList = wholeList.next;
    }
    return true;
}

var reverseList = (head) => {
    //pre will hold the reversed list
    var pre = null;

    //next will be a temporary variable to store the remaining nodes in the list at each loop
    var next = null;

    //while there are nodes remaining in the list
    while(head !== null) {
        //temporarily store the remaining list without the current node
        let temp = head.next;

        //take the current node of the list
        //append the reversed nodes to it
        //assign it back to the reversed list
        head.next = pre;
        pre = head;

        //assign the remaining list back so head points to the new current node
        //repeat until there are nodes remaining in the list
        head = temp;
    }
    return pre;
}


//Approach:
var isPalindrome = (head) => {
    if (head === null) return true;

    let ll = head;
    const arr = [ll.val];

    while(ll.next !== null) {
        ll = ll.next;
        arr.push(ll.val);
    }

    let low = 0;
    let high = arr.length - 1;

    while(low < high) {
        if (arr[low] === arr[high]) {
            low++;
            high--;
        } else {
            return false;
        }
    }
    return true;
}
