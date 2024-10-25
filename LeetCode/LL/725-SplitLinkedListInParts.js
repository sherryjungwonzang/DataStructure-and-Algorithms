//725. Split Linked List In Parts
//given the head of a singly linked list and an integer k
//split the linked list into k consecutive linked list parts
//the length of each part should be as equal as possible: no two parts should have a size differing by more than one - this may lead to some parts being null
//the parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later
//return an array of the k parts
var splitLLParts = (head, k) => {
    let res = new Array(k).fill(null);
    let len = 0; //total length of LL
    let curr = head;

    //checking the total length of LL
    while (curr) {
        len++;

        curr = curr.next;
    }

    let size = Math.floor(len / k); //each partition size
    let extra = len % k; //in case, needs an extra element

    //resetting
    curr = head;

    //traversing
    for (let i = 0; i < k; i++) {
        //adding empty partition
        if (!curr) res[i] = null;

        //partitioning
        else {
            //start a new partition
            res[i] = curr;

            //checking partition size
            let partitionSize = size + (extra > 0 ? 1 : 0);

            extra--;

            //moving to the end of the partition
            for (let j = 1; j < partitionSize; j++) {
                //splitting based on partition size
                if (curr) curr = curr.next;
            }

            //breaking
            if (curr) {
                let nextPartition = curr.next;

                //splitting
                curr.next = null;

                curr = nextPartition;
            }
        }
    }

    return res;
}
//TC: O(n)
//SC: O(k)
splitLLParts(head = [1,2,3,4,5,6,7,8,9,10], k = 3); //[[1,2,3,4],[5,6,7],[8,9,10]]
//len = 0 -> 10
//size = 10 / 3 = 3
//extra = 10 % 3 = 1 -> 0 -> -1
//res = [null, null, null]

//i = 0 || curr = [1,2,3,4,5,6,7,8,9,10]
//res = [[1,2,3,4,5,6,7,8,9,10], null, null]
//partitionSize = 3 + (1 > 0 -> 1) + 1 = 4      -> j = 1 < 4
//                                                 curr = [2,3,4,5,6,7,8,9,10]
//                                                 curr = [3,4,5,6,7,8,9,10]
//                                                 curr = [4,5,6,7,8,9,10]
//nextPartition = [5,6,7,8,9,10]
//res = [[1,2,3,4], null, null]

//i = 1 || curr = [5,6,7,8,9,10]
//res = [[1,2,3,4], [5,6,7,8,9,10], null]
//partitionSize = 3 + (0 = 0 -> 0) + 0 = 3      -> j = 1 < 3
//                                                 curr = [6,7,8,9,10]
//                                                 curr = [7,8,9,10]
//nextPartition = [8,9,10]
//res = [[1,2,3,4], [5,6,7], null]

//i = 2 || curr = [8,9,10]
//res = [[1,2,3,4], [5,6,7], [8,9,10]]
//partitionSize = 3 + (-1 < 0 -> 0) + 0 = 3      -> j = 1 < 3
//                                                 curr = [9,10]
//                                                 curr = [10]
//nextPartition = null
//res = [[1,2,3,4], [5,6,7], [8,9,10]]

splitLLParts(head = [1,2,3], k = 5); //[[1],[2],[3],[],[]]
