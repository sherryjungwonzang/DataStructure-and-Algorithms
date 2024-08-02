//80. Remove Duplicates From Sorted Array2
//given an integer array nums sorted in non-decreasing order
//remove some duplicates in-place such that each unique element appears only once at most twice
//the relative order of the elements should be kept the same

//since it is impossible to change the length of the array in some languages
//you must instead have the result be placed in the first part of the array nums
//more formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result
//it does not mattter what you leave beyond the first k elements

//retirm k after placing the final result in the first k slots of nums

//Approach:
//using two pointers
var removeDuplicatesSortedArray2 = (nums) => {
    //base case
    if (!nums.length) return 0;

    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[left] || (nums[right] === nums[left] && nums[left] !== nums[left - 1])) {
            left++;
            nums[left] = nums[right]; //replacing
        }
    }

    return left + 1;
}
//TC: O(n)
//SC: O(1)
removeDuplicatesSortedArray2([1,1,1,2,2,3]); //5 - [1,1,1,2,2,_]

removeDuplicatesSortedArray2([0,0,1,1,1,1,2,3,3]); //7 - [0,0,1,1,1,1,2,_,_]
//[0, 0, 1, 1, 1, 1, 2, 3, 3]
// L  R
//L = R & !=
//[0, 0, 1, 1, 1, 1, 2, 3, 3]
//    LR

//[0, 0, 1, 1, 1, 1, 2, 3, 3]
//    L   R
//L != R
//[0, 0, 1, 1, 1, 1, 2, 3, 3]
//       LR

//[0, 0, 1, 1, 1, 1, 2, 3, 3]
//       L  R
//L = R & L != L-1
//[0, 0, 1, 1, 1, 1, 2, 3, 3]
//          LR

//[0, 0, 1, 1, 1, 1, 2, 3, 3]
//          L  R
//L = R & L = L-1

//[0, 0, 1, 1, 1, 1, 2, 3, 3]
//          L     R
//L = R & L = L-1

//[0, 0, 1, 1, 1, 1, 2, 3, 3]
//          L        R
//L != R
//[0, 0, 1, 1, 2, 1, 2, 3, 3]
//             L     R

//[0, 0, 1, 1, 2, 1, 2, 3, 3]
//             L        R
//L != R
//[0, 0, 1, 1, 2, 3, 2, 3, 3]
//                L     R


//[0, 0, 1, 1, 2, 3, 2, 3, 3]
//                L        R
//L = R & L != L-1
//[0, 0, 1, 1, 2, 3, 3, 3, 3]
//                   L     R

//left = 6 + 1 = 7
