//116. Populating next right pointers in each node
//given a perfect binary tree where all leaves are on the same level and every parent has two children
//the binary tree has the following definition:
//struct Node{
// int val;
// Node *left;
// Node *right;
// Node *next;    
//}

//populate each next pointer to point to its next right node
//if there it no next right node, the next pointer should be set to NULL
//initially all next pointers are set to NULL

//Approach:
//using BFS with queue
var populateNextRightPointer = (root) => {
    //base case
    if (!root) return root;

    let queue = [root];

    //BFS
    while(queue.length) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            if (i + 1 < levelSize) curr.next = queue[0]; //meaning there is a right element

            //child nodes
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }

    return root;
}
//TC: O(n) - visit each node once
//SC: O(n)
populateNextRightPointer([1,2,3,4,5,6,7]); //[1,#,2,3,#,4,5,6,7,#]
//        1
//     2      3
//  4   5   6   7 

//levelSize = 1
//queue = [ [1, 2, 3, 4, 5, 6, 7] ]
//curr = [1, 2, 3, 4, 5, 6, 7]
//i = 0
//0 + 1 = 1 < 1 -> NO - meaning there is no node next to 1
//keeping next as NULL
//queue = [ [2, 4, 5], [3, 6, 7] ]

//levelSize = 2
//queue = [ [2, 4, 5], [3, 6, 7] ]
//curr = [1, 2, 3, 4, 5, 6, 7], [2, 4, 5]
//i = 0
//0 + 1 = 1 < 2 -> YES - meaning there is right node next to 2
//curr.next = [3]
//queue = [ [3, 6, 7] || [4], [5] ]

//queue = [ [3, 6, 7] || [4], [5] ]
//curr = [1, 2, 3, 4, 5, 6, 7], [2, 4, 5], [3, 6, 7] 
//i = 1
//1 + 1 = 1 = 2 -> NO - meaning there is no node next to 3
//keeping next as NULL
//queue = [ [4], [5], [6], [7] ]

//levelSize = 4
//queue = [ [4], [5], [6], [7] ]
//curr = [1, 2, 3, 4, 5, 6, 7], [2, 4, 5], [3, 6, 7], [4]
//i = 0
//0 + 1 = 1 < 4 -> YES - meaning there is right node next to 4
//curr.next = [5]
//queue = [ [5], [6], [7] ]

//queue = [ [5], [6], [7] ]
//curr = [1, 2, 3, 4, 5, 6, 7], [2, 4, 5], [3, 6, 7], [4], [5]
//i = 1
//1 + 1 = 2 < 4 -> YES - meaning there is right node next to 5
//curr.next = [6]
//queue = [ [6], [7] ]

//queue = [ [6], [7] ]
//curr = [1, 2, 3, 4, 5, 6, 7], [2, 4, 5], [3, 6, 7], [4], [5], [6]
//i = 2
//2 + 1 = 3 < 4 -> YES - meaning there is right node next to 6
//curr.next = [7]
//queue = [ [7] ]

//queue = [ [7] ]
//curr = [1, 2, 3, 4, 5, 6, 7], [2, 4, 5], [3, 6, 7], [4], [5], [6], [7]
//i = 3
//3 + 1 = 4 = 4 -> NO - meaning there is no node next to 7
//keeping next as NULL
//queue = [ ]

//[1, #, 2, 3, #, 4, 5, 6, 7, #]

populateNextRightPointer([]); //[]
