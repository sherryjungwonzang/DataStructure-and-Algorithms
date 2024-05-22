//33. Search in Rotated Sorted Array
//given the array 'nums' after the possible rotation and an integer 'target'
//return the index of target if it is in nums, or -1 if it is not in nums

//there is an intefer array 'nums' sorted in ascending order with distinct values
//prior to beign passed to function, nums is possibly rotated at an unknown pivot index 'k' - 1 <= k < nums.length
//such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] - 0-indexed
//ex: [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]

//Approach:
//using left, right pointer and mid value
//separate the nums array into two
//utilize binary search - since this is sorted array
var searchRotatedSortedArr = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;

        //right side is sorted
        if (nums[right] > nums[mid]) {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            //left side is sorted
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
}
searchRotatedSortedArr([4,5,6,7,0,1,2], 0); //4
//4, 5, 6, 7, 0, 1, 2
//l        m        r
//mid = 4 + ((2-4)/2) = 4 -1 = 3
//left side = [4, 5, 6, 7]
//right side = [0, 1, 2]

//check which is the sorted array
//right=2 < mid=7 -> left side is sorted
//target=0 < mid=7 && target=0 < right=2 -> left move to mid+1

//             l  m  r
//right=2 > mid =1 -> rght side is sorted
//target=0 < mid=1 && target=0 = left=0 -> right move to mid-1

//             l
//             m
//             r
//mid=0 = target=0 -> return the mid index: 3

searchRotatedSortedArr([4,5,6,7,8,0,1], 8); //4
//4, 5, 6, 7, 8, 0, 1
//l        m        r
//mid = 4 + ((2-4)/2) = 4 -1 = 3
//left side = [4, 5, 6, 7]

//check which is the sorted array
//right=1 < mid=7 -> left side is sorted
//target=8 < mid=7 && target=0 < left=4 -> left move to mid+1

//             l  m  r
//right=1 > mid =0 -> rght side is sorted
//target=8 < mid=0 && target=8 = left=8 -> right move to mid-1

//             l
//             m
//             r
//mid=8 = target=8 -> return the mid index: 3

searchRotatedSortedArr([4,5,6,7,0,1,2], 3); //-1

searchRotatedSortedArr([1], 0); //-1
