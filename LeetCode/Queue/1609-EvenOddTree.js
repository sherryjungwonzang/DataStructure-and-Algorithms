//1609. Even Odd Tree
//a binary tree is named even-odd if it meets the following conditions:
//the root of the binary tree is at level index 0 - its children are at level index 1 - their children are at level index 2
//for every even-indexed level - all nodes at the level have odd integer values in strictly increasing order - from left to right
//for every odd-indexed level - all nodex at the level have even integer values in strictly decreasing order - from left to right

//given the root of a binary tree
//return trus if the binary tree is even-odd, otherwise return false

//Approach:
//using BFS with queue
var evenOddTree = (root) => {
    //base case
    if (!root) return true;

    let level = 0;
    let queue = [root];

    //BFS
    while (queue.length) {
        let prevVal = (level % 2 === 0) ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            //even level - curr val should greater than previous value
            //odd level - curr val should less than previous value
            if (
                (level % 2 === 0 && (curr.val % 2 === 0 || curr.val <= prevVal)) || //even level
                (level % 2 === 1 && (curr.val % 2 === 1 || curr.val >= prevVal)) //odd level
            ) return false;

            prevVal = curr.val; //updating previous value

            //adding children
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        level++;
    }

    return true;
}
evenOddTree([1,10,4,3,null,7,9,12,8,6,null,null,2]); //true
//          1           -level 0
//      10      4       -level 1
//    3       7   9     -level 2
// 12  8    6       2   -level 3
//Since levels 0 and 2 are all odd and increasing and levels 1 and 3 are all even and decreasing, the tree is Even-Odd

//level = 0
//prevVal = -9007199254740991

//queue = [ [1,10,4,3,null,7,9,12,8,6,null,null,2] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2]
//checking level is even & (curr.val is odd || curr val is greater than prev val) - true
//prevVal = -9007199254740991 -> 1
//queue = [ [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2] ]
//level = 0 -> 1

//queue = [ [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2], [10, 3, 12, 8]
//checking level is odd & (curr.val is even || curr val is less than prev val) - true
//prevVal = 9007199254740991 -> 10
//queue = [ [4, 7, 9, 6, null, null, 2] || [3, 12, 8] ]

//queue = [ [4, 7, 9, 6, null, null, 2] || [3, 12, 8] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2], [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2]
//checking level is odd & (curr.val is even || curr val is less than prev val) - true
//prevVal = 9007199254740991 -> 10 -> 4
//queue = [ [3, 12, 8], [7, 6, null], [9, null, 2] ]
//level = 0 -> 1 -> 2

//queue = [ [3, 12, 8], [7, 6, null], [9, null, 2] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2], [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2], [3, 12, 8]
//checking level is even & (curr.val is odd || curr val is greater than prev val) - true
//prevVal = -9007199254740991 -> 3
//queue = [ [7, 6, null], [9, null, 2], [12], [8] ]

//queue = [ [7, 6, null], [9, null, 2], [12], [8] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2], [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2], [3, 12, 8], [7, 6, null]
//checking level is even & (curr.val is odd || curr val is greater than prev val) - true
//prevVal = -9007199254740991 -> 3 -> 7
//queue = [ [9, null, 2], [12], [8], [6] ]

//queue = [ [9, null, 2], [12], [8], [6] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2], [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2], [3, 12, 8], [7, 6, null], [9, null, 2]
//checking level is even & (curr.val is odd || curr val is greater than prev val) - true
//prevVal = -9007199254740991 -> 3 -> 7 -> 9
//queue = [ [12], [8], [6], [2] ]
//level = 0 -> 1 -> 2 -> 3

//queue = [ [12], [8], [6], [2] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2], [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2], [3, 12, 8], [7, 6, null], [9, null, 2], [12]
//checking level is odd & (curr.val is even || curr val is less than prev val) - true
//prevVal = 9007199254740991 -> 12

//queue = [ [8], [6], [2] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2], [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2], [3, 12, 8], [7, 6, null], [9, null, 2], [12], [8]
//checking level is odd & (curr.val is even || curr val is less than prev val) - true
//prevVal = 9007199254740991 -> 12 -> 8

//queue = [ [6], [2] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2], [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2], [3, 12, 8], [7, 6, null], [9, null, 2], [12], [8], [6]
//checking level is odd & (curr.val is even || curr val is less than prev val) - true
//prevVal = 9007199254740991 -> 12 -> 8 -> 6

//queue = [ [2] ]
//curr = [1,10,4,3,null,7,9,12,8,6,null,null,2], [10, 3, 12, 8], [4, 7, 9, 6, null, null, 2], [3, 12, 8], [7, 6, null], [9, null, 2], [12], [8], [6], [2]
//checking level is odd & (curr.val is even || curr val is less than prev val) - true
//prevVal = 9007199254740991 -> 12 -> 8 -> 6 -> 2
//level = 0 -> 1 -> 2 -> 3 -> 4

//True

evenOddTree([5,4,2,3,3,7]); //false
//           5      -level 0
//       4       2  -level 1
//     3   3   7    -level 2
//Node values in level 2 must be in strictly increasing order, so the tree is not Even-Odd

//level = 0
//prevVal = -9007199254740991

//queue = [ [5,4,2,3,3,7] ] 
//curr = [5,4,2,3,3,7]
//checking level is even & (curr.val is odd || curr val is greater than prev val) - true
//prevVal = -9007199254740991 -> 5
//queue = [ [4, 3, 3], [2, 7] ]
//level = 0 -> 1

//queue = [ [4, 3, 3], [2, 7] ]
//curr = [5,4,2,3,3,7, [4, 3, 3]
//checking level is odd & (curr.val is odd || curr val is less than prev val) - true
//prevVal = 9007199254740991 -> 4
//queue = [ [2, 7], [3], [3] ]

//queue = [ [2, 7], [3], [3] ]
//curr = [5,4,2,3,3,7, [4, 3, 3], [2, 7]
//checking level is odd & (curr.val is odd || curr val is less than prev val) - true
//prevVal = 9007199254740991 -> 4 -> 2
//queue = [ [3], [3], [7] ]
//level = 0 -> 1 -> 2

//queue = [ [3], [3], [7] ]
//curr = [5,4,2,3,3,7, [4, 3, 3], [2, 7], [3]
//checking level is even & (curr.val is odd || curr val is greater than prev val) - true
//prevVal = -9007199254740991 -> 3

//queue = [ [3], [7] ]
//curr = [5,4,2,3,3,7, [4, 3, 3], [2, 7], [3], [3]
//checking level is even & (curr.val is odd || curr val is not greater than prev val) - false

evenOddTree([5,9,1,3,5,7]); //false
//           5      -level 0
//       9       1  -level 1
//     3   5   7    -level 2
//Node values in the level 1 should be even integers

