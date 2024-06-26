//75. Sort Colors
//given an array 'nums' with n objects colored red, white or blue
//sort them in-place so that objects of the same color are adjacent
//will use the integers 0, 1, and 2 to represent the color red, white and blue respectively
//must solve this problem without using the library's sort function

//Approach:
//using two pointers
var sortColors = (nums) => {
    //two pointers
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while (mid <= right) {
        if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 0) {
            //swapping to put 0 on the front
            [nums[left], nums[mid]] = [nums[mid], nums[left]];
            left++;
            mid++;
        } else if (nums[mid] === 2) {
            //swapping to put 2 on the end
            [nums[right], nums[mid]] = [nums[mid], nums[right]];
            right--;
        }
    }
    
    return nums;
}
sortColors([2,0,2,1,1,0]); //[0,0,1,1,2,2]

sortColors([2,0,1]); //[0,1,2]
