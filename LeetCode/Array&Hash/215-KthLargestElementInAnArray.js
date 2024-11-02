//215. Kth Largest Element In An Array
//given an integer array nums and an integer k
//return the kth largest element in the arrays

//Approach:
//using sorting
var kthLargestElement = (nums, k) => {
    //sorting - ascending order
    nums.sort((a, b) => b - a);
    
    return nums[k - 1];
}
kthLargestElement(nums = [3,2,1,5,6,4], k = 2); //5
//sorting: [6, 5, 4, 3, 2, 1]
//             ^
//5

kthLargestElement(nums = [3,2,3,1,2,4,5,5,6], k = 4); //4
//sorting: [6, 5, 5, 4, 3, 3, 2, 2, 1]
//                   ^
//4
