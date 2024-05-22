//704. Binary Search
//given an array of integers 'nums' which is sorted in ascending order and an integer 'target'
//write a function to search target in nums
//if target exists, then  return its index
//otherwise return -1

//Approach:
//using binary search to find the target
var binarySearch = (nums, target) => {
    //set left and right pointer
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
//TC: O(log(n))
binarySearch([-1, 0, 3, 5, 9, 12], 9); //4 - 9 exists in nums and its index is 4

binarySearch([-1, 0, 3, 5, 9, 12], 2); //-1 - 2 does not exist in nums so return -1
