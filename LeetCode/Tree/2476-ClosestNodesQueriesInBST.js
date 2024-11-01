//2476. Closest Nodes Queries In BST
//given the root of a binary search tree and an array queries of size n consisting of positive integers
//find a 2D array answer of size n where answer[i] = [mini, maxi]:
//mini is the largest value in the tree that is smaller than or equal to queries[i]
//f a such value does not exist, add -1 instead
//maxi is the smallest value in the tree that is greater than or equal to queries[i]
//if a such value does not exist, add -1 instead
//return the array answer

//Approach:
//using inorder traversal and binary search
var closestNodesBST = (root, queries) => {
    let nums = [];
    let res = new Array(queries.length);

    //inorder traversal - sorting the tree
    function inorder(root) {
        //base case
        if (!root) return;

        //left-root-right
        inorder(root.left);
        nums.push(root.val);
        inorder(root.right);
    };

    inorder(root);
    
    //for lower and upper bound
    for (let i = 0; i < queries.length; i++) {
        let target = queries[i];
        let left = 0;
        let right = nums.length - 1;
        let maxMin = -1; //>>>>5
        let minMax = -1; //5<<<<

        //binary search
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                //updating maxMin and minMax
                maxMin = target;
                minMax = target;

                break;
            } else if (nums[mid] < target) { //moving left
                left = mid + 1;

                maxMin = nums[mid];
            } else { //moving right
                right = mid - 1;

                minMax = nums[mid];
            }
        }

        res[i] = [maxMin, minMax];
    }

    return res;
}
closestNodesBST(root = [6,2,13,1,4,9,15,null,null,null,null,null,null,14], queries = [2,5,16]); //[[2,2],[4,6],[15,-1]]
//           6
//      2          13
//    1   4    9       15
//                  14

//inorder traversal -> nums = [1, 2, 4, 6, 9, 13, 14, 15]

//queries = [2, 5, 16]
//           ^
//target = 2
//[1, 2, 4, 6, 9, 13, 14, 15]                               [1, 2, 4, 6, 9, 13, 14, 15] 
// L        M              R                                 L  M  R
//mid = (0 + 7) / 2 = 3                                     mid = (0 + 2) / 2 = 1
//nums[3] = 6 > target  -> moving right to index 2          nums[1] = 2 = target  -> update minMax and maxMin and break
//maxMin = -1                                               -> 2
//minMax = -1 -> 6                                          -> 2
//res = [ [2, 2], _, _ ]

//queries = [2, 5, 16]
//              ^
//target = 5
//[1, 2, 4, 6, 9, 13, 14, 15]                               [1, 2, 4, 6, 9, 13, 14, 15]                         [1, 2, 4, 6, 9, 13, 14, 15] 
// L        M              R                                 L  M  R                                                  LMR
//mid = (0 + 7) / 2 = 3                                     mid = (0 + 2) / 2 = 1                               mid = (2 + 2) / 2 = 2
//nums[3] = 6 > target  -> moving right to index 2          nums[1] = 2 < target  -> moving left to index 2     nums[2] = 4 < target  -> moving left to index
//maxMin = -1                                               -> 2                                                -> 4
//minMax = -1 -> 6                                          -> 6                                                -> 6
//res = [ [2, 2], [4, 6], _ ]

//queries = [2, 5, 16]
//                  ^
//target = 16
//[1, 2, 4, 6, 9, 13, 14, 15]                               [1, 2, 4, 6, 9, 13, 14, 15]                             [1, 2, 4, 6, 9, 13, 14, 15]                                 [1, 2, 4, 6, 9, 13, 14, 15] 
// L        M              R                                             L   M       R                                               L   M   R                                                          LMR
//mid = (0 + 7) / 2 = 3                                     mid = (4 + 7) / 2 = 5                                   mid = (5 + 7) / 2 = 6                                       mid = (7 + 7) / 2 = 7
//nums[3] = 6 < target  -> moving left to index 4           nums[5] = 13 < target  -> moving left to index 6        nums[6] = 14 < target  -> moving left to index 7            nums[7] = 15 < target  -> moving left to index 8
//maxMin = -1 -> 6                                          -> 13                                                   -> 14                                                       -> 15
//minMax = -1                                               -> -1                                                   -> -1                                                       -> -1
//res = [ [2, 2], [4, 6], [15, -1] ]

closestNodesBST(root = [4,null,9], queries = [3]); //[[-1,4]]
