//given a sorted array of integers and target value
//returns the index

//Binary Search
//to find the position of a target value within a sorted array
//compare the target value to the middle element of the array of each iteration

//if target value is equal to the middle element, done
//if target value is less than middle element, continue searching on the left
//if target values is greater than middle element, continue searching on the right


const searchInsert = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) return mid
        else if (nums[mid] > target) right = mid - 1
        else left = mid + 1
    }
    return left
};
