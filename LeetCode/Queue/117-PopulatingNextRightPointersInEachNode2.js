//117. Populating next right pointers in each nodeII
//given a binary tree
//struct Node{
// int val;
// Node *left;
// Node *right;
// Node *next;    
//}

//populate each next pointer to point to its next right node
//if there is no next right node, the next pointer should be set to NULL
//initially, all next pointers are set to NULL

//Approach:
//using queue with BFS
//116 solution is also working for this question
var populateNextRightPointer2 = (root) => {
    //base case
    if (!root) return root;

    let queue = [root];

    //BFS
    while(queue.length) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            if (i + 1 < levelSize) curr.next = queue[0]; //meaning there is a right element
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }
    return root;
}
populateNextRightPointer([1,2,3,4,5,null,7]); //[1,#,2,3,#,4,5,7,#]
//      1
//    2   3
//  4  5    7 
