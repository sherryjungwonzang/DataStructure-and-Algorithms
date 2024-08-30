//653. Two Sum IV - Input is a BST
//given the 'root' of a BST and an integer 'k'
//return true if there exist two elements in the BST such that their sum is equal to k
//or false otherwise

//Approach:
//using BFS with queue & set
var twoSum4 = (root, k) => {
    //base case
    if (!root) return false;

    let set = new Set(); //to track all elements
    let queue = [root];

    while(queue.length) {
        let curr = queue.shift(); 

        if (set.has(k - curr.val)) {
            return true;
        } else {
            set.add(curr.val);

            //child node
            if (curr.right) queue.push(curr.right);
            if (curr.left) queue.push(curr.left);
        }
    }

    return false;
}
twoSum4([5,3,6,2,4,null,7], 9); //true
//[5, 3, 6, 2, 4, null, 7]

//set = { }
//queue = [ [5, 3, 6, 2, 4, null, 7] ]
//curr = [5, 3, 6, 2, 4, null, 7]
//k - curr.val = 9 - 5 = 4
//set = { 5 }
//queue = [ [3, 2, 4], [6, null, 7] ]

//queue = [ [3, 2, 4], [6, null, 7] ]
//curr = [5, 3, 6, 2, 4, null, 7], [3, 2, 4]
//k - curr.val = 9 - 3 = 6
//set = { 5, 3 }
//queue = [ [6, null, 7] || [2], [4] ]

//queue = [ [6, null, 7] || [2], [4] ]
//curr = [5, 3, 6, 2, 4, null, 7], [3, 2, 4], [6, null, 7]
//k - curr.val = 9 - 6 = 3
//set = { 5, 3, 6 }
//set has '6' -> return true

twoSum4([5,3,6,2,4,null,7], 28); //false
//[5, 3, 6, 2, 4, null, 7]

//set = { }
//queue = [ [5, 3, 6, 2, 4, null, 7] ]
//curr = [5, 3, 6, 2, 4, null, 7]
//k - curr.val = 28 - 5 = 23
//set = { 5 }
//queue = [ [3, 2, 4], [6, null, 7] ]

//queue = [ [3, 2, 4], [6, null, 7] ]
//curr = [5, 3, 6, 2, 4, null, 7], [3, 2, 4]
//k - curr.val = 28 - 3 = 25
//set = { 5 3 }
//queue = [ [6, null, 7] || [2], [4] ]

//queue = [ [6, null, 7] || [2], [4] ]
//curr = [5, 3, 6, 2, 4, null, 7], [3, 2, 4], [6, null, 7]
//k - curr.val = 28 - 6 = 22
//set = { 5 3 6 }
//queue = [ [2], [4] || [7] ]

//queue = [ [2], [4] || [7] ]
//curr = [5, 3, 6, 2, 4, null, 7], [3, 2, 4], [6, null, 7], [2]
//k - curr.val = 28 - 2 = 26
//set = { 5 3 6 2 }
//queue = [ [4] || [7] ]

//queue = [ [4] || [7] ]
//curr = [5, 3, 6, 2, 4, null, 7], [3, 2, 4], [6, null, 7], [2], [4]
//k - curr.val = 28 - 4 = 24
//set = { 5 3 6 2 4 }
//queue = [ [7] ]

//queue = [ [7] ]
//curr = [5, 3, 6, 2, 4, null, 7], [3, 2, 4], [6, null, 7], [2], [4], [7]
//k - curr.val = 28 - 7 = 21
//set = { 5 3 6 2 4 7 }
//queue = [ ]
//False
