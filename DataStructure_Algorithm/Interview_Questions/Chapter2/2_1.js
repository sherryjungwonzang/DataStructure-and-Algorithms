const LinkedList = require('./LinkedListX');

//2.1 Remove Duplicates
//to remove duplicates from an unsorted linkedlist

function removeDuplicates(list) {
    const set = new Set();
    let cur = list.head;
    let prev = null;
    while(cur) {
        if (set.has(cur.value)) {
            //duplicate found
            //de-link it from the list
            //right behind cur
            let element = cur;
            prev.next = cur.next;
            cur = cur.next;
            element.next = null;
        } else {
            //add to the set
            set.add(cur.value);
            prev = cur;
            cur = cur.next;
        }
    }
    return list;
}

//TEST
let list = new LinkedList();
for (let element of [1,5,1,6,8,6,8,8,8,8]) {
    list.append(element);
}
removeDuplicates(list);

console.log(list._toArray()); //[1,5,6,8]
