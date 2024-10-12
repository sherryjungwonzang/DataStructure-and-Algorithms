//129. Sum root to leaf numbers
//given the 'root' of binary tree containing digits from 0 to 9 only
//each root-to-leaf path in the tree represents a number
//for example, the root-to-leaf path 1->2->3 represents the number 123

//return the total sum of all root-to-leaf numbers
//test cases are generated so that the answer will fit in 32-bit integer
//a leaf node is a node with no children

//Approach:
//using recursion with backtracking
var sumRootToLeaf = (root) => {
    let res = [];
    let nums = 0;

    //recursion
    function recurse(root, currArr) {
        //base case
        if (!root) return 0;

        currArr.push(root.val);

        //leaf node
        if (!root.left && !root.right) {
            let newNum = Number(currArr.join("")); //converting array into numbers

            res.push(newNum);
        }

        //recursive calls on child
        recurse(root.left, currArr);
        recurse(root.right, currArr);

        //backtracking
        currArr.pop();
    }

    recurse(root, []);

    //adding all nums
    for (let i = 0; i < res.length; i++) nums += res[i];

    return nums;
}
//TC: O(n) - visit each node once
//SC: O(n) - store all values within currArr
sumRootToLeaf([1,2,3]); //25
//The root-to-leaf path 1->2 represents the number 12
//The root-to-leaf path 1->3 represents the number 13
//Therefore, sum = 12 + 13 = 25
//   1
// 2   3

sumRootToLeaf([4,9,0,5,1]); //1026
//The root-to-leaf path 4->9->5 represents the number 495
//The root-to-leaf path 4->9->1 represents the number 491
//The root-to-leaf path 4->0 represents the number 40
//Therefore, sum = 495 + 491 + 40 = 1026
//      4
//    9   0
//  5  1
