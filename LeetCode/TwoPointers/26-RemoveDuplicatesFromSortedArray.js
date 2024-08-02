//26. Remove Duplicates From Sorted Array
//given an integer array nums sorted in non-decreasing order
//remove the duplicates in-place such that each unique element appears only once
//the relative order of the elements should be kept the same
//then return the number of unique elements in nums

//consider the number of unique elements of nums to be k - to be accepted, you need to do following things:
//change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially
//the remaining elements of nums are not important as well as the size of nums
//return l

//Approach:
//using two pointers
var removeDuplicatesSortedArray = (nums) => {
    //base case 
    if (nums.length === 0) return 0;

    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[left] !== nums[right]) { //new unique is found
            nums[++left] = nums[right]; //replaced
        }
    }

    return left + 1; //the length of the modified array
}
//TC: O(n)
//SC: O(1)
removeDuplicatesSortedArray([0,0,1,1,1,2,2,3,3,4]); //5 - [0,1,2,3,4,_,_,_,_,_]
//[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// L  R
//L = R

// L     R
//L != R
//[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
//    L  R

//[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
//    L     R
//L = R

//[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
//    L        R
//L = R

//[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
//    L           R
//L != R
//[0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
//       L        R

//[0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
//       L           R
//L = R

//[0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
//       L              R
//L != R
//[0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
//          L           R

//[0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
//          L              R
//L = R

//[0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
//          L                 R
//L != R
//[0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
//             L              R

//left + 1 = 5

removeDuplicatesSortedArray([1, 1, 2]); //2 - [1, 2, _]


