//81. Search in rotated sorted array2
//there is an integer array 'nums' sorted in non-decreasing order - not neccessarily with distinct values

//before being passed to your function, nums is rotated at an unknown pivot index 'k' (0 <= k < nums.length)
//such that the resulting array is [nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]] - 0-indexed

//for example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4]

//given the array 'nums' after the rotation and an integer 'target'
//return true if target is in nums
//or false if it is not in nums

//Approach:
//using binary search
//non-decreasing order means there will be duplicates in the array in successive elements
var searchRotatedSortedArr2 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return true;
        } else if (nums[left] > nums[mid]) { //right side is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else if (nums[left] < nums[mid]) { //left side is sorted
            if (nums[mid] > target && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { //meaning there are duplicates at the left and middle
            left += 1;
        }
    }
    return false;
}
searchRotatedSortedArr2([2,5,6,0,0,1,2], 0); //true

searchRotatedSortedArr2([2,5,6,0,0,1,2], 3); //false
